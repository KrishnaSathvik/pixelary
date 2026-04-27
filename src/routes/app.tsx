import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { Sparkles, Copy, Check, RefreshCw, Save, Loader2, Wand2, Lightbulb } from "lucide-react";
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
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { extractPartialString, extractPartialStringArray } from "@/lib/partial-json";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Generator — Promptcraft" },
      { name: "description", content: "Generate production-grade image prompts in seconds." },
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
  const { user } = useAuth();
  const [input, setInput] = useState("");
  const [category, setCategory] = useState<string>("auto");
  const [mode, setMode] = useState<ModeValue>("default");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PromptResult | null>(null);
  const [saving, setSaving] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const generate = async (overrideInput?: string) => {
    const userInput = (overrideInput ?? input).trim();
    if (!userInput) {
      toast.error("Enter a rough idea first");
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/generate-prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput, category, mode }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data?.error || "Failed to generate");
        return;
      }
      setResult(data);
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
      generate();
    }
  };

  // Auto focus on mount
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const generateVariant = async (variantHint: string) => {
    await generate(`${input.trim()} — variant: ${variantHint}`);
  };

  const savePrompt = async () => {
    if (!user) {
      toast.error("Sign in to save prompts", {
        action: { label: "Sign in", onClick: () => (window.location.href = "/login") },
      });
      return;
    }
    if (!result) return;
    setSaving(true);
    const outputPrompt = result.prompt || result.prompts?.join("\n\n---\n\n") || JSON.stringify(result, null, 2);
    const { error } = await supabase.from("prompts").insert({
      user_id: user.id,
      input_text: input.trim(),
      category: result.category || category,
      output_prompt: outputPrompt,
      why_it_works: result.why_it_works || null,
      variants: result.variants || [],
      mode,
    });
    setSaving(false);
    if (error) {
      toast.error("Failed to save");
      console.error(error);
    } else {
      toast.success("Saved to library");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT — INPUT */}
          <div className="space-y-5">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Your rough idea</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Type anything. We'll handle the structure, lighting, lens, and constraints.
              </p>
            </div>

            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g. poster for data engineering meetup in SF next month"
              className="min-h-[220px] resize-y bg-card border-border/60 text-base font-mono leading-relaxed focus-visible:ring-primary"
            />
            <p className="text-xs text-muted-foreground">
              Press <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono text-[10px]">⌘ Enter</kbd> to generate
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Category
                </label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="bg-card border-border/60">
                    <SelectValue />
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
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Mode
                </label>
                <div className="flex flex-wrap gap-2">
                  {MODES.map((m) => (
                    <button
                      key={m.value}
                      onClick={() => setMode(m.value)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                        mode === m.value
                          ? "bg-primary text-primary-foreground border-primary shadow-amber-glow"
                          : "bg-card border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              onClick={() => generate()}
              disabled={loading}
              size="lg"
              className="w-full bg-amber-gradient text-primary-foreground hover:opacity-90 shadow-amber-glow h-12 text-base gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating…
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4" />
                  Generate Prompt
                </>
              )}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Powered by frontier reasoning models via Lovable AI
            </p>
          </div>

          {/* RIGHT — OUTPUT */}
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Your polished prompt</h2>
              {result && (
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                  {result.category || "READY"}
                </span>
              )}
            </div>

            {!result && !loading && <EmptyState />}
            {loading && <LoadingState />}
            {result && (
              <ResultView
                result={result}
                onCopy={() => {}}
                onRegenerate={() => generate()}
                onSave={savePrompt}
                onVariantClick={generateVariant}
                saving={saving}
                isLoggedIn={!!user}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-border bg-card/40 p-10 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted/40">
        <Sparkles className="h-5 w-5 text-muted-foreground" />
      </div>
      <p className="text-sm text-muted-foreground">Output will appear here</p>
      <div className="mt-6 space-y-2">
        <div className="h-3 rounded bg-muted/30 animate-pulse" />
        <div className="h-3 rounded bg-muted/30 w-5/6 mx-auto animate-pulse" />
        <div className="h-3 rounded bg-muted/30 w-4/6 mx-auto animate-pulse" />
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-6 shadow-soft">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin text-primary" />
        Crafting your prompt…
      </div>
      <div className="mt-6 space-y-2">
        <div className="h-3 rounded bg-muted/30 animate-pulse" />
        <div className="h-3 rounded bg-muted/30 animate-pulse" />
        <div className="h-3 rounded bg-muted/30 w-4/5 animate-pulse" />
        <div className="h-3 rounded bg-muted/30 w-3/4 animate-pulse" />
      </div>
    </div>
  );
}

function CodeBlock({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group">
      <pre className="rounded-xl bg-[var(--code-bg)] text-[var(--code-fg)] p-5 pr-14 text-sm font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto border border-border/40 shadow-soft">
        {text}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-card/80 hover:bg-card border border-border/60 text-muted-foreground hover:text-foreground transition backdrop-blur"
        aria-label="Copy"
      >
        {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}

function ResultView({
  result,
  onRegenerate,
  onSave,
  onVariantClick,
  saving,
  isLoggedIn,
}: {
  result: PromptResult;
  onCopy: () => void;
  onRegenerate: () => void;
  onSave: () => void;
  onVariantClick: (hint: string) => void;
  saving: boolean;
  isLoggedIn: boolean;
}) {
  // CRITIQUE mode rendering
  if (typeof result.score === "number") {
    return (
      <div className="space-y-4">
        <div className="rounded-xl border border-border/60 bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Score</span>
            <span className="text-4xl font-bold bg-amber-gradient bg-clip-text text-transparent">
              {result.score}/10
            </span>
          </div>
          {result.weaknesses && result.weaknesses.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Weaknesses</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {result.weaknesses.map((w, i) => (
                  <li key={i} className="flex gap-2"><span className="text-destructive">•</span>{w}</li>
                ))}
              </ul>
            </div>
          )}
          {result.improvements && result.improvements.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold mb-2">Improvements</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {result.improvements.map((w, i) => (
                  <li key={i} className="flex gap-2"><span className="text-success">→</span>{w}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <ActionRow onRegenerate={onRegenerate} onSave={onSave} saving={saving} isLoggedIn={isLoggedIn} />
      </div>
    );
  }

  // BATCH mode
  if (result.prompts && result.prompts.length > 0) {
    const labels = ["Safe", "Stylized", "Experimental"];
    return (
      <div className="space-y-4">
        {result.prompts.map((p, i) => (
          <div key={i} className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold">
              {labels[i] || `Variant ${i + 1}`}
            </div>
            <CodeBlock text={p} />
          </div>
        ))}
        {result.why_it_works && <WhyItWorks text={result.why_it_works} />}
        <ActionRow onRegenerate={onRegenerate} onSave={onSave} saving={saving} isLoggedIn={isLoggedIn} />
      </div>
    );
  }

  // Default / JSON mode
  return (
    <div className="space-y-4">
      {result.prompt && <CodeBlock text={result.prompt} />}
      {(result.size || result.quality || result.aspect_ratio) && (
        <div className="flex flex-wrap gap-2">
          {result.size && <Tag label="size" value={result.size} />}
          {result.quality && <Tag label="quality" value={result.quality} />}
          {result.aspect_ratio && <Tag label="aspect" value={result.aspect_ratio} />}
        </div>
      )}
      {result.why_it_works && <WhyItWorks text={result.why_it_works} />}
      {result.variants && result.variants.length > 0 && (
        <div className="rounded-xl border border-border/60 bg-card/60 p-5 shadow-soft">
          <div className="flex items-center gap-2 text-sm font-semibold mb-3">
            <Lightbulb className="h-4 w-4 text-primary" />
            Try variants
          </div>
          <div className="space-y-2">
            {result.variants.map((v, i) => (
              <button
                key={i}
                onClick={() => onVariantClick(v)}
                className="w-full text-left text-sm p-3 rounded-lg bg-background/50 border border-border/40 hover:border-primary/40 hover:bg-background transition"
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      )}
      <ActionRow onRegenerate={onRegenerate} onSave={onSave} saving={saving} isLoggedIn={isLoggedIn} />
    </div>
  );
}

function WhyItWorks({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-border/40 bg-muted/20 p-5">
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">
        Why this works
      </div>
      <p className="text-sm leading-relaxed text-foreground/90">{text}</p>
    </div>
  );
}

function Tag({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-muted/40 px-2.5 py-1 text-xs font-mono">
      <span className="text-muted-foreground">{label}:</span>
      <span className="text-foreground">{value}</span>
    </span>
  );
}

function ActionRow({
  onRegenerate,
  onSave,
  saving,
  isLoggedIn,
}: {
  onRegenerate: () => void;
  onSave: () => void;
  saving: boolean;
  isLoggedIn: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 pt-2">
      <Button onClick={onSave} disabled={saving} variant="outline" size="sm" className="gap-2">
        {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
        Save to library
      </Button>
      <Button onClick={onRegenerate} variant="outline" size="sm" className="gap-2">
        <RefreshCw className="h-3.5 w-3.5" />
        Regenerate
      </Button>
      {!isLoggedIn && (
        <Link to="/login" className="text-xs text-muted-foreground hover:text-foreground ml-auto">
          Sign in to save →
        </Link>
      )}
    </div>
  );
}
