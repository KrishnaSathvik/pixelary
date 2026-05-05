import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Wand2 } from "lucide-react";
import { Header } from "@/components/Header";
import { GALLERY_IMAGES } from "@/data/gallery-images";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Reference Gallery — Depikt" },
      {
        name: "description",
        content:
          "Browse reference images and use them to inspire AI-generated prompts.",
      },
      { property: "og:title", content: "Reference Gallery — Depikt" },
      {
        property: "og:description",
        content:
          "Browse reference images and use them to inspire AI-generated prompts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: absoluteUrl("/og-default.png") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/gallery") }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const navigate = useNavigate();

  const handleUseAsReference = (filename: string) => {
    navigate({
      to: "/app",
      search: { ref: `/gallery/${filename}` },
    });
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      <Header />
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16 lg:px-12">
        <h1 className="text-display-md sm:text-display-lg tracking-tight text-[color:var(--text-primary)]">
          Reference Gallery
        </h1>
        <p className="mt-3 text-body-md text-[color:var(--text-secondary)] max-w-2xl">
          Click any image to use it as a style reference when generating prompts.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((filename) => (
            <div
              key={filename}
              className="group relative aspect-square overflow-hidden rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)]"
            >
              <img
                src={`/gallery/${filename}`}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-colors duration-200">
                <button
                  type="button"
                  onClick={() => handleUseAsReference(filename)}
                  className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 hover:bg-gray-100"
                >
                  <Wand2 className="h-4 w-4" />
                  Use as reference
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
