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
  head: () => ({ meta: [{ title: "Library — Promptcraft" }] }),
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Library</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {prompts.length} saved prompt{prompts.length === 1 ? "" : "s"}
            </p>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search prompts…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-card border-border/60"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
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
              <div key={i} className="h-48 rounded-xl bg-card animate-pulse" />
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
        <DialogContent className="max-w-2xl bg-card border-border/60 max-h-[85vh] overflow-y-auto">
          {selected && <PromptDetail prompt={selected} onDelete={() => handleDelete(selected.id)} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function CategoryChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
        active
          ? "bg-primary text-primary-foreground border-primary shadow-amber-glow"
          : "bg-card border-border/60 text-muted-foreground hover:text-foreground"
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
      onClick={onClick}
      className="text-left rounded-xl border border-border/60 bg-card p-5 shadow-soft hover:border-primary/40 transition group"
    >
      <div className="flex items-center justify-between mb-3">
        {prompt.category && (
          <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20">
            {prompt.category}
          </span>
        )}
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
      <p className="text-sm font-medium text-foreground mb-2 line-clamp-1">{prompt.input_text}</p>
      <p className="text-xs text-muted-foreground font-mono leading-relaxed line-clamp-4">
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
        <DialogTitle className="text-xl">{prompt.input_text}</DialogTitle>
      </DialogHeader>
      <div className="space-y-4 mt-2">
        <div className="flex items-center gap-2">
          {prompt.category && (
            <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              {prompt.category}
            </span>
          )}
          <span className="text-xs text-muted-foreground">
            {new Date(prompt.created_at).toLocaleString()}
          </span>
        </div>
        <div className="relative">
          <pre className="rounded-xl bg-[var(--code-bg)] text-[var(--code-fg)] p-5 pr-14 text-sm font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto border border-border/40">
{prompt.output_prompt}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-card/80 hover:bg-card border border-border/60"
          >
            {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
        {prompt.why_it_works && (
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">
              Why this works
            </div>
            <p className="text-sm leading-relaxed">{prompt.why_it_works}</p>
          </div>
        )}
        <div className="flex items-center justify-end pt-2">
          <Button variant="ghost" size="sm" onClick={onDelete} className="gap-2 text-destructive hover:text-destructive">
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
    <div className="rounded-xl border border-dashed border-border bg-card/40 p-16 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <Sparkles className="h-5 w-5 text-primary" />
      </div>
      <p className="text-base font-medium">
        {hasPrompts ? "No prompts match your filters" : "No saved prompts yet"}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        {hasPrompts ? "Try adjusting your search or category." : "Generate your first one to get started."}
      </p>
      {!hasPrompts && (
        <Link to="/app" className="inline-block mt-6">
          <Button className="bg-amber-gradient text-primary-foreground hover:opacity-90 shadow-amber-glow gap-2">
            Go to generator <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  );
}
