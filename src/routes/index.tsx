import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useEffect, useMemo, useState } from 'react';
import { Copy, ExternalLink, Search, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import { zodValidator, fallback } from '@tanstack/zod-adapter';
import { Header } from '@/components/Header';
import { fetchLibrary, copyPrompt, openInImago, getCachedLibrary } from '@/lib/library';
import type { LibraryPrompt } from '@/types/library';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CATEGORY_GRADIENTS } from '@/data/examples';

const PAGE_SIZE = 9;

const searchSchema = z.object({
  page: fallback(z.number().int().min(1), 1).default(1),
});

export const Route = createFileRoute('/')({
  validateSearch: zodValidator(searchSchema),
  // Load once, then keep the data fresh for 5 minutes. Going back to the
  // Library is now instant — TanStack Router serves the cached loader data
  // without re-fetching from Supabase.
  loader: () => fetchLibrary(),
  staleTime: 5 * 60 * 1000,
  gcTime: 30 * 60 * 1000,
  head: () => ({
    meta: [
      { title: 'Pixelary — 100+ GPT Image 2 prompts. Copy any.' },
      {
        name: 'description',
        content:
          '100+ ready-to-use GPT Image 2 prompts. Copy any prompt or open it in Imago. Browse posters, cinematic scenes, UI mockups, infographics, and more.',
      },
      { property: 'og:title', content: 'Pixelary — 100+ GPT Image 2 prompts' },
      {
        property: 'og:description',
        content: '100+ ready-to-use GPT Image 2 prompts. Copy any. Open in Imago.',
      },
      { name: 'twitter:title', content: 'Pixelary — 100+ GPT Image 2 prompts' },
      {
        name: 'twitter:description',
        content: '100+ ready-to-use GPT Image 2 prompts. Copy any. Open in Imago.',
      },
    ],
  }),
  component: HomePage,
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

function HomePage() {
  // Loader-provided data — always populated, never blocks paint after first load.
  const prompts = Route.useLoaderData();
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: '/' });
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selected, setSelected] = useState<LibraryPrompt | null>(null);

  // Reset to page 1 whenever the filter set changes.
  const setCategory = (c: CategoryFilter) => {
    setActiveCategory(c);
    if (page !== 1) navigate({ search: { page: 1 } });
  };
  const setSearchInput = (v: string) => {
    setSearch(v);
    if (page !== 1) navigate({ search: { page: 1 } });
  };

  // Debounce search 150ms to smooth keystrokes on slower devices.
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 150);
    return () => clearTimeout(t);
  }, [search]);

  const filtered = useMemo(() => {
    let list = prompts;
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (debouncedSearch.trim()) {
      const q = debouncedSearch.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.prompt.toLowerCase().includes(q) ||
          (p.user_input ?? '').toLowerCase().includes(q) ||
          (p.tags ?? []).some((t: string) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [prompts, activeCategory, debouncedSearch]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = useMemo(
    () => filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE),
    [filtered, safePage]
  );

  const goToPage = (p: number) => {
    const next = Math.max(1, Math.min(totalPages, p));
    navigate({ search: { page: next } });
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      <Header />

      {/* Hero — two lines, plus a quiet pointer to the Generator */}
      <section className="border-b border-[color:var(--border-subtle)]">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-6 md:pt-14 md:pb-8">
          <h1 className="text-display-md text-[color:var(--text-primary)]">
            100+ GPT Image 2 prompts.
          </h1>
          <p className="mt-2 text-display-md text-[color:var(--text-secondary)]">
            Copy any. Open in Imago.
          </p>

          {/* Search */}
          <div className="relative mt-8 max-w-2xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--text-tertiary)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search prompts…"
              aria-label="Search prompts"
              className="w-full rounded-md border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] py-3 pl-11 pr-4 text-body-md text-[color:var(--text-primary)] placeholder:text-[color:var(--text-tertiary)] focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/15"
            />
          </div>

          {/* Quiet generator link */}
          <p className="mt-4 text-body-sm text-[color:var(--text-tertiary)]">
            Need something custom?{' '}
            <Link
              to="/app"
              className="inline-flex items-center gap-1 text-[color:var(--text-secondary)] underline-offset-4 hover:text-[color:var(--text-primary)] hover:underline"
            >
              Pixelary builds prompts from rough ideas
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>

        {/* Category chips — horizontal scroll on mobile */}
        <div className="mx-auto max-w-6xl px-6 pb-5">
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`pill shrink-0 font-mono uppercase tracking-wider text-mono-sm transition-colors ${
                  activeCategory === c
                    ? 'bg-[color:var(--accent)] text-[color:var(--bg-elevated)]'
                    : 'border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-subtle)]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-body-md text-[color:var(--text-tertiary)]">
              No prompts match those filters.
            </p>
            {(activeCategory !== 'All' || search) && (
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearch('');
                  if (page !== 1) navigate({ search: { page: 1 } });
                }}
                className="mt-4 text-mono-sm uppercase tracking-wider text-[color:var(--accent)] hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-px bg-[color:var(--border-subtle)] md:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((p) => (
                <PromptCard
                  key={`${p.source}-${p.id}`}
                  prompt={p}
                  onOpen={() => setSelected(p)}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <nav
                className="mt-10 flex items-center justify-between gap-4"
                aria-label="Pagination"
              >
                <p className="text-mono-sm uppercase tracking-wider text-[color:var(--text-tertiary)]">
                  Page {safePage} of {totalPages} · {filtered.length} prompts
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => goToPage(safePage - 1)}
                    disabled={safePage === 1}
                    aria-label="Previous page"
                    className="pill flex items-center gap-1 border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] text-[color:var(--text-primary)] hover:bg-[color:var(--bg-subtle)] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                    Prev
                  </button>
                  <button
                    onClick={() => goToPage(safePage + 1)}
                    disabled={safePage === totalPages}
                    aria-label="Next page"
                    className="pill flex items-center gap-1 border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] text-[color:var(--text-primary)] hover:bg-[color:var(--bg-subtle)] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </nav>
            )}
          </>
        )}
      </section>

      <PromptDetailDialog prompt={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function PromptCard({
  prompt,
  onOpen,
}: {
  prompt: LibraryPrompt;
  onOpen: () => void;
}) {
  const gradient =
    CATEGORY_GRADIENTS[prompt.category] ?? CATEGORY_GRADIENTS['Open-Ended Creative'];

  return (
    <article
      onClick={onOpen}
      className="group relative flex cursor-pointer flex-col gap-3 bg-[color:var(--bg-elevated)] p-6 transition-shadow hover:shadow-md-card"
    >
      <div
        className="h-2 w-12 rounded-sm"
        style={{ background: gradient }}
        aria-hidden
      />
      <p className="eyebrow text-[color:var(--text-tertiary)]">{prompt.category}</p>
      <h3 className="text-heading-sm text-[color:var(--text-primary)]">{prompt.title}</h3>
      <p className="line-clamp-3 text-body-md text-[color:var(--text-secondary)]">
        {prompt.prompt}
      </p>
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
          className="flex items-center gap-1 text-mono-sm uppercase tracking-wider text-[color:var(--accent-orange)] opacity-0 transition-opacity hover:underline group-hover:opacity-100"
        >
          Open in Imago
          <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </article>
  );
}

function PromptDetailDialog({
  prompt,
  onClose,
}: {
  prompt: LibraryPrompt | null;
  onClose: () => void;
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
        </div>

        {prompt.why_it_works && (
          <div className="mt-8 border-t border-[color:var(--border-subtle)] pt-6">
            <p className="eyebrow mb-2 text-[color:var(--text-tertiary)]">Why it works</p>
            <p className="text-body-md text-[color:var(--text-secondary)]">
              {prompt.why_it_works}
            </p>
          </div>
        )}

        {prompt.variants && prompt.variants.length > 0 && (
          <div className="mt-6 border-t border-[color:var(--border-subtle)] pt-6">
            <p className="eyebrow mb-3 text-[color:var(--text-tertiary)]">Variants</p>
            <ul className="space-y-2">
              {prompt.variants.map((v: string, i: number) => (
                <li key={i} className="text-body-md text-[color:var(--text-secondary)]">
                  {v}
                </li>
              ))}
            </ul>
          </div>
        )}

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
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
