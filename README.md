# Pixelary

Pixelary is a production-focused prompt tool for AI image generation. It turns rough creative ideas into structured, copy-ready prompts for GPT Image 2, fal.ai, and OpenAI image workflows.

The app includes a curated prompt library, a live prompt generator, a prompt critique flow, local history, blog content, and SEO metadata for launch.

## What It Does

- Browse a curated library of production-grade image prompts.
- Generate polished prompts from rough ideas.
- Request extra variations after a generation.
- Critique existing prompts with a score, weaknesses, and concrete improvements.
- Save recent generations and critiques in localStorage history.
- Open prompts directly in Imago with tracking parameters.
- Publish SEO-friendly blog posts and sitemap/robots metadata.

## Main Routes

- `/` — Library home page.
- `/app` — Prompt generator.
- `/critique` — Prompt critique tool.
- `/blog` — Blog index.
- `/blog/$slug` — Blog post template.
- `/api/public/generate-prompt` — Public SSE generation endpoint.
- `/sitemap.xml` — Sitemap.
- `/robots.txt` — Robots file.

Deprecated routes such as `/library`, `/examples`, `/login`, and `/signup` redirect to `/`.

## Tech Stack

- React 19
- TanStack Start / TanStack Router
- Vite
- Cloudflare Workers / Wrangler
- Tailwind CSS v4
- shadcn/Radix UI primitives
- Supabase client plumbing for curated library data and future auth
- Lovable AI Gateway for prompt generation

## Local Development

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the Cloudflare build:

```bash
npm run preview
```

## Environment Variables

The app expects these values in local development or deployment:

```bash
SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
LOVABLE_API_KEY=
SITE_URL=
VITE_SITE_URL=
```

`SITE_URL` or `VITE_SITE_URL` controls canonical URLs, sitemap URLs, and absolute OG image URLs. If unset, the app falls back to the Lovable production URL configured in `src/lib/site.ts`.

## Generator Flow

The generator and critique pages both call `/api/public/generate-prompt` with server-sent events.

The endpoint:

- validates category and mode against shared definitions from `src/lib/promptcraft.ts`
- applies a lightweight per-IP rate limit
- sends streaming `delta` events for generator output
- sends a final `done` event with the parsed result
- stamps responses with `PROMPT_VERSION`
- sanitizes Midjourney-style CLI flags from final prompts

Client-side SSE parsing lives in `src/lib/sse.ts` and is shared by Generate and Critique.

## Promptcraft

The main prompt-engineering logic lives in `src/lib/promptcraft.ts`.

It defines:

- supported categories
- supported modes
- `PROMPT_VERSION`
- the system prompt used by the generation endpoint

When changing prompt behavior, bump `PROMPT_VERSION` so generated outputs and local history can be traced back to the promptcraft revision that produced them.

## History

History is intentionally local-only for now.

Recent generations and critiques are saved to `localStorage` through `src/lib/history.ts`, capped at 20 entries. No generator results are written to the database without auth.

## SEO

The app includes:

- route-level titles and descriptions
- canonical links for `/`, `/app`, `/critique`, `/blog`, and blog posts
- local OG image asset at `public/og-default.png`
- sitemap and robots routes
- JSON-LD for blog pages

## Production Notes

The current API route has an in-memory IP rate limiter. It is useful as a best-effort guard, but real production abuse resistance should use Cloudflare WAF/Rate Limiting, Turnstile, or a Durable Object/KV-backed limiter so request counts survive cold starts and multiple regions.

The build uses manual chunk splitting in `vite.config.ts` to keep the main client chunk under Vite's warning threshold and make heavy vendor libraries cacheable.

## Known Maintenance Notes

- Full `npm run lint` may surface pre-existing Prettier issues in untouched files.
- Focused lint should be run on files changed in a PR until the repository-wide formatting debt is cleaned up.
- `package-lock.json` was generated with `npm install --legacy-peer-deps` because the current dependency set includes a Zod adapter peer range mismatch with `zod@4`.

## License

Private project.
