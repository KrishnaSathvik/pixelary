import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/data/posts";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];
        const latestPostDate =
          posts
            .map((p) => p.published)
            .sort()
            .at(-1) ?? today;
        const urls: { loc: string; lastmod: string; priority: string }[] = [
          { loc: absoluteUrl("/"), lastmod: today, priority: "1.0" },
          { loc: absoluteUrl("/app"), lastmod: today, priority: "0.9" },
          { loc: absoluteUrl("/critique"), lastmod: today, priority: "0.8" },
          { loc: absoluteUrl("/blog"), lastmod: latestPostDate, priority: "0.9" },
          ...posts.map((p) => ({
            loc: absoluteUrl(`/blog/${p.slug}`),
            lastmod: p.published,
            priority: "0.8",
          })),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(body, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
