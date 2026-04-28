import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { Search, Copy, Check, Trash2, Loader2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { CATEGORIES } from "@/lib/promptcraft";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/library")({
  head: () => ({ meta: [{ title: "Library — Pixelary" }] }),
  component: LibraryPage,
});

interface PromptRow {
  id: string;
  input_text: string;
  category: string | null;
  output_prompt: string;
  why_it_works: string | null;
  variants: string[] | null;
  mode: string | null;
  created_at: string;
}

function LibraryPage() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [prompts, setPrompts] = useState<PromptRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selected, setSelected] = useState<PromptRow | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate({ to: "/login" });
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("prompts")
        .select("*")
        .order("created_at", { ascending: false });
      setLoading(false);
      if (error) {
        toast.error("Failed to load library");
        return;
      }
      setPrompts((data || []) as PromptRow[]);
    })();
  }, [user]);

  const filtered = useMemo(() => {
    return prompts.filter((p) => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          p.input_text.toLowerCase().includes(q) ||
          p.output_prompt.toLowerCase().includes(q) ||
          (p.category || "").toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [prompts, search, activeCategory]);

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("prompts").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete");
      return;
    }
    setPrompts((prev) => prev.filter((p) => p.id !== id));
    setSelected(null);
    toast.success("Deleted");
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen bg-[color:var(--bg)] flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-[color:var(--text-tertiary)]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      <Header />
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="eyebrow">Saved</p>
            <h1 className="mt-3 text-display-md">Library</h1>
            <p className="mt-2 text-body-md text-[color:var(--text-secondary)]">
              {prompts.length} saved prompt{prompts.length === 1 ? "" : "s"}
            </p>
          </div>
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[color:var(--text-tertiary)]" />
            <Input
              placeholder="Search prompts…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <CategoryChip label="All" active={activeCategory === "all"} onClick={() => setActiveCategory("all")} />
          {CATEGORIES.filter((c) => c.value !== "auto").map((c) => (
            <CategoryChip
              key={c.value}
              label={c.label}
              active={activeCategory === c.value}
              onClick={() => setActiveCategory(c.value)}
            />
          ))}
        </div>

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-48 rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <EmptyLibrary hasPrompts={prompts.length > 0} />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <PromptCard key={p.id} prompt={p} onClick={() => setSelected(p)} />
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl bg-[color:var(--bg-elevated)] border-[color:var(--border-default)] max-h-[85vh] overflow-y-auto rounded-lg">
          {selected && <PromptDetail prompt={selected} onDelete={() => handleDelete(selected.id)} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function CategoryChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-3 py-1.5 rounded-full text-[12px] font-mono font-medium tracking-[0.06em] uppercase border transition-colors duration-150 ${
        active
          ? "bg-[color:var(--accent)] text-[color:var(--accent-text)] border-[color:var(--accent)]"
          : "bg-[color:var(--bg-elevated)] border-[color:var(--border-default)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--border-strong)]"
      }`}
    >
      {label}
    </button>
  );
}

function PromptCard({ prompt, onClick }: { prompt: PromptRow; onClick: () => void }) {
  const date = new Date(prompt.created_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] p-5 transition-all duration-200 hover:border-[color:var(--border-default)] hover:shadow-sm-card"
    >
      <div className="flex items-center justify-between mb-3">
        {prompt.category && (
          <span className="font-mono text-[11px] font-medium tracking-[0.08em] uppercase text-[color:var(--text-tertiary)]">
            {prompt.category}
          </span>
        )}
        <span className="text-mono-sm text-[color:var(--text-tertiary)]">{date}</span>
      </div>
      <p className="text-body-sm font-medium text-[color:var(--text-primary)] mb-2 line-clamp-1">
        {prompt.input_text}
      </p>
      <p className="text-[12px] text-[color:var(--text-secondary)] font-mono leading-[1.65] line-clamp-4">
        {prompt.output_prompt}
      </p>
    </button>
  );
}

function PromptDetail({ prompt, onDelete }: { prompt: PromptRow; onDelete: () => void }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.output_prompt);
    setCopied(true);
    toast.success("Copied");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-heading-md">{prompt.input_text}</DialogTitle>
      </DialogHeader>
      <div className="space-y-5 mt-3">
        <div className="flex items-center gap-3">
          {prompt.category && (
            <span className="font-mono text-[11px] font-medium tracking-[0.08em] uppercase text-[color:var(--text-tertiary)]">
              {prompt.category}
            </span>
          )}
          <span className="text-mono-sm text-[color:var(--text-tertiary)]">
            {new Date(prompt.created_at).toLocaleString()}
          </span>
        </div>
        <div className="relative">
          <pre className="rounded-lg bg-[color:var(--code-bg)] text-[color:var(--code-text)] px-6 py-5 pr-14 text-[14px] font-mono leading-[1.7] whitespace-pre-wrap overflow-x-auto border border-[color:var(--code-border)]">
{prompt.output_prompt}
          </pre>
          <button
            type="button"
            onClick={handleCopy}
            className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-[color:var(--bg-elevated)] hover:bg-[color:var(--bg-subtle)] border border-[color:var(--border-default)]"
            aria-label="Copy prompt"
          >
            {copied ? <Check className="h-4 w-4 text-[color:var(--success)]" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
        {prompt.why_it_works && (
          <div className="rounded-lg border-l-2 border-[color:var(--accent)] bg-[color:var(--bg-subtle)] px-5 py-4">
            <div className="eyebrow mb-2">Why this works</div>
            <p className="text-body-md italic leading-relaxed text-[color:var(--text-secondary)]">
              {prompt.why_it_works}
            </p>
          </div>
        )}
        <div className="flex items-center justify-end pt-2">
          <Button variant="ghost" size="sm" onClick={onDelete} className="gap-2 text-[color:var(--error)] hover:text-[color:var(--error)]">
            <Trash2 className="h-3.5 w-3.5" />
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}

function EmptyLibrary({ hasPrompts }: { hasPrompts: boolean }) {
  return (
    <div className="rounded-lg border border-dashed border-[color:var(--border-default)] bg-[color:var(--bg-elevated)] p-16 text-center">
      <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--bg-subtle)] border border-[color:var(--border-subtle)]">
        <Sparkles className="h-4 w-4 text-[color:var(--text-tertiary)]" />
      </div>
      <p className="text-heading-sm">
        {hasPrompts ? "No prompts match your filters" : "No saved prompts yet"}
      </p>
      <p className="mt-2 text-body-sm text-[color:var(--text-secondary)]">
        {hasPrompts ? "Try adjusting your search or category." : "Generate your first one to get started."}
      </p>
      {!hasPrompts && (
        <Link to="/app" className="inline-block mt-6">
          <Button className="gap-2">
            Go to generator <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  );
}
