import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Promptcraft — Turn rough ideas into pro-grade image prompts" },
      {
        name: "description",
        content:
          "AI-powered prompt generator built on the convergent techniques used by the top 1% of prompt engineers. Works with ChatGPT, OpenAI API, fal.ai.",
      },
    ],
  }),
  component: LandingPage,
});

const EXAMPLE_INPUT = "a hiker in arches";
const EXAMPLE_OUTPUT = `Lone hiker in dust-coated trail boots and a sun-faded olive shirt, mid-stride along a narrow sandstone ridge, framed beneath the curved sweep of Delicate Arch in Arches National Park, Utah. Late-afternoon light, 4:30pm autumn, warm 4200K side-light raking across iron-rich red rock, deep indigo shadow pooling under the arch. Wide shot, low angle from the basin, 35mm full-frame, Sony A7IV, f/8, foreground rock texture in sharp focus. Soft contrast, fine wind-blown sand visible in the air, no people in the background, 3:2 aspect ratio, photoreal.`;

function LandingPage() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      <Header />

      {/* HERO — the only place the dot grid appears */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12 pt-24 sm:pt-32 pb-20 sm:pb-28 text-center">
          <h1 className="mt-6 text-display-xl mx-auto max-w-4xl text-[color:var(--text-primary)]">
            Turn rough ideas into pro-grade image prompts.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-[color:var(--text-secondary)]">
            Built on patterns from OpenAI's image generation guide and fal.ai's prompt
            documentation — distilled into one fast, opinionated tool for OpenAI's GPT Image 2.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/app">
              <Button size="lg" className="gap-2">
                Open generator
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/examples/{-$id}" params={{ id: undefined }}>
              <Button size="lg" variant="ghost">Browse examples</Button>
            </Link>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-[color:var(--border-subtle)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-24 sm:py-32">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 text-display-md">Three steps. Zero ceremony.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--border-subtle)] border border-[color:var(--border-subtle)]">
            <Step
              n="01"
              title="Paste a rough idea"
              body="Four words is enough. The vaguer your input, the more our prompt engine has to flex."
            />
            <Step
              n="02"
              title="We pick the structure"
              body="Auto-detected category — poster, infographic, cinematic scene — gets its own template."
            />
            <Step
              n="03"
              title="Copy and ship"
              body="Production-grade prompt. Drop into ChatGPT, the OpenAI API, or fal.ai unchanged."
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-[color:var(--border-subtle)] bg-[color:var(--bg-subtle)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-24 sm:py-32">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow">Why it works</p>
            <h2 className="mt-4 text-display-md">Convergent techniques, one tool.</h2>
            <p className="mt-5 text-body-lg text-[color:var(--text-secondary)]">
              We analyzed 200+ prompts from the top of X, GitHub, and the OpenAI cookbook. The
              patterns that actually shipped — distilled into ten category templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeatureCard
              tag="01 · CATEGORIES"
              title="Ten templates"
              body="Posters, UI mockups, cinematic scenes, multi-panel storyboards, abstract & surreal mood pieces, image edits — each gets its own structural template."
            />
            <FeatureCard
              tag="02 · GUARDRAILS"
              title="Self-checking output"
              body="Anti-fluff filter strips forbidden adjectives like “stunning” and “ultra-detailed” before delivery."
            />
            <FeatureCard
              tag="03 · PORTABLE"
              title="Copy-ready format"
              body="One-click paste into ChatGPT, the OpenAI API, or fal.ai. No reformatting required."
            />
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section id="example" className="border-t border-[color:var(--border-subtle)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-24 sm:py-32">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow">Before / after</p>
            <h2 className="mt-4 text-display-md">A four-word idea, stacked.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[color:var(--border-subtle)] border border-[color:var(--border-subtle)]">
            <div className="bg-[color:var(--bg-elevated)] p-8 sm:p-10">
              <p className="eyebrow">Input</p>
              <p className="mt-5 font-mono text-[15px] text-[color:var(--text-primary)]">
                {EXAMPLE_INPUT}
              </p>
              <p className="mt-8 text-mono-sm text-[color:var(--text-tertiary)]">
                4 words · no detail
              </p>
            </div>
            <div className="bg-[color:var(--code-bg)] p-8 sm:p-10">
              <p className="eyebrow">Output</p>
              <p className="mt-5 font-mono text-[13px] leading-[1.7] text-[color:var(--code-text)] whitespace-pre-wrap">
                {EXAMPLE_OUTPUT}
              </p>
              <p className="mt-8 text-mono-sm text-[color:var(--text-tertiary)]">
                Cinematic Scene · 8 constraints stacked
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/app">
              <Button size="lg" className="gap-2">
                Generate your first prompt
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[color:var(--border-subtle)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-[color:var(--accent)] text-[color:var(--accent-text)] font-mono text-[11px] font-semibold">
              P
            </span>
            <span className="text-mono-sm text-[color:var(--text-tertiary)]">
              Promptcraft © {new Date().getFullYear()}
            </span>
          </div>
          <nav className="flex items-center gap-2 text-mono-sm text-[color:var(--text-tertiary)]">
            <Link to="/app" className="hover:text-[color:var(--text-primary)] transition">Generator</Link>
            <span aria-hidden>·</span>
            <Link to="/examples/{-$id}" params={{ id: undefined }} className="hover:text-[color:var(--text-primary)] transition">Examples</Link>
            <span aria-hidden>·</span>
            <Link to="/blog" className="hover:text-[color:var(--text-primary)] transition">Blog</Link>
            <span aria-hidden>·</span>
            <Link to="/login" className="hover:text-[color:var(--text-primary)] transition">Log in</Link>
            <span aria-hidden>·</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--text-primary)] transition inline-flex items-center gap-1"
            >
              <Github className="h-3 w-3" /> GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="bg-[color:var(--bg)] p-8 sm:p-10">
      <p className="font-mono text-[13px] font-medium tracking-[0.06em] text-[color:var(--text-tertiary)]">
        {n}
      </p>
      <h3 className="mt-5 text-heading-sm text-[color:var(--text-primary)]">{title}</h3>
      <p className="mt-3 text-body-md text-[color:var(--text-secondary)]">{body}</p>
    </div>
  );
}

function FeatureCard({ tag, title, body }: { tag: string; title: string; body: string }) {
  return (
    <article className="bg-[color:var(--bg-elevated)] border border-[color:var(--border-subtle)] p-7 transition-[box-shadow,border-color] duration-200 ease-out hover:border-[color:var(--border-default)] hover:shadow-sm-card">
      <p className="font-mono text-[11px] font-medium tracking-[0.08em] text-[color:var(--text-tertiary)]">
        {tag}
      </p>
      <h3 className="mt-5 text-heading-sm text-[color:var(--text-primary)]">{title}</h3>
      <p className="mt-3 text-body-md text-[color:var(--text-secondary)]">{body}</p>
    </article>
  );
}
