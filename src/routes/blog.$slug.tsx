import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  Twitter,
  Github,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { posts, getPostBySlug, getRelatedPosts, CATEGORY_COLORS } from "@/data/posts";
import { renderMarkdown } from "@/lib/markdown";
import { toast } from "sonner";

const SITE_URL = "https://promptcraft.lovable.app";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.post) return { meta: [{ title: "Post not found" }] };
    const { post } = loaderData;
    const url = `${SITE_URL}/blog/${post.slug}`;
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.published,
      dateModified: post.published,
      author: { "@type": "Organization", name: post.author },
      publisher: {
        "@type": "Organization",
        name: "Promptcraft",
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    };
    return {
      meta: [
        { title: post.seo_title },
        { name: "description", content: post.seo_description },
        { property: "og:title", content: post.seo_title },
        { property: "og:description", content: post.seo_description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "article:published_time", content: post.published },
        { property: "article:author", content: post.author },
        { property: "article:section", content: post.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.seo_title },
        { name: "twitter:description", content: post.seo_description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(articleJsonLd) }],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <p className="mt-2 text-muted-foreground">That article doesn't exist.</p>
        <Link to="/blog" className="mt-6 inline-block">
          <Button variant="outline">Back to blog</Button>
        </Link>
      </main>
    </div>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const gradient = CATEGORY_COLORS[post.category] ?? "from-muted to-muted/30";
  const related = useMemo(() => getRelatedPosts(post.slug, post.category, 2), [post.slug, post.category]);

  const { nodes, headings } = useMemo(() => renderMarkdown(post.content), [post.content]);

  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? "");
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to blog
        </Link>

        {/* Header */}
        <header className="mt-6 max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
            {post.category}
          </span>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 font-serif text-xl italic font-light text-muted-foreground">
            {post.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-gradient text-xs font-bold text-primary-foreground">
              P
            </span>
            <span className="font-medium text-foreground">{post.author}</span>
            <span className="opacity-50">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.read_time}
            </span>
            <span className="opacity-50">·</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.published)}
            </span>
          </div>
        </header>

        {/* Hero gradient block */}
        <div
          className={`mt-8 h-40 rounded-2xl bg-gradient-to-br ${gradient} sm:h-56`}
          aria-hidden="true"
        />

        {/* Mobile TOC */}
        {headings.length > 0 && (
          <div className="mt-8 lg:hidden">
            <button
              type="button"
              onClick={() => setTocOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-lg border border-border/60 bg-card px-4 py-3 text-sm font-medium"
            >
              <span>On this page</span>
              <ArrowRight
                className={`h-4 w-4 transition-transform ${tocOpen ? "rotate-90" : ""}`}
              />
            </button>
            {tocOpen && (
              <ul className="mt-2 space-y-1 rounded-lg border border-border/60 bg-card p-4 text-sm">
                {headings.map((h) => (
                  <li key={h.id} className={h.level === 3 ? "pl-3" : ""}>
                    <a
                      href={`#${h.id}`}
                      onClick={() => setTocOpen(false)}
                      className="block py-1 text-muted-foreground hover:text-foreground"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Content + sticky TOC */}
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="min-w-0 max-w-[680px]">
            <div className="prose-content">{nodes}</div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {headings.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    On this page
                  </h4>
                  <ul className="mt-3 space-y-2 border-l border-border/60 text-sm">
                    {headings.map((h) => (
                      <li
                        key={h.id}
                        className={h.level === 3 ? "pl-6" : "pl-3"}
                      >
                        <a
                          href={`#${h.id}`}
                          className={`block border-l-2 -ml-px py-1 pl-3 transition-colors ${
                            activeId === h.id
                              ? "border-primary text-foreground font-medium"
                              : "border-transparent text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-2xl border border-primary/40 bg-amber-gradient p-5 text-primary-foreground shadow-amber-glow">
                <Sparkles className="h-5 w-5" />
                <h4 className="mt-2 text-base font-bold">Try Promptcraft</h4>
                <p className="mt-1 text-xs opacity-90">
                  Generate prompts that follow every rule in this article.
                </p>
                <Link to="/app" className="mt-3 inline-block">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    Open generator
                  </Button>
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom blocks */}
        <div className="mt-20 max-w-[680px] space-y-12">
          {/* Author bio */}
          <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-gradient text-base font-bold text-primary-foreground">
              P
            </span>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">{post.author}</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                The Promptcraft team ships AI image prompt tooling. We obsess over what works in
                production — not what looks good in a demo.
              </p>
              <div className="mt-3 flex gap-3 text-muted-foreground">
                <a href="#" className="hover:text-foreground" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="hover:text-foreground" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-card p-6">
            <span className="text-sm font-medium text-foreground">Was this useful?</span>
            <div className="flex gap-2">
              <Button
                variant={feedback === "up" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setFeedback("up");
                  toast.success("Thanks for the feedback!");
                }}
              >
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button
                variant={feedback === "down" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setFeedback("down");
                  toast("Thanks — we'll keep improving.");
                }}
              >
                <ThumbsDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Big CTA */}
          <div className="rounded-2xl bg-amber-gradient p-8 text-center text-primary-foreground shadow-amber-glow">
            <h3 className="font-serif text-2xl font-bold">
              Generate your own polished prompts in seconds
            </h3>
            <p className="mt-2 text-sm opacity-90">
              Paste a rough idea. Get back a structured prompt that ships.
            </p>
            <Link to="/app" className="mt-5 inline-block">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Open Promptcraft <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Newsletter */}
          <form
            onSubmit={handleNewsletter}
            className="rounded-2xl border border-border/60 bg-card p-6"
          >
            <h4 className="font-serif text-lg font-bold text-foreground">
              Get new articles in your inbox
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              One short email when we publish something new. No spam.
            </p>
            <div className="mt-4 flex gap-2">
              <Input type="email" required placeholder="you@company.com" />
              <Button type="submit">Subscribe</Button>
            </div>
          </form>

          {/* Related posts */}
          {related.length > 0 && (
            <div>
              <h4 className="font-serif text-2xl font-bold text-foreground">More in {post.category}</h4>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/blog/$slug"
                    params={{ slug: r.slug }}
                    className="group rounded-2xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/60"
                  >
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                      {r.category}
                    </span>
                    <h5 className="mt-3 font-serif text-lg font-bold leading-snug text-foreground line-clamp-2 group-hover:text-primary">
                      {r.title}
                    </h5>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{r.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
