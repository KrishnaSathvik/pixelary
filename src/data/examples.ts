export interface Example {
  id: string;
  category: string;
  user_input: string;
  prompt: string;
  why_it_works: string;
  variants: string[];
}

export const examples: Example[] = [
  {
    id: "poster-event",
    category: "Posters",
    user_input: "poster for a data engineering meetup in sf next month",
    prompt: `Minimalist event poster, 2:3 portrait. Headline "DATA NIGHT" in bold condensed sans-serif, ALL CAPS, off-white, upper third. Subtitle "SF • DEC 12 • 2026" in thin sans-serif below, same color, letter-spacing 0.2em. Visual: single thin amber line arcing across the lower third like a data flow connecting two small filled circles. Background: deep navy (#0F1A2E). Generous negative space, Swiss design aesthetic. Verbatim text — no extra characters, no duplicate text, no text artifacts.`,
    why_it_works: "All text wrapped in quotes with placement, weight, and color locked. Hex code prevents palette drift. Swiss design reference handles composition without needing more instructions.",
    variants: [
      "For energy: swap amber to neon magenta + add subtle grain",
      "For premium: replace sans-serif with a high-contrast Didone serif"
    ]
  },
  {
    id: "poster-magazine",
    category: "Posters",
    user_input: "magazine cover for a national parks issue",
    prompt: `Editorial magazine cover, 8.5x11 portrait aspect. Masthead "TRAILVERSE" in bold sans-serif, white, top center, large. Cover headline "Arches at Dawn" in elegant serif italic, white, lower left third. Sub-headline "12 hidden viewpoints • field guide inside" in thin sans-serif beneath, smaller. Cover photo fills the frame: silhouetted Delicate Arch against a deep blue-to-orange gradient sky, single visible star, no people. Bottom-right corner: small "Issue 04 • Spring 2026" tag. Color grade: cool blue shadows, warm amber highlights. Verbatim text only.`,
    why_it_works: "Three text layers with distinct hierarchy. Cover photo described with specific composition. Color grade specified to lock mood.",
    variants: [
      "For dramatic: replace gradient sky with milky way overhead",
      "For minimalist: drop the photo, use a single line illustration of the arch"
    ]
  },
  {
    id: "poster-wallpaper",
    category: "Posters",
    user_input: "phone wallpaper, calm vibe, abstract",
    prompt: `Abstract phone wallpaper, 9:19.5 vertical, designed for iPhone OLED. Soft gradient mesh: deep teal (#0A4D5C) at top transitioning to warm peach (#F4A582) at bottom through a midpoint of muted lavender. Subtle organic blob shapes overlap with 30% opacity, soft Gaussian blur. Single thin white line curves diagonally across the lower third. Grain texture overlay at 5%. No text, no logos. Calm, contemplative mood.`,
    why_it_works: "Hex codes lock the palette. Aspect ratio matched to actual device. Grain percentage specified. 'No text, no logos' prevents random additions.",
    variants: [
      "For dark mode: invert to deep navy → near-black gradient",
      "For warmer: shift to dawn palette (coral → cream → soft gold)"
    ]
  },
  {
    id: "infographic-process",
    category: "Infographics",
    user_input: "infographic showing how data flows in medallion architecture",
    prompt: `Horizontal 4-stage pipeline diagram, 16:9 landscape, white background. Four rounded rectangles equally spaced left to right, each with a metallic gradient fill: stage 1 "BRONZE" in bronze-tone gradient, stage 2 "SILVER" in silver gradient, stage 3 "GOLD" in gold gradient, stage 4 "PLATINUM" in platinum gradient. Above each rectangle: an isometric line icon (raw file → cleaned table → aggregated chart → ML model). Beneath each: a 2-word descriptor in dark navy sans-serif ("Raw Ingest", "Cleaned & Validated", "Business Aggregates", "ML-Ready Features"). Thin arrows between stages with subtle drop shadow. Header at top: "Medallion Architecture" in bold sans-serif, navy. No watermarks, no logos.`,
    why_it_works: "Layout topology stated upfront. Each stage has explicit fill, label, icon, and descriptor. Connectors specified.",
    variants: [
      "For dark mode: invert to dark gray background, white labels",
      "For technical depth: add small data volume indicators (TB/PB) under each stage"
    ]
  },
  {
    id: "infographic-timeline",
    category: "Infographics",
    user_input: "timeline of the history of databases",
    prompt: `Horizontal timeline infographic, 16:9, cream background (#F7F3EC). Single horizontal line spanning the full width, marked with 6 dot markers at: 1970, 1979, 1995, 2009, 2014, 2020. Above each marker: short title in bold serif (e.g., "Relational Model", "Oracle v2", "MySQL", "MongoDB", "Apache Kafka", "DuckDB"). Below each marker: 1-line description in thin sans-serif, max 8 words. Color-code dots by category: blue for relational, green for NoSQL, amber for streaming. Header top-left: "Database Milestones" in oversized bold serif. Verbatim dates and titles only — no extra entries.`,
    why_it_works: "Specifies exact years (forces world knowledge). Dot color-coding adds info layer. 'Verbatim ... no extra entries' prevents invention.",
    variants: [
      "For vertical feed: swap to 9:16 portrait with timeline running top-to-bottom",
      "For depth: replace dots with small isometric icons of each technology"
    ]
  },
  {
    id: "infographic-comparison",
    category: "Infographics",
    user_input: "comparison infographic batch vs streaming",
    prompt: `Two-column comparison infographic, 4:5 portrait, white background. Left column header "BATCH" in bold sans-serif blue (#2B6CB0); right column header "STREAMING" in bold sans-serif amber (#D69E2E). Vertical divider line down the center. Five comparison rows, each with a label on the far left and matching short statements in each column: Latency / Throughput / Use Cases / Tools / Cost Profile. Statements max 6 words. Top of poster: title "Batch vs Streaming" in oversized navy serif. Bottom: small attribution tag in thin gray. Clean, editorial, no gradients. Verbatim text only.`,
    why_it_works: "Two-column structure stated explicitly. Color-coding by column. Word limit per cell prevents bloat.",
    variants: [
      "For LinkedIn carousel: split into 5 separate 1:1 slides, one per row",
      "For technical audience: add small numeric benchmarks under each statement"
    ]
  },
  {
    id: "ui-dashboard",
    category: "UI Mockups",
    user_input: "dashboard mockup for a parks travel website",
    prompt: `MacBook Pro 14" screen mockup at 16:10 aspect, dark theme. App is "TrailVerse" analytics dashboard. Top nav bar (60px tall): logo "TrailVerse" left in white sans-serif, tabs "Parks · Articles · Affiliates · Newsletter" center, profile avatar right. Main content area: 4 KPI cards in a row showing "12.4K Visitors", "847 Signups", "$2,341 Revenue", "62% Engagement" — each card has a small line chart sparkline beneath the number in amber. Below the cards: a wider line chart titled "Traffic — Last 30 Days" with amber line on subtle dark grid. Right sidebar (280px wide): list "Top 5 Articles" with thumbnail, title, and view count for each. Background: deep navy (#0F1729). Card backgrounds: slightly lighter navy (#1A2238). Accent color: amber (#F59E0B). shadcn/ui aesthetic, clean spacing. Verbatim labels only.`,
    why_it_works: "Device frame and aspect named. Each component has explicit dimensions and color. Real numbers feel authentic. Design system reference handles unspoken style.",
    variants: [
      "For light mode: invert palette to white background with navy accents",
      "For mobile: reformat to iPhone 9:19.5 with bottom nav bar"
    ]
  },
  {
    id: "ui-mobile",
    category: "UI Mockups",
    user_input: "iphone screen for a meditation app",
    prompt: `iPhone 15 Pro screen mockup, 9:19.5 vertical aspect, light mode. App "Stillness" home screen. Top: status bar with time "9:41", signal, wifi, battery. Below status bar: greeting text "Good morning" in large light serif, dark gray. Beneath: subtitle "5 minutes can change your day" in thin sans-serif, lighter gray. Hero card mid-screen: rounded 24px corners, soft gradient (cream to peach), title "Today's Session" in serif, subtitle "Breath Awareness · 5 min", play button bottom-right. Below hero: horizontal scroll row of 3 smaller cards labeled "Sleep", "Focus", "Anxiety" each with a distinct soft gradient. Bottom nav bar with 4 icons: Home (active, filled), Library, Stats, Profile. Background: warm off-white (#FAF7F2). Verbatim text only, no duplicate labels.`,
    why_it_works: "Specific iPhone model = correct aspect ratio. Status bar detail adds realism. Each card has hierarchy.",
    variants: [
      "For dark mode: warm off-white → deep slate, soft gradients → muted dusk colors",
      "For Android: shift to Material 3 design with bolder color blocks"
    ]
  },
  {
    id: "social-linkedin",
    category: "Social Posts",
    user_input: "linkedin carousel slide about h1b job search realities",
    prompt: `LinkedIn carousel slide, 4:5 portrait, off-white background (#F7F3EC). Massive headline filling the upper two-thirds: "73% of H-1B holders apply to over 200 jobs." in bold condensed sans-serif, dark navy, left-aligned. Beneath, on a single line: "before getting one offer." in thin italic serif, same navy. Lower left corner: small attribution "Slide 1 of 7" in tiny gray sans-serif. Empty negative space on the right side, no decoration. Verbatim text — no extra characters.`,
    why_it_works: "Stat-as-hook follows viral LinkedIn format. Two-tier typography creates rhythm. Negative space gives the eye room.",
    variants: [
      "For darker: swap to deep navy bg with cream text",
      "For visual: add a small bar chart in the lower right showing the stat visually"
    ]
  },
  {
    id: "social-x",
    category: "Social Posts",
    user_input: "x post image, quote card style, about ai engineering",
    prompt: `X (Twitter) post image, 16:9 landscape, deep slate background (#1E293B). Centered quote in oversized white serif italic: "The hard part of AI engineering isn't the model. It's the data pipeline beneath it." Quote takes up center 70% of the frame. Below the quote, smaller and right-aligned: em-dash followed by attribution in thin sans-serif amber. Subtle film grain overlay at 5%. Verbatim text only — no extra punctuation, no duplicate quote.`,
    why_it_works: "Quote card format optimized for X timeline. Serif italic adds gravitas. Grain prevents flat digital feel.",
    variants: [
      "For light: cream background with navy text",
      "For meme energy: replace serif with bold condensed sans + add a small icon"
    ]
  },
  {
    id: "social-story",
    category: "Social Posts",
    user_input: "instagram story promoting my new article on death valley",
    prompt: `Instagram story graphic, 9:16 vertical, full-bleed photographic background of Death Valley dunes at golden hour with long shadows raking across the sand, slight haze. Vertical text stack centered: top label "NEW ARTICLE" in tiny tracked-out caps amber, headline "5 Ways to Photograph Death Valley at Night" in bold display serif white, three lines, max width 80% of frame. Beneath headline: small thin sans-serif white "link in bio". Bottom 15%: subtle gradient overlay from transparent to black for swipe-up area legibility. Verbatim text — no duplicate headlines, no text artifacts.`,
    why_it_works: "Background described as a real photograph. Text hierarchy optimized for vertical scan. Gradient overlay solves the readability-over-photo problem.",
    variants: [
      "For minimalist: replace photo with solid amber background, dark navy text",
      "For action: add a small animated-feeling arrow pointing down to the link"
    ]
  },
  {
    id: "cinematic-wedding",
    category: "Cinematic",
    user_input: "cinematic shot of an indian wedding",
    prompt: `Cinematic still, 2.39:1 anamorphic widescreen. A bride in a deep crimson silk lehenga with gold embroidery sits on a low wooden swing in a courtyard at dusk, hands resting in her lap, looking off-frame to the right. Background: blurred warm string lights, marigold garlands, soft figures of family members in middle distance. Shot at 50mm, f/1.8, eye-level, medium close-up. Lighting: warm tungsten string lights from above-right creating soft rim on her shoulders, ambient blue-hour fill from the open sky. Color grade: teal-orange, slightly desaturated. Film stock language: Kodak Portra 400, fine grain, natural skin tones. Mood: contemplative, intimate, anticipatory. No text, no watermarks.`,
    why_it_works: "Specific clothing, pose, gaze direction. 50mm + f/1.8 locks cinematic feel. Two named light sources prevent flat lighting.",
    variants: [
      "For drama: switch to 35mm wider shot, harsher rim light, deeper shadows",
      "For documentary: drop to 35mm at f/4, eye-level, neutral grade, less stylized"
    ]
  },
  {
    id: "cinematic-character",
    category: "Cinematic",
    user_input: "character sheet for a fantasy data wizard",
    prompt: `Character reference sheet, 16:9 horizontal, neutral gray background (#E5E5E5). Three full-body views of the same character left to right: front view, three-quarter view, side view. Character: a 30-something south asian man, medium build, wearing a dark indigo robe with subtle circuit-pattern embroidery in copper thread, leather satchel slung across body, wire-rim glasses, short black hair, calm focused expression. Holding a glowing data crystal in his right hand. Consistent flat overhead lighting across all three views, no harsh shadows. Style: semi-realistic concept art, clean line work, painterly shading, muted color palette. Small label beneath each view: "FRONT", "3/4", "SIDE" in thin sans-serif. No text artifacts, consistent proportions across all three.`,
    why_it_works: "Three explicit views named with consistent lighting requirement (critical for sheets). Character details are physical and observable.",
    variants: [
      "For animation: add a 4th expression sheet panel showing 6 face poses",
      "For realism: shift to 'photoreal CGI render' with PBR materials"
    ]
  },
  {
    id: "cinematic-mars",
    category: "Cinematic",
    user_input: "concept art of a futuristic data center on mars",
    prompt: `Concept art illustration, 16:9 cinematic, matte painting style. A sprawling low-profile data center built into the side of a Martian crater, glowing blue server lights visible through narrow window slits, solar arrays fanning out across the rust-red plain. Two human figures in lightweight white pressure suits walking toward an entrance airlock, scale showing the facility's massive size. Sky: dusty pink with two small moons (Phobos, Deimos) visible. Lighting: low-angle Martian sun from camera-left casting long shadows, cool blue facility glow against warm rust environment. Style: matte painting, cinematic concept art, Syd Mead industrial sensibility (mid-century futurist line work), painterly atmosphere. No text, no logos.`,
    why_it_works: "Specific structural details. Two figures provide scale. Two named light sources create color contrast.",
    variants: [
      "For darker: shift to Martian night with aurora and stronger facility glow",
      "For interior: cut inside to show server rooms with bio-engineered cooling"
    ]
  },
  {
    id: "domain-interior",
    category: "Interior/Food/Fashion",
    user_input: "interior of a calm reading nook",
    prompt: `Interior photograph, 4:5 portrait. A reading nook built into a bay window of a 1920s craftsman home. Window seat with deep cushion in oatmeal linen, two small earth-tone pillows (rust, olive). Built-in bookshelves on both sides, stained dark walnut, filled with hardcovers in muted spines. Single brass swing-arm reading lamp mounted left, switched on. A worn leather-bound book lies open face-down on the cushion. Soft north-facing morning light streaming through the window, sheer linen curtains diffusing it, dust motes visible. Hardwood floor with a small Persian rug. Warm but moody, slightly desaturated. Shot at 35mm, f/4, eye-level, slight wide angle to capture full nook. Architectural digest editorial style. No people, no text.`,
    why_it_works: "Era + style anchor (1920s craftsman) triggers world knowledge. Specific materials. Light source explicitly named.",
    variants: [
      "For modern: shift to 'Japandi style, bleached oak, paper lantern, minimal books'",
      "For night: replace north light with single warm reading lamp"
    ]
  },
  {
    id: "domain-food",
    category: "Interior/Food/Fashion",
    user_input: "photo of a south indian breakfast spread",
    prompt: `Overhead flat-lay food photograph, 1:1 square, 90-degree top-down angle. A south indian breakfast on a polished banana leaf laid over a dark wooden table. Center: a crisp golden dosa folded in half. Around it in small steel cups (dabara): white coconut chutney, brick-red tomato chutney, yellow sambar with visible vegetables. Top-right: small plate of two soft round idlis. Bottom-left: small steel tumbler of filter coffee with steam wisps. Scattered curry leaves and a halved lime as styling. Lighting: large soft window light from upper-left, slight directional shadow on the right edges, warm color temperature. Shot at 50mm, f/5.6, sharp focus throughout. Editorial food photography, slightly rustic, no plating fuss. No text.`,
    why_it_works: "Cuisine + meal context anchor everything. Specific dishes with positioning. Authentic serving vessels (banana leaf, steel dabara).",
    variants: [
      "For moody: switch to dark wood table, single window light from one side",
      "For close-up: 100mm macro on the dosa being torn, shallow focus"
    ]
  },
  {
    id: "summary-onepager",
    category: "Visual Summaries",
    user_input: "summarize this PDF as a visual one-pager",
    prompt: `Executive one-pager, 8.5x11 portrait, white background. Based on the attached document, generate a single-page visual summary with: Top: bold headline (max 8 words) capturing the document's core thesis, in dark navy serif. Below headline: one-sentence subtitle (max 20 words) in thin sans-serif gray. Mid-section: 3 numbered key insights in a vertical stack, each with a bold 4-word title plus 2-line explanation, separated by thin horizontal rules. Lower-left quadrant: a single supporting data visualization (bar chart or simple line chart) with 3-5 data points, labels included. Lower-right quadrant: pull quote in oversized italic serif, attributed to the source document. Footer: source attribution in tiny gray sans-serif. Palette: navy (#1E293B), amber accent (#F59E0B), warm gray (#6B7280), white. Editorial style, generous whitespace. Verbatim text from source where quoted — no fabricated stats.`,
    why_it_works: "Layout grid stated upfront. Each zone has a specific role. 'No fabricated stats' prevents hallucination.",
    variants: [
      "For dashboard feel: switch to 16:9 with a 3-column layout",
      "For social: split into 5 separate 1:1 carousel slides"
    ]
  },
  {
    id: "edit-background",
    category: "Image Edits",
    user_input: "change the background of my photo to rainy tokyo at night",
    prompt: `CHANGE: Replace the background with a rainy Tokyo street at night — neon signs reflecting on wet pavement, blurred passing cars in the distance, soft bokeh from kanji-character signage, light rain visible against dark sky.\n\nPRESERVE: Subject's face, pose, hair, clothing, body framing, skin tones, and exact silhouette — locked exactly as in source.\n\nMATCH: Original lighting direction and intensity on the subject (rim from camera-right). Color temperature on subject stays neutral but reflections on clothing/skin should subtly pick up cool blue and magenta from the new neon environment. Match original film grain and noise level.`,
    why_it_works: "New background described as a real photograph. PRESERVE list is exhaustive. MATCH block prevents the 'pasted in' look.",
    variants: [
      "For drama: add 'wet hair, light rain droplets visible on shoulders'",
      "For cleaner: ask for 'no rain on subject, only on environment'"
    ]
  },
  {
    id: "storyboard-barista",
    category: "Storyboards",
    user_input: "storyboard for a 4-panel sequence of a barista making latte art",
    prompt: `CONSISTENT ELEMENTS (locked across all 4 panels):
- Character: woman in her late 20s, tied-back dark hair, charcoal apron over cream shirt, small silver hoop earrings, focused expression
- Visual style: editorial documentary photography, natural light, warm palette, slight film grain (Kodak Portra 400)
- Setting: small specialty coffee bar with brass fixtures and white subway tile
- Aspect ratio: each panel 4:5 portrait, arranged as 2x2 grid

PANEL-BY-PANEL:
- Panel 1: medium close-up at 50mm, side angle, barista pulling espresso shot, golden crema streaming into white cup, steam rising
- Panel 2: overhead 90-degree shot at 35mm, both hands holding pitcher tilting milk into espresso, swirl forming
- Panel 3: close-up at 85mm, hands controlling pitcher angle, intricate rosetta pattern emerging, shallow depth of field
- Panel 4: medium shot at 50mm, three-quarter angle, barista sliding finished latte toward camera, slight smile, window light from camera-left

LAYOUT: 2x2 grid, thin 4px black gutters, panel numbers "01"-"04" in Geist Mono lower-left

CONSISTENCY ANCHORS:
- Same character: identical apron, hair, earrings across all panels
- Same setting and lighting direction throughout
- Same color grade and grain
- Each panel readable in isolation, flows as a sequence`,
    why_it_works: "Character locked at the top with specific physical anchors (hoop earrings). Each panel has its own shot type and emotional beat. Consistency phrases restated at the end because drift is the #1 storyboard failure.",
    variants: [
      "For comic-style: shift to 'ink and watercolor illustration with bold black outlines, halftone shading'",
      "For wider sequence: expand to 6 panels in a 3x2 grid"
    ]
  },
  {
    id: "openended-abstract-mood",
    category: "Open-Ended Creative",
    user_input: "abstract image about feeling overwhelmed but hopeful",
    prompt: `Mixed-media abstract composition, 4:5 portrait.

Medium: layered oil pastel on cold-press watercolor paper, visible paper grain, occasional pencil under-drawing peeking through, scattered fingerprints in the pigment.

Mood: tension between weight and lift — heavy compressed forms in the lower two-thirds gradually loosening into open breathing space in the upper third. Emotionally ambivalent, leaning toward quiet optimism.

Palette: dense slate gray and oxidized iron at the bottom, transitioning through bruised plum and ochre in the middle, opening into pale cerulean and bone white at the top. A single thread of warm cadmium orange traces vertically from bottom to top.

Composition: vertical movement bottom-to-top, no horizon line, no recognizable figures or objects. Forms suggest geological strata at the bottom, atmospheric weather in the middle, dawn sky at the top.

Art-movement anchor: late color field painting tradition, Hilma af Klint structural mysticism, Rothko-influenced atmospheric layering.

No representational subjects. No text. Soft edges throughout.`,
    why_it_works: "Drops photographic language entirely. Five-layer structure (medium, mood, palette, composition, anchor) gives concrete formal vocabulary without forcing a literal subject. The single orange thread is the one anchor element — abstract work needs at least one or it dissolves into noise.",
    variants: [
      "For collage: shift medium to 'torn paper collage with visible adhesive ridges, photocopied texture fragments'",
      "For digital: shift to 'digital airbrush with hard-edge geometric overlays, screen print registration errors'"
    ]
  }
];

export const EXAMPLE_CATEGORIES = [
  "All",
  "Posters",
  "Infographics",
  "UI Mockups",
  "Social Posts",
  "Cinematic",
  "Storyboards",
  "Interior/Food/Fashion",
  "Visual Summaries",
  "Image Edits",
  "Open-Ended Creative",
] as const;

// Distinct gradients per category for visual placeholders
export const CATEGORY_GRADIENTS: Record<string, string> = {
  Posters: "linear-gradient(135deg, #F59E0B 0%, #B45309 100%)",
  Infographics: "linear-gradient(135deg, #2B6CB0 0%, #1A365D 100%)",
  "UI Mockups": "linear-gradient(135deg, #1A2238 0%, #0F1729 100%)",
  "Social Posts": "linear-gradient(135deg, #EC4899 0%, #7C3AED 100%)",
  Cinematic: "linear-gradient(135deg, #0A4D5C 0%, #F4A582 100%)",
  Storyboards: "linear-gradient(135deg, #0F172A 0%, #64748B 100%)",
  "Interior/Food/Fashion": "linear-gradient(135deg, #92400E 0%, #FCD34D 100%)",
  "Visual Summaries": "linear-gradient(135deg, #1E293B 0%, #475569 100%)",
  "Image Edits": "linear-gradient(135deg, #4338CA 0%, #06B6D4 100%)",
  "Open-Ended Creative": "linear-gradient(135deg, #8B5CF6 0%, #F472B6 50%, #FBBF24 100%)",
};
