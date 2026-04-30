import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { Sparkles, Copy, Check, RefreshCw, Loader2, Wand2, Lightbulb, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/Header";
import { CATEGORIES, MODES, type ModeValue } from "@/lib/promptcraft";
import { toast } from "sonner";
import { extractPartialString, extractPartialStringArray } from "@/lib/partial-json";

interface AppSearch {
  seed?: string;
}

export const Route = createFileRoute("/app")({
  validateSearch: (search: Record<string, unknown>): AppSearch => {
    const seed = search.seed;
    return {
      seed: typeof seed === "string" && seed.length > 0 && seed.length <= 4000 ? seed : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Generator — Pixelary" },
      { name: "description", content: "Generate production-grade image prompts in seconds." },
      { property: "og:title", content: "Pixelary Generator" },
      { property: "og:description", content: "Generate production-grade image prompts in seconds." },
      { name: "twitter:title", content: "Pixelary Generator" },
      { name: "twitter:description", content: "Generate production-grade image prompts in seconds." },
    ],
  }),
  component: AppPage,
});

interface PromptResult {
  prompt?: string;
  prompts?: string[];
  category?: string;
  why_it_works?: string;
  variants?: string[];
  size?: string;
  quality?: string;
  aspect_ratio?: string;
  score?: number;
  weaknesses?: string[];
  improvements?: string[];
}

function AppPage() {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState<string>("auto");
  const [mode, setMode] = useState<ModeValue>("default");
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [result, setResult] = useState<PromptResult | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { seed } = Route.useSearch();

  const generate = async (overrideInput?: string) => {
    const userInput = (overrideInput ?? input).trim();
    if (!userInput) {
      toast.error("Enter a rough idea first");
      return;
    }
    setLoading(true);
    setStreaming(false);
    setResult(null);
    try {
      // The id-preview--* host routes through Lovable's auth bridge and 302-redirects
      // even /api/public/* requests. The stable project--*[-dev].lovable.app host
      // honors the public bypass. Rewrite the URL when we're inside id-preview.
      let endpoint = "/api/public/generate-prompt";
      if (typeof window !== "undefined") {
        const host = window.location.hostname;
        const m = host.match(/^id-preview--([0-9a-f-]+)\.lovable\.app$/i);
        if (m) {
          endpoint = `https://project--${m[1]}-dev.lovable.app/api/public/generate-prompt`;
        }
      }
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "text/event-stream" },
        body: JSON.stringify({ userInput, category, mode }),
      });

      if (!res.ok || !res.body) {
        let msg = "Failed to generate";
        try {
          const data = await res.json();
          msg = data?.error || msg;
        } catch {}
        toast.error(msg);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let currentEvent = "";
      let gotFirst = false;

      const applyPartial = (args: string) => {
        const partial: PromptResult = {};
        const p = extractPartialString(args, "prompt");
        if (p) partial.prompt = p;
        const arr = extractPartialStringArray(args, "prompts");
        if (arr && arr.length) partial.prompts = arr;
        const cat = extractPartialString(args, "category");
        if (cat) partial.category = cat;
        const why = extractPartialString(args, "why_it_works");
        if (why) partial.why_it_works = why;
        setResult(partial);
      };

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let nl: number;
        while ((nl = buffer.indexOf("\n")) !== -1) {
          const line = buffer.slice(0, nl);
          buffer = buffer.slice(nl + 1);
          if (line.startsWith("event:")) {
            currentEvent = line.slice(6).trim();
          } else if (line.startsWith("data:")) {
            const payload = line.slice(5).trim();
            if (!payload) continue;
            try {
              const json = JSON.parse(payload);
              if (currentEvent === "delta" && typeof json.args === "string") {
                if (!gotFirst) {
                  gotFirst = true;
                  setLoading(false);
                  setStreaming(true);
                }
                applyPartial(json.args);
              } else if (currentEvent === "done") {
                setResult(json as PromptResult);
                setStreaming(false);
              } else if (currentEvent === "error") {
                toast.error(json?.error || "Generation failed");
                setStreaming(false);
              }
            } catch {
              // ignore
            }
          } else if (line === "") {
            currentEvent = "";
          }
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Try again.");
    } finally {
      setLoading(false);
      setStreaming(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      generate();
    }
  };

  useEffect(() => {
    if (seed) {
      setInput(seed);
      // Auto-generate so the user doesn't stare at an empty screen
      generate(seed);
    }
    textareaRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seed]);

  const generateVariant = async (variantHint: string) => {
    await generate(`${input.trim()} — variant: ${variantHint}`);
  };


  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      <Header />
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT — INPUT */}
          <div className="rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] p-6 sm:p-8 shadow-md-card">
            <p className="eyebrow">Step 01 · Input</p>
            <h1 className="mt-3 text-heading-lg">Your rough idea</h1>
            <p className="mt-2 text-body-md text-[color:var(--text-secondary)]">
              Type anything. We’ll handle the structure, lighting, lens, and constraints.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="rough-idea" className="sr-only">Rough idea</label>
                <Textarea
                  id="rough-idea"
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="e.g. poster for data engineering meetup in SF next month"
                  className="min-h-[220px] resize-y bg-[color:var(--bg)] border-[color:var(--border-default)] text-[15px] font-mono leading-[1.65] focus-visible:border-[color:var(--accent)] focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/15"
                />
                <p className="mt-2 text-mono-sm text-[color:var(--text-tertiary)]">
                  Press{" "}
                  <kbd className="px-1.5 py-0.5 rounded-sm bg-[color:var(--bg-subtle)] border border-[color:var(--border-subtle)] font-mono text-[11px]">
                    ⌘ Enter
                  </kbd>{" "}
                  to generate
                </p>
              </div>

              <div>
                <label htmlFor="category-select" className="block eyebrow mb-2">
                  Category
                </label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="category-select" className="bg-[color:var(--bg)] border-[color:var(--border-default)] h-10 rounded-md">
                  <SelectValue placeholder="Auto-detect" />
                </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((c) => (
                      <SelectItem key={c.value} value={c.value}>
                        {c.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <p className="eyebrow mb-2">Mode</p>
                <div className="flex flex-wrap gap-2">
                  {MODES.map((m) => (
                    <button
                      key={m.value}
                      type="button"
                      onClick={() => setMode(m.value)}
                      aria-pressed={mode === m.value}
                      className={`px-3 py-1.5 rounded-full text-[12px] font-mono font-medium tracking-[0.06em] uppercase border transition-colors duration-150 ${
                        mode === m.value
                          ? "bg-[color:var(--accent)] text-[color:var(--accent-text)] border-[color:var(--accent)]"
                          : "bg-[color:var(--bg-elevated)] border-[color:var(--border-default)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--border-strong)]"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => generate()}
                disabled={loading || streaming}
                size="lg"
                className="w-full gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating…
                  </>
                ) : streaming ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Streaming…
                  </>
                ) : (
                  <>
                    <Wand2 className="h-4 w-4" />
                    Generate prompt
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* RIGHT — OUTPUT */}
          <div className="rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] p-6 sm:p-8 shadow-md-card">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <p className="eyebrow">Step 02 · Output</p>
                <h2 className="mt-3 text-heading-lg">Your polished prompt</h2>
              </div>
              {result && (
                <span
                  className="pill shrink-0 whitespace-nowrap"
                  style={{ color: "var(--text-primary)" }}
                >
                  {streaming ? "Streaming" : result.category || "Ready"}
                </span>
              )}
            </div>

            <div className="mt-6">
              {!result && !loading && <EmptyState />}
              {loading && !result && <LoadingState />}
              {result && (
                <ResultView
                  result={result}
                  streaming={streaming}
                  onRegenerate={() => generate()}
                  onVariantClick={generateVariant}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-md border border-dashed border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] p-10 text-center">
      <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--bg-elevated)] border border-[color:var(--border-subtle)]">
        <Sparkles className="h-4 w-4 text-[color:var(--text-tertiary)]" />
      </div>
      <p className="text-body-sm text-[color:var(--text-tertiary)]">Output will appear here</p>
      <div className="mt-6 space-y-2">
        <div className="h-2.5 rounded-sm bg-[color:var(--bg-elevated)]" />
        <div className="h-2.5 rounded-sm bg-[color:var(--bg-elevated)] w-5/6 mx-auto" />
        <div className="h-2.5 rounded-sm bg-[color:var(--bg-elevated)] w-4/6 mx-auto" />
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--code-bg)] p-6">
      <div className="flex items-center gap-2.5 text-mono-sm text-[color:var(--text-secondary)]">
        <Loader2 className="h-4 w-4 animate-spin" />
        Crafting your prompt…
      </div>
      <div className="mt-6 space-y-2">
        <div className="h-2.5 rounded-sm bg-[color:var(--bg-elevated)] animate-pulse" />
        <div className="h-2.5 rounded-sm bg-[color:var(--bg-elevated)] animate-pulse" />
        <div className="h-2.5 rounded-sm bg-[color:var(--bg-elevated)] w-4/5 animate-pulse" />
        <div className="h-2.5 rounded-sm bg-[color:var(--bg-elevated)] w-3/4 animate-pulse" />
      </div>
    </div>
  );
}

function CodeBlock({ text, streaming = false }: { text: string; streaming?: boolean }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group">
      <pre className="rounded-lg bg-[color:var(--code-bg)] text-[color:var(--code-text)] px-6 py-5 pr-14 text-[14px] font-mono leading-[1.7] whitespace-pre-wrap overflow-x-auto border border-[color:var(--code-border)]">
        {text}
        {streaming && (
          <span className="inline-block w-1.5 h-4 -mb-0.5 ml-0.5 bg-[color:var(--accent)] animate-pulse align-middle" />
        )}
      </pre>
      {!streaming && (
        <button
          type="button"
          onClick={handleCopy}
          className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-[color:var(--bg-elevated)] hover:bg-[color:var(--bg-subtle)] border border-[color:var(--border-default)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors duration-150 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
          aria-label="Copy prompt"
        >
          {copied ? <Check className="h-4 w-4 text-[color:var(--success)]" /> : <Copy className="h-4 w-4" />}
        </button>
      )}
    </div>
  );
}

function ResultView({
  result,
  streaming = false,
  onRegenerate,
  onVariantClick,
}: {
  result: PromptResult;
  streaming?: boolean;
  onRegenerate: () => void;
  onVariantClick: (hint: string) => void;
}) {
  if (typeof result.score === "number") {
    return (
      <div className="space-y-5">
        <div className="rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg)] p-6">
          <div className="flex items-center justify-between mb-5">
            <span className="eyebrow">Score</span>
            <span className="text-display-md tabular-nums text-[color:var(--text-primary)]">
              {result.score}<span className="text-[color:var(--text-tertiary)]">/10</span>
            </span>
          </div>
          {result.weaknesses && result.weaknesses.length > 0 && (
            <div className="mb-5">
              <h4 className="text-heading-sm mb-2">Weaknesses</h4>
              <ul className="space-y-1.5 text-body-sm text-[color:var(--text-secondary)]">
                {result.weaknesses.map((w, i) => (
                  <li key={i} className="flex gap-2"><span className="text-[color:var(--error)]">·</span>{w}</li>
                ))}
              </ul>
            </div>
          )}
          {result.improvements && result.improvements.length > 0 && (
            <div>
              <h4 className="text-heading-sm mb-2">Improvements</h4>
              <ul className="space-y-1.5 text-body-sm text-[color:var(--text-secondary)]">
                {result.improvements.map((w, i) => (
                  <li key={i} className="flex gap-2"><span className="text-[color:var(--success)]">→</span>{w}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <ActionRow onRegenerate={onRegenerate} />
      </div>
    );
  }

  if (result.prompts && result.prompts.length > 0) {
    const labels = ["Safe", "Stylized", "Experimental"];
    return (
      <div className="space-y-5">
        {result.prompts.map((p, i) => {
          const isLast = i === result.prompts!.length - 1;
          return (
            <div key={i} className="space-y-2">
              <div className="font-mono text-[12px] tracking-[0.08em] uppercase text-[color:var(--text-tertiary)] font-medium">
                {labels[i] || `Variant ${i + 1}`}
              </div>
              <CodeBlock text={p} streaming={streaming && isLast} />
            </div>
          );
        })}
        {result.why_it_works && <WhyItWorks text={result.why_it_works} />}
        {!streaming && (
          <ActionRow onRegenerate={onRegenerate} promptText={(result.prompts ?? []).join("\n\n---\n\n")} />
        )}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {result.prompt && <CodeBlock text={result.prompt} streaming={streaming} />}
      {(result.size || result.quality || result.aspect_ratio) && (
        <div className="flex flex-wrap gap-2">
          {result.size && <Tag label="size" value={result.size} />}
          {result.quality && <Tag label="quality" value={result.quality} />}
          {result.aspect_ratio && <Tag label="aspect" value={result.aspect_ratio} />}
        </div>
      )}
      {result.why_it_works && <WhyItWorks text={result.why_it_works} />}
      {result.variants && result.variants.length > 0 && (
        <div className="rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg)] p-5">
          <div className="flex items-center gap-2 text-body-sm font-semibold mb-3 text-[color:var(--text-primary)]">
            <Lightbulb className="h-4 w-4" />
            Try variants
          </div>
          <div className="space-y-2">
            {result.variants.map((v, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onVariantClick(v)}
                className="w-full text-left text-body-sm p-3 rounded-md bg-[color:var(--bg-elevated)] border border-[color:var(--border-subtle)] hover:border-[color:var(--border-strong)] transition-colors duration-150 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      )}
      {!streaming && (
        <ActionRow onRegenerate={onRegenerate} promptText={result.prompt} />
      )}
    </div>
  );
}

function WhyItWorks({ text }: { text: string }) {
  return (
    <div className="rounded-lg border-l-2 border-[color:var(--accent)] bg-[color:var(--bg-subtle)] px-5 py-4">
      <div className="eyebrow mb-2">Why this works</div>
      <p className="text-body-md italic leading-relaxed text-[color:var(--text-secondary)]">{text}</p>
    </div>
  );
}

function Tag({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--bg-subtle)] px-2.5 py-1 text-[12px] font-mono font-medium">
      <span className="text-[color:var(--text-tertiary)] uppercase tracking-[0.06em]">{label}</span>
      <span className="text-[color:var(--text-primary)]">{value}</span>
    </span>
  );
}

function ActionRow({
  onRegenerate,
  promptText,
}: {
  onRegenerate: () => void;
  promptText?: string;
}) {
  const handleOpenInImago = async () => {
    if (!promptText) return;
    try {
      await navigator.clipboard.writeText(promptText);
      toast.success("Prompt copied — paste into Imago with ⌘V / Ctrl+V");
    } catch {
      toast.error("Couldn't copy automatically — copy manually before pasting");
    }
    window.open(
      "https://chatgpt.com/g/g-69e7de729cb48191a6aa83ec3af8a6cb-imago",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="flex flex-wrap items-center gap-2 pt-2">
      {promptText && (
        <Button onClick={handleOpenInImago} size="sm" className="gap-2">
          <ExternalLink className="h-3.5 w-3.5" />
          Open in Imago
        </Button>
      )}
      <Button onClick={onRegenerate} variant="outline" size="sm" className="gap-2">
        <RefreshCw className="h-3.5 w-3.5" />
        Regenerate
      </Button>
    </div>
  );
}
