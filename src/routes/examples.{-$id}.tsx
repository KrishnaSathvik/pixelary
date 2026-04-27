import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Copy, Check, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Header } from "@/components/Header";
import { toast } from "sonner";
import { examples, EXAMPLE_CATEGORIES, type Example } from "@/data/examples";

const PAGE_TITLE = "GPT Image 2 Prompt Examples — 20 Production-Grade Templates | Promptcraft";
const PAGE_DESCRIPTION =
  "Browse 20 polished GPT Image 2 prompts across 10 categories — posters, infographics, UI mockups, cinematic scenes, multi-panel storyboards, abstract & surreal mood pieces, and more. Copy any example or generate your own.";
const PAGE_URL = "https://promptcraft.lovable.app/examples";

export const Route = createFileRoute("/examples/{-$id}")({
  head: ({ params }) => {
    const example = params.id ? examples.find((e) => e.id === params.id) : undefined;
    if (example) {
      const title = `“${example.user_input}” — ${example.category} prompt example | Promptcraft`;
      const desc = `${example.why_it_works.slice(0, 155)}…`;
      return {
        meta: [
          { title },
          { name: "description", content: desc },
          { property: "og:title", content: title },
          { property: "og:description", content: desc },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ],
      };
    }
    const itemListJsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Promptcraft Examples Gallery",
      description: PAGE_DESCRIPTION,
      numberOfItems: examples.length,
      itemListElement: examples.map((ex, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${PAGE_URL}/${ex.id}`,
        name: ex.user_input,
      })),
    };
    return {
      meta: [
        { title: PAGE_TITLE },
        { name: "description", content: PAGE_DESCRIPTION },
        { property: "og:title", content: PAGE_TITLE },
        { property: "og:description", content: PAGE_DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:url", content: PAGE_URL },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: PAGE_TITLE },
        { name: "twitter:description", content: PAGE_DESCRIPTION },
      ],
      links: [{ rel: "canonical", href: PAGE_URL }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(itemListJsonLd) },
      ],
    };
  },
  component: ExamplesPage,
});

function ExamplesPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const selected = useMemo(
    () => (id ? examples.find((e) => e.id === id) ?? null : null),
    [id]
  );

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? examples
        : examples.filter((e) => e.category === activeCategory),
    [activeCategory]
  );

  const closeDrawer = () => {
    navigate({ to: "/examples/{-$id}", params: { id: undefined } });
  };

  const openExample = (exId: string) => {
    navigate({ to: "/examples/{-$id}", params: { id: exId } });
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      <Header />

      {/* HERO */}
      <section className="border-b border-[color:var(--border-subtle)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 pt-20 pb-16">
          <p className="eyebrow">Examples library</p>
          <h1 className="mt-4 text-display-md max-w-3xl">
            20 production-grade prompts for GPT Image 2.
          </h1>
          <p className="mt-5 max-w-2xl text-body-lg text-[color:var(--text-secondary)]">
            Real examples across 10 categories — including multi-panel storyboards and open-ended creative work. Copy any prompt, or generate your own in seconds.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
            <Link to="/app">
              <Button size="lg" className="gap-2">
                Generate your own
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#gallery">
              <Button size="lg" variant="ghost">Browse all examples ↓</Button>
            </a>
          </div>
        </div>
      </section>

      {/* STICKY FILTER BAR */}
      <div className="sticky top-16 z-30 border-b border-[color:var(--border-subtle)] bg-[color:var(--bg)]/85 backdrop-blur-md">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-3 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {EXAMPLE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-[12px] font-mono font-medium tracking-[0.06em] uppercase whitespace-nowrap border transition-colors duration-150 ${
                    isActive
                      ? "bg-[color:var(--accent)] text-[color:var(--accent-text)] border-[color:var(--accent)]"
                      : "bg-transparent border-[color:var(--border-default)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--border-strong)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-[1280px] px-6 lg:px-12 py-16 sm:py-24">
        {filtered.length === 0 ? (
          <p className="text-center text-body-md text-[color:var(--text-tertiary)] py-12">
            No examples in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--border-subtle)] border border-[color:var(--border-subtle)]">
            {filtered.map((ex) => (
              <ExampleCard key={ex.id} example={ex} onClick={() => openExample(ex.id)} />
            ))}
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-[color:var(--border-subtle)] bg-[color:var(--bg-subtle)]">
        <div className="mx-auto max-w-[800px] px-6 py-24 sm:py-32 text-center">
          <p className="eyebrow">Generate yours</p>
          <h2 className="mt-4 text-display-md">Ready to ship a prompt?</h2>
          <p className="mt-4 text-body-lg text-[color:var(--text-secondary)]">
            Paste any rough idea — get a polished prompt back in seconds.
          </p>
          <div className="mt-8">
            <Link to="/app">
              <Button size="lg" className="gap-2">
                Open generator
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* DRAWER */}
      <Dialog open={!!selected} onOpenChange={(open: boolean) => !open && closeDrawer()}>
        <DialogContent className="max-w-2xl w-[calc(100vw-2rem)] max-h-[85vh] overflow-y-auto bg-[color:var(--bg)] border border-[color:var(--border-subtle)] p-0">
          {selected && <ExampleDrawerContent example={selected} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ExampleCard({ example, onClick }: { example: Example; onClick: () => void }) {
  return (
    <article
      onClick={onClick}
      className="group bg-[color:var(--bg-elevated)] cursor-pointer p-7 transition-[box-shadow] duration-200 ease-out hover:shadow-md-card relative"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] font-medium tracking-[0.08em] uppercase text-[color:var(--text-tertiary)]">
          {example.category}
        </span>
        <Copy className="h-3.5 w-3.5 text-[color:var(--text-quaternary)] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      </div>

      <h2 className="mt-5 text-heading-sm text-[color:var(--text-primary)] line-clamp-2">
        “{example.user_input}”
      </h2>

      <div className="mt-5 relative">
        <p className="font-mono text-[12px] leading-[1.65] text-[color:var(--text-secondary)] line-clamp-4">
          {example.prompt}
        </p>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[color:var(--bg-elevated)] to-transparent" />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-mono-sm text-[color:var(--text-primary)] group-hover:underline underline-offset-4">
          View full prompt →
        </span>
      </div>
    </article>
  );
}

function ExampleDrawerContent({ example }: { example: Example }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => setCopied(false), [example.id]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(example.prompt);
    setCopied(true);
    toast.success("Prompt copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col">
      <DialogHeader className="px-8 pt-7 pb-5 border-b border-[color:var(--border-subtle)] sticky top-0 bg-[color:var(--bg)]/95 backdrop-blur z-10">
        <span className="font-mono text-[11px] font-medium tracking-[0.08em] uppercase text-[color:var(--text-tertiary)]">
          {example.category}
        </span>
        <DialogTitle className="sr-only">Example: {example.user_input}</DialogTitle>
      </DialogHeader>

      <div className="px-8 py-8 space-y-8">
        <div>
          <p className="eyebrow">User input</p>
          <div className="mt-3 rounded-md border border-[color:var(--border-subtle)] bg-[color:var(--bg-subtle)] px-4 py-3">
            <p className="text-body-md italic text-[color:var(--text-primary)]">
              “{example.user_input}”
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow">Generated prompt</p>
          <div className="mt-3 relative group">
            <pre className="rounded-lg bg-[color:var(--code-bg)] text-[color:var(--code-text)] px-6 py-5 pr-14 text-[13px] font-mono leading-[1.7] whitespace-pre-wrap overflow-x-auto border border-[color:var(--code-border)]">
              {example.prompt}
            </pre>
            <button
              type="button"
              onClick={handleCopy}
              className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-[color:var(--bg-elevated)] hover:bg-[color:var(--bg-subtle)] border border-[color:var(--border-default)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors duration-150"
              aria-label="Copy prompt"
            >
              {copied ? <Check className="h-4 w-4 text-[color:var(--success)]" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div>
          <p className="eyebrow">Why this works</p>
          <div className="mt-3 rounded-md border-l-2 border-[color:var(--accent)] bg-[color:var(--bg-subtle)] px-5 py-4">
            <p className="text-body-md leading-relaxed text-[color:var(--text-secondary)]">
              {example.why_it_works}
            </p>
          </div>
        </div>

        {example.variants.length > 0 && (
          <div>
            <p className="eyebrow inline-flex items-center gap-1.5">
              <Lightbulb className="h-3 w-3" />
              Try variants
            </p>
            <ul className="mt-3 space-y-2">
              {example.variants.map((v, i) => (
                <li
                  key={i}
                  className="text-body-sm p-3 rounded-md bg-[color:var(--bg-elevated)] border border-[color:var(--border-subtle)] leading-relaxed text-[color:var(--text-secondary)]"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-2">
          <Link to="/app" search={{ seed: example.user_input }}>
            <Button size="lg" className="w-full gap-2">
              Generate your own version
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
