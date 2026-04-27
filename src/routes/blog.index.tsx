import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { posts, CATEGORY_COLORS } from "@/data/posts";

const PAGE_TITLE = "The Promptcraft Blog — AI Image Prompt Engineering";
const PAGE_DESCRIPTION =
  "Field-tested techniques for getting better AI images from GPT Image 2, Midjourney, Nano Banana Pro. Frameworks, examples, comparisons.";
const PAGE_URL = "https://promptcraft.lovable.app/blog";

export const Route = createFileRoute("/blog/")({
  head: () => {
    const blogJsonLd = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "The Promptcraft Blog",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        description: p.excerpt,
        datePublished: p.published,
        author: { "@type": "Organization", name: p.author },
        url: `${PAGE_URL}/${p.slug}`,
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
      scripts: [{ type: "application/ld+json", children: JSON.stringify(blogJsonLd) }],
    };
  },
  component: BlogIndex,
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function PostCard({
  post,
  featured = false,
}: {
  post: (typeof posts)[number];
  featured?: boolean;
}) {
  const gradient = CATEGORY_COLORS[post.category] ?? "from-muted to-muted/30";
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-soft ${
        featured ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`relative bg-gradient-to-br ${gradient} ${
          featured ? "md:w-[42%] md:min-h-[280px]" : "h-40"
        } flex items-center justify-center overflow-hidden`}
      >
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
          {post.category}
        </span>
        <div
          className={`select-none font-serif font-bold text-foreground/15 ${
            featured ? "text-[6rem]" : "text-[4rem]"
          }`}
        >
          {post.title.split(" ")[0]}
        </div>
      </div>
      <div className={`flex flex-1 flex-col gap-3 p-6 ${featured ? "md:p-8" : ""}`}>
        <h3
          className={`font-serif font-bold leading-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors ${
            featured ? "text-3xl" : "text-xl"
          }`}
        >
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-2 pt-3 text-xs text-muted-foreground">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-gradient text-[10px] font-bold text-primary-foreground">
            P
          </span>
          <span className="font-medium text-foreground">{post.author}</span>
          <span className="opacity-50">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.read_time}
          </span>
          <span className="opacity-50">·</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(post.published)}
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Read <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </Link>
  );
}

function BlogIndex() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()
  );
  const [featured, ...rest] = sorted;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="mb-12 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3 w-3" /> Field notes
          </span>
          <h1 className="mt-4 font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            The Promptcraft Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Field-tested techniques for getting better AI images. Written by people who actually
            ship.
          </p>
        </section>

        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            {/* Featured */}
            {featured && (
              <div className="mb-8">
                <PostCard post={featured} featured />
              </div>
            )}

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-primary/40 bg-amber-gradient p-6 text-primary-foreground shadow-amber-glow">
              <Sparkles className="h-6 w-6" />
              <h3 className="mt-3 text-xl font-bold">Try Promptcraft free</h3>
              <p className="mt-2 text-sm opacity-90">
                Turn rough ideas into pro-grade image prompts in seconds. No credit card.
              </p>
              <Link to="/app" className="mt-4 inline-block">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  Open generator <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-border/60 bg-card p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Categories
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                {Array.from(new Set(posts.map((p) => p.category))).map((cat) => (
                  <li key={cat} className="text-foreground">
                    {cat} ·{" "}
                    <span className="text-muted-foreground">
                      {posts.filter((p) => p.category === cat).length}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
