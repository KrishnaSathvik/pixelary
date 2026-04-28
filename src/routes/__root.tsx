import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth-context";
import { ThemeProvider } from "@/lib/theme-context";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error · 404</p>
        <h1 className="mt-4 text-display-md">Page not found</h1>
        <p className="mt-3 text-body-md text-[color:var(--text-secondary)]">
          The page you’re looking for doesn’t exist.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-[color:var(--accent-text)] transition-colors hover:bg-[color:var(--accent-hover)]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "color-scheme", content: "light" },
      { title: "Pixelary — Pro-grade image prompts from rough ideas" },
      {
        name: "description",
        content:
          "Convert rough creative ideas into production-grade prompts for OpenAI’s GPT Image 2. Built on the techniques used by the top 1% of prompt engineers.",
      },
      { property: "og:title", content: "Pixelary — Pro-grade image prompts" },
      {
        property: "og:description",
        content: "Turn rough ideas into pro-grade image prompts. Copy-ready for ChatGPT, OpenAI API, fal.ai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://promptcraft.lovable.app/og-default.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://promptcraft.lovable.app/og-default.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Outlet />
        <Toaster
          theme="light"
          position="top-right"
          toastOptions={{
            style: {
              background: "var(--bg-elevated)",
              color: "var(--text-primary)",
              border: "1px solid var(--border-default)",
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-md)",
            },
          }}
        />
      </AuthProvider>
    </ThemeProvider>
  );
}
