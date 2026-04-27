import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Layers, ShieldCheck, Copy, ArrowRight, Github } from "lucide-react";
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-3 w-3 text-primary" />
            Built for OpenAI's GPT Image 2
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            Turn rough ideas into{" "}
            <span className="bg-amber-gradient bg-clip-text text-transparent">pro-grade</span>{" "}
            image prompts
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Built on the convergent techniques used by the top 1% of prompt engineers — distilled into one fast, opinionated tool.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/app">
              <Button size="lg" className="bg-amber-gradient text-primary-foreground hover:opacity-90 shadow-amber-glow gap-2 h-12 px-6 text-base">
                Try it free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#example" className="text-sm text-muted-foreground hover:text-foreground transition">
              See an example ↓
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">No signup required to try.</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Layers className="h-5 w-5" />}
            title="8 Categories"
            body="Posters, UI mockups, cinematic scenes, infographics, edits — each gets its own structural template."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Self-checking output"
            body="Anti-fluff filter strips forbidden adjectives like 'stunning' and 'ultra-detailed' before delivery."
          />
          <FeatureCard
            icon={<Copy className="h-5 w-5" />}
            title="Copy-ready format"
            body="One-click paste into ChatGPT, the OpenAI API, or fal.ai. No reformatting required."
          />
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="mx-auto max-w-4xl px-6 py-12 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Distilled from</p>
        <p className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
          200+ prompts analyzed from X, GitHub, and the OpenAI cookbook
        </p>
      </section>

      {/* EXAMPLE */}
      <section id="example" className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Before / After</h2>
          <p className="mt-3 text-muted-foreground">A four-word idea becomes a stacked, production-grade prompt.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border/60 bg-card p-6 shadow-soft">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Input</div>
            <p className="font-mono text-sm text-foreground">{EXAMPLE_INPUT}</p>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
              4 words • no detail
            </div>
          </div>
          <div className="rounded-xl border border-primary/30 bg-card p-6 shadow-amber-glow">
            <div className="text-xs uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Output
            </div>
            <p className="font-mono text-xs text-foreground/90 leading-relaxed">{EXAMPLE_OUTPUT}</p>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              CINEMATIC SCENE • 8 constraints stacked
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link to="/app">
            <Button size="lg" className="bg-amber-gradient text-primary-foreground hover:opacity-90 shadow-amber-glow gap-2">
              Generate your first prompt
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 mt-12">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-gradient">
              <Sparkles className="h-3 w-3 text-primary-foreground" />
            </span>
            Promptcraft © {new Date().getFullYear()}
          </div>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/app" className="hover:text-foreground transition">Generator</Link>
            <Link to="/login" className="hover:text-foreground transition">Log in</Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition flex items-center gap-1.5"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-6 shadow-soft hover:border-primary/40 transition-colors">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
