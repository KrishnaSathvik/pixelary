import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useMemo, useState } from 'react';
import { Copy, ExternalLink, Search, Star } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/lib/auth-context';
import {
  fetchLibrary,
  fetchFavoriteIds,
  copyPrompt,
  openInImago,
  toggleFavorite,
} from '@/lib/library';
import type { LibraryPrompt } from '@/types/library';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CATEGORY_GRADIENTS } from '@/data/examples';

export const Route = createFileRoute('/library')({
  component: LibraryPage,
});

const CATEGORIES = [
  'All',
  'Posters',
  'Infographics',
  'UI Mockups',
  'Social Posts',
  'Cinematic',
  'Storyboards',
  'Interior/Food/Fashion',
  'Visual Summaries',
  'Image Edits',
  'Open-Ended Creative',
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

function LibraryPage() {
  const { user } = useAuth();
  const [prompts, setPrompts] = useState<LibraryPrompt[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [search, setSearch] = useState('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [showOnlyMine, setShowOnlyMine] = useState(false);
  const [selected, setSelected] = useState<LibraryPrompt | null>(null);

  // Initial load.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchLibrary();
        if (!cancelled) setPrompts(data);
      } catch (err) {
        console.error(err);
        if (!cancelled) toast.error('Couldn\'t load the Library');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Load favorites when user logs in.
  useEffect(() => {
    if (!user) {
      setFavorites(new Set());
      return;
    }
    fetchFavoriteIds(user.id).then(setFavorites).catch(console.error);
  }, [user]);

  // Apply filters in-memory. ~100 rows, so no need for server-side filtering yet.
  const filtered = useMemo(() => {
    let list = prompts;

    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (showOnlyFavorites) {
      list = list.filter((p) => favorites.has(p.id));
    }

    if (showOnlyMine && user) {
      list = list.filter((p) => p.source === 'user' && p.user_id === user.id);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.prompt.toLowerCase().includes(q) ||
          (p.user_input ?? '').toLowerCase().includes(q) ||
          (p.tags ?? []).some((t: string) => t.toLowerCase().includes(q))
      );
    }

    return list;
  }, [prompts, activeCategory, search, showOnlyFavorites, showOnlyMine, favorites, user]);

  const handleToggleFavorite = async (p: LibraryPrompt) => {
    if (!user) {
      toast.error('Sign in to save prompts');
      return;
    }
    const wasFavorited = favorites.has(p.id);
    // Optimistic update.
    setFavorites((prev) => {
      const next = new Set(prev);
      if (wasFavorited) next.delete(p.id);
      else next.add(p.id);
      return next;
    });
    try {
      await toggleFavorite(user.id, p.id, p.source, wasFavorited);
    } catch {
      // Revert on failure.
      setFavorites((prev) => {
        const next = new Set(prev);
        if (wasFavorited) next.add(p.id);
        else next.delete(p.id);
        return next;
      });
    }
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      {/* Hero */}
      <section className="border-b border-[color:var(--border-subtle)] bg-[color:var(--bg)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="eyebrow text-[color:var(--text-tertiary)]">Library</p>
          <h1 className="mt-3 text-display-md text-[color:var(--text-primary)]">
            Every prompt, in one place.
          </h1>
          <p className="mt-4 max-w-2xl text-body-md text-[color:var(--text-secondary)]">
            Curated GPT Image 2 prompts and your own generations. Copy any prompt, or
            open it directly in Imago.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/app"
              className="pill bg-[color:var(--accent)] text-[color:var(--bg-elevated)] hover:opacity-90"
            >
              Open generator
            </Link>
            {!user && (
              <Link
                to="/login"
                className="pill border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] text-[color:var(--text-primary)] hover:bg-[color:var(--bg-subtle)]"
              >
                Sign in to save
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 border-b border-[color:var(--border-subtle)] bg-[color:var(--bg)]/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--text-tertiary)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search prompts…"
              className="w-full rounded-md border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] py-2 pl-10 pr-4 text-body-md text-[color:var(--text-primary)] placeholder:text-[color:var(--text-quaternary)] focus:border-[color:var(--accent)] focus:outline-none"
            />
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`pill font-mono uppercase tracking-wider text-mono-sm transition-colors ${
                  activeCategory === c
                    ? 'bg-[color:var(--accent)] text-[color:var(--bg-elevated)]'
                    : 'border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-subtle)]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Saved + Mine toggles, right-aligned */}
          {user && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button
                onClick={() => setShowOnlyFavorites((v) => !v)}
                className={`pill flex items-center gap-1.5 font-mono uppercase tracking-wider text-mono-sm transition-colors ${
                  showOnlyFavorites
                    ? 'bg-[color:var(--accent)] text-[color:var(--bg-elevated)]'
                    : 'border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-subtle)]'
                }`}
              >
                <Star
                  className="h-3 w-3"
                  fill={showOnlyFavorites ? 'currentColor' : 'none'}
                />
                Saved
              </button>
              <button
                onClick={() => setShowOnlyMine((v) => !v)}
                className={`pill font-mono uppercase tracking-wider text-mono-sm transition-colors ${
                  showOnlyMine
                    ? 'bg-[color:var(--accent)] text-[color:var(--bg-elevated)]'
                    : 'border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-subtle)]'
                }`}
              >
                Mine
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {loading ? (
          <p className="text-body-md text-[color:var(--text-tertiary)]">Loading…</p>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-body-md text-[color:var(--text-tertiary)]">
              No prompts match those filters.
            </p>
            {(activeCategory !== 'All' || search || showOnlyFavorites || showOnlyMine) && (
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearch('');
                  setShowOnlyFavorites(false);
                  setShowOnlyMine(false);
                }}
                className="mt-4 text-mono-sm uppercase tracking-wider text-[color:var(--accent)] hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-px bg-[color:var(--border-subtle)] md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <PromptCard
                key={`${p.source}-${p.id}`}
                prompt={p}
                isFavorited={favorites.has(p.id)}
                onOpen={() => setSelected(p)}
                onToggleFavorite={() => handleToggleFavorite(p)}
                isAuthed={!!user}
              />
            ))}
          </div>
        )}
      </section>

      {/* Detail dialog */}
      <PromptDetailDialog
        prompt={selected}
        onClose={() => setSelected(null)}
        isFavorited={selected ? favorites.has(selected.id) : false}
        onToggleFavorite={() => selected && handleToggleFavorite(selected)}
        isAuthed={!!user}
      />
    </div>
  );
}

// ============================================================
// PromptCard
// ============================================================
function PromptCard({
  prompt,
  isFavorited,
  onOpen,
  onToggleFavorite,
  isAuthed,
}: {
  prompt: LibraryPrompt;
  isFavorited: boolean;
  onOpen: () => void;
  onToggleFavorite: () => void;
  isAuthed: boolean;
}) {
  const gradient = CATEGORY_GRADIENTS[prompt.category] ?? CATEGORY_GRADIENTS['Open-Ended Creative'];

  return (
    <article
      onClick={onOpen}
      className="group relative flex cursor-pointer flex-col gap-3 bg-[color:var(--bg-elevated)] p-6 transition-shadow hover:shadow-md-card"
    >
      {/* Top row: category gradient swatch + favorite */}
      <div className="flex items-start justify-between">
        <div
          className="h-2 w-12 rounded-sm"
          style={{ background: gradient }}
          aria-hidden
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          aria-label={isFavorited ? 'Unfavorite' : 'Favorite'}
          className={`rounded-sm p-1 transition-opacity ${
            isFavorited
              ? 'opacity-100 text-[color:var(--accent)]'
              : isAuthed
              ? 'opacity-0 group-hover:opacity-100 text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)]'
              : 'opacity-0 group-hover:opacity-60 text-[color:var(--text-tertiary)]'
          }`}
        >
          <Star className="h-4 w-4" fill={isFavorited ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Category eyebrow */}
      <p className="eyebrow text-[color:var(--text-tertiary)]">{prompt.category}</p>

      {/* Title */}
      <h3 className="text-heading-sm text-[color:var(--text-primary)]">{prompt.title}</h3>

      {/* Prompt preview — first ~140 chars */}
      <p className="line-clamp-3 text-body-md text-[color:var(--text-secondary)]">
        {prompt.prompt}
      </p>

      {/* Bottom action row */}
      <div className="mt-auto flex items-center justify-between pt-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            copyPrompt(prompt.prompt);
          }}
          aria-label="Copy prompt"
          className="rounded-sm p-1.5 text-[color:var(--text-tertiary)] opacity-0 transition-opacity hover:bg-[color:var(--bg-subtle)] hover:text-[color:var(--text-primary)] group-hover:opacity-100"
        >
          <Copy className="h-4 w-4" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            openInImago(prompt.prompt);
          }}
          className="flex items-center gap-1 text-mono-sm uppercase tracking-wider text-[color:var(--accent-orange)] opacity-0 transition-opacity group-hover:opacity-100 hover:underline"
        >
          Open in Imago
          <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </article>
  );
}

// ============================================================
// PromptDetailDialog
// ============================================================
function PromptDetailDialog({
  prompt,
  onClose,
  isFavorited,
  onToggleFavorite,
  isAuthed,
}: {
  prompt: LibraryPrompt | null;
  onClose: () => void;
  isFavorited: boolean;
  onToggleFavorite: () => void;
  isAuthed: boolean;
}) {
  if (!prompt) return null;

  return (
    <Dialog open={!!prompt} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto bg-[color:var(--bg-elevated)]">
        <DialogHeader>
          <p className="eyebrow text-[color:var(--text-tertiary)]">{prompt.category}</p>
          <DialogTitle className="text-display-md text-[color:var(--text-primary)]">
            {prompt.title}
          </DialogTitle>
        </DialogHeader>

        {/* Prompt block with floating copy button */}
        <div className="relative mt-6">
          <pre
            className="overflow-x-auto whitespace-pre-wrap rounded-md p-4 font-mono text-mono-sm text-[color:var(--text-primary)]"
            style={{ background: 'var(--code-bg)' }}
          >
            {prompt.prompt}
          </pre>
          <button
            onClick={() => copyPrompt(prompt.prompt)}
            aria-label="Copy prompt"
            className="absolute right-3 top-3 rounded-sm bg-[color:var(--bg-elevated)] p-2 text-[color:var(--text-tertiary)] shadow-sm-card hover:text-[color:var(--text-primary)]"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>

        {/* Action row */}
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => openInImago(prompt.prompt)}
            className="pill flex items-center gap-2 bg-[color:var(--accent)] text-[color:var(--bg-elevated)] hover:opacity-90"
          >
            Open in Imago
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => copyPrompt(prompt.prompt)}
            className="pill flex items-center gap-2 border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] text-[color:var(--text-primary)] hover:bg-[color:var(--bg-subtle)]"
          >
            <Copy className="h-3.5 w-3.5" />
            Copy
          </button>
          {isAuthed && (
            <button
              onClick={onToggleFavorite}
              className="pill flex items-center gap-2 border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] text-[color:var(--text-primary)] hover:bg-[color:var(--bg-subtle)]"
            >
              <Star className="h-3.5 w-3.5" fill={isFavorited ? 'currentColor' : 'none'} />
              {isFavorited ? 'Saved' : 'Save'}
            </button>
          )}
        </div>

        {/* Why it works */}
        {prompt.why_it_works && (
          <div className="mt-8 border-t border-[color:var(--border-subtle)] pt-6">
            <p className="eyebrow mb-2 text-[color:var(--text-tertiary)]">Why it works</p>
            <p className="text-body-md text-[color:var(--text-secondary)]">
              {prompt.why_it_works}
            </p>
          </div>
        )}

        {/* Variants */}
        {prompt.variants && prompt.variants.length > 0 && (
          <div className="mt-6 border-t border-[color:var(--border-subtle)] pt-6">
            <p className="eyebrow mb-3 text-[color:var(--text-tertiary)]">Variants</p>
            <ul className="space-y-2">
              {prompt.variants.map((v: string, i: number) => (
                <li
                  key={i}
                  className="text-body-md text-[color:var(--text-secondary)]"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Source attribution — only shown for curated, only at the bottom */}
        {prompt.source_creator && (
          <div className="mt-8 border-t border-[color:var(--border-subtle)] pt-4">
            <p className="text-mono-sm text-[color:var(--text-quaternary)]">
              Originally shared by{' '}
              {prompt.source_url ? (
                <a
                  href={prompt.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)] hover:underline"
                >
                  {prompt.source_creator}
                </a>
              ) : (
                <span className="text-[color:var(--text-tertiary)]">
                  {prompt.source_creator}
                </span>
              )}
              {prompt.source_url && ' on X'}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
