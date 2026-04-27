export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  read_time: string;
  published: string;
  excerpt: string;
  seo_title: string;
  seo_description: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "gpt-image-2-prompt-examples",
    title: "GPT Image 2 Prompt Examples: 12 Templates That Actually Work",
    subtitle: "Real prompts across 8 categories — copy, paste, ship.",
    category: "Examples",
    author: "Promptcraft Team",
    read_time: "8 min",
    published: "2026-04-25",
    excerpt:
      "OpenAI's GPT Image 2 launched April 21, 2026 — and most online prompt examples are already outdated. Here are 12 production-grade prompts across the 8 categories that matter, with explanations of why each one works.",
    seo_title: "GPT Image 2 Prompt Examples: 12 Templates That Actually Work in 2026",
    seo_description:
      "Production-grade prompt examples for OpenAI's GPT Image 2 across 8 categories: posters, infographics, UI mockups, cinematic scenes, image edits, and more.",
    content: `
## Why most GPT Image 2 prompts you'll find online are wrong

GPT Image 2 launched on April 21, 2026 — barely days ago. Most prompt guides circulating online were written for GPT Image 1.5, DALL-E 3, or Midjourney. The techniques don't fully transfer.

GPT Image 2 has reasoning. It handles 7-8 stacked constraints. It renders text reliably across Latin and CJK scripts. None of that was true for the previous generation. The prompts that worked then look amateur now.

This article gives you 12 prompts that actually work — battle-tested across the 8 categories most creators care about. Each one shows the rough idea, the polished prompt, and why it works.

## The 6-layer formula

Every prompt below uses the same underlying structure:

[Subject + specifics] + [Action] + [Environment + cultural anchor] + [Composition] + [Lighting] + [Style/medium]

For photoreal, add camera body, lens, aperture. For text in images, wrap the copy in quotes and specify font/weight/color/placement. For edits, use the CHANGE / PRESERVE / MATCH structure.

Now the examples.

## 1. Event poster

**Rough idea:** "poster for a data engineering meetup in sf next month"

**Polished prompt:**

\`\`\`
Minimalist event poster, 2:3 portrait. Headline "DATA NIGHT" in bold condensed sans-serif, ALL CAPS, off-white, upper third. Subtitle "SF • DEC 12 • 2026" in thin sans-serif below, same color, letter-spacing 0.2em. Visual: single thin amber line arcing across the lower third. Background: deep navy (#0F1A2E). Generous negative space, Swiss design aesthetic. Verbatim text — no extra characters, no duplicate text, no text artifacts.
\`\`\`

**Why it works:** All text is in quotes with placement, weight, and color locked. The hex code prevents palette drift. "Swiss design aesthetic" handles composition without needing more rules.

## 2. Process flow infographic

**Rough idea:** "infographic showing how data flows in medallion architecture"

**Polished prompt:**

\`\`\`
Horizontal 4-stage pipeline diagram, 16:9 landscape, white background. Four rounded rectangles equally spaced left to right with metallic gradient fills: stage 1 "BRONZE", stage 2 "SILVER", stage 3 "GOLD", stage 4 "PLATINUM". Above each rectangle: an isometric line icon. Beneath each: a 2-word descriptor in dark navy sans-serif. Thin arrows between stages. Header at top: "Medallion Architecture" in bold sans-serif, navy.
\`\`\`

**Why it works:** Layout topology is stated upfront. Each stage has explicit fill, label, and icon. Connectors specified. The model handles the rest.

## 3. Web dashboard mockup

**Rough idea:** "dashboard mockup for a parks travel website"

**Polished prompt:**

\`\`\`
MacBook Pro 14" screen mockup at 16:10 aspect, dark theme. App is "TrailVerse" analytics dashboard. Top nav: logo "TrailVerse" left, tabs "Parks · Articles · Affiliates" center, profile avatar right. Main: 4 KPI cards showing "12.4K Visitors", "847 Signups", "$2,341 Revenue", "62% Engagement" with amber sparklines. Below: line chart "Traffic — Last 30 Days". Right sidebar: "Top 5 Articles" list. Background: deep navy (#0F1729). Accent: amber (#F59E0B). shadcn/ui aesthetic.
\`\`\`

**Why it works:** Specific device frame, specific component layout, specific data. The shadcn reference handles styling without you having to describe every spacing decision.

## 4. LinkedIn carousel slide

**Rough idea:** "slide about h1b job search realities"

**Polished prompt:**

\`\`\`
LinkedIn carousel slide, 4:5 portrait, off-white background (#F7F3EC). Massive headline filling the upper two-thirds: "73% of H-1B holders apply to over 200 jobs." in bold condensed sans-serif, dark navy, left-aligned. Beneath, on a single line: "before getting one offer." in thin italic serif, same navy. Lower-left corner: small attribution "Slide 1 of 7" in tiny gray sans-serif.
\`\`\`

**Why it works:** The stat-as-hook follows what actually performs on LinkedIn. Two-tier typography (bold + italic serif) creates rhythm. Negative space gives the eye room.

## 5. Cinematic still

**Rough idea:** "cinematic shot of an indian wedding"

**Polished prompt:**

\`\`\`
Cinematic still, 2.39:1 anamorphic. Bride in deep crimson silk lehenga with gold embroidery sits on a low wooden swing in a courtyard at dusk, hands resting in her lap, looking off-frame to the right. Background: blurred warm string lights, marigold garlands. Shot at 50mm, f/1.8, eye-level, medium close-up. Lighting: warm tungsten string lights from above-right creating soft rim, ambient blue-hour fill. Color grade: teal-orange, slightly desaturated. Kodak Portra 400 grain. Mood: contemplative, intimate.
\`\`\`

**Why it works:** Pose, gaze direction, and clothing are specific. 50mm + f/1.8 locks the cinematic feel. Two named light sources prevent flat lighting. The Kodak Portra reference handles color science in two words.

## 6. Interior photograph

**Rough idea:** "calm reading nook"

**Polished prompt:**

\`\`\`
Interior photograph, 4:5 portrait. Reading nook built into a bay window of a 1920s craftsman home. Window seat with deep cushion in oatmeal linen, two earth-tone pillows. Built-in bookshelves on both sides, stained dark walnut. Single brass swing-arm reading lamp mounted left, switched on. A worn leather-bound book lies open face-down on the cushion. Soft north-facing morning light streaming through the window, sheer linen curtains diffusing it, dust motes visible. Shot at 35mm, f/4. Architectural digest editorial style. No people.
\`\`\`

**Why it works:** "1920s craftsman" triggers world knowledge for the architecture. Specific materials throughout. Light source named with quality. The worn book detail makes it feel lived-in.

## 7. Food photography

**Rough idea:** "south indian breakfast"

**Polished prompt:**

\`\`\`
Overhead flat-lay food photograph, 1:1 square, 90-degree top-down angle. South indian breakfast on a polished banana leaf over a dark wooden table. Center: crisp golden dosa folded in half. Around it in small steel cups (dabara): white coconut chutney, brick-red tomato chutney, yellow sambar. Top-right: plate of two soft round idlis. Bottom-left: steel tumbler of filter coffee with steam wisps. Scattered curry leaves and halved lime as styling. Soft window light from upper-left. Shot at 50mm, f/5.6. Editorial food photography, slightly rustic.
\`\`\`

**Why it works:** Cuisine and meal context anchor everything. Authentic serving vessels (banana leaf, steel dabara) force regional accuracy. Light direction is named.

## 8. Background swap edit

**Rough idea:** "change my photo's background to rainy tokyo at night"

**Polished prompt:**

\`\`\`
CHANGE: Replace the background with a rainy Tokyo street at night — neon signs reflecting on wet pavement, blurred passing cars, bokeh from kanji-character signage, light rain visible against dark sky.

PRESERVE: Subject's face, pose, hair, clothing, body framing, skin tones, and exact silhouette — locked exactly as in source.

MATCH: Original lighting direction and intensity on subject (rim from camera-right). Color temperature on subject stays neutral but reflections on clothing/skin should subtly pick up cool blue and magenta from the new neon environment. Match original film grain.
\`\`\`

**Why it works:** The PRESERVE list is exhaustive — every locked element named. The MATCH block prevents the "pasted in" look by addressing color spill from the new environment.

## 4 more shorter examples

**Concept art:** \`Concept art illustration, 16:9 cinematic, matte painting style. Sprawling low-profile data center built into a Martian crater, glowing blue server lights through narrow window slits, solar arrays across rust-red plain. Two figures in white pressure suits walking toward an airlock. Sky: dusty pink with two small moons visible. Syd Mead industrial sensibility.\`

**Magazine cover:** \`Editorial magazine cover, 8.5x11 portrait. Masthead "TRAILVERSE" in bold sans-serif, white, top center. Headline "Arches at Dawn" in elegant serif italic, lower left third. Sub-headline "12 hidden viewpoints" in thin sans-serif beneath. Cover photo: silhouetted Delicate Arch against deep blue-to-orange gradient sky, single visible star.\`

**Comparison infographic:** \`Two-column comparison infographic, 4:5 portrait. Left header "BATCH" in blue (#2B6CB0); right header "STREAMING" in amber (#D69E2E). Vertical divider. Five rows: Latency / Throughput / Use Cases / Tools / Cost. Statements max 6 words each. Title "Batch vs Streaming" in oversized navy serif.\`

**Object removal edit:** \`CHANGE: Remove the green trash can in lower-left and the power line crossing the upper third. Reconstruct the wall behind the trash can using existing brick pattern; reconstruct sky as clean continuous gradient. PRESERVE: Every person, the storefront awning, parked car, street signs, sidewalk, all shadows. MATCH: Golden hour from camera-right, warm temperature, film grain.\`

## How to use these

Don't just copy them verbatim. Use them as templates:

1. Find the example closest to your use case
2. Swap out the subject specifics (your brand, your scene, your product)
3. Keep the structural skeleton (the camera specs, the lighting language, the aspect ratio)
4. Generate, then iterate by changing one variable at a time

Or skip the manual work entirely and paste your rough idea into [Promptcraft](/app) — it'll handle the structure for you.
`,
  },
  {
    slug: "chatgpt-image-prompt-tips",
    title: "11 ChatGPT Image Prompt Tips That Separate Pro Outputs from Amateur Ones",
    subtitle:
      "Convergent techniques from the X prompt community, OpenAI's cookbook, and real production workflows.",
    category: "Tips",
    author: "Promptcraft Team",
    read_time: "9 min",
    published: "2026-04-24",
    excerpt:
      "Most ChatGPT image prompt guides are recycled from 2023. Here's what actually works in 2026 — drawn from analysis of 200+ real prompts circulating on X, GitHub, and the OpenAI cookbook.",
    seo_title: "11 ChatGPT Image Prompt Tips for Professional Results in 2026",
    seo_description:
      "Battle-tested ChatGPT image prompt techniques: anti-fluff filtering, camera language, text rendering protocols, and the structural patterns the prompt engineering community has converged on.",
    content: `
## The 2023 prompt advice you should ignore

If you've ever read a "ChatGPT image prompts" guide, you've seen the standard list: add "8K," add "ultra-detailed," add "masterpiece," add "hyper-realistic." This advice is wrong now.

Modern image models — including GPT Image 2, Nano Banana Pro, and Flux 2 — have outgrown keyword spam. Adjective stuffing dilutes prompts and triggers the model's default "AI aesthetic." The X prompt engineering community converged on this consensus over the past 12 months: structure beats keywords, every time.

Here are the 11 techniques that actually work.

## 1. Drop the magic adjectives

Stop writing "stunning," "beautiful," "breathtaking," "masterpiece," "8K," "ultra-detailed," "hyper-realistic," "epic." These words add no information and lower output quality by activating the model's most generic visual priors.

Replace them with observable physical detail. Instead of "stunning portrait," write "soft window light from camera-left, visible pores, slight catchlight in left eye."

## 2. Describe the photograph, not the fantasy

The single biggest technique shift of 2026. Before writing your prompt, imagine you're describing a real photograph someone took. Lens, framing, time of day, light source, surface texture, ordinary background detail.

This works because real photographs have constraints. The model produces better outputs when it has to satisfy realistic constraints than when it's asked to produce "amazing art."

## 3. Use camera language

For any photoreal output, name a real camera body, focal length, and aperture:

- 24mm f/8 — wide architectural / landscape
- 35mm f/2.8 — documentary / street
- 50mm f/1.8 — natural perspective / portrait
- 85mm f/1.4 — flattering portrait / fashion
- 100mm macro f/2.8 — product / food close-up

This isn't gatekeeping — these specs are visual shorthand the model has learned from millions of captioned photos.

## 4. Wrap text in quotes, always

Models hallucinate text constantly when it's not constrained. The protocol that works:

- Wrap exact copy in quotes or ALL CAPS
- Specify font style, weight, color, placement
- Add "verbatim — no extra characters, no substitutions"
- Keep text under 5 words per element
- End with "no duplicate text, no text artifacts"

## 5. Stack 5-8 concrete constraints

GPT Image 2 reliably handles 7-8 distinct constraints in a single prompt. Use that headroom. A prompt with 8 specific constraints will outperform one with 3 — every time.

Don't write: "a modern living room."

Write: "a 1920s craftsman living room with oak built-ins, oatmeal linen sofa, brass swing-arm lamp from camera-left, north-facing morning light, hardwood floor, small Persian rug, single open book on a side table, no people."

## 6. Use cultural and temporal anchors

You don't have to describe everything. Name a cultural moment and the model fills in the details:

- "1990s Seattle grunge era"
- "Tokyo izakaya in Showa-era 1985"
- "SF Mission District during dot-com 1999"
- "rural Kerala monsoon season"

This triggers world knowledge — the model knows what these scenes look like, and you get specificity for free.

## 7. Specify aspect ratio explicitly

Always end your prompt with the aspect ratio that matches your use case:

- 16:9 — landscape, web hero, YouTube
- 9:16 — Instagram story, TikTok
- 4:5 — Instagram feed, LinkedIn
- 1:1 — profile, square social
- 2:3 — Pinterest, magazine
- 2.39:1 — anamorphic cinematic

Default ratios are unpredictable. Lock it.

## 8. For edits: CHANGE / PRESERVE / MATCH

Image edits drift unless you use a strict structure:

- CHANGE: the one thing you want different
- PRESERVE: the explicit list of everything that must stay
- MATCH: the lighting / color temperature / grain logic to maintain

Restate the PRESERVE list every iteration. Drift compounds across edits.

## 9. Avoid living artist names

Beyond ethics, naming living artists produces inconsistent outputs because models have been trained to suppress those associations. Use art disciplines, eras, or movements instead:

- "Bauhaus poster design"
- "Swiss editorial style"
- "Memphis Group"
- "mid-century modern illustration"
- "Syd Mead industrial sensibility" (deceased + discipline = safe)

## 10. Iterate one variable at a time

Don't change four things between generations. You'll never know which change fixed (or broke) the output.

When iterating, keep everything constant except one element — light direction, OR aspect ratio, OR color palette. This is how you actually learn what each lever does.

## 11. Use the self-check before submitting

Before you hit generate, ask yourself:

- Zero forbidden adjectives present?
- 5+ concrete constraints stacked?
- Camera/lens specified if photoreal?
- Aspect ratio specified?
- Text rendering follows the protocol if text is involved?
- No living artist names?

If any check fails, revise before generating. This habit alone will 2-3x your output quality.

## The faster path

If running through this checklist on every prompt sounds like work — that's because it is. [Promptcraft](/app) automates all 11 of these techniques. Paste a rough idea, get back a structured prompt that has already passed every check.

Or copy the techniques and apply them manually. Either way, the era of keyword-spam prompting is over.
`,
  },
  {
    slug: "ai-image-prompt-formula",
    title: "The 6-Layer AI Image Prompt Formula That Replaces Guesswork",
    subtitle: "A repeatable structure for any image type — posters, photoreal, UI mockups, edits.",
    category: "Framework",
    author: "Promptcraft Team",
    read_time: "7 min",
    published: "2026-04-23",
    excerpt:
      "Most AI image prompts fail because they're missing structure, not detail. Here's the 6-layer formula that works across every model — GPT Image 2, Nano Banana, Flux 2, Midjourney — and across every category.",
    seo_title: "The 6-Layer AI Image Prompt Formula (2026 Framework)",
    seo_description:
      "A repeatable structural formula for writing AI image prompts: subject, action, environment, composition, lighting, style. Works across GPT Image 2, Midjourney, Flux, and more.",
    content: `
## The problem with most prompt advice

Most prompt guides give you keywords or example outputs. Neither helps when you sit down to write your own prompt for your own scene.

What you need is a formula — a structural skeleton you can apply to any image type. After analyzing 200+ high-performing prompts from the X prompt engineering community, the OpenAI cookbook, and Reddit, the same 6 layers appear in every great prompt.

Here's the formula.

## The 6 layers

[Subject + specifics] + [Action / Pose] + [Environment + cultural anchor] + [Composition: shot, angle, aspect ratio] + [Lighting: quality + direction + temperature] + [Style / Medium]

That's it. Every layer is non-negotiable. Most failed prompts skip 3-4 of them.

## Layer 1: Subject + specifics

Not "a man." Not "a coffee shop." A man is too vague — the model picks the most generic interpretation. Add: age, build, clothing material, hair, expression, posture.

A coffee shop is too vague. Add: era, city, time of day, occupancy, signage.

The rule: if a stranger could draw 50 different pictures from your description, your subject layer is too thin.

## Layer 2: Action / pose

What is the subject doing? Standing isn't enough. Standing how? Hands where? Looking where?

This layer matters most for human subjects and scene compositions. For object photography it can collapse to "centered, slight tilt to the right."

Be specific about gaze direction — "looking off-frame to the camera-left" reads completely differently from "looking directly at the camera."

## Layer 3: Environment + cultural anchor

Where, when, what's around. This is where cultural anchors do massive heavy lifting:

- "a coffee shop in 1990s Seattle grunge era"
- "an SF Mission District garage in dot-com 1999"
- "a Tokyo izakaya in Showa-era 1985"

Each anchor gives the model a thousand visual associations for free. Use them.

## Layer 4: Composition

Shot type, angle, aspect ratio. The vocabulary you need:

**Shot type:** extreme close-up, close-up, medium close-up, medium shot, medium wide, wide, extreme wide, aerial, top-down flat-lay.

**Angle:** eye-level, low-angle, high-angle, dutch angle, bird's-eye, worm's-eye.

**Aspect ratio:** always state it. 16:9, 9:16, 4:5, 1:1, 3:2, 2.39:1.

## Layer 5: Lighting

The single highest-impact lever in any prompt. Three variables:

**Quality:** soft / harsh / diffused / dappled / specular.

**Direction:** front / side / back / rim / from camera-left / from above / from below.

**Temperature:** warm tungsten / cool daylight / golden hour / blue hour / overcast / mixed.

Always name at least one explicit light source. "Soft window light from camera-left" is gold. "Good lighting" is useless.

## Layer 6: Style / medium

This is where you tell the model whether you want photoreal, illustration, or something stylized. Use art disciplines, not artist names:

- Photoreal: name a film stock — "Kodak Portra 400, fine grain"
- Editorial: "magazine editorial style, slightly desaturated"
- Illustration: "watercolor, visible paper texture, soft color bleeds"
- Vector: "flat vector illustration, 2-color palette"
- Concept art: "matte painting, painterly atmosphere, mid-century futurist line work"

## The formula in action

Watch the same idea evolve through the layers:

**Layer 0 (typical bad prompt):** "a hiker in arches"

**With Subject:** "Solo hiker in faded red windbreaker"

**Add Action:** "...walking away from camera on a sandstone trail"

**Add Environment:** "...in Arches National Park, late afternoon golden hour"

**Add Composition:** "Low-angle wide shot at 24mm, 3:2 aspect"

**Add Lighting:** "Long shadows raking across the rock, warm rim light from camera-right, dust catching in the light"

**Add Style:** "Shot on full-frame mirrorless, documentary travel photography, Kodak Portra 400 grain"

**Final stacked prompt:**

\`\`\`
Solo hiker in faded red windbreaker walking away from camera on a sandstone trail in Arches National Park, late afternoon golden hour with long shadows raking across the rock, Delicate Arch visible in middle distance. Low-angle wide shot at 24mm, f/8, 3:2 aspect. Warm rim light from camera-right, dust catching in the light. Shot on full-frame mirrorless body, documentary travel photography, Kodak Portra 400 grain.
\`\`\`

This is the difference between a generic AI render and a usable editorial image.

## Where the formula breaks (and what to use instead)

Three categories need a different structure:

**Image edits:** Use CHANGE / PRESERVE / MATCH instead. The 6-layer formula doesn't apply because you're not generating from scratch.

**Typography-heavy posters:** Lead with text (in quotes, with placement), then add the visual layer using layers 3-6. Subject and action collapse.

**Infographics and diagrams:** Lead with structure (layout topology, components, connectors). Lighting and composition become "clean white background, generous spacing."

For everything else — photoreal, cinematic, character art, interiors, food, fashion, architecture — the 6 layers work.

## Use the formula or use Promptcraft

You can apply this manually on every prompt. Or you can paste your rough idea into [Promptcraft](/app) and get a structured 6-layer prompt back in seconds. Same formula, automated.

The formula is the point. The tool is just the shortcut.
`,
  },
  {
    slug: "ai-image-prompts-with-text",
    title: "How to Write AI Image Prompts That Actually Render Text Correctly",
    subtitle: "The protocol for posters, social graphics, and any image with words on it.",
    category: "How-to",
    author: "Promptcraft Team",
    read_time: "6 min",
    published: "2026-04-22",
    excerpt:
      "Text rendering is the biggest practical problem in AI image generation. Even with GPT Image 2's 95%+ accuracy, garbled text is still the most common failure. Here's the protocol that actually works.",
    seo_title: "How to Write AI Image Prompts with Text That Renders Correctly",
    seo_description:
      "The text-rendering protocol for AI image prompts: quotes, placement specifications, font weights, the 'verbatim' trick, and the common mistakes that cause garbled output.",
    content: `
## Why AI keeps butchering your text

You write a prompt for a poster. You include the headline. The output comes back with "DTAA NIHGT" or "DAATA NUGHT" or some hybrid hallucination. Sound familiar?

This was the single biggest weakness of every image model from 2022 through early 2025. GPT Image 2 fixed most of it — text accuracy is now above 95% across Latin and CJK scripts. But "most of it" still leaves you with garbled output if you don't follow the protocol.

Here's the protocol the prompt engineering community converged on.

## Rule 1: Wrap exact copy in quotes

Never write: \`a poster that says data night\`

Always write: \`a poster with the headline "DATA NIGHT" displayed prominently\`

Quotation marks tell the model: this is the literal string. Not a description. Not a theme. Render exactly these characters.

## Rule 2: ALL CAPS for short headlines

Models render uppercase text more reliably than mixed case. For headlines under 5 words, use ALL CAPS:

- \`headline "DATA NIGHT" in bold condensed sans-serif\`
- \`title "MARS COLONY" in display serif\`

For longer text or sentence-case copy, mixed case still works — just keep the rest of the protocol tight.

## Rule 3: Specify font style, weight, color, placement

The model has to make four decisions about every text element. Don't leave them to chance:

- **Style:** sans-serif, serif, display serif, condensed sans, monospace, handwritten, italic
- **Weight:** thin, regular, bold, black
- **Color:** name a hex code (#0F1729) or descriptive color (off-white, deep navy)
- **Placement:** upper third, centered, lower-left corner, vertical along right edge

Example: \`Subtitle "SF • DEC 12 • 2026" in thin sans-serif, off-white, lower third, letter-spacing 0.2em\`

## Rule 4: Keep text under 5 words per element

GPT Image 2 reliably renders 1-5 words per text element. Push beyond that and accuracy drops fast. For longer text:

- Split it into multiple elements (headline + subtitle + caption)
- Or accept that the model will likely produce passable but imperfect output
- Or composite the text in Figma/Canva afterward

The honest truth: for any text over 8 words, you're better off generating the visual and adding the text manually.

## Rule 5: Use the "verbatim" trigger

For accuracy-critical text — brand names, dates, prices, taglines — append this exact phrase:

\`Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts.\`

This phrase has become the de-facto incantation in the X prompt community. It's not magic — it's a constraint stack that the reasoning layer of GPT Image 2 actually attends to.

## Rule 6: Spell out tricky brand names

If your brand name has unusual letter combinations or made-up words, spell it letter by letter on first reference:

\`Logo "TRAILVERSE" (T-R-A-I-L-V-E-R-S-E) in bold sans-serif, white\`

This is overkill for common words but lifesaving for brand names.

## Rule 7: Don't ask for paragraphs

Image models are not document layout engines. Asking for "a paragraph of body text below the headline" produces gibberish that looks like text but isn't.

If you need real paragraph text in a layout, use the right tool — Figma, Canva, or InDesign — and use the AI for the visual elements only.

## What still doesn't work reliably

Even with the protocol, three things remain inconsistent:

1. **Brand logos** — the model can't reproduce existing logos (Nike swoosh, Apple, etc.) accurately. Composite them in Figma.
2. **Long-form text** — paragraphs, lists, or any text over ~10 words. Generate the visual, add text after.
3. **Multi-language mixed text** — mixing scripts (Latin + Hindi + Chinese in one image) often produces errors in one or more scripts.

## Putting it together

Here's a complete text-heavy prompt that follows the full protocol:

\`\`\`
Minimalist event poster, 2:3 portrait. Headline "DATA NIGHT" in bold condensed sans-serif, ALL CAPS, off-white (#F7F3EC), upper third. Subtitle "SF • DEC 12 • 2026" in thin sans-serif, off-white, below headline, letter-spacing 0.2em. Bottom-right corner: small attribution "@latentengineer_" in tiny gray sans-serif. Background: deep navy (#0F1A2E). Generous negative space. Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts.
\`\`\`

Three text elements, each with its own font weight, color, and placement. ALL CAPS for the short headline. Hex codes for color lock. The verbatim trigger at the end.

## The shortcut

Manually applying this protocol on every prompt is tedious. [Promptcraft](/app) bakes the entire text-rendering protocol into every poster, social graphic, and typography-heavy prompt it generates. Paste your rough idea, get back a prompt with quotes, placements, weights, and the verbatim trigger already in place.
`,
  },
  {
    slug: "gpt-image-2-vs-nano-banana-vs-midjourney",
    title: "GPT Image 2 vs Nano Banana Pro vs Midjourney: Which to Use When",
    subtitle:
      "An honest comparison of the three top image models in 2026 — strengths, weaknesses, and the right tool for each job.",
    category: "Comparison",
    author: "Promptcraft Team",
    read_time: "8 min",
    published: "2026-04-21",
    excerpt:
      "Three models dominate AI image generation in 2026: GPT Image 2, Google's Nano Banana Pro, and Midjourney. Each is best at something different. Here's how to pick the right one for your use case.",
    seo_title: "GPT Image 2 vs Nano Banana Pro vs Midjourney: 2026 Comparison",
    seo_description:
      "Honest comparison of GPT Image 2, Google Nano Banana Pro, and Midjourney across photorealism, text rendering, prompt adherence, and editing. Pick the right model for your project.",
    content: `
## Why this comparison matters

If you're generating AI images professionally in 2026, you're probably using more than one model. The three that matter:

- **GPT Image 2** — OpenAI, launched April 21, 2026
- **Nano Banana Pro** — Google, dominant in prompt adherence
- **Midjourney** — still the cinematic gold standard

Each is best at something different. Picking the wrong one wastes hours. Here's the honest breakdown.

## Quick verdict

| Use case | Best model | Why |
|---|---|---|
| Photorealistic portraits | Midjourney | Best aesthetic polish, cinematic style |
| Text-heavy graphics (posters, social) | GPT Image 2 | Highest text rendering accuracy |
| Image editing (background swap, object removal) | Nano Banana Pro | Best prompt adherence on edits |
| UI mockups & dashboards | GPT Image 2 | Best at structured layouts and reasoning |
| Cinematic / concept art | Midjourney | Unmatched mood and atmosphere |
| Product photography | GPT Image 2 or Midjourney | Tie — both clean, depends on style |
| Multi-language text | GPT Image 2 | Only model with reliable CJK rendering |
| Quick iteration / experimentation | Nano Banana Pro | Fastest, most consistent |

## GPT Image 2 — the reasoning model

Launched April 21, 2026. Native 2K resolution with optional 4K upscaling.

**Strengths:**
- Text rendering above 95% accuracy across Latin and CJK scripts
- Reasoning layer interprets complex layered prompts
- Two modes (Instant and Thinking) for different complexity levels
- Best handling of structured layouts (UI, infographics, posters)
- World knowledge to December 2025 — references real events, places, eras

**Weaknesses:**
- Style control less granular than Midjourney (can't specify film stock as precisely)
- Stricter content policy than Stable Diffusion or Flux
- Default aesthetic has a slight bias that requires effort to override
- Brand logos still inconsistent

**Best for:** Anything with text, UI mockups, infographics, structured posters, magazine-style layouts.

## Nano Banana Pro — the prompt adherence champion

Google's image model, integrated with Gemini.

**Strengths:**
- Highest prompt adherence of any model — generates exactly what you ask
- Best image editing with reference image support
- Excellent character consistency across multiple generations
- Knows what it's creating — can reverse-engineer images for new angles

**Weaknesses:**
- Output resolution lower than GPT Image 2 and Midjourney
- Struggles with stylized cinematic outputs
- More documentary realism, less editorial polish
- Default aesthetic can feel sterile

**Best for:** Image edits, product photography, character continuity across a series, projects where you need exactly what you described.

## Midjourney — the cinematic standard

Still the industry leader for aesthetic polish.

**Strengths:**
- Most consistently impressive default aesthetic
- Best cinematic mood, atmosphere, color grading
- Unmatched for moody portraits and concept art
- Strong style consistency within a project (with --sref and --cref)

**Weaknesses:**
- Text rendering still unreliable
- Less prompt adherence than GPT Image 2 or Nano Banana Pro
- Discord-based workflow is friction (Web app exists but lags)
- No reasoning — keyword weighting still required
- Can't compete on UI mockups or structured layouts

**Best for:** Cinematic stills, concept art, mood-driven imagery, fashion editorial, hero images for blog posts.

## How to pick — the decision tree

**Does your image have text?** → GPT Image 2.

**Are you editing an existing image?** → Nano Banana Pro.

**Do you need cinematic atmosphere or moody portraits?** → Midjourney.

**Is it a structured layout (UI, infographic, dashboard)?** → GPT Image 2.

**Is it a clean product shot?** → GPT Image 2 or Midjourney (try both).

**Do you need exact prompt adherence with no creative interpretation?** → Nano Banana Pro.

**Multi-language text or CJK scripts?** → GPT Image 2 (only viable option).

## The prompt translation problem

One critical thing most comparisons miss: the same prompt does not work across models.

- GPT Image 2 likes natural sentences with reasoning hooks ("Soft north-facing light because it's a 1920s craftsman home")
- Midjourney likes keyword-weighted descriptions with parameters ("--ar 16:9 --style raw")
- Nano Banana Pro likes literal precise descriptions with strong noun-verb structure

A prompt optimized for Midjourney will underperform on GPT Image 2 — and vice versa. If you switch models, rewrite your prompt for the new model's strengths.

[Promptcraft](/app) generates prompts optimized specifically for GPT Image 2's reasoning style. If you're using GPT Image 2 as your primary model — which most teams in 2026 are — that's the leverage point.

## What this means for your workflow

The honest answer: most professional teams use 2-3 of these models, not just one. A common stack:

1. **GPT Image 2** for structured outputs (posters, social graphics, UI, infographics)
2. **Midjourney** for hero imagery and cinematic stills
3. **Nano Banana Pro** for edits and iterations

This is more work than picking one. But the output quality difference is real, and the cost of using the wrong tool for a job is hours of bad iterations.

Pick the model that matches the job. Write prompts that match the model. Ship better images.
`,
  },
];

export const CATEGORY_COLORS: Record<string, string> = {
  Examples: "from-amber-500/30 to-orange-500/10",
  Tips: "from-blue-500/30 to-indigo-500/10",
  Framework: "from-emerald-500/30 to-teal-500/10",
  "How-to": "from-rose-500/30 to-pink-500/10",
  Comparison: "from-violet-500/30 to-purple-500/10",
};

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, category: string, limit = 2): Post[] {
  return posts.filter((p) => p.slug !== slug && p.category === category).slice(0, limit);
}
