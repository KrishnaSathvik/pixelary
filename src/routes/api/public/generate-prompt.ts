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

          const userMessage = [
            category && category !== "auto" ? `Category hint: ${category}` : null,
            `Mode: ${mode}`,
            `User idea: ${userInput.trim()}`,
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

          const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "openai/gpt-5",
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
            const status = aiResponse.status;
            const message =
              status === 429
                ? "Rate limit reached. Please wait a moment and try again."
                : status === 402
                ? "AI credits exhausted. Please add credits in workspace settings."
                : "AI service error";
            return new Response(JSON.stringify({ error: message }), {
              status: status === 429 || status === 402 ? status : 500,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            });
          }

          // Stream SSE: forward incremental tool-call argument deltas to the client.
          const upstream = aiResponse.body;
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

              const reader = upstream.getReader();
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
