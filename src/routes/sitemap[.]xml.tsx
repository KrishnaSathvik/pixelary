import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/data/posts";
import { examples } from "@/data/examples";

const SITE_URL = "https://pixelary.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];
        const urls: { loc: string; lastmod: string; priority: string }[] = [
          { loc: `${SITE_URL}/`, lastmod: today, priority: "1.0" },
          { loc: `${SITE_URL}/examples`, lastmod: today, priority: "0.9" },
          { loc: `${SITE_URL}/blog`, lastmod: today, priority: "0.9" },
          ...examples.map((e) => ({
            loc: `${SITE_URL}/examples/${e.id}`,
            lastmod: today,
            priority: "0.7",
          })),
          ...posts.map((p) => ({
            loc: `${SITE_URL}/blog/${p.slug}`,
            lastmod: p.published,
            priority: "0.8",
          })),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`
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
