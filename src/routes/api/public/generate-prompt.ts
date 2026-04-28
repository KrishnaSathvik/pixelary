import { createFileRoute } from "@tanstack/react-router";
import { SYSTEM_PROMPT } from "@/lib/promptcraft";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface RequestBody {
  userInput: string;
  category?: string;
  mode?: string;
}

export const Route = createFileRoute("/api/public/generate-prompt")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: corsHeaders }),
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as RequestBody;
          const { userInput, category, mode = "default" } = body;

          if (!userInput || typeof userInput !== "string" || userInput.trim().length === 0) {
            return new Response(JSON.stringify({ error: "userInput is required" }), {
              status: 400,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            });
          }
          if (userInput.length > 4000) {
            return new Response(JSON.stringify({ error: "Input too long (max 4000 chars)" }), {
              status: 400,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            });
          }

          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            return new Response(JSON.stringify({ error: "AI service not configured" }), {
              status: 500,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            });
          }

          // Deterministic CINEMATIC OVERRIDE: when the user explicitly types
          // "cinematic shot/still/photo/...," "movie still," or "film still/scene/frame,"
          // force the category to CINEMATIC SCENE in code so the model can't
          // override it via subject-domain inference (e.g. "cinematic shot of
          // a wedding" must NOT route to INTERIOR/FASHION).
          const CINEMATIC_TRIGGERS = [
            /\bcinematic\s+(shot|still|photo|image|portrait|frame|framing|lighting|composition)\b/i,
            /\bmovie\s+(scene|still|frame)\b/i,
            /\bfilm\s+(still|scene|frame)\b/i,
          ];
          const userIdea = userInput.trim();
          const cinematicForced =
            (!category || category === "auto") &&
            CINEMATIC_TRIGGERS.some((re) => re.test(userIdea));
          const effectiveCategory = cinematicForced
            ? "CHARACTER SHEET / CINEMATIC SCENE"
            : category && category !== "auto"
            ? category
            : null;

          // Deterministic ASPECT RATIO LOCK: when the user names a ratio
          // (direct "16:9", word "square", or implied "thumbnail"/"story"),
          // force the model to include that exact ratio in its output.
          const ASPECT_KEYWORDS: Array<[RegExp, string]> = [
            // Direct ratio mentions take priority — match first.
            [/\b(\d{1,2}:\d{1,2}(?:\.\d+)?)\b/, "DIRECT"],
            // Word-based mentions (longer phrases first to avoid partial overlap).
            [/\binstagram\s+story\b/i, "9:16"],
            [/\byoutube\s+thumbnail\b/i, "16:9"],
            [/\bsquare\s+format\b/i, "1:1"],
            [/\bsquare\b/i, "1:1"],
            [/\bportrait\b/i, "4:5"],
            [/\bvertical\b/i, "9:16"],
            [/\bstory\b/i, "9:16"],
            [/\breel\b/i, "9:16"],
            [/\btiktok\b/i, "9:16"],
            [/\blandscape\b/i, "16:9"],
            [/\bhorizontal\b/i, "16:9"],
            [/\bwidescreen\b/i, "16:9"],
            [/\bthumbnail\b/i, "16:9"],
            [/\bbanner\b/i, "16:9"],
            [/\bcinematic\s+(?:shot|still|photo|image|portrait|frame|framing|aspect)\b/i, "2.39:1"],
            [/\bpinterest\b/i, "2:3"],
          ];
          let lockedRatio: string | null = null;
          for (const [re, ratio] of ASPECT_KEYWORDS) {
            const m = userIdea.match(re);
            if (m) {
              lockedRatio = ratio === "DIRECT" ? m[1] : ratio;
              break;
            }
          }

          const userMessage = [
            effectiveCategory ? `Category hint: ${effectiveCategory}` : null,
            cinematicForced
              ? `LOCKED CATEGORY: The user explicitly requested cinematic framing. Use the CHARACTER SHEET / CINEMATIC SCENE template. Do NOT route to INTERIOR/ARCH/FOOD/FASHION even if the subject is a wedding, kitchen, food, dress, or building.`
              : null,
            lockedRatio
              ? `LOCKED ASPECT RATIO: ${lockedRatio} — The output prompt MUST include the exact phrase "${lockedRatio} aspect ratio" verbatim. Do not substitute a different ratio. Do not omit it.`
              : null,
            `Mode: ${mode}`,
            `User idea: ${userIdea}`,
          ]
            .filter(Boolean)
            .join("\n\n");

          const tools = [
            {
              type: "function",
              function: {
                name: "deliver_prompt",
                description: "Deliver the polished prompt result.",
                parameters: {
                  type: "object",
                  properties: {
                    prompt: { type: "string", description: "Single polished prompt (default/JSON modes)" },
                    prompts: {
                      type: "array",
                      items: { type: "string" },
                      description: "Three variants for BATCH mode: safe, stylized, experimental",
                    },
                    category: { type: "string" },
                    why_it_works: { type: "string" },
                    variants: { type: "array", items: { type: "string" } },
                    size: { type: "string", description: "JSON mode only" },
                    quality: { type: "string", description: "JSON mode only" },
                    aspect_ratio: { type: "string", description: "JSON mode only" },
                    score: { type: "number", description: "CRITIQUE mode only, 1-10" },
                    weaknesses: { type: "array", items: { type: "string" } },
                    improvements: { type: "array", items: { type: "string" } },
                  },
                },
              },
            },
          ];

          // Return SSE immediately, then start the AI request inside the stream.
          // This prevents the public route from timing out before the model sends headers.
          const encoder = new TextEncoder();
          const decoder = new TextDecoder();

          const stream = new ReadableStream({
            async start(controller) {
              let closed = false;
              const safeClose = () => {
                if (closed) return;
                closed = true;
                try {
                  controller.close();
                } catch {
                  /* already closed */
                }
              };
              const send = (event: string, data: unknown) => {
                if (closed) return;
                try {
                  controller.enqueue(
                    encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
                  );
                } catch {
                  // Client disconnected mid-stream — stop trying.
                  closed = true;
                }
              };

              send("status", { message: "starting" });
              const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${apiKey}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  model: "google/gemini-3-flash-preview",
                  messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: userMessage },
                  ],
                  tools,
                  tool_choice: { type: "function", function: { name: "deliver_prompt" } },
                  stream: true,
                }),
              });

              if (!aiResponse.ok || !aiResponse.body) {
                const errText = await aiResponse.text().catch(() => "");
                console.error("AI gateway error:", aiResponse.status, errText);
                const message =
                  aiResponse.status === 429
                    ? "Rate limit reached. Please wait a moment and try again."
                    : aiResponse.status === 402
                    ? "AI credits exhausted. Please add credits in workspace settings."
                    : "AI service error";
                send("error", { error: message });
                safeClose();
                return;
              }

              const reader = aiResponse.body.getReader();
              let buffer = "";
              let assembled = "";

              try {
                while (!closed) {
                  const { done, value } = await reader.read();
                  if (done) break;
                  buffer += decoder.decode(value, { stream: true });

                  // Process complete SSE lines
                  let nlIndex: number;
                  while ((nlIndex = buffer.indexOf("\n")) !== -1) {
                    const line = buffer.slice(0, nlIndex).trim();
                    buffer = buffer.slice(nlIndex + 1);
                    if (!line.startsWith("data:")) continue;
                    const payload = line.slice(5).trim();
                    if (payload === "[DONE]") continue;
                    try {
                      const json = JSON.parse(payload);
                      const delta = json?.choices?.[0]?.delta;
                      const argDelta =
                        delta?.tool_calls?.[0]?.function?.arguments ?? "";
                      if (argDelta) {
                        assembled += argDelta;
                        send("delta", { args: assembled });
                      }
                    } catch {
                      // ignore non-JSON keepalives
                    }
                  }
                }

                if (closed) return;

                // Final parse
                let finalResult: unknown = null;
                try {
                  finalResult = JSON.parse(assembled);
                } catch {
                  console.error("Failed to parse final tool args:", assembled);
                  send("error", { error: "Invalid AI response format" });
                  safeClose();
                  return;
                }
                // Strip Midjourney/SD CLI flags — Promptcraft targets GPT Image 2,
                // which doesn't use --ar/--style/--v/etc. Belt-and-suspenders sanitize.
                const stripCliFlags = (s: string): string =>
                  s
                    .replace(/\s*--ar\s+\S+/gi, "")
                    .replace(/\s*--style\s+\S+/gi, "")
                    .replace(/\s*--v\s+\d+(?:\.\d+)?/gi, "")
                    .replace(/\s*--niji\s+\d+/gi, "")
                    .replace(/\s*--stylize\s+\d+/gi, "")
                    .replace(/\s*--s\s+\d+/gi, "")
                    .replace(/\s*--quality\s+\S+/gi, "")
                    .replace(/\s*--q\s+\S+/gi, "")
                    .replace(/\s*--chaos\s+\d+/gi, "")
                    .replace(/\s*--c\s+\d+/gi, "")
                    .replace(/\s*--seed\s+\d+/gi, "")
                    .replace(/\s*--weird\s+\d+/gi, "")
                    .replace(/\s*--tile\b/gi, "")
                    .replace(/\s*--no\s+\S+/gi, "")
                    .trim();
                // Lens unit guard: Gemini Flash occasionally emits "40px lens"
                // instead of "40mm lens" because px/mm tokens collide in training.
                // Conservative regex: only fixes \d{2,3}px directly followed by
                // lens vocabulary, leaving legitimate "px" usage untouched.
                const fixLensUnits = (s: string): string =>
                  s
                    .replace(/\b(\d{2,3})px(\s+(?:lens|prime|macro|telephoto|wide|f\/|aperture))/gi, "$1mm$2")
                    .replace(/\b(\d{2,3})mm\s+pixel\b/gi, "$1mm");
                const sanitize = (s: string) => fixLensUnits(stripCliFlags(s));
                if (finalResult && typeof finalResult === "object") {
                  const fr = finalResult as Record<string, unknown>;
                  if (typeof fr.prompt === "string") fr.prompt = sanitize(fr.prompt);
                  if (Array.isArray(fr.prompts)) {
                    fr.prompts = fr.prompts.map((p) =>
                      typeof p === "string" ? sanitize(p) : p,
                    );
                  }
                }
                send("done", finalResult);
                safeClose();
              } catch (err) {
                console.error("stream error:", err);
                send("error", {
                  error: err instanceof Error ? err.message : "Stream error",
                });
                safeClose();
              } finally {
                try {
                  reader.releaseLock();
                } catch {
                  /* noop */
                }
              }
            },
            cancel() {
              // Client disconnected — nothing to do, the start() loop checks `closed`.
            },
          });

          return new Response(stream, {
            status: 200,
            headers: {
              "Content-Type": "text/event-stream",
              "Cache-Control": "no-cache, no-transform",
              Connection: "keep-alive",
              "X-Accel-Buffering": "no",
              ...corsHeaders,
            },
          });
        } catch (err) {
          console.error("generate-prompt error:", err);
          return new Response(
            JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
            { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
      },
    },
  },
});
