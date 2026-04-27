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

export const Route = createFileRoute("/api/generate-prompt")({
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

          // Tool schema for structured output
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
            }),
          });

          if (!aiResponse.ok) {
            const errText = await aiResponse.text();
            console.error("AI gateway error:", aiResponse.status, errText);
            if (aiResponse.status === 429) {
              return new Response(
                JSON.stringify({ error: "Rate limit reached. Please wait a moment and try again." }),
                { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
              );
            }
            if (aiResponse.status === 402) {
              return new Response(
                JSON.stringify({ error: "AI credits exhausted. Please add credits in workspace settings." }),
                { status: 402, headers: { "Content-Type": "application/json", ...corsHeaders } }
              );
            }
            return new Response(JSON.stringify({ error: "AI service error" }), {
              status: 500,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            });
          }

          const data = await aiResponse.json();
          const toolCall = data?.choices?.[0]?.message?.tool_calls?.[0];
          if (!toolCall?.function?.arguments) {
            console.error("No tool call in response:", JSON.stringify(data));
            return new Response(JSON.stringify({ error: "Invalid AI response format" }), {
              status: 500,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            });
          }

          const result = JSON.parse(toolCall.function.arguments);

          return new Response(JSON.stringify(result), {
            status: 200,
            headers: { "Content-Type": "application/json", ...corsHeaders },
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
