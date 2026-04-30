import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import {
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  Loader2,
  Wand2,
  Lightbulb,
  ExternalLink,
  Plus,
  ChevronDown,
  ChevronRight,
  Code2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { toast } from "sonner";
import { extractPartialString, extractPartialStringArray } from "@/lib/partial-json";
import { addHistory, getHistory } from "@/lib/history";

interface AppSearch {
  seed?: string;
  restore?: string;
}

export const Route = createFileRoute("/app")({
  validateSearch: (search: Record<string, unknown>): AppSearch => {
    const seed = search.seed;
    const restore = search.restore;
    return {
      seed: typeof seed === "string" && seed.length > 0 && seed.length <= 4000 ? seed : undefined,
      restore: typeof restore === "string" && restore.length > 0 ? restore : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Generator — Pixelary" },
      { name: "description", content: "Turn a rough idea into a production-grade GPT Image 2 prompt in seconds." },
      { property: "og:title", content: "Pixelary Generator" },
      { property: "og:description", content: "Turn a rough idea into a production-grade GPT Image 2 prompt in seconds." },
      { name: "twitter:title", content: "Pixelary Generator" },
      { name: "twitter:description", content: "Turn a rough idea into a production-grade GPT Image 2 prompt in seconds." },
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
}

const EXAMPLE_CHIPS = [
  { label: "poster", text: "minimalist event poster for a data engineering meetup in SF next month" },
  { label: "app mockup", text: "iPhone home screen mockup for a meditation app, soft gradient background" },
  { label: "infographic", text: "infographic explaining how RAG works, 3 steps, mono palette" },
  { label: "cinematic scene", text: "cinematic shot of empty Tokyo street at dawn, neon reflections in puddles" },
];

function AppPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [result, setResult] = useState<PromptResult | null>(null);
  const [savedRoughIdea, setSavedRoughIdea] = useState("");
  const [inputCollapsed, setInputCollapsed] = useState(false);
  // Lazy "more variations" state — appended to the original output
  const [moreLoading, setMoreLoading] = useState(false);
  const [moreVariants, setMoreVariants] = useState<string[] | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { seed, restore } = Route.useSearch();
  const navigate = useNavigate();

  // Restore from history (does not re-generate)
  useEffect(() => {
    if (!restore) return;
    const entry = getHistory().find((e) => e.id === restore);
    if (entry && entry.kind === "generate") {
      setInput(entry.rough_idea);
      setSavedRoughIdea(entry.rough_idea);
      setResult(entry.result as PromptResult);
      setInputCollapsed(true);
    }
    // Strip the restore param so a refresh doesn't replay it
    navigate({ to: "/app", search: {}, replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restore]);

  // Seed from query param (auto-generates)
  useEffect(() => {
    if (seed) {
      setInput(seed);
      generate(seed);
    } else if (!restore) {
      textareaRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seed]);

  const getEndpoint = (path: string) => {
    if (typeof window === "undefined") return path;
    const host = window.location.hostname;
    const m = host.match(/^id-preview--([0-9a-f-]+)\.lovable\.app$/i);
    if (m) return `https://project--${m[1]}-dev.lovable.app${path}`;
    return path;
  };

  const generate = async (overrideInput?: string) => {
    const userInput = (overrideInput ?? input).trim();
    if (!userInput) {
      toast.error("Type a rough idea first");
      return;
    }
    setLoading(true);
    setStreaming(false);
    setResult(null);
    setMoreVariants(null);
    setInputCollapsed(false);
    setSavedRoughIdea(userInput);

    try {
      const res = await fetch(getEndpoint("/api/public/generate-prompt"), {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "text/event-stream" },
        body: JSON.stringify({ userInput, category: "auto", mode: "default" }),
      });

      if (!res.ok || !res.body) {
        let msg = "Failed to generate";
        try {
          const data = await res.json();
          msg = data?.error || msg;
        } catch {
          /* ignore */
        }
        toast.error(msg);
        return;
      }

      const finalResult = await streamPrompt(res, (partial) => setResult(partial), () => {
        setLoading(false);
        setStreaming(true);
      });
      if (finalResult) {
        setResult(finalResult);
        setStreaming(false);
        setInputCollapsed(true);
        addHistory({ kind: "generate", rough_idea: userInput, result: finalResult as Record<string, unknown> });
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Try again.");
    } finally {
      setLoading(false);
      setStreaming(false);
    }
  };

  const fetchMoreVariations = async () => {
    if (!savedRoughIdea) return;
    setMoreLoading(true);
    try {
      const res = await fetch(getEndpoint("/api/public/generate-prompt"), {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "text/event-stream" },
        body: JSON.stringify({ userInput: savedRoughIdea, category: "auto", mode: "BATCH" }),
      });
      if (!res.ok || !res.body) {
        toast.error("Couldn't generate variations");
        return;
      }
      const finalResult = await streamPrompt(res);
      if (finalResult?.prompts && finalResult.prompts.length > 0) {
        // Drop the first (it's the "safe" one — equivalent to the existing prompt).
        // Keep the next two — stylized + experimental.
        setMoreVariants(finalResult.prompts.slice(1, 3));
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Try again.");
    } finally {
      setMoreLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      generate();
    }
  };

  const handleNewPrompt = () => {
    setInput("");
    setResult(null);
    setMoreVariants(null);
    setSavedRoughIdea("");
    setInputCollapsed(false);
    setTimeout(() => {
      textareaRef.current?.focus();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const handleChipClick = (text: string) => {
    setInput(text);
    textareaRef.current?.focus();
  };

  const showOutput = loading || streaming || result;

  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      <Header />
      <div className="mx-auto max-w-[760px] px-6 py-12 sm:py-16">
        {/* INPUT */}
        {inputCollapsed && savedRoughIdea ? (
          <CollapsedInput
            text={savedRoughIdea}
            onExpand={() => {
              setInputCollapsed(false);
              setInput(savedRoughIdea);
              setTimeout(() => textareaRef.current?.focus(), 0);
            }}
          />
        ) : (
          <div>
            <h1 className="text-display-md sm:text-display-lg tracking-tight text-[color:var(--text-primary)]">
              What do you want to make?
            </h1>

            <div className="mt-8">
              <label htmlFor="rough-idea" className="sr-only">Rough idea</label>
              <Textarea
                id="rough-idea"
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. cinematic shot of empty Tokyo street at dawn"
                className="min-h-[200px] resize-y bg-[color:var(--bg-elevated)] border-[color:var(--border-default)] text-[15px] font-mono leading-[1.65] focus-visible:border-[color:var(--accent)] focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/15 px-5 py-4"
              />

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-mono-sm text-[color:var(--text-tertiary)] mr-1">Try:</span>
                {EXAMPLE_CHIPS.map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    onClick={() => handleChipClick(chip.text)}
                    className="px-2.5 py-1 rounded-full text-[12px] font-mono bg-[color:var(--bg-subtle)] border border-[color:var(--border-subtle)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--border-strong)] transition-colors"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Button
                  onClick={() => generate()}
                  disabled={loading || streaming}
                  size="lg"
                  className="gap-2"
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
                <span className="text-mono-sm text-[color:var(--text-tertiary)] hidden sm:inline">
                  or press{" "}
                  <kbd className="px-1.5 py-0.5 rounded-sm bg-[color:var(--bg-subtle)] border border-[color:var(--border-subtle)] font-mono text-[11px]">
                    ⌘ Enter
                  </kbd>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* OUTPUT */}
        {showOutput && (
          <div className="mt-10 pt-10 border-t border-[color:var(--border-subtle)]">
            {loading && !result && <LoadingState />}
            {result && (
              <ResultView
                result={result}
                streaming={streaming}
                moreVariants={moreVariants}
                moreLoading={moreLoading}
                onRegenerate={() => generate(savedRoughIdea)}
                onMoreVariations={fetchMoreVariations}
                onNewPrompt={handleNewPrompt}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Stream parser shared between generate() and fetchMoreVariations()
async function streamPrompt(
  res: Response,
  onPartial?: (partial: PromptResult) => void,
  onFirstByte?: () => void,
): Promise<PromptResult | null> {
  if (!res.body) return null;
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let currentEvent = "";
  let gotFirst = false;
  let final: PromptResult | null = null;

  const applyPartial = (args: string) => {
    if (!onPartial) return;
    const partial: PromptResult = {};
    const p = extractPartialString(args, "prompt");
    if (p) partial.prompt = p;
    const arr = extractPartialStringArray(args, "prompts");
    if (arr && arr.length) partial.prompts = arr;
    const cat = extractPartialString(args, "category");
    if (cat) partial.category = cat;
    const why = extractPartialString(args, "why_it_works");
    if (why) partial.why_it_works = why;
    onPartial(partial);
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
              onFirstByte?.();
            }
            applyPartial(json.args);
          } else if (currentEvent === "done") {
            final = json as PromptResult;
          } else if (currentEvent === "error") {
            toast.error(json?.error || "Generation failed");
          }
        } catch {
          /* ignore */
        }
      } else if (line === "") {
        currentEvent = "";
      }
    }
  }
  return final;
}

function CollapsedInput({ text, onExpand }: { text: string; onExpand: () => void }) {
  return (
    <button
      type="button"
      onClick={onExpand}
      className="group w-full text-left rounded-md border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] px-4 py-3 hover:border-[color:var(--border-strong)] transition-colors"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.08em] uppercase font-semibold text-[color:var(--text-tertiary)] shrink-0">
          IDEA
        </span>
        <span className="text-body-sm text-[color:var(--text-secondary)] truncate flex-1">
          {text}
        </span>
        <ChevronRight className="h-4 w-4 text-[color:var(--text-tertiary)] group-hover:text-[color:var(--text-primary)] shrink-0 transition-colors" />
      </div>
    </button>
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

interface CodeBlockProps {
  text: string;
  jsonView?: object;
  streaming?: boolean;
}

function CodeBlock({ text, jsonView, streaming = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [view, setView] = useState<"text" | "json">("text");
  const display = view === "json" && jsonView ? JSON.stringify(jsonView, null, 2) : text;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(display);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="rounded-lg bg-[color:var(--code-bg)] text-[color:var(--code-text)] px-6 py-5 pr-14 text-[14px] font-mono leading-[1.7] whitespace-pre-wrap overflow-x-auto border border-[color:var(--code-border)]">
        {display}
        {streaming && (
          <span className="inline-block w-1.5 h-4 -mb-0.5 ml-0.5 bg-[color:var(--accent)] animate-pulse align-middle" />
        )}
      </pre>
      {!streaming && (
        <div className="absolute top-3 right-3 flex items-center gap-1">
          {jsonView && (
            <div className="flex items-center rounded-md border border-[color:var(--border-default)] bg-[color:var(--bg-elevated)] p-0.5">
              <button
                type="button"
                onClick={() => setView("text")}
                aria-pressed={view === "text"}
                className={`inline-flex h-6 items-center gap-1 rounded px-2 text-[11px] font-mono transition-colors ${
                  view === "text"
                    ? "bg-[color:var(--bg-subtle)] text-[color:var(--text-primary)]"
                    : "text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)]"
                }`}
                aria-label="Text view"
              >
                <FileText className="h-3 w-3" /> Text
              </button>
              <button
                type="button"
                onClick={() => setView("json")}
                aria-pressed={view === "json"}
                className={`inline-flex h-6 items-center gap-1 rounded px-2 text-[11px] font-mono transition-colors ${
                  view === "json"
                    ? "bg-[color:var(--bg-subtle)] text-[color:var(--text-primary)]"
                    : "text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)]"
                }`}
                aria-label="JSON view"
              >
                <Code2 className="h-3 w-3" /> JSON
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[color:var(--bg-elevated)] hover:bg-[color:var(--bg-subtle)] border border-[color:var(--border-default)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
            aria-label="Copy"
          >
            {copied ? <Check className="h-4 w-4 text-[color:var(--success)]" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      )}
    </div>
  );
}

interface ResultViewProps {
  result: PromptResult;
  streaming?: boolean;
  moreVariants: string[] | null;
  moreLoading: boolean;
  onRegenerate: () => void;
  onMoreVariations: () => void;
  onNewPrompt: () => void;
}

function ResultView({
  result,
  streaming = false,
  moreVariants,
  moreLoading,
  onRegenerate,
  onMoreVariations,
  onNewPrompt,
}: ResultViewProps) {
  // Batched generation result (the original mode is gone, but the API may still
  // return prompts[] if upstream config changes — keep backward compatible).
  if (result.prompts && result.prompts.length > 0) {
    const labels = ["Safe", "Stylized", "Experimental"];
    return (
      <div className="space-y-6">
        {result.category && <CategoryEyebrow category={result.category} />}
        {result.prompts.map((p, i) => {
          const isLast = i === result.prompts!.length - 1;
          return (
            <div key={i} className="space-y-2">
              <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-[color:var(--text-tertiary)] font-medium">
                {labels[i] || `Variant ${i + 1}`}
              </div>
              <CodeBlock text={p} streaming={streaming && isLast} jsonView={!streaming ? { variant: labels[i], prompt: p, category: result.category } : undefined} />
              {!streaming && <ActionRow promptText={p} onRegenerate={onRegenerate} />}
            </div>
          );
        })}
        {result.why_it_works && <WhyItWorks text={result.why_it_works} defaultOpen={false} />}
        {!streaming && <NewPromptButton onClick={onNewPrompt} />}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {result.category && <CategoryEyebrow category={result.category} />}
      {result.prompt && (
        <CodeBlock
          text={result.prompt}
          streaming={streaming}
          jsonView={
            !streaming
              ? {
                  prompt: result.prompt,
                  category: result.category,
                  size: result.size,
                  quality: result.quality,
                  aspect_ratio: result.aspect_ratio,
                  why_it_works: result.why_it_works,
                  variants: result.variants,
                }
              : undefined
          }
        />
      )}

      {(result.size || result.quality || result.aspect_ratio) && !streaming && (
        <div className="flex flex-wrap gap-2">
          {result.size && <Tag label="size" value={result.size} />}
          {result.quality && <Tag label="quality" value={result.quality} />}
          {result.aspect_ratio && <Tag label="aspect" value={result.aspect_ratio} />}
        </div>
      )}

      {!streaming && result.prompt && (
        <ActionRow promptText={result.prompt} onRegenerate={onRegenerate} />
      )}

      {/* Appended variations — labeled Stylized / Experimental */}
      {moreVariants && moreVariants.length > 0 && !streaming && (
        <div className="space-y-6 pt-2">
          {moreVariants.map((p, i) => {
            const label = i === 0 ? "Stylized" : "Experimental";
            return (
              <div key={i} className="space-y-2">
                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-[color:var(--text-tertiary)] font-medium">
                  {label}
                </div>
                <CodeBlock text={p} jsonView={{ variant: label, prompt: p }} />
                <ActionRow promptText={p} onRegenerate={onRegenerate} compact />
              </div>
            );
          })}
        </div>
      )}

      {!streaming && !moreVariants && (
        <button
          type="button"
          onClick={onMoreVariations}
          disabled={moreLoading}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-body-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--bg-subtle)] border border-dashed border-[color:var(--border-default)] hover:border-[color:var(--border-strong)] transition-colors disabled:opacity-50"
        >
          {moreLoading ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Generating variations…
            </>
          ) : (
            <>
              <Sparkles className="h-3.5 w-3.5" />
              More variations
            </>
          )}
        </button>
      )}

      {!streaming && result.why_it_works && (
        <WhyItWorks text={result.why_it_works} defaultOpen={false} />
      )}
      {!streaming && result.variants && result.variants.length > 0 && (
        <VariantsCollapsed variants={result.variants} />
      )}

      {!streaming && <NewPromptButton onClick={onNewPrompt} />}
    </div>
  );
}

function CategoryEyebrow({ category }: { category: string }) {
  return (
    <div className="font-mono text-[11px] tracking-[0.12em] uppercase font-semibold text-[color:var(--text-tertiary)]">
      {category}
    </div>
  );
}

function WhyItWorks({ text, defaultOpen = false }: { text: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-[color:var(--border-subtle)] pt-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-2 text-left text-body-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
      >
        <span className="eyebrow">Why this works</span>
        <ChevronDown className={`h-4 w-4 text-[color:var(--text-tertiary)] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <p className="mt-3 text-body-md italic leading-relaxed text-[color:var(--text-secondary)]">
          {text}
        </p>
      )}
    </div>
  );
}

function VariantsCollapsed({ variants }: { variants: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[color:var(--border-subtle)] pt-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-2 text-left text-body-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
      >
        <span className="eyebrow inline-flex items-center gap-1.5">
          <Lightbulb className="h-3.5 w-3.5" />
          Variants <span className="font-mono normal-case tracking-normal text-[color:var(--text-tertiary)]">({variants.length})</span>
        </span>
        <ChevronDown className={`h-4 w-4 text-[color:var(--text-tertiary)] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="mt-3 space-y-2">
          {variants.map((v, i) => (
            <li
              key={i}
              className="text-body-sm p-3 rounded-md bg-[color:var(--bg-subtle)] border border-[color:var(--border-subtle)] text-[color:var(--text-secondary)]"
            >
              {v}
            </li>
          ))}
        </ul>
      )}
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
  promptText,
  onRegenerate,
  compact = false,
}: {
  promptText?: string;
  onRegenerate: () => void;
  compact?: boolean;
}) {
  const [copied, setCopied] = useState(false);
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
  const handleCopy = async () => {
    if (!promptText) return;
    await navigator.clipboard.writeText(promptText);
    setCopied(true);
    toast.success("Copied");
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {promptText && (
        <Button onClick={handleOpenInImago} size={compact ? "sm" : "default"} className="gap-2">
          <ExternalLink className="h-3.5 w-3.5" />
          Open in Imago
        </Button>
      )}
      {promptText && (
        <Button onClick={handleCopy} variant="outline" size={compact ? "sm" : "default"} className="gap-2">
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </Button>
      )}
      {!compact && (
        <Button onClick={onRegenerate} variant="outline" size="default" className="gap-2">
          <RefreshCw className="h-3.5 w-3.5" />
          Regenerate
        </Button>
      )}
    </div>
  );
}

function NewPromptButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="pt-6 border-t border-[color:var(--border-subtle)]">
      <Button onClick={onClick} variant="ghost" className="gap-2">
        <Plus className="h-4 w-4" />
        New prompt
      </Button>
    </div>
  );
}
