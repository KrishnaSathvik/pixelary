import { createFileRoute } from "@tanstack/react-router";
import { SYSTEM_PROMPT, CATEGORIES, MODES, PROMPT_VERSION } from "@/lib/depikt";
import { curatedPrompts, type CuratedPrompt } from "@/data/curated-prompts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Allowlists derived from the same source the UI uses — keeps server validation
// in lockstep with frontend options without duplication.
const ALLOWED_CATEGORIES = new Set<string>(CATEGORIES.map((c) => c.value));
const ALLOWED_MODES = new Set<string>(MODES.map((m) => m.value));

// In-memory IP rate limiter (best-effort; per-instance). For production abuse
// resistance, pair this with Cloudflare WAF/Rate Limiting, Turnstile, or a
// Durable Object/KV-backed limiter so counts survive cold starts and regions.
// Caps abuse from a single IP without requiring auth, which would break the public demo.
// Limits: 10 requests / minute and 60 requests / hour per IP.
const RATE_WINDOW_MIN_MS = 60_000;
const RATE_WINDOW_HOUR_MS = 3_600_000;
const RATE_LIMIT_MIN = 10;
const RATE_LIMIT_HOUR = 60;
const ipHits = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const h = request.headers;
  return (
    h.get("cf-connecting-ip") ||
    h.get("x-real-ip") ||
    (h.get("x-forwarded-for") || "").split(",")[0].trim() ||
    "unknown"
  );
}

function rateLimitExceeded(ip: string): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_HOUR_MS);
  const recentMin = hits.filter((t) => now - t < RATE_WINDOW_MIN_MS).length;
  if (recentMin >= RATE_LIMIT_MIN || hits.length >= RATE_LIMIT_HOUR) {
    ipHits.set(ip, hits);
    return true;
  }
  hits.push(now);
  ipHits.set(ip, hits);
  // Opportunistic cleanup
  if (ipHits.size > 5000) {
    for (const [k, v] of ipHits) {
      const fresh = v.filter((t) => now - t < RATE_WINDOW_HOUR_MS);
      if (fresh.length === 0) ipHits.delete(k);
      else ipHits.set(k, fresh);
    }
  }
  return false;
}

// Category index for curated prompts — built once on cold start.
const categoryIndex = new Map<string, CuratedPrompt[]>();
curatedPrompts.forEach((p) => {
  const list = categoryIndex.get(p.category) || [];
  list.push(p);
  categoryIndex.set(p.category, list);
});

// Map system-prompt category names to curated-library category names.
const CATEGORY_TO_LIBRARY: Record<string, string> = {
  "CINEMATIC SCENE": "Cinematic",
  "POSTER/COVER": "Posters",
  "INFOGRAPHIC/DIAGRAM": "Infographics",
  "UI MOCKUP": "UI Mockups",
  "SOCIAL POST": "Social Posts",
  "STORYBOARD/MULTI-PANEL": "Storyboards",
  "INTERIOR/ARCH/FOOD/FASHION": "Interior/Food/Fashion",
  "VISUAL SUMMARY": "Visual Summaries",
  "IMAGE EDIT": "Image Edits",
  "OPEN-ENDED CREATIVE": "Open-Ended Creative",
};

// Pick up to `count` random examples from a library category.
function pickExamples(libraryCategory: string, count: number): CuratedPrompt[] {
  const pool = categoryIndex.get(libraryCategory);
  if (!pool || pool.length === 0) return [];
  // Fisher-Yates partial shuffle for unbiased selection.
  const copy = pool.slice();
  const n = Math.min(count, copy.length);
  for (let i = 0; i < n; i++) {
    const j = i + Math.floor(Math.random() * (copy.length - i));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

// Select examples for a given effectiveCategory (system-prompt name).
// When null (auto-detect), pick 1 example each from the 4 most common categories.
function getExamplesForCategory(effectiveCategory: string | null, count: number): CuratedPrompt[] {
  if (effectiveCategory) {
    const libCat = CATEGORY_TO_LIBRARY[effectiveCategory];
    if (libCat) return pickExamples(libCat, count);
    return [];
  }
  // Auto-detect: grab 1 example from each of the 4 largest categories.
  const sorted = [...categoryIndex.entries()].sort((a, b) => b[1].length - a[1].length);
  const result: CuratedPrompt[] = [];
  for (const [cat] of sorted.slice(0, 4)) {
    result.push(...pickExamples(cat, 1));
  }
  return result;
}

// Format selected examples into a block for the user message.
function formatExamplesBlock(examples: CuratedPrompt[]): string {
  if (examples.length === 0) return "";
  const lines = examples.map((ex, i) => {
    const parts = [
      `[${i + 1}] ${ex.title} (${ex.category})`,
      `Prompt: ${ex.prompt}`,
    ];
    if (ex.why_it_works) parts.push(`Why it works: ${ex.why_it_works}`);
    return parts.join("\n");
  });
  return `REFERENCE EXAMPLES (study structure and detail level, do not copy):\n\n${lines.join("\n\n")}`;
}

interface RequestBody {
  userInput: string;
  referenceImageUrl?: string;
  category?: string;
  mode?: string;
}

export const Route = createFileRoute("/api/public/generate-prompt")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: corsHeaders }),
      POST: async ({ request }) => {
        try {
          // Rate limit BEFORE doing any work
          const ip = getClientIp(request);
          if (rateLimitExceeded(ip)) {
            return new Response(
              JSON.stringify({ error: "Too many requests. Please wait a moment and try again." }),
              { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } },
            );
          }

          const body = (await request.json()) as RequestBody;
          const { userInput, referenceImageUrl, category, mode = "default" } = body;

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

          // Validate mode against allowlist (prevents prompt injection via mode field)
          if (typeof mode !== "string" || mode.length > 50 || !ALLOWED_MODES.has(mode)) {
            return new Response(JSON.stringify({ error: "Invalid mode" }), {
              status: 400,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            });
          }

          // Validate reference image (optional base64 data URL, max 2MB)
          if (referenceImageUrl !== undefined && referenceImageUrl !== null) {
            if (
              typeof referenceImageUrl !== "string" ||
              !referenceImageUrl.startsWith("data:image/") ||
              referenceImageUrl.length > 2 * 1024 * 1024
            ) {
              return new Response(
                JSON.stringify({ error: "Invalid reference image (must be a data:image/ URL under 2MB)" }),
                { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
              );
            }
          }

          // Validate category against allowlist (prevents prompt injection via category field).
          // Unknown values are rejected; absence is fine (auto-detect).
          if (category !== undefined && category !== null) {
            if (
              typeof category !== "string" ||
              category.length > 100 ||
              !ALLOWED_CATEGORIES.has(category)
            ) {
              return new Response(JSON.stringify({ error: "Invalid category" }), {
                status: 400,
                headers: { "Content-Type": "application/json", ...corsHeaders },
              });
            }
          }

          const apiKey = process.env.OPENAI_API_KEY;
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
            ? "CINEMATIC SCENE"
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

          // Select category-matched reference examples from the curated library.
          const examples = getExamplesForCategory(effectiveCategory, 4);
          const examplesBlock = formatExamplesBlock(examples);

          const userMessage = [
            referenceImageUrl
              ? `REFERENCE IMAGE: A reference image is attached. Follow the REFERENCE IMAGE instructions in your system prompt.`
              : null,
            examplesBlock || null,
            effectiveCategory ? `Category hint: ${effectiveCategory}` : null,
            cinematicForced
              ? `LOCKED CATEGORY: The user explicitly requested cinematic framing. Use the CINEMATIC SCENE template. Do NOT route to INTERIOR/ARCH/FOOD/FASHION even if the subject is a wedding, kitchen, food, dress, or building.`
              : null,
            lockedRatio
              ? `LOCKED ASPECT RATIO: ${lockedRatio} — The output prompt MUST include the exact phrase "${lockedRatio} aspect ratio" verbatim. Do not substitute a different ratio. Do not omit it.`
              : null,
            `Mode: ${mode}`,
            `User idea: ${userIdea}`,
          ]
            .filter(Boolean)
            .join("\n\n");

          const getTools = (m: string) => {
            const requiredByMode: Record<string, string[]> = {
              default: ["prompt", "category", "why_it_works"],
              BATCH: ["prompts", "category", "why_it_works"],
              JSON: ["prompt", "category", "size", "quality", "aspect_ratio", "why_it_works"],
              CRITIQUE: ["score", "weaknesses", "improvements", "rewritten_prompt", "category"],
            };
            return [
              {
                type: "function" as const,
                function: {
                  name: "deliver_prompt",
                  description: "Deliver the polished prompt result.",
                  parameters: {
                    type: "object",
                    properties: {
                      prompt: {
                        type: "string",
                        description: "Single polished prompt (default/JSON modes)",
                      },
                      prompts: {
                        type: "array",
                        items: { type: "string" },
                        description: "Three variants for BATCH mode: safe, stylized, experimental",
                      },
                      category: { type: "string" },
                      why_it_works: { type: "string" },
                      size: { type: "string", description: "JSON mode only" },
                      quality: { type: "string", description: "JSON mode only" },
                      aspect_ratio: { type: "string", description: "JSON mode only" },
                      score: { type: "number", description: "CRITIQUE mode only, 1-10" },
                      weaknesses: { type: "array", items: { type: "string" } },
                      improvements: { type: "array", items: { type: "string" } },
                      rewritten_prompt: {
                        type: "string",
                        description:
                          "CRITIQUE mode only — full rewritten prompt with all improvements applied",
                      },
                    },
                    required: requiredByMode[m] || requiredByMode.default,
                  },
                },
              },
            ];
          };
          const tools = getTools(mode);

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
                    encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`),
                  );
                } catch {
                  // Client disconnected mid-stream — stop trying.
                  closed = true;
                }
              };

              send("status", { message: "starting" });
              // Build user message content: multimodal array when image present, plain string otherwise
              const userContent = referenceImageUrl
                ? [
                    { type: "image_url" as const, image_url: { url: referenceImageUrl, detail: "low" as const } },
                    { type: "text" as const, text: userMessage },
                  ]
                : userMessage;

              const aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${apiKey}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  model: "gpt-5.4-mini",
                  messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: userContent },
                  ],
                  tools,
                  tool_choice: { type: "function", function: { name: "deliver_prompt" } },
                  temperature: 0.7,
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
                      const argDelta = delta?.tool_calls?.[0]?.function?.arguments ?? "";
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
                // Strip Midjourney/SD CLI flags — Depikt targets GPT Image 2,
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
                // Lens unit guard: some models occasionally emit "40px lens"
                // instead of "40mm lens" because px/mm tokens collide in training.
                // Conservative regex: only fixes \d{2,3}px directly followed by
                // lens vocabulary, leaving legitimate "px" usage untouched.
                const fixLensUnits = (s: string): string =>
                  s
                    .replace(
                      /\b(\d{2,3})px(\s+(?:lens|prime|macro|telephoto|wide|f\/|aperture))/gi,
                      "$1mm$2",
                    )
                    .replace(/\b(\d{2,3})mm\s+pixel\b/gi, "$1mm");
                const sanitize = (s: string) => fixLensUnits(stripCliFlags(s));
                if (finalResult && typeof finalResult === "object") {
                  const fr = finalResult as Record<string, unknown>;
                  if (typeof fr.prompt === "string") fr.prompt = sanitize(fr.prompt);
                  if (Array.isArray(fr.prompts)) {
                    fr.prompts = fr.prompts.map((p) => (typeof p === "string" ? sanitize(p) : p));
                  }
                  if (typeof fr.rewritten_prompt === "string")
                    fr.rewritten_prompt = sanitize(fr.rewritten_prompt);
                  fr.prompt_version = PROMPT_VERSION;
                }
                send("done", finalResult);
                safeClose();
              } catch (err) {
                console.error("stream error:", err);
                // Generic client message — full error is logged server-side only.
                send("error", { error: "An internal error occurred. Please try again." });
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
          // Generic client message — full error is logged server-side only.
          return new Response(
            JSON.stringify({ error: "An internal error occurred. Please try again." }),
            { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
          );
        }
      },
    },
  },
});
