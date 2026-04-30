import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ChevronDown, ChevronRight, Code2, FileText, Loader2, Plus, ScanSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { toast } from "sonner";
import { addHistory, getHistory } from "@/lib/history";

interface CritiqueSearch {
  restore?: string;
}

export const Route = createFileRoute("/critique")({
  validateSearch: (search: Record<string, unknown>): CritiqueSearch => {
    const restore = search.restore;
    return { restore: typeof restore === "string" && restore.length > 0 ? restore : undefined };
  },
  head: () => ({
    meta: [
      { title: "Critique a Prompt — Pixelary" },
      { name: "description", content: "Paste a prompt. Get a score, weaknesses, and concrete improvements." },
      { property: "og:title", content: "Pixelary · Critique" },
      { property: "og:description", content: "Paste a prompt. Get a score, weaknesses, and concrete improvements." },
      { name: "twitter:title", content: "Pixelary · Critique" },
      { name: "twitter:description", content: "Paste a prompt. Get a score, weaknesses, and concrete improvements." },
    ],
  }),
  component: CritiquePage,
});

interface CritiqueResult {
  score?: number;
  weaknesses?: string[];
  improvements?: string[];
  category?: string;
}

function CritiquePage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CritiqueResult | null>(null);
  const [savedInput, setSavedInput] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { restore } = Route.useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!restore) {
      textareaRef.current?.focus();
      return;
    }
    const entry = getHistory().find((e) => e.id === restore);
    if (entry && entry.kind === "critique") {
      setInput(entry.rough_idea);
      setSavedInput(entry.rough_idea);
      setResult(entry.result as CritiqueResult);
      setCollapsed(true);
    }
    navigate({ to: "/critique", search: {}, replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restore]);

  const getEndpoint = (path: string) => {
    if (typeof window === "undefined") return path;
    const host = window.location.hostname;
    const m = host.match(/^id-preview--([0-9a-f-]+)\.lovable\.app$/i);
    if (m) return `https://project--${m[1]}-dev.lovable.app${path}`;
    return path;
  };

  const score = async () => {
    const text = input.trim();
    if (!text) {
      toast.error("Paste a prompt to score");
      return;
    }
    setLoading(true);
    setResult(null);
    setCollapsed(false);
    setSavedInput(text);

    try {
      const res = await fetch(getEndpoint("/api/public/generate-prompt"), {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "text/event-stream" },
        body: JSON.stringify({ userInput: text, category: "auto", mode: "CRITIQUE" }),
      });

      if (!res.ok || !res.body) {
        let msg = "Failed to score";
        try {
          const data = await res.json();
          msg = data?.error || msg;
        } catch {
          /* ignore */
        }
        toast.error(msg);
        return;
      }

      // Wait for the final "done" event — we don't stream partial scores.
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let currentEvent = "";
      let final: CritiqueResult | null = null;

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
              if (currentEvent === "done") final = json as CritiqueResult;
              else if (currentEvent === "error") toast.error(json?.error || "Score failed");
            } catch {
              /* ignore */
            }
          } else if (line === "") {
            currentEvent = "";
          }
        }
      }
      if (final) {
        setResult(final);
        setCollapsed(true);
        addHistory({
          kind: "critique",
          rough_idea: text,
          result: final as Record<string, unknown>,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      score();
    }
  };

  const handleNewCritique = () => {
    setInput("");
    setResult(null);
    setSavedInput("");
    setCollapsed(false);
    setTimeout(() => {
      textareaRef.current?.focus();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      <Header />
      <div className="mx-auto max-w-[760px] px-6 py-12 sm:py-16">
        {collapsed && savedInput ? (
          <CollapsedInput
            text={savedInput}
            onExpand={() => {
              setCollapsed(false);
              setInput(savedInput);
              setTimeout(() => textareaRef.current?.focus(), 0);
            }}
          />
        ) : (
          <div>
            <h1 className="text-display-md sm:text-display-lg tracking-tight text-[color:var(--text-primary)]">
              Score an existing prompt
            </h1>
            <p className="mt-3 text-body-md text-[color:var(--text-secondary)]">
              Paste any image prompt. Get a score from 1–10, ranked weaknesses, and concrete fixes.
            </p>

            <div className="mt-8">
              <label htmlFor="critique-input" className="sr-only">Prompt to score</label>
              <Textarea
                id="critique-input"
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Paste a prompt to score it…"
                className="min-h-[240px] resize-y bg-[color:var(--bg-elevated)] border-[color:var(--border-default)] text-[15px] font-mono leading-[1.65] focus-visible:border-[color:var(--accent)] focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/15 px-5 py-4"
              />

              <div className="mt-6 flex items-center gap-3">
                <Button onClick={score} disabled={loading} size="lg" className="gap-2">
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Scoring…
                    </>
                  ) : (
                    <>
                      <ScanSearch className="h-4 w-4" />
                      Score prompt
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

        {(loading || result) && (
          <div className="mt-10 pt-10 border-t border-[color:var(--border-subtle)]">
            {loading && !result && (
              <div className="rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--code-bg)] p-6">
                <div className="flex items-center gap-2.5 text-mono-sm text-[color:var(--text-secondary)]">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Scoring your prompt…
                </div>
              </div>
            )}
            {result && <CritiqueView result={result} onNew={handleNewCritique} />}
          </div>
        )}
      </div>
    </div>
  );
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
          PROMPT
        </span>
        <span className="text-body-sm text-[color:var(--text-secondary)] truncate flex-1">{text}</span>
        <ChevronRight className="h-4 w-4 text-[color:var(--text-tertiary)] group-hover:text-[color:var(--text-primary)] shrink-0 transition-colors" />
      </div>
    </button>
  );
}

function CritiqueView({ result, onNew }: { result: CritiqueResult; onNew: () => void }) {
  const [view, setView] = useState<"text" | "json">("text");
  const score = typeof result.score === "number" ? result.score : null;
  const scoreColor =
    score === null
      ? "var(--text-primary)"
      : score >= 8
      ? "var(--success)"
      : score >= 5
      ? "var(--text-primary)"
      : "var(--error)";

  return (
    <div className="space-y-6">
      {result.category && (
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase font-semibold text-[color:var(--text-tertiary)]">
          {result.category}
        </div>
      )}

      <div className="rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] p-6 relative">
        <div className="absolute top-3 right-3 flex items-center rounded-md border border-[color:var(--border-default)] bg-[color:var(--bg)] p-0.5">
          <button
            type="button"
            onClick={() => setView("text")}
            aria-pressed={view === "text"}
            className={`inline-flex h-6 items-center gap-1 rounded px-2 text-[11px] font-mono transition-colors ${
              view === "text"
                ? "bg-[color:var(--bg-subtle)] text-[color:var(--text-primary)]"
                : "text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)]"
            }`}
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
          >
            <Code2 className="h-3 w-3" /> JSON
          </button>
        </div>

        {view === "json" ? (
          <pre className="mt-8 text-[13px] font-mono leading-[1.7] whitespace-pre-wrap overflow-x-auto text-[color:var(--text-primary)]">
            {JSON.stringify(result, null, 2)}
          </pre>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <span className="eyebrow">Score</span>
              <span className="text-display-md tabular-nums" style={{ color: scoreColor }}>
                {score ?? "—"}
                <span className="text-[color:var(--text-tertiary)]">/10</span>
              </span>
            </div>

            {result.weaknesses && result.weaknesses.length > 0 && (
              <div className="mb-6">
                <h4 className="text-heading-sm mb-3">Weaknesses</h4>
                <ul className="space-y-2 text-body-sm text-[color:var(--text-secondary)]">
                  {result.weaknesses.map((w, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[color:var(--error)] mt-0.5">·</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result.improvements && result.improvements.length > 0 && (
              <div>
                <h4 className="text-heading-sm mb-3">Improvements</h4>
                <ul className="space-y-2 text-body-sm text-[color:var(--text-secondary)]">
                  {result.improvements.map((w, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[color:var(--success)] mt-0.5">→</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>

      <div className="pt-6 border-t border-[color:var(--border-subtle)]">
        <Button onClick={onNew} variant="ghost" className="gap-2">
          <Plus className="h-4 w-4" />
          Score another prompt
        </Button>
      </div>
    </div>
  );
}
