import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Copy, Check, Sparkles, Lightbulb, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Header } from "@/components/Header";
import { toast } from "sonner";
import { examples, EXAMPLE_CATEGORIES, CATEGORY_GRADIENTS, type Example } from "@/data/examples";

const PAGE_TITLE = "GPT Image 2 Prompt Examples — 18 Production-Grade Templates | Promptcraft";
const PAGE_DESCRIPTION =
  "Browse 18 polished GPT Image 2 prompts across 8 categories. Posters, infographics, UI mockups, cinematic scenes, and more. Copy any example or generate your own.";
const PAGE_URL = "https://promptcraft.lovable.app/examples";

export const Route = createFileRoute("/examples/{-$id}")({
  head: ({ params }) => {
    const example = params.id ? examples.find((e) => e.id === params.id) : undefined;
    if (example) {
      const title = `"${example.user_input}" — ${example.category} prompt example | Promptcraft`;
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
        {
          type: "application/ld+json",
          children: JSON.stringify(itemListJsonLd),
        },
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Examples Library
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            18 production-grade prompts for{" "}
            <span className="bg-amber-gradient bg-clip-text text-transparent">GPT Image 2</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse real examples across 8 categories. Copy any prompt, or generate your own in seconds.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/app">
              <Button
                size="lg"
                className="bg-amber-gradient text-primary-foreground hover:opacity-90 shadow-amber-glow gap-2 h-12 px-6 text-base"
              >
                Generate your own
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-card/40 px-5 h-12 text-sm font-medium text-foreground hover:bg-card hover:border-border transition"
            >
              Browse all examples ↓
            </a>
          </div>
        </div>
      </section>

      {/* STICKY FILTER BAR */}
      <div className="sticky top-16 z-30 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {EXAMPLE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap transition ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-amber-glow"
                      : "bg-transparent border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
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
      <section id="gallery" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No examples in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((ex) => (
              <ExampleCard key={ex.id} example={ex} onClick={() => openExample(ex.id)} />
            ))}
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to generate yours?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Paste any rough idea — get a polished prompt back in seconds.
          </p>
          <div className="mt-8">
            <Link to="/app">
              <Button
                size="lg"
                className="bg-amber-gradient text-primary-foreground hover:opacity-90 shadow-amber-glow gap-2 h-12 px-6 text-base"
              >
                Open generator
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* DRAWER */}
      <Sheet open={!!selected} onOpenChange={(open) => !open && closeDrawer()}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-[600px] bg-background border-l border-border/60 p-0 overflow-y-auto"
        >
          {selected && <ExampleDrawerContent example={selected} />}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function ExampleCard({ example, onClick }: { example: Example; onClick: () => void }) {
  const gradient = CATEGORY_GRADIENTS[example.category] ?? CATEGORY_GRADIENTS.Posters;
  return (
    <article
      onClick={onClick}
      className="group rounded-xl border border-border/60 bg-card overflow-hidden cursor-pointer hover:border-primary/40 hover:shadow-amber-glow transition-all"
    >
      <div className="p-5 pb-3">
        <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-widest border border-primary/20">
          {example.category}
        </span>
        <h2 className="mt-3 font-semibold text-base text-foreground truncate" title={example.user_input}>
          "{example.user_input}"
        </h2>
      </div>

      {/* Visual placeholder */}
      <div
        className="relative h-32 mx-5 rounded-lg overflow-hidden flex items-center justify-center"
        style={{ background: gradient }}
      >
        <Sparkles className="h-7 w-7 text-white/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
      </div>

      {/* Prompt preview */}
      <div className="relative px-5 pt-4 pb-2">
        <p className="font-mono text-xs text-foreground/80 leading-relaxed line-clamp-3">
          {example.prompt}
        </p>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-card to-transparent" />
      </div>

      <div className="flex items-center justify-between px-5 py-3 border-t border-border/40 mt-2">
        <span className="text-xs text-primary font-medium group-hover:underline">
          View full prompt →
        </span>
        <Copy className="h-3.5 w-3.5 text-muted-foreground" />
      </div>
    </article>
  );
}

function ExampleDrawerContent({ example }: { example: Example }) {
  const [copied, setCopied] = useState(false);

  // Reset copied state when example changes
  useEffect(() => setCopied(false), [example.id]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(example.prompt);
    setCopied(true);
    toast.success("Prompt copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const seedHref = `/app?seed=${encodeURIComponent(example.user_input)}`;

  return (
    <div className="flex flex-col">
      <SheetHeader className="px-6 pt-6 pb-4 border-b border-border/40 sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-widest border border-primary/20">
            {example.category}
          </span>
        </div>
        <SheetTitle className="sr-only">Example: {example.user_input}</SheetTitle>
      </SheetHeader>

      <div className="px-6 py-6 space-y-6">
        {/* User input */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">
            User input
          </h3>
          <div className="rounded-lg border border-border/40 bg-muted/20 px-4 py-3">
            <p className="text-sm italic text-foreground/90">"{example.user_input}"</p>
          </div>
        </div>

        {/* Generated prompt */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">
            Generated prompt
          </h3>
          <div className="relative">
            <pre className="rounded-xl bg-[var(--code-bg)] text-[var(--code-fg)] p-5 pr-14 text-sm font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto border border-border/40 shadow-soft">
              {example.prompt}
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-card/80 hover:bg-card border border-border/60 text-muted-foreground hover:text-foreground transition backdrop-blur"
              aria-label="Copy prompt"
            >
              {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Why this works */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">
            Why this works
          </h3>
          <div className="rounded-lg border border-border/40 bg-muted/20 px-4 py-3">
            <p className="text-sm leading-relaxed text-foreground/90">{example.why_it_works}</p>
          </div>
        </div>

        {/* Variants */}
        {example.variants.length > 0 && (
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2 flex items-center gap-1.5">
              <Lightbulb className="h-3.5 w-3.5 text-primary" />
              Try variants
            </h3>
            <ul className="space-y-2">
              {example.variants.map((v, i) => (
                <li
                  key={i}
                  className="text-sm p-3 rounded-lg bg-background border border-border/40 leading-relaxed"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="pt-2">
          <Link to="/app" search={{ seed: example.user_input }}>
            <Button
              size="lg"
              className="w-full bg-amber-gradient text-primary-foreground hover:opacity-90 shadow-amber-glow gap-2 h-12"
            >
              Generate your own version
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          {/* Plain anchor as fallback for direct sharing */}
          <a href={seedHref} className="hidden" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
