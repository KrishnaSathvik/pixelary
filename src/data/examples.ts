export interface Example {
  id: string;
  category: string;
  user_input: string;
  prompt: string;
  why_it_works: string;
  variants: string[];
}

export const examples: Example[] = [
  // ========== POSTERS ==========
  {
    id: "poster-event",
    category: "Posters",
    user_input: "poster for a tech conference",
    prompt: `Minimalist event poster, 2:3 portrait. Headline "FUTURE STACK" in bold condensed sans-serif, ALL CAPS, off-white, upper third. Subtitle "MARCH 14 — 16 • CONFERENCE 2026" in thin sans-serif below, same color, letter-spacing 0.2em. Visual: single thin line arcing across the lower third connecting two small filled circles. Background: deep charcoal (#1A1A1A). Generous negative space, Swiss design aesthetic. Verbatim text — no extra characters, no duplicate text, no text artifacts.`,
    why_it_works:
      "All text wrapped in quotes with placement, weight, and color locked. Hex code prevents palette drift. Swiss design reference handles composition without needing more instructions. Letter-spacing detail elevates typography.",
    variants: [
      "For energy: swap to bright accent color and add subtle grain",
      "For premium: replace sans-serif with a high-contrast Didone serif",
    ],
  },
  {
    id: "poster-magazine",
    category: "Posters",
    user_input: "magazine cover for a travel issue",
    prompt: `Editorial magazine cover, 8.5x11 portrait aspect. Masthead "WANDER" in bold sans-serif, white, top center, large. Cover headline "Mountains at Dawn" in elegant serif italic, white, lower left third. Sub-headline "12 hidden viewpoints • field guide inside" in thin sans-serif beneath, smaller. Cover photo fills the frame: silhouetted mountain range against a deep blue-to-orange gradient sky, single visible star, no people. Bottom-right corner: small "Issue 04 • Spring 2026" tag. Color grade: cool blue shadows, warm amber highlights. Verbatim text only.`,
    why_it_works:
      "Three text layers with distinct hierarchy and placement. Cover photo described with specific composition (silhouette, gradient direction). Color grade specified to lock mood. Issue tag adds editorial credibility.",
    variants: [
      "For dramatic: replace gradient sky with milky way overhead",
      "For minimalist: drop the photo, use a single line illustration of the mountains",
    ],
  },
  {
    id: "poster-wallpaper",
    category: "Posters",
    user_input: "phone wallpaper, calm vibe, abstract",
    prompt: `Abstract phone wallpaper, 9:19.5 vertical, designed for OLED display. Soft gradient mesh: deep teal (#0A4D5C) at top transitioning to warm peach (#F4A582) at bottom through a midpoint of muted lavender. Subtle organic blob shapes overlap with 30% opacity, soft Gaussian blur. Single thin white line curves diagonally across the lower third. Grain texture overlay at 5%. No text, no logos. Calm, contemplative mood.`,
    why_it_works:
      "Hex codes lock the palette. Aspect ratio matched to actual device. Grain percentage and opacity specified. 'No text, no logos' prevents the model from adding random elements.",
    variants: [
      "For dark mode: invert to deep navy → near-black gradient",
      "For warmer: shift to dawn palette (coral → cream → soft gold)",
    ],
  },

  // ========== INFOGRAPHICS ==========
  {
    id: "infographic-process",
    category: "Infographics",
    user_input: "infographic showing a 4-stage workflow",
    prompt: `Horizontal 4-stage pipeline diagram, 16:9 landscape, white background. Four rounded rectangles equally spaced left to right, each labeled in bold sans-serif: "PLAN", "BUILD", "TEST", "SHIP". Above each rectangle: a simple isometric line icon representing the stage. Beneath each: a 2-word descriptor in dark gray sans-serif ("Define Scope", "Write Code", "Run QA", "Deploy Live"). Thin arrows between stages with subtle drop shadow. Header at top: "Project Workflow" in bold sans-serif, dark navy. Color accents in a single muted blue tone (#3B82F6). No watermarks, no logos.`,
    why_it_works:
      "Layout topology stated upfront. Each stage has explicit label, icon, and descriptor. Connectors specified. Header is constrained to one line.",
    variants: [
      "For dark mode: invert to dark gray background, white labels",
      "For technical depth: add small metric indicators under each stage",
    ],
  },
  {
    id: "infographic-timeline",
    category: "Infographics",
    user_input: "timeline of the history of the internet",
    prompt: `Horizontal timeline infographic, 16:9, cream background (#F7F3EC). Single horizontal line spanning the full width, marked with 6 dot markers at: 1969, 1989, 1993, 2004, 2007, 2020. Above each marker: short title in bold serif (e.g., "ARPANET", "World Wide Web", "Mosaic Browser", "Facebook", "iPhone", "Remote Work Era"). Below each marker: 1-line description in thin sans-serif, max 8 words. Color-code dots by category: blue for infrastructure, green for platforms, amber for cultural shifts. Header top-left: "Internet Milestones" in oversized bold serif. Verbatim dates and titles only — no extra entries.`,
    why_it_works:
      "Specifies exact years (forces world knowledge). Dot color-coding adds an information layer without clutter. 'Verbatim ... no extra entries' prevents the model from inventing milestones.",
    variants: [
      "For vertical feed: swap to 9:16 portrait with timeline running top-to-bottom",
      "For depth: replace dots with small isometric icons of each milestone",
    ],
  },
  {
    id: "infographic-comparison",
    category: "Infographics",
    user_input: "comparison infographic of two approaches",
    prompt: `Two-column comparison infographic, 4:5 portrait, white background. Left column header "OPTION A" in bold sans-serif blue (#2B6CB0); right column header "OPTION B" in bold sans-serif amber (#D69E2E). Vertical divider line down the center. Five comparison rows, each with a label on the far left and matching short statements in each column: Speed / Cost / Flexibility / Best For / Trade-off. Statements max 6 words. Top of poster: title "Choosing the Right Approach" in oversized navy serif. Clean, editorial, no gradients. Verbatim text only.`,
    why_it_works:
      "Two-column structure stated explicitly. Color-coding by column. Row count and label list named upfront. Word limit per cell prevents bloat.",
    variants: [
      "For carousel: split into 5 separate 1:1 slides, one per row",
      "For technical audience: add small numeric benchmarks under each statement",
    ],
  },

  // ========== UI MOCKUPS ==========
  {
    id: "ui-dashboard",
    category: "UI Mockups",
    user_input: "dashboard mockup for a SaaS analytics product",
    prompt: `MacBook Pro 14" screen mockup at 16:10 aspect, dark theme. App is a generic analytics dashboard. Top nav bar (60px tall): logo placeholder left, tabs "Overview · Reports · Users · Settings" center, profile avatar right. Main content area: 4 KPI cards in a row showing "12.4K Active Users", "847 New Signups", "$2,341 MRR", "62% Engagement" — each card has a small line chart sparkline beneath the number in cyan. Below the cards: a wider line chart titled "Activity — Last 30 Days" with cyan line on subtle dark grid. Right sidebar (280px wide): list "Top 5 Channels" with icon, name, and value for each. Background: deep navy (#0F1729). Card backgrounds: slightly lighter navy (#1A2238). Accent color: cyan (#06B6D4). shadcn/ui aesthetic, clean spacing. Verbatim labels only.`,
    why_it_works:
      "Device frame and aspect named. Each component has explicit dimensions, content, and color. Real numbers feel authentic. Design system reference (shadcn) handles unspoken style decisions.",
    variants: [
      "For light mode: invert palette to white background with navy accents",
      "For mobile: reformat to iPhone 9:19.5 with bottom nav bar",
    ],
  },
  {
    id: "ui-mobile",
    category: "UI Mockups",
    user_input: "iphone screen for a meditation app",
    prompt: `iPhone 15 Pro screen mockup, 9:19.5 vertical aspect, light mode. App home screen for a generic meditation product. Top: status bar with time "9:41", signal, wifi, battery. Below status bar: greeting text "Good morning" in large light serif, dark gray. Beneath: subtitle "5 minutes can change your day" in thin sans-serif, lighter gray. Hero card mid-screen: rounded 24px corners, soft gradient (cream to peach), title "Today's Session" in serif, subtitle "Breath Awareness · 5 min", play button bottom-right. Below hero: horizontal scroll row of 3 smaller cards labeled "Sleep", "Focus", "Anxiety" each with a distinct soft gradient. Bottom nav bar with 4 icons: Home (active, filled), Library, Stats, Profile. Background: warm off-white (#FAF7F2). Verbatim text only, no duplicate labels.`,
    why_it_works:
      "Specific iPhone model = correct aspect ratio. Status bar detail adds realism. Each card has hierarchy (title, subtitle, action). Generic greeting (no name) keeps it broadly applicable.",
    variants: [
      "For dark mode: warm off-white → deep slate, soft gradients → muted dusk colors",
      "For Android: shift to Material 3 design with bolder color blocks",
    ],
  },

  // ========== SOCIAL POSTS ==========
  {
    id: "social-linkedin",
    category: "Social Posts",
    user_input: "linkedin carousel slide with a stat about productivity",
    prompt: `LinkedIn carousel slide, 4:5 portrait, off-white background (#F7F3EC). Massive headline filling the upper two-thirds: "Workers spend 21.8 hours per week in meetings." in bold condensed sans-serif, dark navy, left-aligned. Beneath, on a single line: "Most of them are unnecessary." in thin italic serif, same navy. Lower left corner: small text "Slide 1 of 7" in tiny gray sans-serif. Empty negative space on the right side, no decoration. Verbatim text — no extra characters.`,
    why_it_works:
      "Stat-as-hook follows viral LinkedIn format. Two-tier typography (bold + italic serif) creates rhythm. Negative space gives the eye room. Slide counter sets up sequence.",
    variants: [
      "For darker: swap to deep navy bg with cream text",
      "For visual: add a small bar chart in the lower right showing the stat visually",
    ],
  },
  {
    id: "social-x",
    category: "Social Posts",
    user_input: "x post image, quote card style",
    prompt: `X (Twitter) post image, 16:9 landscape, deep slate background (#1E293B). Centered quote in oversized white serif italic: "The hardest part of any project is starting. The second hardest is finishing." Quote takes up center 70% of the frame. Below the quote, smaller and right-aligned: em-dash followed by "Anonymous" in thin sans-serif amber. Subtle film grain overlay at 5%. Verbatim text only — no extra punctuation, no duplicate quote.`,
    why_it_works:
      "Quote card format optimized for X timeline. Serif italic adds gravitas. Grain prevents flat digital feel.",
    variants: [
      "For light: cream background with navy text",
      "For meme energy: replace serif with bold condensed sans + add a small icon",
    ],
  },
  {
    id: "social-story",
    category: "Social Posts",
    user_input: "instagram story promoting a new article",
    prompt: `Instagram story graphic, 9:16 vertical, full-bleed photographic background of a desert landscape at golden hour with long shadows raking across the sand, slight haze. Vertical text stack centered: top label "NEW ARTICLE" in tiny tracked-out caps amber, headline "5 Ways to Photograph the Desert at Night" in bold display serif white, three lines, max width 80% of frame. Beneath headline: small thin sans-serif white "link in bio". Bottom 15%: subtle gradient overlay from transparent to black for swipe-up area legibility. Verbatim text — no duplicate headlines, no text artifacts.`,
    why_it_works:
      "Background described as a real photograph not a fantasy. Text hierarchy (label → headline → CTA) optimized for vertical scan. Gradient overlay solves the readability-over-photo problem.",
    variants: [
      "For minimalist: replace photo with solid amber background, dark navy text",
      "For action: add a small animated-feeling arrow pointing down to the link",
    ],
  },

  // ========== CINEMATIC ==========
  {
    id: "cinematic-wedding",
    category: "Cinematic",
    user_input: "cinematic shot of a wedding",
    prompt: `Cinematic still, 2.39:1 anamorphic widescreen. A bride in a flowing ivory dress sits on a low garden bench in a courtyard at dusk, hands resting in her lap, looking off-frame to the right. Background: blurred warm string lights, scattered flowers, soft figures of guests in middle distance. Shot at 50mm, f/1.8, eye-level, medium close-up. Lighting: warm tungsten string lights from above-right creating soft rim on her shoulders, ambient blue-hour fill from the open sky. Color grade: teal-orange, slightly desaturated. Film stock language: Kodak Portra 400, fine grain, natural skin tones. Mood: contemplative, intimate, anticipatory. No text, no watermarks.`,
    why_it_works:
      "Specific clothing, pose, gaze direction. 50mm + f/1.8 locks the cinematic feel. Two named light sources prevent flat lighting. Film stock reference handles color science.",
    variants: [
      "For drama: switch to 35mm wider shot, harsher rim light, deeper shadows",
      "For documentary: drop to 35mm at f/4, eye-level, neutral grade, less stylized",
    ],
  },
  {
    id: "cinematic-character",
    category: "Cinematic",
    user_input: "character sheet for a sci-fi engineer",
    prompt: `Character reference sheet, 16:9 horizontal, neutral gray background (#E5E5E5). Three full-body views of the same character left to right: front view, three-quarter view, side view. Character: a 30-something engineer, medium build, wearing a dark utility jumpsuit with subtle technical patterns in copper thread, leather tool belt across body, wire-rim glasses, short dark hair, calm focused expression, holding a glowing diagnostic tool in one hand. Consistent flat overhead lighting across all three views, no harsh shadows. Style: semi-realistic concept art, clean line work, painterly shading, muted color palette. Small label beneath each view: "FRONT", "3/4", "SIDE" in thin sans-serif. No text artifacts, consistent proportions across all three.`,
    why_it_works:
      "Three explicit views named with consistent lighting requirement (critical for sheets). Character details are physical and observable. Style descriptor uses art-discipline language not artist names.",
    variants: [
      "For animation: add a 4th expression sheet panel showing 6 face poses",
      "For realism: shift to 'photoreal CGI render' with PBR materials",
    ],
  },
  {
    id: "cinematic-concept",
    category: "Cinematic",
    user_input: "concept art of a futuristic facility on another planet",
    prompt: `Concept art illustration, 16:9 cinematic, matte painting style. A sprawling low-profile research facility built into the side of a rocky crater, glowing blue lights visible through narrow window slits, solar arrays fanning out across the rust-red plain. Two human figures in lightweight white pressure suits walking toward an entrance airlock, scale showing the facility's massive size. Sky: dusty pink with two small moons visible. Lighting: low-angle alien sun from camera-left casting long shadows, cool blue facility glow against warm rust environment. Style: matte painting, cinematic concept art, mid-century futurist line work, painterly atmosphere. No text, no logos.`,
    why_it_works:
      "Specific structural details (window slits, solar arrays). Two figures provide scale. Two named light sources create color contrast. Generic 'alien planet' vocabulary keeps it neutral and timeless.",
    variants: [
      "For darker: shift to night scene with aurora and stronger facility glow",
      "For interior: cut inside to show research labs with bio-engineered cooling",
    ],
  },

  // ========== STORYBOARDS ==========
  {
    id: "storyboard-barista",
    category: "Storyboards",
    user_input: "storyboard of a barista making latte art",
    prompt: `CONSISTENT ELEMENTS (locked across all 4 panels):
- Character: woman in her late 20s, tied-back dark hair, wearing a charcoal apron over a cream long-sleeve shirt, small silver hoop earrings, focused expression
- Visual style: editorial documentary photography, natural light, warm color palette, slight film grain (Kodak Portra 400)
- Setting: small specialty coffee bar with brass fixtures and white subway tile, consistent across all panels
- Aspect ratio: each panel 4:5 portrait, arranged as 2x2 grid

PANEL-BY-PANEL:
- Panel 1: medium close-up at 50mm, side angle, barista pulling an espresso shot, golden crema visible streaming into white ceramic cup, steam rising, focused gaze on the cup
- Panel 2: overhead 90-degree top-down shot at 35mm, both hands holding stainless steel pitcher tilting milk into the espresso, swirl beginning to form on the surface
- Panel 3: close-up at 85mm, hands controlling the pitcher angle, intricate rosetta pattern emerging in white milk on dark coffee surface, shallow depth of field
- Panel 4: medium shot at 50mm, three-quarter angle, barista sliding the finished latte across the wooden counter toward camera, slight smile, soft window light from camera-left

LAYOUT:
- 2x2 grid, thin 4px black gutters between panels, white outer background
- Small panel numbers "01" "02" "03" "04" in mono font, 12px, lower-left corner of each panel

CONSISTENCY ANCHORS:
- Same character across all panels: identical apron, hair, earrings, expression intensity
- Same setting and lighting direction throughout
- Same color grade and grain across all panels
- Each panel readable in isolation but flows as a sequence

No text artifacts, no panel numbering errors.`,
    why_it_works:
      "Character locked once at the top with specific physical details (hoop earrings = anchor point). Each panel has its own shot type, angle, and emotional beat. Consistency anchors restated at the end because drift is the #1 storyboard failure.",
    variants: [
      "For comic-style: shift to 'ink and watercolor illustration with bold black outlines, halftone shading'",
      "For wider sequence: expand to 6 panels in a 3x2 grid",
    ],
  },
  {
    id: "storyboard-beforeafter",
    category: "Storyboards",
    user_input: "before and after of a messy desk getting cleaned up",
    prompt: `CONSISTENT ELEMENTS (locked across both panels):
- Setting: same wooden home office desk, same white wall behind, same window on right edge, same brass desk lamp
- Camera position: identical 35mm lens, same eye-level angle, same framing
- Visual style: editorial interior photography, soft natural daylight from camera-right, warm color grade
- Aspect ratio: each panel 1:1 square, arranged side by side as horizontal pair

PANEL-BY-PANEL:
- Panel 1 (BEFORE): desk cluttered with empty coffee mugs, scattered papers, tangled cables, open notebook with hasty handwriting, energy drink can, post-it notes stuck to monitor edge, headphones tangled
- Panel 2 (AFTER): same desk, completely cleared, only a closed laptop centered, single ceramic mug on a coaster to the right, small potted plant in upper-left corner, headphones neatly hung, monitor edge clean

LAYOUT:
- Side-by-side horizontal pair with 8px white gutter between
- Small mono labels above each: "BEFORE" left panel, "AFTER" right panel, all caps with +0.06em letter-spacing
- White outer background

CONSISTENCY ANCHORS:
- Identical camera angle, identical lighting direction, identical desk and wall
- Same time of day across both panels
- Only the desk contents change between panels — everything else locked

Verbatim labels — no extra text.`,
    why_it_works:
      "The trick with before/after is locking the camera and lighting so the only visible change is the subject. 'Identical camera angle' + 'same time of day' prevents the model from helpfully changing the framing.",
    variants: [
      "For dramatic: add a third panel 'DURING' showing mid-cleanup chaos",
      "For product: shift to 'before/after of a kitchen renovation' with the same camera-lock approach",
    ],
  },

  // ========== INTERIOR / FOOD / FASHION ==========
  {
    id: "domain-interior",
    category: "Interior/Food/Fashion",
    user_input: "interior of a calm reading nook",
    prompt: `Interior photograph, 4:5 portrait. A reading nook built into a bay window of an older home. Window seat with deep cushion in oatmeal linen, two small earth-tone pillows. Built-in bookshelves on both sides, stained dark wood, filled with hardcovers in muted spines. Single brass swing-arm reading lamp mounted left, switched on. A worn leather-bound book lies open face-down on the cushion. Soft north-facing morning light streaming through the window, sheer linen curtains diffusing it, dust motes visible. Hardwood floor with a small patterned rug. Warm but moody, slightly desaturated. Shot at 35mm, f/4, eye-level, slight wide angle to capture full nook. Architectural digest editorial style. No people, no text.`,
    why_it_works:
      "Generic 'older home' anchor without specifying era. Specific materials (oatmeal linen, dark wood, brass). Light source explicitly named with quality. Worn book detail makes it feel lived-in.",
    variants: [
      "For modern: shift to 'Japandi style, bleached oak, paper lantern, minimal books'",
      "For night: replace north light with single warm reading lamp + outside dark window",
    ],
  },
  {
    id: "domain-food",
    category: "Interior/Food/Fashion",
    user_input: "photo of a breakfast spread",
    prompt: `Overhead flat-lay food photograph, 1:1 square, 90-degree top-down angle. A breakfast spread on a wooden table. Center: a stack of fluffy pancakes drizzled with maple syrup, single pat of butter melting on top. Around it on small ceramic plates: a side of crispy bacon, scrambled eggs with fresh herbs, a small bowl of mixed berries (blueberries, raspberries, strawberries). Top-right: a glass of fresh orange juice. Bottom-left: a ceramic mug of black coffee with steam wisps. Scattered fresh mint leaves and a halved orange as styling. Lighting: large soft window light from upper-left, slight directional shadow on the right edges, warm color temperature. Shot at 50mm, f/5.6, sharp focus throughout. Editorial food photography, slightly rustic, no plating fuss. No text.`,
    why_it_works:
      "Universal breakfast items recognizable across cultures. Specific positioning of each element. Light direction named. Aperture wider for sharp full-spread focus.",
    variants: [
      "For moody: switch to dark wood table, single window light from one side, low-key",
      "For close-up: 100mm macro on the pancakes being cut, shallow focus",
    ],
  },
  {
    id: "domain-architecture",
    category: "Interior/Food/Fashion",
    user_input: "modern mountain cabin",
    prompt: `Architectural exterior photograph, 3:2 landscape. A modern mountain cabin in a pine forest, single-story with a low-pitched gable roof, charred-cedar siding (shou sugi ban), floor-to-ceiling windows facing the valley, large overhanging steel roof. Cabin sits on a granite outcrop surrounded by tall pines, a single hammered-metal chimney with a thin smoke trail. Late afternoon golden hour light raking across the cabin from camera-right, warm glow from interior windows visible. Far background: snow-capped peaks at blue hour transition. Foreground: native grasses and a worn flagstone path. Shot at 24mm, f/8, low-angle to emphasize the cantilever, tripod-stable. Architectural photography style, crisp, no people. Verbatim — no signage, no text.`,
    why_it_works:
      "Specific architectural style (shou sugi ban, low-pitch gable). Material specificity (charred cedar, hammered metal). Light timing creates two-tone scene (golden + blue hour). 24mm + f/8 = canonical architectural shot.",
    variants: [
      "For winter: cover ground in fresh snow, soften light to overcast",
      "For interior: cut inside showing the valley view through floor-to-ceiling glass",
    ],
  },
  {
    id: "domain-fashion",
    category: "Interior/Food/Fashion",
    user_input: "editorial fashion shot, fall menswear",
    prompt: `Editorial fashion photograph, 4:5 portrait. A model in his early 30s standing on a wet cobblestone street in a city at dusk. Wearing: heavy charcoal wool overcoat, oatmeal cashmere turtleneck, dark olive wide-leg wool trousers, oxblood leather derby shoes, leather messenger bag over shoulder. Hands in coat pockets, one foot slightly forward, looking off-frame toward camera-left, neutral expression. Background: blurred shop windows with warm interior light, a single yellow taxi out of focus, light rain misting. Lighting: ambient blue-hour sky overhead, warm shop lights as practical fill from the right. Shot at 85mm, f/2, three-quarter length, slight low angle. Color palette: charcoal, oatmeal, oxblood, deep teal shadows. Slight film grain, Kodak Portra 800 in low light. No text, no visible brand logos.`,
    why_it_works:
      "Each garment has material + color named explicitly. Pose specified down to foot position and gaze. Two-light setup (sky + practicals). 85mm at f/2 = canonical fashion telephoto. Generic 'city at dusk' stays neutral.",
    variants: [
      "For studio: same outfit, neutral seamless backdrop, single rim light",
      "For street style: shift to 35mm, candid mid-stride, busier background",
    ],
  },

  // ========== VISUAL SUMMARIES ==========
  {
    id: "summary-onepager",
    category: "Visual Summaries",
    user_input: "summarize this PDF as a visual one-pager",
    prompt: `Executive one-pager, 8.5x11 portrait, white background. Based on the attached document, generate a single-page visual summary with:
- Top: bold headline (max 8 words) capturing the document's core thesis, in dark navy serif
- Below headline: one-sentence subtitle (max 20 words) in thin sans-serif gray
- Mid-section: 3 numbered key insights in a vertical stack, each with a bold 4-word title + 2-line explanation, separated by thin horizontal rules
- Lower-left quadrant: a single supporting data visualization (bar chart or simple line chart) with 3-5 data points, labels included
- Lower-right quadrant: pull quote in oversized italic serif, attributed to the source document
- Footer: "Source: [document title] · Generated [date]" in tiny gray sans-serif

Palette: navy (#1E293B), amber accent (#F59E0B), warm gray (#6B7280), white. Editorial style, generous whitespace. Verbatim text from source where quoted — no fabricated stats.`,
    why_it_works:
      "Layout grid stated upfront. Each zone has a specific role and content type. 'No fabricated stats' prevents hallucination. Palette and font roles locked.",
    variants: [
      "For dashboard feel: switch to 16:9 with a 3-column layout",
      "For social: split into 5 separate 1:1 carousel slides",
    ],
  },
  {
    id: "summary-abstract",
    category: "Visual Summaries",
    user_input: "make a visual abstract from this spreadsheet of survey results",
    prompt: `Visual abstract, 1:1 square, cream background (#F7F3EC). Based on the attached spreadsheet, generate:
- Top: headline stating the single most surprising finding (max 12 words) in bold serif navy
- Center: the key data point rendered as a large visual — either an oversized percentage with a partial donut chart, or a 2-bar comparison with raw numbers labeled
- Below the visual: 2-line context explaining what the number means in thin sans-serif
- Bottom-left: small "n = [sample size] · [date range]" in gray
- Bottom-right: small attribution to the source

Palette: navy, amber accent, warm gray, cream. No fabricated data — only what is present in the source spreadsheet. Verbatim numbers.`,
    why_it_works:
      "Forces the model to identify the *most surprising* finding (uses reasoning). Visual treatment options scoped to two simple chart types. Sample size + date range adds credibility.",
    variants: [
      "For LinkedIn: shift to 4:5 portrait, larger stat",
      "For dark mode: invert to navy bg with cream text",
    ],
  },

  // ========== IMAGE EDITS ==========
  {
    id: "edit-background",
    category: "Image Edits",
    user_input: "change the background of my photo to a rainy city at night",
    prompt: `CHANGE: Replace the background with a rainy city street at night — neon signs reflecting on wet pavement, blurred passing cars in the distance, soft bokeh from illuminated signage, light rain visible against dark sky.

PRESERVE: Subject's face, pose, hair, clothing, body framing, skin tones, and exact silhouette — locked exactly as in source.

MATCH: Original lighting direction and intensity on the subject (rim from camera-right). Color temperature on subject stays neutral but reflections on clothing/skin should subtly pick up cool blue and magenta from the new neon environment. Match original film grain and noise level.`,
    why_it_works:
      "New background described as a real photograph. PRESERVE list is exhaustive — every locked element named. MATCH block prevents the 'pasted in' look by addressing color spill from the new environment.",
    variants: [
      "For drama: add 'wet hair, light rain droplets visible on shoulders'",
      "For cleaner: ask for 'no rain on subject, only on environment'",
    ],
  },
  {
    id: "edit-removal",
    category: "Image Edits",
    user_input: "remove the trash can and power line from my street photo",
    prompt: `CHANGE: Remove the green trash can in the lower-left foreground and the single power line crossing the upper third of the sky. Reconstruct the wall behind the trash can using the existing brick pattern; reconstruct the sky as clean continuous gradient matching the rest of the frame.

PRESERVE: Every person on the sidewalk, the storefront awning, the parked car on the right, the street signs, the sidewalk texture, all shadows on the ground, and the building architecture. Lock everything else exactly as in source.

MATCH: Original lighting direction (golden hour from camera-right), warm color temperature, film grain, and any chromatic aberration in the source image.`,
    why_it_works:
      "Specifies what to reconstruct in the gap, not just what to remove. Long PRESERVE list prevents collateral changes. MATCH block keeps grain consistent so removed areas don't look smoother than kept ones.",
    variants: [
      "For broader cleanup: add 'remove all visible advertising posters in the shop windows'",
      "For surgical: add 'leave shadows of removed objects untouched'",
    ],
  },
  {
    id: "edit-outfit",
    category: "Image Edits",
    user_input: "change my white tshirt to a charcoal henley",
    prompt: `CHANGE: Replace the white t-shirt with a charcoal gray henley shirt — three-button placket visible at the neckline, slightly textured cotton fabric, long sleeves rolled to mid-forearm.

PRESERVE: Face, hair, skin tone, exact pose, hand position, body framing, and the entire background. Lock every element except the shirt.

MATCH: Original lighting on the new shirt — same shadow falloff direction and intensity as the original t-shirt had. Match fabric drape to body posture realistically. Maintain original film grain and color grade.`,
    why_it_works:
      "New garment described with specific construction details (placket, button count, sleeve treatment). PRESERVE blocks face/skin which are the highest-risk drift areas. MATCH ensures realistic fabric behavior.",
    variants: [
      "For seasonal: replace charcoal henley with 'natural linen short-sleeve button-up'",
      "For formal: shift to 'navy blazer over white oxford shirt'",
    ],
  },
  {
    id: "edit-restyle",
    category: "Image Edits",
    user_input: "convert my photo to watercolor illustration",
    prompt: `CHANGE: Convert the entire image to a traditional watercolor illustration — visible brush strokes, soft color bleeds at edges, slight paper texture showing through, subdued saturation. Suggest forms with loose washes rather than hard photographic detail.

PRESERVE: Composition, subject placement, all proportions, gaze direction, and the overall scene layout. The watercolor version must clearly read as the same scene as the source.

MATCH: Original light direction (so the watercolor highlights and shadow washes follow the same logic). Maintain the original color palette as the dominant hue scheme, just translated into watercolor pigments.`,
    why_it_works:
      "Style change described with technique-specific language (brush strokes, color bleeds, paper texture). PRESERVE locks composition so the restyle doesn't drift. MATCH translates lighting logic from photo to medium.",
    variants: [
      "For pen + ink: replace watercolor with 'loose pen and ink wash drawing, crosshatch shading'",
      "For oil paint: shift to 'thick impasto oil painting, visible palette knife strokes'",
    ],
  },

  // ========== OPEN-ENDED CREATIVE ==========
  {
    id: "openended-abstract",
    category: "Open-Ended Creative",
    user_input: "abstract image about feeling overwhelmed but hopeful",
    prompt: `Mixed-media abstract composition, 4:5 portrait.

Medium: layered oil pastel on cold-press watercolor paper, visible paper grain showing through, occasional pencil under-drawing peeking through pastel layers, scattered fingerprints in the pigment.

Mood: tension between weight and lift — heavy compressed forms in the lower two-thirds gradually loosening into open breathing space in the upper third. Emotionally ambivalent, leaning toward quiet optimism.

Palette: dense slate gray and oxidized iron at the bottom, transitioning through bruised plum and ochre in the middle, opening into pale cerulean and bone white at the top. A single thread of warm cadmium orange traces vertically from bottom to top, never thick, never absent.

Composition: vertical movement bottom-to-top, no horizon line, no recognizable figures or objects. Forms suggest geological strata at the bottom, atmospheric weather in the middle, dawn sky at the top.

Art-movement anchor: late color field painting tradition, structural mysticism, atmospheric layering.

No representational subjects. No text. Soft edges throughout.`,
    why_it_works:
      "Drops photographic language entirely. The five-layer structure (medium, mood, palette, composition, anchor) gives concrete formal vocabulary without forcing a literal subject. The single orange thread is the one anchor element — abstract work needs at least one anchor or it dissolves into noise.",
    variants: [
      "For collage: shift medium to 'torn paper collage with visible adhesive ridges'",
      "For digital: shift to 'digital airbrush with hard-edge geometric overlays'",
    ],
  },
  {
    id: "openended-surreal",
    category: "Open-Ended Creative",
    user_input: "surreal image of memory and forgetting",
    prompt: `Surreal painted illustration, 1:1 square.

Medium: oil on linen, visible brushwork, slight craquelure (crack pattern) in older areas of the paint surface, areas of thinner glaze where the under-painting ghosts through.

Subject: a wooden writing desk in an open field at dusk. The desk drawers hang open and contents are dissolving outward into the air — letters becoming birds mid-flight, a pocket watch unwinding into a spiral of brass dust, photographs fading from the corners inward leaving only blank rectangles. A single candle on the desk burns with a steady flame despite no visible draft. The grass around the desk is meticulously detailed in the foreground but dissolves into pure pigment toward the horizon.

Mood: melancholic but not tragic — the dissolution feels gentle, even sacred. Reverence rather than loss.

Palette: dusk colors, muted ochre and umber for the desk and field, soft violet and dove gray for the sky, single warm flame as the only saturated point. Overall slightly desaturated as if seen through gauze.

Composition: desk centered in lower third, wide open sky above, horizon line at one-third from bottom. Items dissolving outward in a soft radial pattern.

Art-movement anchor: surrealism (early 20th century tradition), magical realism literary tradition, dreamlike clarity rather than fevered chaos.

No text. No watermarks.`,
    why_it_works:
      "Surreal scenes need one stable foundation (the desk in the field) plus impossible elements (dissolving contents, candle in no wind, fading photographs). Movement-as-anchor without naming any specific artist.",
    variants: [
      "For darker: shift mood to 'uncanny and slightly menacing, twilight rather than dusk'",
      "For brighter: shift to 'luminous and serene, magic-hour gold suffusing everything'",
    ],
  },
  {
    id: "openended-mood",
    category: "Open-Ended Creative",
    user_input: "image that feels like the smell of rain",
    prompt: `Atmospheric mood piece, 16:9 landscape.

Medium: traditional ink wash painting on absorbent rice paper, visible bleed and capillary action where ink meets damp paper, areas of delicate gradient and areas of deep saturated black, no hard outlines anywhere.

Subject: indistinct urban silhouette suggested through ink wash — soft vertical forms reading as either trees or buildings, ambiguous on purpose. A single horizontal band of negative space cuts across the middle, suggesting either water reflection or mist. No specific time of day, no specific location.

Mood: petrichor — the specific feeling of warm earth meeting first rain, charged stillness before a storm, ozone in the air, tension and release simultaneous.

Palette: cool grays and deep ink black against warm cream paper, single muted ochre wash in the lower-left corner as a counterpoint, otherwise monochrome. Wet-on-wet bleeds creating soft gradients.

Composition: horizontal emphasis, low contrast in the upper two-thirds, deeper blacks anchoring the lower edge, generous negative space.

Art-movement anchor: East Asian ink wash tradition (Chinese shan shui landscape painting, Japanese sumi-e), spare modernist compositional logic.

No figures, no text, no architectural detail. The image should evoke a sensory state, not depict a scene.`,
    why_it_works:
      "Mood pieces work best when you give the model a sensory target rather than a visual one. 'The smell of rain' translates to specific weather conditions (petrichor, ozone) and specific painterly techniques (wet-on-wet bleeds, ink wash).",
    variants: [
      "For warmth: shift to 'the feeling of summer afternoon heat — washes of cadmium and amber, ground rising in heat shimmer'",
      "For cold: shift to 'the silence after heavy snowfall — pale blue-white palette, crystalline negative space'",
    ],
  },
  {
    id: "openended-vaporwave",
    category: "Open-Ended Creative",
    user_input: "vaporwave aesthetic of an empty mall",
    prompt: `Vaporwave digital illustration, 4:5 portrait.

Medium: digital painting with intentional 1990s computer graphics artifacts — visible polygon edges on architectural elements, slight chromatic aberration on text edges, gradient dithering in the sky, retro CRT scanline overlay at 5% opacity throughout.

Subject: empty 1980s American shopping mall interior at indeterminate hour, escalator descending to lower level, two-story atrium, palm trees in large brass planters, marble floor, glass elevator on the right side, fluorescent storefronts visible but unreadable, no people anywhere.

Mood: liminal nostalgia, bittersweet calm, melancholy detachment, the feeling of being somewhere that no longer exists. Hauntological — present-tense longing for an idealized past that was never actually experienced.

Palette: signature vaporwave palette — pastel pink and cyan dominant, soft lavender shadows, warm peach highlights, single neon magenta accent on a distant storefront sign reading "PARADISE" in mall-style 80s typography, pale teal floor reflections.

Composition: one-point perspective deep into the mall, vanishing point centered, tiled marble floor receding, symmetrical or near-symmetrical framing, generous negative space in the upper third.

Art-movement anchor: vaporwave aesthetic (mid-2010s internet art movement), retrofuturism, mall liminal-space photography tradition.

Verbatim text: "PARADISE" — no other readable text, no logos, no brand names.`,
    why_it_works:
      "Vaporwave is a well-defined visual movement, so naming it directly works as the anchor. The 'intentional 1990s graphics artifacts' instruction gives the model specific technical degradations to render. The single readable text element follows the genre's typographic conventions.",
    variants: [
      "For darker: shift to 'dystopian liminal mall, fluorescent flicker, security shutters half-down'",
      "For brighter: shift to 'early-morning mall opening, sunlight through skylights, more saturated palette'",
    ],
  },
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
