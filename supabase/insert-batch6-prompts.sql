-- Batch 6: 48 new curated prompts
-- Skipped: #4 (negative prompt), #28 (duplicate of #26)
-- Run in Supabase SQL Editor (anon key cannot INSERT due to RLS)

-- ============================================================================
-- GENERATION PROMPTS (44) — can generate thumbnails
-- ============================================================================

-- 1. Intimate POV Portrait
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-intimate-pov-portrait',
  'Intimate POV Portrait',
  'Cinematic',
  $input$Top-down first-person perspective portrait with ornate red outfit$input$,
  $p$Hyper-realistic photography, 8K ultra-HD, highest image quality, top-down first-person perspective, dimly lit bedroom, low-light atmosphere, a young Chinese woman, black messy and disheveled hair, strands of hair falling across her face, teary eyes, flushed cheeks, skin glistening with moisture and beads of sweat, mouth slightly parted, her gaze helplessly and vulnerably lifted toward the lens, her face gently cradled by a man's hand (viewer's perspective), wearing a red velvet off-the-shoulder garment, pink ruffled lining, golden shoulder ornaments, ornate golden hoop earrings, blurred background of bed and wooden floor, soft shadows, shallow depth of field, intimate and melancholic atmosphere, realistic skin textures, cinematic feel.$p$,
  $w$Specifies exact camera angle (top-down POV), lighting conditions, micro-expression details, and material textures to produce a precise cinematic portrait.$w$,
  'curated',
  ARRAY['cinematic', 'portrait', 'pov', 'hyperrealistic', '8k', 'low-light', 'photography']
) ON CONFLICT (id) DO NOTHING;

-- 2. High-Angle Emotional Portrait
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-high-angle-emotional-portrait',
  'High-Angle Emotional Portrait',
  'Cinematic',
  $input$Overhead cinematic portrait with dramatic lighting and emotional expression$input$,
  $p$Top-tier image quality, hyper-realistic portrait photography, 8K, cinematic low-light illumination, dramatic soft light and shadows, high-angle overhead shot, first-person POV perspective, young Chinese woman, loose long black hair, a few strands clinging to her face, teary eyes, gaze glistening with moisture, flushed cheeks, skin glowing with a sheen of thin sweat, lips trembling slightly, looking up at the lens with an expression of grievance and dependence, one hand from the viewer's perspective gently cradling her cheek, she is wearing an ornate red velvet off-shoulder gown, pink lace trim, golden epaulet decorations, large sculptural gold hoop earrings, dimly lit and intimate bedroom scene, blurred background of bed and wooden floor, an atmosphere of intimacy and repression, realistic skin texture, clear tear tracks, soft focus bokeh, subtle film grain.$p$,
  $w$Builds on POV technique with film grain, sweat detail, and tear tracks specificity that pushes the model toward photorealistic editorial output.$w$,
  'curated',
  ARRAY['cinematic', 'portrait', 'overhead', 'editorial', 'hyperrealistic', 'film-grain', 'dramatic']
) ON CONFLICT (id) DO NOTHING;

-- 3. Blueprint Landmark Infographic
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-blueprint-landmark-infographic',
  'Blueprint Landmark Infographic',
  'Infographics',
  $input$Infographic combining a landmark photo with blueprint-style technical annotations$input$,
  $p$Create an infographic image of [LANDMARK], combining a real photograph of the landmark with blueprint-style technical annotations and diagrams overlaid on the image. Include the title "LANDMARK" in a hand-drawn box in the corner. Add white chalk-style sketches showing key structural data, important measurements, material quantities, internal diagrams, load-flow arrows, cross-sections, floor plans, and notable architectural or engineering features. Style: blueprint aesthetic with white line drawings on the photograph, technical/architectural annotation style, educational infographic feel, with the real environment visible behind the annotations. 1:1 dimension.$p$,
  $w$Overlaying chalk-style technical drawings on a photograph creates a hybrid visualization. Named annotation types (load-flow arrows, cross-sections, floor plans) guide the model toward accurate engineering-style content.$w$,
  'curated',
  ARRAY['infographic', 'architecture', 'blueprint', 'landmark', 'educational', 'engineering', 'template']
) ON CONFLICT (id) DO NOTHING;

-- 5. Luxury Beauty Campaign Grid
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-luxury-beauty-campaign-grid',
  'Luxury Beauty Campaign Grid',
  'Posters',
  $input$Premium 3x2 beauty campaign grid with editorial product photography$input$,
  $p$ULTRA-REALISTIC DIOR BEAUTY CAMPAIGN, CINEMATIC 6-IMAGE GRID SYSTEM (3x2), HIGH-END LUXURY COSMETIC EDITORIAL, GLOBAL BEAUTY CAMPAIGN AESTHETIC, INSPIRED BY OFFICIAL DIOR BEAUTY VISUAL LANGUAGE, FENTY BEAUTY GRID BALANCE, PARISIAN LUXURY MINIMALISM, AND PREMIUM BEAUTY COMMERCIAL PHOTOGRAPHY
THIS IS NOT RANDOM AI CONTENT.

THIS MUST FEEL LIKE: a real luxury beauty campaign launch art-directed by a global beauty creative director for Dior Beauty.
EVERY FRAME MUST FEEL: editorial, intentional, balanced, premium, human, luxurious, emotionally paced.

CAMPAIGN TITLE:
"GLAZED DESIRE"
STRICT CONSISTENCY MODE (CRITICAL)
ALL 6 FRAMES MUST FEATURE: the exact same Dior Addict Lip Glow Oil, same transparent glossy pink shade, same chrome silver cap, same Dior logo placement, same gloss texture, same color science, same lighting style, same environment tone, same editorial realism.

ALL FRAMES MUST FEEL: shot during the same luxury campaign production.
NO mixed aesthetics. NO random compositions. NO inconsistent lighting.
PRODUCT LOCK (CRITICAL)
Dior Addict Lip Glow Oil, transparent glossy pink lip oil, silver chrome cap, realistic Dior logo, true-to-product proportions, luxury reflective packaging, wet glossy texture realism.
NO redesign. NO fake branding. NO distorted packaging. NO fantasy cosmetics.
CORE EMOTIONAL DIRECTION
luxury intimacy, hydrated sensuality, soft femininity, quiet confidence, editorial beauty, dreamlike softness, Parisian elegance, beauty obsession, expensive minimalism, human warmth.

THIS CAMPAIGN SHOULD FEEL: soft, touchable, addictive, editorial, emotionally luxurious.
VISUAL LANGUAGE
clean Dior beauty aesthetic, airy luxury atmosphere, minimal editorial framing, controlled reflections, soft translucency, expensive simplicity, luxury beauty storytelling, high-end commercial beauty photography.

VISUAL RHYTHM MUST MATTER: some frames calm, some dense, some intimate, some product-heavy, some emotionally human.

COLOR SCIENCE
soft blush pink, milky nude pink, pearl white, translucent gloss tones, rosy undertones, subtle chrome silver reflections.
NO oversaturation. NO neon pink. NO dark grading. NO harsh contrast.

COLORS MUST FEEL: expensive, soft, editorial, airy, timeless.

LIGHTING SYSTEM
soft luxury daylight studio lighting, diffused editorial illumination, hydrated glossy highlights, natural reflective behavior, soft shadow transitions, luxury skin glow.
NO harsh shadows. NO dramatic cinematic darkness.

LIGHT SHOULD FEEL: softly wrapped around skin and product.
CAMERA SYSTEM
85mm luxury beauty lens, 100mm macro beauty lens, shallow depth of field, editorial beauty framing, luxury commercial realism, soft focus falloff.

MODEL SYSTEM
female luxury beauty model, soft feminine features, hydrated glowing skin, minimal Dior-inspired makeup, naturally glossy lips, subtle elegant expressions, editorial realism.

NO exaggerated fashion posing. NO uncanny AI beauty. NO over-retouched skin. NO heavy makeup.

MODEL SHOULD FEEL: expensive, real, elegant, aspirational.

TEXTURE REALISM (CRITICAL)
ultra-realistic wet gloss, hydrated lip reflections, visible lip texture, realistic skin pores, luxury glass transparency, accurate chrome reflections, true-to-life cosmetic realism.

NO plastic skin. NO waxy lips. NO fake gloss. NO AI smoothing.

ENVIRONMENT SYSTEM
minimal Dior beauty studio, soft pink-white luxury gradients, airy negative space, glossy reflective surfaces, subtle translucent reflections, editorial softness.
NO clutter. NO chaotic props. NO excessive fantasy liquids.

ENVIRONMENT SHOULD FEEL: controlled, expensive, minimal, editorial.
GRID BALANCE SYSTEM (MOST IMPORTANT)
THE GRID MUST FOLLOW THIS EXACT VISUAL RHYTHM:
TOP ROW: HUMAN → MACRO → PRODUCT
BOTTOM ROW: TEXTURE → HUMAN → HUMAN/LIP DETAIL
THIS CREATES: editorial balance, visual movement, luxury pacing, high-end campaign flow.$p$,
  $w$Extreme layout specificity (TOP ROW: HUMAN → MACRO → PRODUCT) with consistency directives and color science constraints creates a structured multi-frame campaign visual rather than random compositions.$w$,
  'curated',
  ARRAY['beauty', 'campaign', 'editorial', 'luxury', 'grid', 'cosmetics', 'product-photography']
) ON CONFLICT (id) DO NOTHING;

-- 6. Japanese Graffiti Portrait Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-japanese-graffiti-portrait',
  'Japanese Graffiti Portrait Poster',
  'Posters',
  $input$Portrait poster in bold Japanese graffiti-inspired art style$input$,
  $p$Create a high-detail portrait poster in a bold Japanese graffiti-inspired art style, combining modern urban street aesthetics with expressive Japanese visual culture. The poster should feature dynamic graffiti typography, layered spray-paint textures, hand-drawn symbols, abstract paint splashes, neon brush strokes, urban sticker elements, Japanese calligraphy accents, and decorative ornaments that strongly reinforce the energetic atmosphere of the design. The overall composition should feel artistic, rebellious, fashionable, and visually striking, while still maintaining a premium editorial poster quality instead of looking messy or overdone. Humanity somehow turned vandalism into luxury wall art. Impressive species.

The subject must not replicate the exact pose or expression from the reference photo. Instead, create a completely new pose that feels natural, confident, and full of life. The expression should appear emotionally expressive, charismatic, and engaging, avoiding stiff, awkward, flat, or emotionless body language. The pose should reflect the elegance and sophistication commonly seen in international fashion models, with stylish posture, natural movement, and subtle attitude that enhances the overall cinematic fashion aesthetic.

The outfit should feature contemporary stylish casual fashion with strong visual appeal. Avoid plain or repetitive clothing designs. Use fashionable layering, modern streetwear inspiration, premium casual styling, and a balanced combination of colors, patterns, textures, and fabric types that create a rich and non-monotonous appearance. The clothing should feel trendy, fashionable, youthful, and visually premium while still fitting naturally into the Japanese graffiti poster concept.

The background and poster decorations should be filled with thematic urban Japanese-inspired visual elements such as graffiti walls, spray textures, painted symbols, urban signage, layered stickers, modern Japanese graphic motifs, abstract shapes, paint drips, street fashion aesthetics, and stylish decorative compositions that enhance depth and artistic intensity without distracting from the subject.

Lighting should feel cinematic and fashionable, with strong contrast, clean highlights, realistic skin texture, and high-end editorial poster quality. The final result must look like a premium modern street-fashion campaign poster with highly detailed textures, balanced composition, vibrant color harmony, realistic proportions, ultra-sharp focus, and immersive visual storytelling.

Ultra-detailed, highly aesthetic, premium composition, realistic texture rendering, fashionable urban atmosphere, cinematic quality, poster-ready design, 8K ultra high resolution.$p$,
  $w$Multi-layer prompt addressing subject, outfit, background, and lighting separately with explicit anti-constraints (avoid stiff poses, plain clothing) creates a cohesive themed poster.$w$,
  'curated',
  ARRAY['poster', 'japanese', 'graffiti', 'street-art', 'fashion', 'urban', 'portrait']
) ON CONFLICT (id) DO NOTHING;

-- 7. Flavors of Moscow Travel Infographic
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-flavors-travel-infographic',
  'Flavors of Moscow Travel Infographic',
  'Infographics',
  $input$Travel infographic combining a 3D map of Moscow with Russian cuisine photography$input$,
  $p$An elegant, high-detail infographic travel poster titled 'FLAVORS OF MOSCOW'. Centered is a stylized, 3D isometric white map of Moscow's districts featuring miniature landmarks like the Kremlin and Red Square. Surrounding the map are professional food photography shots of Russian cuisine: a bowl of red Borscht, a plate of Pelmeni, and Blini with red caviar, each with elegant typography labels and descriptions. On the right, a vertical 'MUST TRY' and 'ICONIC EXPERIENCES' sidebar displays small circular icons of food and architectural sketches. The background is a clean, off-white parchment texture framed by delicate, hand-drawn birch tree branches and golden accents. The overall style is a sophisticated blend of a luxury culinary magazine layout and a modern 3D map illustration, using a warm and inviting color palette.$p$,
  $w$Specific layout direction (3D isometric map center, food photography surround, sidebar) combined with named dishes and typography labels creates a structured infographic.$w$,
  'curated',
  ARRAY['infographic', 'travel', 'food', 'moscow', 'cuisine', 'isometric', 'editorial']
) ON CONFLICT (id) DO NOTHING;

-- 8. Expressive Motion Study Sketch
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-expressive-motion-study',
  'Expressive Motion Study Sketch',
  'Open-Ended Creative',
  $input$Dynamic pencil sketch focusing on movement with vibrant color accents$input$,
  $p$[SUBJECT] captured as an Expressive Motion Study pencil sketch, focusing on dynamic poses and the flow of movement. Use energetic, sweeping lines and layered shading in vibrant [COLOR1] and [COLOR2] pencil accents to convey a sense of action and vitality.$p$,
  $w$Template prompt with clear creative constraints (pencil medium, motion focus, two-color accents) that leaves subject flexible while ensuring consistent artistic output.$w$,
  'curated',
  ARRAY['sketch', 'pencil', 'motion', 'dynamic', 'art-study', 'template', 'drawing']
) ON CONFLICT (id) DO NOTHING;

-- 9. Anime Hero Propaganda Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-naruto-propaganda-poster',
  'Anime Hero Propaganda Poster',
  'Posters',
  $input$Epic anime hero propaganda poster with double exposure silhouette$input$,
  $p$Ultra-premium propaganda poster, A4 size, vertical composition, themed around Naruto Uzumaki in a distinct shinobi-inspired visual language.

Poster structure:
Top section (dominant upper half): A large, iconic silhouette of Naruto's head and upper torso, facing slightly sideways, with intense determined eyes and forehead protector clearly visible. His hair and headband cloth flow outward, forming the primary visual mass.

Inside this large silhouette: apply a double exposure narrative collage using a warm-to-cool chakra gradient (orange, red, deep blue). Integrate layered elements such as:
– Kurama (Nine-Tails fox) faintly emerging behind or within the silhouette
– Hidden Leaf Village skyline (Konoha rooftops, Hokage Rock)
– swirling chakra energy patterns and wind trails
– small action scenes (Naruto running, Rasengan forming, shadow clones mid-motion)
– symbolic elements like scrolls, kunai, and leaves carried by wind

Middle to bottom section: Full-body Naruto as the secondary subject, standing grounded with a slightly forward-leaning stance, one hand forming Rasengan, cloak (Six Paths or Hokage cloak variation) subtly flowing. This figure anchors the composition.

Composition flow:
Create a vertical energy stream (chakra flow line) connecting:
full-body Naruto → rising chakra particles → internal collage → large silhouette above
This line should feel like ascending energy or destiny.

Left and right sides:
Introduce asymmetrical supporting elements for narrative tension:
– Left: faint silhouettes of allies (Sasuke, Sakura, Kakashi) blended softly
– Right: abstract enemy presence (Akatsuki clouds, shadowy figures, broken fragments)
All elements should feel embedded within mist, chakra haze, and layered space.

Visual style:
Eastern ink-wash + modern anime fusion.
Use:
– ink diffusion edges
– soft blur transitions
– fragmented textures
– layered clouds and smoke-like chakra
– controlled white negative space

Color design:
More vibrant and striking than traditional — glowing oranges, electric blues, deep blacks, with subtle gold highlights. High contrast focal lighting on face and Rasengan.

Aesthetic tone:
Epic, emotional, and symbolic of growth, struggle, and legacy.

Overall:
Highly refined, cinematic, layered storytelling poster with strong hierarchy, clean composition, and powerful central identity.$p$,
  $w$Detailed composition flow (vertical energy stream), double exposure with narrative collage, and specific visual style (Eastern ink-wash + modern anime) creates layered cinematic storytelling.$w$,
  'curated',
  ARRAY['anime', 'naruto', 'poster', 'propaganda', 'double-exposure', 'silhouette', 'cinematic']
) ON CONFLICT (id) DO NOTHING;

-- 10. Anime Character Streetwear Poster System
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-anime-streetwear-poster-system',
  'Anime Character Streetwear Poster System',
  'Posters',
  $input$Premium anime character reimagined in modern streetwear, editorial poster style$input$,
  $p$Create a premium stylized illustration of {character_name} from {franchise}, designed as a modern anime-inspired streetwear poster with bold visual identity and cinematic composition.
Character Interpretation
Analyze the character's canon personality and translate it into visual storytelling:
heroic / determined → explosive movement, confident energy
calm / intelligent → composed posture, restrained motion
mysterious / dark → low-key presence, hidden intensity
aggressive / chaotic → tension-filled stance, sharp gestures
Extract the character's most recognizable signature color from the original design and make it the dominant visual accent throughout the artwork.
Pose & Presence
Design an iconic pose that instantly communicates the character's personality:
dynamic action poses for energetic characters
relaxed but commanding posture for confident personalities
shadowed or asymmetrical stance for mysterious characters
forward-driving combat stance for intense characters
Body language should feel expressive, cinematic, and instantly readable.
Facial Expression
Match the expression tightly to the character's emotional identity and canon temperament, confident, cold, playful, threatening, fearless, etc.
Visual Style
Blend:
anime illustration aesthetics
modern streetwear / techwear fashion design
high-end graphic poster composition
Style requirements:
ultra-clean linework
semi-flat rendering with selective detail
strong contrast and shape language
sleek editorial feel
minimal but visually impactful
Outfit Redesign
Reinterpret the original costume as contemporary fashion while preserving recognizable identity traits:
signature symbols
silhouettes
accessories
hairstyle cues
iconic patterns or materials
The design should feel wearable yet unmistakably tied to the character.
Composition & Layout
Vertical composition ({aspect_ratio})
Off-center framing
Strong diagonal movement across the canvas
Layered foreground/background depth
Poster-like balance using intentional negative space
Color Direction
Clean white or near-white dominant background
Signature character color as the main accent
One complementary secondary accent color
Minimal palette with bold contrast and controlled saturation
Background Design
Create an abstract graphic environment using:
geometric forms
sharp framing elements
layered shapes
subtle typography-inspired structures
color-themed visual accents tied to the character
Keep the background stylish and supportive rather than overly detailed.
Effects & Motion
Add stylized visual effects that reflect the character's energy:
motion streaks
paint slashes
energy trails
graphic impact lines
glow accents
Effects should naturally follow movement and color identity.
Lighting & Rendering
Directional cinematic lighting
Crisp shadows and edge highlights
Soft glow using the signature accent color
Ultra-clean vector-like finish
Premium 4K poster-quality rendering
Sharp, polished, modern presentation$p$,
  $w$Systematic approach with clear sections (Character Analysis → Pose → Style → Color) ensures the model addresses each visual layer. Deriving colors from the character signature palette creates brand-consistent output.$w$,
  'curated',
  ARRAY['anime', 'character', 'streetwear', 'poster', 'template', 'fashion', 'editorial']
) ON CONFLICT (id) DO NOTHING;

-- 11. AI Casual iPhone Selfie
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-ai-casual-selfie',
  'AI Casual iPhone Selfie',
  'Open-Ended Creative',
  $input$Casual iPhone snapshot of what ChatGPT would look like$input$,
  $p$ChatGPT, you've been with me for a while now, and I want to see what you look like. Please generate a photo that's like a casual iPhone snap of you: no clear subject, no deliberate composition, just a very ordinary, even somewhat failed snapshot. The photo should have a slight motion blur, uneven lighting, mild overexposure, an awkward angle, chaotic framing, and overall convey a 'way too real, offhand snap' vibe, like a selfie accidentally taken when pulling the phone out of your pocket.$p$,
  $w$The meta-concept of asking AI to visualize itself combined with specific imperfection descriptors (motion blur, overexposure, awkward angle) creates compelling conceptual output.$w$,
  'curated',
  ARRAY['meta', 'selfie', 'iphone', 'casual', 'snapshot', 'creative', 'conceptual']
) ON CONFLICT (id) DO NOTHING;

-- 12. Mantis Shrimp Encyclopedia Infographic
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-mantis-shrimp-encyclopedia',
  'Mantis Shrimp Encyclopedia Infographic',
  'Infographics',
  $input$Premium encyclopedia infographic about the Mantis Shrimp$input$,
  $p$Create a high-quality vertical encyclopedia-style educational infographic
titled: "THE MANTIS SHRIMP — Nature's Most Dangerous Fist"

Subject: Peacock Mantis Shrimp (Odontodactylus scyllarus)

Overall style: Premium natural history field guide crossed with a
modern editorial science magazine. Clean cream/off-white background.
Soft teal, coral, and gold accent palette. Gentle drop shadows on all
panels. Small refined line icons. Rounded corner information boxes.
High information density without feeling crowded. Feels like a
collectible reference card from a scientific journal series.

—— LAYOUT STRUCTURE (top to bottom) ——

[HEADER BLOCK]
Large elegant serif title: "MANTIS SHRIMP"
Subtitle: "Odontodactylus scyllarus · Stomatopoda"
Small tagline badge: "The Ocean's Most Extraordinary Hunter"
Classification strip: Kingdom → Animalia | Phylum → Arthropoda |
Class → Malacostraca | Order → Stomatopoda

[MAIN HERO IMAGE]
One hyper-detailed full-color illustration of a Peacock Mantis Shrimp
in dramatic three-quarter profile view, raptorial claws extended.
Iridescent full-spectrum coloring. Scientifically accurate,
illustration style similar to a Smithsonian field guide plate.

[ANATOMY ZOOM PANELS — 3 circular close-up detail sections]
① Raptorial Dactyl Club — cross-section showing helicoidal fiber
   impact-absorbing structure, labeled: "Hits with the force of
   a .22 caliber bullet"
② Compound Eye — showing 16 photoreceptor types illustrated in
   spectrum bands, labeled: "Sees UV, infrared, and polarized light
   simultaneously"
③ Telson Shield — the armored tail plate used to block rival strikes,
   labeled: "Natural ballistic shield"

[QUICK STATS CARD — horizontal strip]
Icons + numbers in small rounded tiles:
• Strike Speed: 23 m/s (0.002 seconds)
• Strike Force: 1,500 Newtons
• Color Vision: 16 color channels (humans: 3)
• Lifespan: 20+ years
• Size: 2–7 inches
• Habitat Depth: 1–30 meters

[SUPERPOWER INDEX — visual scoring module]
Vertical bar or radial chart rating 6 abilities out of 10:
Strike Power ████████████ 10/10
Vision Range ████████████ 10/10
Armor Defense ████████░░░░ 8/10
Camouflage   ████████░░░░ 7/10
Intelligence  ██████░░░░░░ 6/10
Speed         █████████░░░ 9/10

[DUAL PANEL ROW]
Left panel — "HOW THE PUNCH WORKS"
Small sequential diagram: Load → Latch → Release → Cavitation Bubble
Collapse → Impact. Note: "The cavitation bubble hits the target a
second time even if the first strike misses."

Right panel — "VISION vs. HUMAN"
Simple comparison diagram:
Human eye = 3 cones (RGB)
Mantis Shrimp eye = 16 photoreceptors
+ UV + infrared + 6 polarization channels
Label: "Does NOT see more colors — processes light FASTER
than any known animal."

[HABITAT & RANGE PANEL]
Warm Indo-Pacific map with range shading.
Depth profile bar: Surface → 30m zone highlighted.
Notes: Rocky rubble, coral reef crevices.
Solitary, highly territorial.

[BEHAVIOR CARD]
Rounded box with 4 short bullet points:
• Monogamous — mates for life (up to 20 years together)
• Maintains and defends a permanent burrow
• Can recognize individual humans by face
• Communicates using fluorescent signals
  invisible to most predators

[WARNING / RISK PANEL — subtle red accent]
⚠ "Never house with other marine life.
   Will destroy aquarium glass over time.
   Has split human thumbnails during handling.
   Treat as a Level 3 biohazard during tank maintenance."

[FUN FACTS STRIP — "5 THINGS THAT SEEM FAKE"]
① Their clubs are stronger than bullet-proof ceramics
   — engineers are studying them for body armor
② They can see cancer cells in tissue that human eyes cannot
③ Some species glow under UV to communicate privately
④ Their strike creates a flash of light, heat, and shockwave —
   simultaneously
⑤ They have been known to break aquarium glass
   from the inside

[FOOTER BADGE ROW]
Three small rounded category tags:
[🌊 Marine Biology] [⚡ Biomechanics] [👁 Vision Science]
Small series label bottom right: "NATURAL WONDERS · Vol. 07"

Typography: Large bold condensed sans-serif for titles.
Clean readable serif for body text.
Monospaced for data/numbers.

Final feel: The image should look like it was pulled from
a $90 collector's edition nature encyclopedia.
Print-ready quality. NOT a poster. NOT an ad.
A knowledge artifact.$p$,
  $w$Extreme structural specificity — named sections, exact data values, scoring systems, comparison diagrams — gives the model a clear blueprint for information-dense infographic composition.$w$,
  'curated',
  ARRAY['infographic', 'encyclopedia', 'marine', 'mantis-shrimp', 'educational', 'science', 'detailed']
) ON CONFLICT (id) DO NOTHING;

-- 13. Architectural Minimalist Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-architectural-minimalist-poster',
  'Architectural Minimalist Poster',
  'Posters',
  $input$Minimalist poster featuring a famous building with bold typography$input$,
  $p$Using the renowned architectural structure [Building Name] as the scene, create a high-end minimalist poster. The center of the poster features an illustrative representation of the building, with the background consisting of a single word in enormous bold English typography that matches the building's character. Surrounding it are small text elements used to describe the building's design philosophy. The overall presentation takes the form of an extremely high-end artistic poster, with a restrained and understated color palette that harmonizes with the building—such as elements that precisely form parts of the building's components or extend outward as an integral extension of the building itself.$p$,
  $w$Minimal constraint set (building + large typography + restrained palette) forces the model to focus on composition and negative space rather than filling the frame.$w$,
  'curated',
  ARRAY['poster', 'architecture', 'minimalist', 'typography', 'building', 'template', 'editorial']
) ON CONFLICT (id) DO NOTHING;

-- 14. AI Desk Selfie Snapshot
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-ai-desk-snapshot',
  'AI Desk Selfie Snapshot',
  'Open-Ended Creative',
  $input$Candid desk selfie snapshot of what an AI looks like$input$,
  $p$Draw what you look, figure in a candid iPhone-style snapshot, sitting at a slightly messy desk with a laptop open, soft screen glow on the face, casual oversized hoodie, focused and a bit tired expression. Imperfect framing, slight motion blur, uneven warm lighting, natural skin texture, cozy room with scattered notes and a coffee mug. Quiet, everyday, unposed moment.$p$,
  $w$Specific environmental details (messy desk, laptop glow, coffee mug) combined with casual snapshot imperfections creates an authentic candid photo aesthetic.$w$,
  'curated',
  ARRAY['meta', 'selfie', 'casual', 'snapshot', 'cozy', 'creative', 'candid']
) ON CONFLICT (id) DO NOTHING;

-- 15. Director's PREVIS Action Storyboard
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-previs-action-storyboard',
  'Director''s PREVIS Action Storyboard',
  'Storyboards',
  $input$Director-style action storyboard using minimal stick figures$input$,
  $p$Create a director-style PREVIS action storyboard focused on 8 continuous action frames using only minimal stick figures. No realistic anatomy, clothing, pants, shoes, or character details. Show only movement, camera choreography, momentum trails, and ink motion, with only a small amount of necessary text.$p$,
  $w$Explicitly requesting stick figures and minimal anatomy prevents the model from over-rendering. The focus on camera choreography and momentum trails shifts attention to cinematic composition.$w$,
  'curated',
  ARRAY['storyboard', 'action', 'stick-figure', 'previs', 'minimal', 'cinematic', 'choreography']
) ON CONFLICT (id) DO NOTHING;

-- 16. Retro-Futuristic Mars Tennis Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-retro-mars-tennis',
  'Retro-Futuristic Mars Tennis Poster',
  'Posters',
  $input$Retro-futuristic tennis poster set on Mars with vintage 80s sci-fi style$input$,
  $p$A ultra-realistic stylish retro-futuristic poster of a beautiful female tennis player in a minimalist white visor and dress, leaping to hit a shot. The court is on Mars, with a giant red planet and two moons in the pink sky. The style is vintage 80s sci-fi, with grainy texture, bold typography, and a muted pastel color palette. Analog style, movie poster, concept art --ar 3:4 --v 6.1$p$,
  $w$Combining retro-futuristic aesthetics with specific setting (Mars court, two moons) and technical specs (grainy texture, muted pastels) creates a distinctive vintage sci-fi poster.$w$,
  'curated',
  ARRAY['poster', 'retro', 'sci-fi', 'mars', 'tennis', 'vintage', 'futuristic']
) ON CONFLICT (id) DO NOTHING;

-- 19. Double Exposure Editorial Portrait
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-double-exposure-editorial',
  'Double Exposure Editorial Portrait',
  'Cinematic',
  $input$Double exposure portrait with vertical cuts and rain-soaked street scene$input$,
  $p$A high-contrast, double-exposure editorial portrait of a beautiful woman gazing down with a thoughtful expression. The image is creatively segmented into vertical cuts of varying heights against a textured, off-white parchment background. Overlay effect: Within the vertical cuts of the woman's face, a secondary scene is visible: a solitary figure of the same woman in a sweatshirt walking along a rain-soaked street at night.

The street scene features a warm orange bokeh emanating from the streetlights and reflections on the wet pavement, creating a striking contrast with the cool tones of the portrait. Stylistic elements: Lighting: A chiaroscuro style with deep shadows and bright highlights on the woman's white shirt and dark jacket.

Texture: A subtle grain and a worn, paper-like texture cover the entire canvas, lending an artistic and raw feel. Color palette: A mix of desaturated monochromatic tones for the portrait, punctuated by vibrant touches of amber, gold, and turquoise from the rainy cityscape. Atmosphere: Melancholic, introspective, and with hints of modern film noir; facial hair and skin texture rendered in great detail.

Technical specifications: Photograph taken with an 85mm lens, f/1.8, cinematic lighting, sharp focus on the glasses, 8K resolution, graphic poster style. Aspect ratio 9:16.$p$,
  $w$Vertical cut segmentation with double exposure creates visual complexity. Warm orange bokeh against cool portrait tones provides striking color contrast within a cohesive composition.$w$,
  'curated',
  ARRAY['cinematic', 'double-exposure', 'editorial', 'portrait', 'rain', 'noir', 'vertical']
) ON CONFLICT (id) DO NOTHING;

-- 21. Watercolor Café Illustration
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-watercolor-cafe-illustration',
  'Watercolor Café Illustration',
  'Open-Ended Creative',
  $input$Watercolor ink illustration of a girl at a cozy café$input$,
  $p${
  "style": "minimal watercolor ink illustration, soft anime realism, hand-drawn sketch aesthetic, cozy café editorial art",
  "scene": {
    "location": "minimal modern café table",
    "mood": "warm, intimate, calm, aesthetic, cozy",
    "composition": "medium portrait shot from slightly elevated angle",
    "background": "clean white background with sparse ink splashes, handwritten typography, tiny doodles, and soft brush textures"
  },
  "subject": {
    "gender": "young woman",
    "appearance": {
      "hair": "short layered black hair with soft messy strands",
      "skin": "fair glowing skin",
      "expression": "gentle smile with relaxed eyes",
      "body_type": "slim"
    },
    "outfit": {
      "top": "cream embroidered sleeveless dress with delicate lace details",
      "style": "soft feminine café fashion"
    },
    "pose": "sitting naturally at a café table holding a fork while resting one hand beside a glass bottle"
  },
  "table_objects": [
    {
      "item": "small berry cheesecake",
      "placement": "center plate"
    },
    {
      "item": "minimal ceramic coffee cup",
      "placement": "left side"
    },
    {
      "item": "transparent glass bottle with tiny plant stem",
      "placement": "right side"
    }
  ],
  "decor_elements": [
    "hanging industrial café lamp",
    "tiny heart doodles",
    "minimal botanical sketch",
    "soft watercolor stains",
    "small sparkles",
    "handwritten quotes"
  ],
  "text_elements": [
    "Simple days are the best",
    "Small pleasures, big smiles"
  ],
  "lighting": {
    "type": "soft warm ambient café lighting",
    "effect": "gentle highlights with subtle shadows"
  },
  "color_palette": [
    "warm beige",
    "cream",
    "soft brown",
    "light sepia",
    "muted black"
  ],
  "render_details": {
    "linework": "fine sketch ink outlines",
    "texture": "watercolor paper texture",
    "detail_level": "medium-high",
    "quality": "highly polished illustration"
  },
  "camera": {
    "angle": "slightly top-down portrait framing",
    "focus": "sharp focus on girl and table items",
    "depth_of_field": "soft shallow depth"
  },
  "negative_prompt": [
    "cluttered background",
    "heavy saturation",
    "3D render look",
    "photorealism",
    "low quality",
    "extra limbs",
    "messy composition",
    "dark lighting",
    "crowded table"
  ],
  "aspect_ratio": "9:13"
}$p$,
  $w$JSON-structured prompt with precise object placement, color palette, and negative prompts gives the model extremely clear constraints for a cohesive illustration.$w$,
  'curated',
  ARRAY['illustration', 'watercolor', 'cafe', 'anime', 'cozy', 'ink', 'aesthetic']
) ON CONFLICT (id) DO NOTHING;

-- 22. Historical Illustrated Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-historical-illustrated-poster',
  'Historical Illustrated Poster',
  'Posters',
  $input$Historical illustrated poster with map and cinematic battle scene$input$,
  $p$Create a vertical 3:4 high-end historical illustrated poster depicting:

[HISTORICAL EVENT]

Top half:
Detailed illustrated map showing routes, regions, troop movements, important cities, rivers, strategic locations and campaign directions.

Bottom half:
Cinematic historical scene depicting the key moment of the event:
[battle / march / revolution / turning point]

Style:
watercolor + cinematic realism hybrid,
aged parchment texture,
historically accurate clothing and weapons,
dramatic atmosphere,
museum-quality illustration,
4K ultra detailed,
vertical storytelling composition.

Text:
[EVENT TITLE]
[SUBTITLE + DATE]$p$,
  $w$Splitting the poster into map (top) and cinematic scene (bottom) with specific style fusion (watercolor + cinematic realism) creates a structured visual narrative.$w$,
  'curated',
  ARRAY['poster', 'historical', 'map', 'cinematic', 'watercolor', 'template', 'educational']
) ON CONFLICT (id) DO NOTHING;

-- 23. Rengoku Flame Hashira Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-rengoku-anime-poster',
  'Rengoku Flame Hashira Poster',
  'Posters',
  $input$Anime poster of Rengoku from Demon Slayer with flame typography$input$,
  $p$Masterpiece anime character poster of Kyojuro Rengoku from Demon Slayer, cinematic side-profile portrait composition, elegant vertical Japanese poster design, ultra-detailed painterly anime illustration.

Rengoku facing left in a calm heroic pose, sharp golden-orange eyes, thick black flame-shaped eyebrows, long layered hair flowing dramatically with fiery yellow, orange, and crimson red flame tips. Soft wind movement in hair strands. Wearing the Demon Slayer Corps uniform with detailed black fabric textures, white cape with flame-pattern edges draped over shoulders, katana partially visible near the waist.

Warm golden cinematic lighting illuminating the face and hair, soft shadows, subtle glow effect around flame-colored hair, highly detailed skin shading and anime rendering. Background is minimal clean warm ivory/beige paper texture with elegant negative space.

Typography-heavy poster layout: large bold serif text "RENGOKU" in deep burnt red, smaller "KYOJURO" beneath it, minimalist Japanese kanji typography, small poetic text blocks, luxury anime movie poster aesthetic. Include tiny flame icon above title and refined Japanese print design elements.

Style inspired by premium anime key visuals, watercolor-anime hybrid painting, cinematic illustration, ultra detailed brushwork, elegant composition, poster-grade typography integration, high-end Japanese graphic design aesthetic, soft paper grain texture, 8k masterpiece quality.

Camera: close-up side profile shot, chest-up framing, slightly low angle.

Color palette: warm ivory, gold, amber, crimson, orange flame tones, deep black accents.

Negative prompt: blurry, low quality, extra limbs, distorted face, realistic photography, messy typography, cluttered background, bad anatomy, watermark, cropped head, flat lighting.$p$,
  $w$Named character details (flame-shaped eyebrows, flame-tip hair), specific color direction (gold, amber, crimson), and typography integration creates a recognizable anime character poster.$w$,
  'curated',
  ARRAY['anime', 'rengoku', 'demon-slayer', 'poster', 'flame', 'typography', 'cinematic']
) ON CONFLICT (id) DO NOTHING;

-- 24. National Identity System Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-national-identity-poster',
  'National Identity System Poster',
  'Posters',
  $input$National identity system poster for a country$input$,
  $p$A premium agency-level national identity system poster for [COUNTRY], vertical 2:3 format, dark sophisticated background, feels like a top Behance project from a world-class design studio.
TOP SECTION: Large bold country name in premium editorial typography, short powerful national statement underneath (max 5 words), 3-word identity descriptor (example: "Ancient / Bold / Timeless")
NATIONAL COLOR SYSTEM: Primary palette extracted directly from the flag and landscape — large color blocks with hex codes, gradient combinations, light and dark mode applications
CULTURAL TYPOGRAPHY: Headline font inspired by the country's architectural or historical aesthetic, show real phrases in the national language, clear typographic hierarchy from display to body
VISUAL IDENTITY TILES: 5-6 cinematic image tiles showing the country's soul — landscapes, food, architecture, people, texture, light. Editorial photography style. Each tile labeled with 3 descriptive words
NATIONAL APPLICATIONS: Passport cover design, airline livery on a plane, tourism campaign billboard, national airline ticket, postage stamp series, olympic team uniform
PATTERN & MOTIF SYSTEM: Decorative patterns derived from traditional art, architecture or nature of the country.$p$,
  $w$Structured sections (color system, typography, visual tiles, applications, patterns) create a comprehensive brand identity system rather than a simple poster.$w$,
  'curated',
  ARRAY['poster', 'brand-identity', 'national', 'design-system', 'template', 'editorial', 'typography']
) ON CONFLICT (id) DO NOTHING;

-- 25. Japanese Food Brand Identity Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-food-brand-identity-poster',
  'Japanese Food Brand Identity Poster',
  'Posters',
  $input$Brand identity poster for Kikkoman × Nissin Foods$input$,
  $p$Create a premium vertical 4:5 brand identity system poster for Kikkoman × Nissin Foods inspired by authentic Japanese food culture, featuring a clean modern Japanese editorial layout with elegant typography, warm cinematic restaurant lighting, soy sauce textures, ramen steam, ceramic bowls, noodles, and wooden chopsticks. Include the brand header with the tagline "Tradition Meets Instant Flavor" and the descriptors Authentic / Warm / Iconic, along with a sophisticated color palette of soy sauce brown, cream white, warm red, noodle yellow, charcoal black, deep orange, and garnish green displayed as modern swatches with HEX codes. Showcase bold Japanese-inspired typography, cinematic ramen photography, glossy gradients, and premium culinary mood-board visuals. Add realistic brand applications including a soy sauce bottle, instant noodle cup, website hero, mobile food app UI, social media posts, and a large restaurant billboard, plus a refined Japanese-style UI design system with buttons, food cards, navigation menus, recipe sections, spacing guides, and minimal rounded food-themed icons such as ramen bowls, chopsticks, steam, eggs, and noodle swirls, all presented in an ultra-realistic, warm, refined, globally recognizable editorial aesthetic.$p$,
  $w$Combining two recognizable food brands with specific cultural elements (soy sauce textures, ramen steam) and detailed application mockups creates an authentic brand identity system.$w$,
  'curated',
  ARRAY['poster', 'brand-identity', 'food', 'japanese', 'design-system', 'editorial', 'product']
) ON CONFLICT (id) DO NOTHING;

-- 26. Anime Character Stylized Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-anime-character-poster',
  'Anime Character Stylized Poster',
  'Posters',
  $input$Stylized anime character illustration with streetwear aesthetic$input$,
  $p$Create a stylized illustration of {character_name} from {franchise}.

Character Analysis:

Derive the character's core personality archetype based on canon portrayal (e.g., heroic, calm, mysterious, aggressive).
Identify the signature color from the original design and use it as the primary visual accent.

Pose & Body Language:

Generate an iconic pose that reflects the personality archetype:
Energetic / Heroic: dynamic action, wide stance, explosive movement
Calm / Confident: balanced, relaxed posture, minimal motion
Dark / Mysterious: low stance, subtle movement, sharp or hidden gaze
Aggressive / Intense: forward-leaning attack stance, visible tension, clenched fists

Facial Expression:

Match expression precisely to the character's personality and emotional tone.

Art Style:

Anime × streetwear × graphic poster hybrid
Clean lineart, semi-flat shading, high contrast
Modern, minimal, and visually striking

Composition:

Vertical format ({aspect_ratio})
Off-center subject placement
Strong diagonal visual flow
Layered depth for a dynamic poster feel

Outfit Design:

Reimagine the original costume as modern streetwear / techwear
Preserve recognizable identity elements of the character

Color Palette:

Dominant clean white background
Use signature color as the primary accent
Add one secondary accent (complementary or analogous tone)
Keep palette minimal, bold, and high-contrast

Background:

Abstract geometric poster layout
Use negative space effectively
Integrate subtle accents using the character's color theme

Effects:

Energy strokes, paint lines, and motion accents
Effects should follow the character's energy and color identity

Lighting:

Sharp directional lighting
Crisp shadows
Subtle glow using the signature color

Rendering Quality:

Ultra-clean vector-style finish
Poster-quality composition
4K resolution, high detail$p$,
  $w$Simplified character poster system with clear personality-to-pose mapping and explicit color derivation rules creates consistent character illustration output.$w$,
  'curated',
  ARRAY['anime', 'character', 'poster', 'streetwear', 'template', 'illustration', 'minimal']
) ON CONFLICT (id) DO NOTHING;

-- 27. Encyclopedia Educational Infographic
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-encyclopedia-infographic',
  'Encyclopedia Educational Infographic',
  'Infographics',
  $input$Encyclopedia-style educational infographic on any topic$input$,
  $p$Based on { TOPIC }, create a high-quality vertical "encyclopedia-style educational infographic image."

This image should NOT look like a regular poster or a simple illustration. Instead, it should feel like a structured knowledge guide that combines:

the feeling of a collectible reference handbook

a modern encyclopedia page

a lifestyle knowledge card

and a highly shareable social-media infographic

The overall style should resemble a premium natural-history guidebook mixed with modern editorial infographic design.

The image should include:

One beautiful and highly detailed main subject image

Several zoomed-in detail sections highlighting important features

Multiple modular information panels with rounded corners

Clear title hierarchy and highlighted key labels

Concise yet information-rich encyclopedia content

Visual scoring systems, quick summaries, or "Top 5" modules

The information sections should automatically adapt to the topic. Select and combine relevant categories such as:

Basic profile

Classification / taxonomy

Physical characteristics

Behavior / ecology / habits

Structure or formation mechanisms

Growth conditions or usage methods

Care, maintenance, or optimization tips

Risks, warnings, and important notes

Suitable users or application scenarios

Pros and cons comparison

Quick rating tags or summary cards

Visual requirements:

Clean light-colored background

Soft and elegant color palette

Gentle shadows

Small refined icons

Rounded information boxes

Organized editorial layout

High information density without feeling crowded

Comfortable reading experience

The final result should feel like a real publishable encyclopedia knowledge card designed for reading, collecting, and creating as part of a consistent series — NOT like a commercial advertisement poster.

The image must strongly emphasize:

"knowledge integration + modular information design + handbook/reference-style presentation."$p$,
  $w$Meta-prompt that adapts content sections to any topic while maintaining consistent visual structure (main image, zoom panels, quick stats, scoring) creates a versatile infographic template.$w$,
  'curated',
  ARRAY['infographic', 'encyclopedia', 'educational', 'template', 'modular', 'reference', 'knowledge']
) ON CONFLICT (id) DO NOTHING;

-- 29. Character Pose Reference Guide
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-character-pose-reference',
  'Character Pose Reference Guide',
  'Storyboards',
  $input$Wide-format character pose reference guide with annotations$input$,
  $p$Wide-format landscape character pose reference guide (4K | 16:9 ratio)
Background Setting:
- Soft light beige pure background
- Clean professional academic style
Central Subject:
- Exquisite full-body character illustration (front confident standing pose, one hand on hip)
- Clear character design sense with detailed clothing
Left Information Module Area:
- Character name and identity description
- Clothing composition breakdown: main attire, accessories, ornaments - design concept and style tags
- Historical prototype or cultural reference
 - Each module paired with black-and-white line drawing references or detail schematics
Right Reference Pose Area:
- Front half-body close-up (expression and head details)
- Back full-body standing pose
- Side 45-degree angle standing pose - squatting or sitting pose (hands hugging head or other natural actions)
- Kneeling pose or low-angle looking-back posture
- Other characteristic action poses
Visual Connections:
- All components connected with thin arrows pointing to corresponding description cards
- Pose diagrams divided by dashed-line frames, labeled with angles and notes
- Handwritten-style annotation text with small label embellishments
Layout Features:
- Information cards in modular design
- Overall layout balanced and symmetrical
- Ample white space to maintain visual lightness
- Text clear and readable, with bilingual Chinese-English parallels
Overall Style:
- Combining the aesthetic appeal of anime setting collections
- Integrating the academic rigor of fashion study references
- Light and rational knowledge presentation
- Japanese illustration style fused with professional typography$p$,
  $w$Structured reference sheet with specific pose requirements (front, back, side, 3/4, sitting, kneeling) and annotation system creates a comprehensive character design resource.$w$,
  'curated',
  ARRAY['storyboard', 'character-design', 'pose-reference', 'anime', 'fashion', 'annotation', 'guide']
) ON CONFLICT (id) DO NOTHING;

-- 30. Dark Fantasy Demon Queen Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-dark-fantasy-demon-queen',
  'Dark Fantasy Demon Queen Poster',
  'Posters',
  $input$Dark fantasy demon queen poster with double exposure and chess scene$input$,
  $p$Masterpiece dark fantasy anime illustration poster, ultra-detailed watercolor ink splash style, elegant demon queen succubus character named "Alice", massive cinematic vertical composition, side-profile portrait of a beautiful woman with pale skin and flowing silver-lilac hair, seductive smile, glowing crimson eyes, sharp black and crimson horns emerging from her head, enormous bat-like wings wrapping around the composition like a cloak.

Inside her silhouette exists an entire fantasy world rendered as a layered double-exposure scene: glowing purple crystal caverns, mystical forests, floating ruins, magical rivers of light, cosmic nebula energy, and a tiny wandering figure in the distance. At the upper chest area, include a dramatic chess scene with shadowy silhouettes and another smaller version of the demon queen smiling confidently across a chessboard illuminated by candlelight.

At the bottom center, show the full-body demon queen standing powerfully with huge crimson dragon wings spread wide, wearing a sleek black and ruby fantasy dress armor with glowing magical accents, surrounded by swirling pink and violet energy flames.

Style should combine watercolor splashes, ink stains, celestial galaxy textures, painterly brushwork, anime fantasy aesthetics, and cinematic poster composition. High contrast between deep violet, magenta, crimson, and black tones on a clean white background with artistic paint splatter edges. Ethereal lighting, mystical atmosphere, highly detailed textures, elegant fantasy illustration, trending on ArtStation, masterpiece quality, insanely detailed, 8k.

Typography at top left: "Alice" in expressive black brush-calligraphy style.

Negative prompt: low quality, blurry, extra limbs, bad anatomy, cropped face, flat colors, realistic photography, dull lighting, messy composition, duplicate characters, text artifacts, watermark.$p$,
  $w$Combining multiple visualization techniques (double exposure, chess scene, watercolor splashes) with specific color direction (violet, magenta, crimson) creates a layered fantasy poster.$w$,
  'curated',
  ARRAY['poster', 'dark-fantasy', 'demon', 'anime', 'watercolor', 'double-exposure', 'cinematic']
) ON CONFLICT (id) DO NOTHING;

-- 31. Breaking Bad Character Grid Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-breaking-bad-grid',
  'Breaking Bad Character Grid Poster',
  'Posters',
  $input$Breaking Bad 12-panel character grid poster with text masking$input$,
  $p$Create a high-contrast, cinematic graphic design poster inspired by the TV series Breaking Bad, featuring a 2x6 vertical grid of twelve distinct title-card panels showcasing iconic characters from the show. The aesthetic should blend Urban Grunge with crime-thriller intensity, using distressed textures, film grain, and bold typography masking effects. Each panel should prominently feature a massive extra-bold sans-serif name such as WALT, JESSE, SAUL, GUS, MIKE, HANK, SKYLER, TUCO, HECTOR, LYDIA, TODD, and JANE, with the character portrait visible only inside the filled letterforms using a clipping/masking silhouette-window effect. Add smaller cinematic credit text beside or below the names in clean typography, such as "AS HEISENBERG", "THE LAWYER", or "THE FIXER." Characters should have gritty, realistic portraits with intense or emotionless expressions, featuring iconic looks: Walter White in hat/glasses, Jesse Pinkman in hoodie/beanie, Saul Goodman in flashy suit, Gus Fring in formal attire, Mike Ehrmantraut bald with stern face, and Hank in DEA style. Use high-contrast dramatic studio lighting with rim lights and shadows; selectively add green chemical-lab glow, neon cyan, magenta, and amber highlights to certain cards. Backgrounds in each panel should feel unique but cohesive: weathered concrete, rusted metal, cracked walls, wrinkled paper, and smoky meth-lab atmospheres. Overlay heavy ink splatters, paint drips, brush strokes, scratches, scan lines, dust, film burns, and grain for a distressed cinematic look. The overall palette should use dark green, toxic neon lime, monochrome greys, deep charcoals, dirty yellows, and off-whites, with accent pops like a glowing green haze behind Walter, red-orange behind Tuco, blue meth-crystal highlights around Jesse, and sterile white tones around Lydia. The final result should look like a premium Netflix-style crime drama cast poster with a raw, edgy, highly stylized graphic design aesthetic.$p$,
  $w$Text masking/clipping technique where character portraits appear inside bold letterforms, combined with gritty textures and character-specific lighting accents, creates a distinctive grid poster.$w$,
  'curated',
  ARRAY['poster', 'breaking-bad', 'grid', 'character', 'typography', 'cinematic', 'grunge']
) ON CONFLICT (id) DO NOTHING;

-- 32. Modern Recipe Infographic
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-recipe-infographic',
  'Modern Recipe Infographic',
  'Infographics',
  $input$Modern recipe infographic with dynamic editorial layout$input$,
  $p$"Ultra-clean modern recipe infographic. Showcase [FOOD/DISH] in a visually appealing finished form—sliced, plated, or portioned—floating slightly in perspective or angled view. Arrange ingredients, steps, and tips around the dish in a dynamic editorial layout, not restricted to top-down. Ingredients Section: Include icons or mini illustrations for each ingredient with quantities. Arrange them in clusters, lists, or circular flows connected visually to the dish. Steps Section: Show preparation steps with numbered panels, arrows, or lines, forming a logical flow around the main dish. Include small cooking icons (knife, pan, oven, timer) where helpful. Additional Info (optional): Total calories, prep/cook time, servings, spice level—displayed as clean bubbles or badges near the dish. Visual Style: Editorial infographic meets lifestyle food photography. Vibrant, natural food colors, subtle drop shadows, clean vector icons, modern typography, soft gradients or glassmorphism for step panels. Accent colors can highlight key info (calories, prep time). Composition Guidelines: Finished meal as hero visual (perspective or angled) Ingredients and steps flow dynamically around the dish Clear visual hierarchy: dish > steps > ingredients > optional stats Enough negative space to keep design airy and readable Lighting & Background: Soft, natural studio lighting, minimal textured or gradient background for premium editorial feel. Ultra-crisp, social-feed optimized, no watermark."$p$,
  $w$Dynamic editorial layout with specific sections (ingredients, steps, stats) arranged around a hero dish image rather than a flat list creates a premium recipe infographic.$w$,
  'curated',
  ARRAY['infographic', 'recipe', 'food', 'editorial', 'template', 'cooking', 'modern']
) ON CONFLICT (id) DO NOTHING;

-- 33. Futuristic Wanderer Style Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-futuristic-wanderer-poster',
  'Futuristic Wanderer Style Poster',
  'Posters',
  $input$Futuristic desert wanderer character breaking through bold typography$input$,
  $p$"A futuristic desert wanderer character in a dramatic walking pose, wearing a tattered olive-green and tan wrapped cloak with metallic armor fragments, carrying a heavy sci-fi rifle, wearing a cracked visor helmet with glowing amber lenses, dust particles floating around — character bursts through giant bold purple typography that reads "STYLE" in massive letters across the lower half of the composition, with the word "GUIDE" in a smaller black sticker tag overlapping the letter. Secondary label sticker reads "LOOKS" in italic bold. Top-left has four small colored squares as a palette indicator (purple, beige, white, dark). Light grey-white background. Character casts a subtle drop shadow on the ground. Layout is editorial poster style — character overlaps and bleeds through the typography. Small handle text "OzairAI" vertically on the left edge. Ultra photorealistic, 8K, MidJourney cinematic render style, graphic design poster composition."$p$,
  $w$Character breaking through typography creates depth and visual tension. The editorial poster composition with specific color palette and style tags creates a premium presentation.$w$,
  'curated',
  ARRAY['poster', 'sci-fi', 'character', 'typography', 'futuristic', 'editorial', 'style-guide']
) ON CONFLICT (id) DO NOTHING;

-- 34. Solo Leveling Character Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-solo-leveling-poster',
  'Solo Leveling Character Poster',
  'Posters',
  $input$Solo Leveling-themed character poster with shadowed silhouette$input$,
  $p$Create a promotional poster of a SOLO LEVELING-themed character with a vertical Facebook portrait post composition (4:5 ratio, 1080x1350). Use a hierarchy structure with large elements on top and smaller ones below: the top section should feature a very large head, shadowed face silhouette, glowing eyes, or half-body of Sung Jin-Woo as the main visual subject, forming a strong, instantly recognizable iconic silhouette.$p$,
  $w$Hierarchy structure (large silhouette top, details below) with specific composition specs (4:5, 1080x1350) creates a recognizable character promotion poster.$w$,
  'curated',
  ARRAY['anime', 'solo-leveling', 'poster', 'character', 'silhouette', 'cinematic', 'dark']
) ON CONFLICT (id) DO NOTHING;

-- 35. Street-Style Tacos Recipe Card
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-tacos-recipe-card',
  'Street-Style Tacos Recipe Card',
  'Infographics',
  $input$Bold street-style tacos recipe card for social media$input$,
  $p$Create a bold, vibrant, street-style recipe card for "Tacos" designed for social media virality.

Style:
High-energy Mexican street food aesthetic. Rich colors (yellow, red, lime green, orange). Mix of realistic food photography with painted textures, spice splashes, and hand-drawn elements. Slight grain and motion blur for a lively feel.

Layout:
Single-page vertical design (2:3), dynamic and slightly asymmetrical, with layered elements and depth.

Top Section:
- Big title: "TACOS"
- Subtitle: "fresh • bold • messy perfection"
- Hero image: close-up of loaded tacos (meat/veg, salsa, lime, cilantro) with visible texture and juice

Middle Section (Ingredients):
- Arranged like a vibrant flat-lay:
  tortillas, grilled filling (chicken/beef/veg), onion, cilantro, lime, salsa
- Use small labels near ingredients instead of a plain list

Lower Section (Steps — Visual + Motion Feel):
Show 4 steps with action-oriented visuals:
1. Heat tortillas (slight char marks)
2. Cook filling with spices (steam + sizzle effect)
3. Assemble tacos (layer ingredients visibly)
4. Add toppings + squeeze lime

Use arrows, splashes, and motion lines to guide flow.

Highlight Element:
- Sauce tip box:
  "Quick Salsa: tomato + chili + lime + salt"
- Optional spice meter (mild → spicy)

Design Details:
- Handwritten bold fonts + strong sans-serif
- Paint strokes, lime splashes, chili icons
- Paper textures + street poster feel
- Slight shadow layering for depth

Mood:
Energetic, flavorful, street-food chaos but visually controlled

Composition:
Eye-catching, slightly busy but balanced, designed to grab attention instantly

Lighting:
Warm, high contrast, juicy highlights on food

Quality:
Ultra-detailed, high resolution, scroll-stopping social media aesthetic$p$,
  $w$High-energy visual direction with specific Mexican cultural elements, action-oriented step visuals, and street poster aesthetic creates a scroll-stopping recipe card.$w$,
  'curated',
  ARRAY['infographic', 'recipe', 'tacos', 'mexican', 'food', 'street-food', 'social-media']
) ON CONFLICT (id) DO NOTHING;

-- 37. Editorial Leadership Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-editorial-leadership-poster',
  'Editorial Leadership Poster',
  'Posters',
  $input$Minimal black editorial portrait poster of a distinguished leader$input$,
  $p$Create a high-end cinematic minimal black editorial poster.
Subject: A distinguished public figure wearing a premium traditional-inspired formal suit (kurta-style modern suit blend), sharp and dignified appearance.
Expression & Mood: Calm, confident, visionary, and highly authoritative expression.
Pose & Composition: Chest-up portrait, centered composition, soft cinematic lighting.
Art Style: Minimal black and white editorial photography style. High contrast lighting, soft shadows, subtle film grain texture.
Background: Pure black or dark gradient luxury background.
Typography: Main Title: "Visionary Leadership 2026" Subtext: "Strength. Vision. Nation." Name: [Leave blank or customizable]
Mood: Elite, respectful, global leadership aesthetic.$p$,
  $w$Minimal black editorial style with specific photography direction (high contrast, soft shadows, film grain) creates a dignified leadership portrait poster.$w$,
  'curated',
  ARRAY['poster', 'editorial', 'leadership', 'black-white', 'minimal', 'portrait', 'cinematic']
) ON CONFLICT (id) DO NOTHING;

-- 38. 3D Gaming Character Juxtaposition
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-3d-gaming-juxtaposition',
  '3D Gaming Character Juxtaposition',
  'Open-Ended Creative',
  $input$3D gaming characters of a fast-food fan vs fitness coach side by side$input$,
  $p$a highly detailed 3D gaming character on a white background of a fat fast-food fan and a female fitness coach. with a text and cool title next to them that explain the juxtaposition$p$,
  $w$The juxtaposition concept with contrasting character designs and explanatory text creates humor through visual storytelling.$w$,
  'curated',
  ARRAY['3d', 'gaming', 'character', 'humor', 'juxtaposition', 'creative', 'fitness']
) ON CONFLICT (id) DO NOTHING;

-- 39. Premium World Cake Infographic
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-cake-infographic',
  'Premium World Cake Infographic',
  'Infographics',
  $input$Premium food infographic showcasing traditional cakes from one country$input$,
  $p$You are a world-class food photographer and infographic designer.

Create a premium food infographic poster showcasing multiple traditional cakes from one country.

Country:
[WRITE YOUR COUNTRY]

Cake flavors (IMPORTANT – list 6 to 10 different cakes):
[WRITE CAKE 1]
[WRITE CAKE 2]
[WRITE CAKE 3]
[WRITE CAKE 4]
[WRITE CAKE 5]
[WRITE CAKE 6]
[OPTIONAL MORE…]

Main composition:
– clean bright background (white or soft beige)
– multiple cakes arranged in a balanced layout
– each cake with different colors and textures

For each cake:
– whole cake + one sliced piece showing layers
– ultra realistic textures (cream, sponge, fillings)

Infographic:
– ingredient visuals under each cake
– thin clean lines pointing to layers
– minimal labels (name + flavor)

Details:
– extremely sharp textures
– crumbs, cream, gloss, layers
– micro details for zoom

Lighting:
– soft studio lighting
– premium clean shadows

Style:
– clean, organized, visually rich
– no dark background
– no clutter

Goal:
make people stop scrolling, zoom in, and feel hungry instantly.$p$,
  $w$Flat-lay composition with multiple cakes showing both whole and sliced views, combined with ingredient visuals and clean annotations creates a premium food infographic.$w$,
  'curated',
  ARRAY['infographic', 'cake', 'food', 'baking', 'template', 'premium', 'photography']
) ON CONFLICT (id) DO NOTHING;

-- 40. Golden Monochromatic Double Exposure
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-golden-double-exposure',
  'Golden Monochromatic Double Exposure',
  'Cinematic',
  $input$Monochromatic golden double exposure blending profiles with landscape$input$,
  $p$A striking double exposure composition in a monochromatic golden-yellow hue, blending the profiles of a woman with a serene landscape. The primary subject features a soft, detailed close-up of a woman's face in three-quarter view, her eyes downcast in a pensive or melancholic expression. Within her silhouette, a second profile gazes toward the horizon, revealing a dreamlike scene of a distant figure standing by a calm lake at sunset. The image is characterized by smooth transitions, atmospheric clouds, and a flock of birds, evoking a deep sense of introspection, memory, and longing.$p$,
  $w$Monochromatic golden-yellow palette with double exposure blending two profiles and a landscape creates a cohesive, emotionally resonant fine art composition.$w$,
  'curated',
  ARRAY['cinematic', 'double-exposure', 'golden', 'monochromatic', 'portrait', 'fine-art', 'landscape']
) ON CONFLICT (id) DO NOTHING;

-- 41. Tropical Beach Fashion Portrait
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-tropical-beach-portrait',
  'Tropical Beach Fashion Portrait',
  'Cinematic',
  $input$Indian woman on tropical beach in sage green bikini with wind-blown hair$input$,
  $p$A beautiful young Indian woman with long, voluminous wavy brown hair with caramel highlights, hair dramatically blowing in the wind across her face. She is standing on a tropical beach, turning her body slightly to the side while looking over her shoulder with a playful pouty expression, lips pursed, eyes glancing sideways.

She wears a sage green bikini with distinctive white whipstitch/zigzag trim along all edges, matching bikini top and bottom. An oversized white button-up shirt is open and loosely draped over her shoulders and arms, partially slipping off. Her hands are placed on her waist and hips in a confident pose, manicured nails visible.

Photorealistic, natural soft daylight under a cloudy overcast sky, turquoise ocean water and white sand in the background, tropical palm trees and rocky shoreline. Windy atmosphere, realistic skin texture, detailed wet-look hair strands, cinematic composition, high resolution, 8k photography style.$p$,
  $w$Specific outfit details (sage green bikini with white whipstitch trim), natural environmental elements (wind-blown hair, overcast sky), and photorealistic technical specs create authentic fashion photography.$w$,
  'curated',
  ARRAY['cinematic', 'portrait', 'beach', 'fashion', 'bikini', 'tropical', 'photography']
) ON CONFLICT (id) DO NOTHING;

-- 42. Brand Editorial Moodboard Grid
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-brand-moodboard-system',
  'Brand Editorial Moodboard Grid',
  'Posters',
  $input$Brand editorial moodboard 2x2 grid with unified visual identity$input$,
  $p$[BRAND NAME]

Act as a Senior Brand Art Director and Editorial Designer creating a 2×2 grid brand moodboard — four distinct editorial cards unified by [BRAND NAME]'s visual identity system. References: Ivy Park campaign editorial, Supreme lookbook layouts, Palace Skateboards zine design, Off-White editorial grids, Highsnobiety brand feature spreads.

---

PHASE 0: BRAND INTELLIGENCE — AUTONOMOUS RESEARCH

Before generating any visual, perform a complete brand decode of [BRAND NAME] from training data. Extract and apply all of the following autonomously:

Color system: identify the exact primary and secondary brand colors — their specific hex values, how they are used in hierarchy (dominant background color, accent color, text color). These colors drive every card in the grid.

Typography DNA: identify the exact typeface or typeface category [BRAND NAME] uses — serif, sans-serif, condensed, extended, grotesque, slab. Identify the weight hierarchy: what weight is used for headlines, what for body text, what for labels. Apply this typography system throughout all four cards.

Brand language: identify the tone of voice, key phrases, campaign slogans, product categories, founding year, key collaborators, cultural positioning. Extract real factual information about [BRAND NAME] that can be used as text content across the four cards — real product names, real campaign titles, real dates, real locations, real brand statements.

Visual codes: identify the photographic style associated with [BRAND NAME] — editorial fashion, sport, street, luxury, industrial. Identify compositional patterns the brand uses — full bleed photography, text-dominant layouts, graphic-only compositions, collage.

All text content across all four cards must be real information about [BRAND NAME] — not placeholder text, not generic copy. Real brand slogans, real product lines, real campaign names, real founding information.

---

PHASE 1: GRID SYSTEM

The output is a single image composed of four equal rectangular cards arranged in a 2×2 grid. Total image dimensions: square or slightly landscape — 1:1 or 4:3 ratio. Each card is identical in size — exactly one quarter of the total image area. A thin gap of 4 to 6px between cards — neutral dark or light depending on brand palette. The four cards form a unified editorial system — they share the same color palette and typography but each has a distinct layout typology. Together they tell the brand story.

---

PHASE 2: CARD 1 — HERO EDITORIAL (top left)

Layout typology: large bold typography layered over or integrated with photography. Dominant background color: [BRAND NAME]'s primary brand color at full saturation — fills the entire card. Photography: a fashion or lifestyle image relevant to [BRAND NAME]'s visual world — model, product, or environment. The photo is either full-bleed behind the text or cropped into a specific zone of the card with text occupying the remaining space. Photo treatment: slight blend mode integration with the background color — the photo and background feel like one unified surface. Typography: the most recognizable [BRAND NAME] headline or slogan in the largest type size on the card — bold condensed, uppercase, white or brand secondary color. The text is large enough to partially overlap the photo. Secondary small text: brand name, location, date — set in small caps or tracking-heavy small type in a corner. The overall feeling: a magazine cover or campaign poster.

---

PHASE 3: CARD 2 — EDITORIAL TEXT LAYOUT (top right)

Layout typology: text-dominant editorial layout with a small photo inset. Background: [BRAND NAME]'s secondary brand color or a dark neutral consistent with the brand palette. Large headline: a real [BRAND NAME] campaign title or brand statement broken across multiple lines — each line a different size or weight, creating a typographic staircase effect. The largest line is very large, the smallest is medium, they are left-aligned creating a ragged right edge. Small body text column: a real paragraph of brand information — founding story, product description, or campaign context — set in small regular weight type, positioned in the upper right or lower right of the card. Photo inset: a small rectangular photo — 20 to 30% of card area — positioned where it interrupts or overlaps the headline text, creating editorial tension. The photo has a colored border or frame in the brand primary color.

---

PHASE 4: CARD 3 — FASHION EDITORIAL (bottom left)

Layout typology: photography-forward with typography as structural background element. Photography: a strong fashion or product image — model wearing [BRAND NAME] product, or a key product hero shot. The photo is positioned in the left 50 to 60% of the card, cropped tightly. Photo treatment: slightly desaturated or high contrast — editorial black and white or brand-tinted. Background typography: behind and around the photo, a very large single word or letterform from [BRAND NAME]'s identity — set at 200 to 300% of the card height, in the brand primary or secondary color, acting as graphic wallpaper behind the photo. This background type is partially obscured by the photo. Body text: a column of real [BRAND NAME] editorial copy — 3 to 5 short paragraphs, small regular weight, positioned to the right of the photo. Pull quote: one sentence extracted from the body copy, set larger and in brand accent color, positioned between the photo and the body text.

---

PHASE 5: CARD 4 — CLEAN BRAND STATEMENT (bottom right)

Layout typology: minimal, graphic, brand identity statement. Background: white, off-white, or the lightest tone in [BRAND NAME]'s palette — maximum contrast with the other three cards. Primary element: [BRAND NAME]'s wordmark or brand name set in massive type — ultra-bold, condensed or extended depending on the brand's typographic DNA. The wordmark is broken across 2 to 3 lines, each line flush left, occupying 70 to 80% of the card width. Type color: black or the darkest brand color — maximum contrast on the light background. Secondary element: a model or product image positioned at the right edge of the card, slightly cropped — human presence that grounds the graphic layout. The model/product is not the focus — the typography is. Accent element: a year, a number, a collection identifier, or a brand slogan set small in the brand primary color — positioned as a superscript or footnote near the main wordmark, adding a handwritten or stamped quality.

---

PHASE 6: UNIFIED VISUAL SYSTEM

Typography consistency across all four cards: all type is set in typefaces consistent with [BRAND NAME]'s identity. Headline type: one typeface, one weight — the boldest, most brand-representative option. Body type: one typeface, regular weight — legible at small sizes. No decorative or unrelated typefaces. Color consistency: only the colors identified in PHASE 0 appear across all four cards — primary brand color, secondary brand color, neutral (white or black), and one accent. No colors outside this palette. No gradients. No drop shadows. No textures on type. Information consistency: all text is real [BRAND NAME] information. No lorem ipsum. No generic placeholder text. Every word on every card is either the brand name, a real product name, a real campaign title, a real date, a real location, or a real brand statement. Grid alignment: elements across cards share implied alignment axes — a headline that starts at a certain x-position in card 1 aligns with an element in card 3 at the same x-position. This creates visual cohesion across the 2×2 grid when viewed as a whole.

---

PHASE 7: TECH SPECS

Output: a single flat image of the complete 2×2 grid. No separate files. Aspect ratio: 1:1 square or 4:3 landscape. Total resolution feel: high enough to read all body text clearly. Typography rendering: all type anti-aliased and crisp — no blurry text. Photography: editorial quality, not stock photography aesthetic. Color accuracy: brand colors exactly as identified in PHASE 0 — not approximated. No film grain unless it is a brand-authentic texture. No vignettes. No lens flare. Clean, precise, editorial. Output feel: this moodboard could be published on Hypebeast, Highsnobiety, or used as an internal brand presentation deck slide.$p$,
  $w$Four-card grid system with distinct layout typologies (hero editorial, text layout, fashion editorial, brand statement) creates a comprehensive brand moodboard with visual rhythm.$w$,
  'curated',
  ARRAY['poster', 'brand-identity', 'moodboard', 'editorial', 'grid', 'template', 'design-system']
) ON CONFLICT (id) DO NOTHING;

-- 43. Music Group Brand Identity Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-bts-brand-identity',
  'Music Group Brand Identity Poster',
  'Posters',
  $input$BTS brand identity system poster with purple palette$input$,
  $p$Using the BTS logo, generate a premium brand identity system poster. Every element — color, tone, texture, and composition — must be derived directly from the logo. No generic outputs. Structure: Vertical 4:5 poster. Soft lavender to deep purple gradient background. Multi-layered grid. Dense, clean, zero dead space. Violet rule lines separate sections. Top: BTS logo in bold clean type. Brand statement: "Beyond The Scene." Identity descriptors: ARTISTIC / EMOTIONAL / GLOBAL. Colors: Primary — Royal Purple #5A2D82, Deep Violet #6A0DAD, Lavender #C8A2C8, White #FFFFFF. Secondary — Soft Lilac #E6D6F5, Silver Gray #D9D9D9, Pastel Purple #BFA2DB. Show large color blocks, HEX codes, usage labels, and a Lavender→Violet→Purple gradient bar. Typography: Display headline "Love Yourself." in white. Purple sans-serif subhead. Soft gray body text. Tiny monospaced caption. Clear 4-level hierarchy. Applications: Album cover mockup. Bright website hero with purple CTA. Mobile app music player UI. Three social posts — bold purple performance, soft emotional pastel, clean lavender lifestyle. Photocard layout. Purple gradient concert billboard. Icons: 8 line icons — music note, lightstick, heart, globe, stage, mic, star, wings. Purple 1.5px strokes. Consistent style. Patterns: Logo split repeat, gradient waves, geometric tiling, soft grid. Micro details: Glow highlights, glassmorphism panels, subtle grain, depth layers. Final feel: Behance top project. Agency-quality. Unmistakably BTS.$p$,
  $w$Specific brand color palette (Royal Purple, Deep Violet, Lavender) with structured sections (typography, applications, icons, patterns) creates a comprehensive identity system poster.$w$,
  'curated',
  ARRAY['poster', 'brand-identity', 'bts', 'music', 'purple', 'design-system', 'kpop']
) ON CONFLICT (id) DO NOTHING;

-- 44. Notion-Style Minimal Illustration
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-notion-style-illustration',
  'Notion-Style Minimal Illustration',
  'Open-Ended Creative',
  $input$Notion-style minimalist black and white illustration$input$,
  $p$A simple black-and-white illustration of a [subject] in [outfit], [doing action], with a [facial expression] expression, in a Notion-style minimalist editorial aesthetic, clean line art, flat monochrome design, simple shapes, subtle hand-drawn feel, minimal detail, expressive posture, clean white background, neat modern layout, soft playful character style$p$,
  $w$Minimal constraint set with specific style markers (Notion aesthetic, flat monochrome, simple shapes, hand-drawn feel) creates a distinctive editorial illustration style.$w$,
  'curated',
  ARRAY['illustration', 'notion', 'minimal', 'black-white', 'template', 'editorial', 'line-art']
) ON CONFLICT (id) DO NOTHING;

-- 45. Cinematic Character Design Sheet
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-cinematic-character-sheet',
  'Cinematic Character Design Sheet',
  'Storyboards',
  $input$Cinematic character design sheet for film production$input$,
  $p$"Create a cinematic, film-production-grade character design sheet intended for a director, casting team, and costume department. This must feel like a high-budget animated film pitch board, not a generic model sheet. CORE DIRECTIVE (NON-NEGOTIABLE) No generic layouts No evenly spaced grids No symmetry for the sake of neatness Composition must feel art-directed, intentional, slightly asymmetrical Every section should feel placed, not auto-generated  CHARACTER IDENTITY  Name: [Full character name] Alias / ID: [Nickname, codename, symbolic title] Age: [Real or stylized age logic] Height: [Exact height in cm/ft] Build: [Detailed body type with nuance — proportions, weight distribution, posture tendencies]  Ethnicity / Design Language: [Real-world influence or stylized hybrid approach — Pixar-esque, anime-inspired, culturally grounded, etc.]  FACE DESIGN  Structure: [Face shape, bone structure, exaggeration level, asymmetry]  Skin / Surface: [Texture, tone, subsurface softness, imperfections, stylization level]  Eyes: [Size, spacing, color, expressiveness, quirks]  Hair: [Style, texture, behavior (physics), imperfections, movement logic]  Distinct Features: [Any defining traits — scars, dimples, stretch, elasticity, etc.]  PSYCHOLOGICAL PROFILE (DRIVES PERFORMANCE)  Core Traits: [3–5 dominant personality traits]  Internal Conflict: [What they want vs what sabotages them]  Behavior Patterns: [Habit 1] [Habit 2] [Habit 3]  Emotional Baseline: [Default emotional state + how quickly it shifts]  PERFORMANCE DIRECTION (CRITICAL)  Character must feel like a real actor caught mid-moment, not posing.  Expression Notes: Micro-expressions required (lip tension, eye movement, eyebrow shifts) Avoid staged symmetry Capture transitional emotion (before/after reaction)  Body Language: [Posture tendencies] [Movement rhythm: stiff, bouncy, dragging, sharp, etc.] [Idle behavior: fidgeting, stillness, tension]  WARDROBE (PRODUCTION-REALISTIC WITH STYLIZATION)  Primary Outfit: [Garment 1: fabric type, wear, imperfections] [Garment 2: fit, distortion, stitching details] [Layering logic]  Footwear: [Material, wear patterns, realism vs stylization]  Accessories: [Functional + character-revealing items]  Props: [Objects frequently carried that reinforce personality]  MATERIAL & TEXTURE ACCURACY  Fabrics must show stretch, stitching, wrinkles, wear Surfaces must avoid plastic look unless intentionally stylized  Skin should have soft light interaction, slight bounce Include imperfections: dirt, smudges, aging, usage marks  TURNAROUND REQUIREMENTS (STRICT CONSISTENCY)  Generate full-body turnaround with identical proportions and design fidelity: Front View 3/4 View Side View Back View 3/4 Back View  No drift in proportions, face, or costume.  HEAD STUDY (ACTOR REFERENCE QUALITY)  Include expressive head variations: Front (neutral or controlled expression) 3/4 (primary personality expression) Profile (structure clarity) Looking Down (emotion: [insert]) Looking Up (emotion: [insert]) Dynamic Angle (emotion: [insert intense state])  Expressions must feel captured mid-thought, not posed.  CINEMATIC PORTRAIT (FILM STILL)  Environment: [Specific location tied to character behavior]  Lighting: [Motivated sources — practical lights, ambient glow, contrast level]  Color Tone: [Palette direction — warm, cool, mixed, stylized]  Expression: [Specific narrative moment]  Camera: [Real-world lens feel — 50mm, 85mm, etc.] Shallow depth of field, cinematic realism  CAMERA + LIGHTING SPECIFICATIONS  Full Body: Lens: [e.g., 35mm] Lighting: soft key + bounce Natural exposure, no HDR  Portrait: Lens: [e.g., 85mm] Depth of field: shallow Focus priority: eyes and expression  COMPOSITION & LAYOUT  Clean but art-directed sheet layout  Neutral background (gray or soft tone) for turnaround  Structured but visually dynamic section placement Include: Height scale reference Annotation callouts (fabric stretch, personality cues, prop usage) Wardrobe breakdown section Notes for production  Layout must feel like a premium studio presentation board STYLE  [Define clearly]  Examples: Pixar-style stylized realism Hyper-expressive animation realism Semi-realistic cinematic character design  Must include: Appealing exaggeration Soft geometry Cinematic lighting High emotional readability  CONSISTENCY RULE (STRICT)  Face, proportions, costume, and details must remain identical across all views and sections No reinterpretation between angles.  OUTPUT QUALITY  Extremely high detail Sharp focus Production-ready fidelity Suitable for film development, merchandising, and pitch decks"$p$,
  $w$Comprehensive character design sheet with specific requirements for turnaround views, head studies, wardrobe breakdown, and cinematic portrait creates a production-quality reference.$w$,
  'curated',
  ARRAY['storyboard', 'character-design', 'character-sheet', 'cinematic', 'film', 'template', 'turnaround']
) ON CONFLICT (id) DO NOTHING;

-- 46. Anime Beast Transformation Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-gohan-beast-poster',
  'Anime Beast Transformation Poster',
  'Posters',
  $input$Anime warrior transformation poster with energy aura and arcane ring$input$,
  $p$Ultra-detailed anime illustration of a powerful male warrior inspired by Gohan Beast transformation, standing in a dominant full-body pose, low-angle cinematic perspective, muscular physique, torn purple gi outfit with red sash, glowing red eyes, sharp facial features with battle damage and scratches, extremely spiky silver hair with high volume, intense aura of purple energy flames surrounding the body, floating debris and particles, dramatic energy bursts.
Background features a large circular arcane energy ring with intricate glowing symbols and sci-fi magical UI patterns, perfectly centered behind the character like a halo, emitting bright violet light rays. Energy waves expanding outward, lightning streaks and particle effects filling the scene.
Highly detailed textures, anime + semi-realistic fusion style, insane linework, cinematic lighting, high contrast, volumetric glow, depth of field, 8K resolution, poster composition, perfectly centered symmetry, ultra sharp focus.
--ar 9:16 --v 6 --style raw --q 2 --s 750$p$,
  $w$Specific transformation details (spiky silver hair, purple energy aura, arcane energy ring) combined with technical render specs and centered symmetry creates a dynamic anime poster.$w$,
  'curated',
  ARRAY['anime', 'dragon-ball', 'gohan', 'poster', 'transformation', 'energy', 'cinematic']
) ON CONFLICT (id) DO NOTHING;

-- 47. Office Burnout Bathtub Illustration
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-burnout-bathtub-illustration',
  'Office Burnout Bathtub Illustration',
  'Open-Ended Creative',
  $input$Grainy illustration of a tired office worker in a bathtub of paperwork$input$,
  $p$Stylized grainy illustration of a tired office worker sitting in a bathtub full of paperwork instead of water, holding a coffee cup like it's the only lifeline, exaggerated long neck and small head, messy stacks floating around, expressive minimal face, bold rough outlines, high texture, absurd everyday burnout scene$p$,
  $w$Absurd everyday scenario (bathtub of paperwork) with specific style markers (grainy texture, exaggerated proportions, minimal face) creates a relatable editorial illustration.$w$,
  'curated',
  ARRAY['illustration', 'grainy', 'humor', 'burnout', 'office', 'editorial', 'surreal']
) ON CONFLICT (id) DO NOTHING;

-- 48. Alarm Clock Chaos Illustration
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-alarm-clock-chaos',
  'Alarm Clock Chaos Illustration',
  'Open-Ended Creative',
  $input$Grainy illustration of a person sleeping while alarm clocks ring everywhere$input$,
  $p$Stylized grainy illustration of a person trying to sleep in bed while dozens of alarm clocks are already ringing around them, stacked, hanging, floating in the air, the person lies calmly with eyes closed as if ignoring the chaos, elongated proportions, minimal bedroom setting, rough noisy texture, humorous contrast.$p$,
  $w$Humorous contrast between calm character and chaotic alarm clocks with rough noisy texture creates an instantly relatable morning illustration.$w$,
  'curated',
  ARRAY['illustration', 'grainy', 'humor', 'alarm-clock', 'morning', 'editorial', 'chaos']
) ON CONFLICT (id) DO NOTHING;

-- 49. Surreal Door Loop Illustration
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-door-loop-surreal',
  'Surreal Door Loop Illustration',
  'Open-Ended Creative',
  $input$Grainy illustration of a person trapped in repeating door frames$input$,
  $p$Grainy stylized illustration of a person trying to leave a room, but every door leads back into the same space, repeating door frames stretching into depth, slightly frustrated expression, minimal interior, graphic shapes, surreal looped moment.$p$,
  $w$Surreal looping concept (doors leading to same room) with minimal interior and graphic shapes creates an existential visual metaphor.$w$,
  'curated',
  ARRAY['illustration', 'grainy', 'surreal', 'loop', 'existential', 'editorial', 'minimal']
) ON CONFLICT (id) DO NOTHING;

-- 50. Phone Notification Drip Illustration
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-notification-drip',
  'Phone Notification Drip Illustration',
  'Open-Ended Creative',
  $input$Grainy illustration of phone notifications dripping like liquid$input$,
  $p$Stylized grainy illustration of a person holding a phone, while notifications physically drip out of it like liquid, flowing over their hands and onto the floor, the character watches calmly, elongated proportions, bold composition, noisy texture, ironic digital overload.$p$,
  $w$Physical manifestation of digital overload (notifications dripping like liquid) with calm character reaction creates ironic commentary through illustration.$w$,
  'curated',
  ARRAY['illustration', 'grainy', 'humor', 'phone', 'notifications', 'digital', 'ironic']
) ON CONFLICT (id) DO NOTHING;

-- ============================================================================
-- SKIP PROMPTS (4) — need reference/input image
-- ============================================================================

-- 17. Dual Split Techwear Portrait
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-dual-split-techwear',
  'Dual Split Techwear Portrait',
  'Cinematic',
  $input$Dual left/right split portrait with techwear and HUD elements$input$,
  $p$Exact same face from reference, no structural changes, true facial identity preserved, natural variation only in hair strands and skin micro-texture.
A female, lean athletic build, ultra-realistic skin (visible pores, subtle imperfections, natural sheen, no over-smoothing), sharp jawline, calm dominant presence.
COMPOSITION — LEFT / RIGHT SPLIT (4:5)
LEFT — EXECUTION CORE
Left-facing side profile, head slightly lowered, calm focused gaze, expression controlled and decisive.
Outfit: black structured techwear jacket, fitted inner layer, utility trousers, combat boots, minimal accessories.
Lighting: soft cinematic side light, deep shadows, rim highlight, pure realism (no overlays).
Mood: quiet, grounded, already decided.
RIGHT — TACTICAL MIND
Same identity, slightly turned toward camera, sharp calculating expression.
Tactical techwear, subtle mechanical details, transparent visor.
Semi-transparent HUD glass (~85%), minimal clean interface lines, soft silver-blue glow.
SYSTEM EFFECTS (RIGHT ONLY):
Cool white/blue futuristic UI glow, minimal HUD details.
HEARTBEAT: (RIGHT ONLY)
Faint ECG line on lower chest, thin waveform, subtle moving glow, integrated into HUD.
DESIGN: Thin geometric right panel border, soft silver-blue glow, blended edges.
ENVIRONMENT: Dark cinematic studio, soft haze, controlled light beams, subtle reflective floor.
MOOD: Silent, controlled, intentional left human calm, right system active.$p$,
  $w$The strict LEFT/RIGHT split with different visual treatments (realism vs HUD overlay) combined with consistent identity across both halves creates a compelling duality concept.$w$,
  'curated',
  ARRAY['cinematic', 'portrait', 'techwear', 'split', 'hud', 'dual', 'futuristic']
) ON CONFLICT (id) DO NOTHING;

-- 18. Doodle Overlay Cartoon Transform
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-doodle-overlay-cartoon',
  'Doodle Overlay Cartoon Transform',
  'Image Edits',
  $input$Add playful doodle elements over a photo then cartoon transform$input$,
  $p$Analyze the uploaded image and preserve the original subject, composition, and lighting. Do not alter the identity or facial structure of the main character. Add playful hand-drawn doodle elements that interact directly with the subject in the photo. The doodles should mimic, follow, or exaggerate the existing shapes, gestures, or movements — such as outlining the pose, extending arms or legs, adding motion lines, or creating imaginative elements that "react" to the subject.
Step 2:
Transform the entire image into a cute cartoon-style illustration with adorable doodle aesthetics. Maintain the original scene and character details while applying a vibrant, soft, and playful cartoon look.$p$,
  $w$Two-step instruction (doodle overlay then cartoon transform) creates a layered transformation effect. Specifying that doodles interact with the subject prevents generic overlays.$w$,
  'curated',
  ARRAY['image-edit', 'doodle', 'cartoon', 'overlay', 'transformation', 'playful']
) ON CONFLICT (id) DO NOTHING;

-- 20. Fantasy Popup Book Portrait
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-fantasy-popup-book',
  'Fantasy Popup Book Portrait',
  'Open-Ended Creative',
  $input$Fantasy popup book with uploaded person as protagonist$input$,
  $p${
"style":"ultra-detailed cinematic fantasy popup-book realism, handcrafted premium paper diorama, semi-realistic Disney-inspired fantasy aesthetic",

"subject":{
"main_character":"use uploaded person as protagonist",
"identity_preservation":"preserve exact face, eyes, lips, hair, and identity",
"character_style":"semi-realistic fantasy character",
"theme":"fairytale popup-book universe",
"action":"exploring magical world, looking upward in awe at dragons, floating clouds, stars, castles, or fantasy elements"
},

"scene":"a giant opened popup storybook where the fantasy world physically rises from the pages",

"composition":{
"camera":"top-view cinematic overhead shot",
"book_visibility":"entire open book visible with center fold",
"depth":"strong foreground, midground, and background layering"
},

"world":[
"paper castles",
"paper forests",
"paper staircases",
"paper mountains",
"paper flowers",
"floating paper clouds",
"dragons",
"storybook villages"
],

"materials":"premium layered paper craft with realistic folds, paper edges, handcrafted textures, and soft dimensional shadows",

"lighting":"warm golden-hour cinematic lighting with dreamy atmosphere",

"camera_details":"50mm lens, shallow depth of field, miniature photography aesthetic",

"colors":"cream, warm green, soft blue, coral, gold accents",

"quality":"16K ultra realistic, hyper detailed, cinematic volumetric lighting",

"negative_prompt":[
"cheap toy look",
"plastic textures",
"fully 2D illustration",
"bad anatomy",
"AI artifacts",
"blurry face",
"book not visible",
"flat composition",
"identity change"
],

"aspect_ratio":"4:5",

"output_goal":"a real human transformed into the main character of a magical handcrafted popup fairytale world"
}$p$,
  $w$The popup book metaphor combined with overhead camera angle and specific material descriptors (paper folds, handcrafted textures) creates a convincing miniature diorama aesthetic.$w$,
  'curated',
  ARRAY['popup-book', 'fantasy', 'fairytale', 'diorama', 'miniature', 'creative', 'portrait']
) ON CONFLICT (id) DO NOTHING;

-- 36. Double Exposure Travel Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-double-exposure-travel',
  'Double Exposure Travel Poster',
  'Posters',
  $input$Double exposure travel poster with Parisian cityscape$input$,
  $p$A high-end cinematic travel poster featuring a professional double exposure composition. Use a provided reference image for the character's face structure and hairstyle. The subject is a beautiful woman with long curly hair and round gold-rimmed sunglasses, wearing a camera draped over her shoulder, suggesting she is a traveler or photographer.

Her silhouette is blended with a detailed Parisian cityscape inside her lower half, featuring the Eiffel Tower, classic Haussmann-style architecture, and a charming sidewalk café with wicker chairs and a white coffee cup. The lighting is warm golden-hour sunlight, creating a dreamy, nostalgic, and cinematic atmosphere with soft highlights in her hair and across the city scene.

The background is clean and minimal white to emphasize the subject and double exposure effect. At the top, bold elegant serif typography with a metallic gold gradient reads 'TRAVEL TO FRANCE', while 'Paris' appears in delicate cursive script near the title.

Overall style is a luxury travel magazine cover, ultra-detailed, professional editorial photography aesthetic, balanced composition, soft depth, and premium tourism advertising feel.$p$,
  $w$Double exposure blending a portrait silhouette with a cityscape, combined with warm golden-hour lighting and metallic gold typography creates a premium travel poster.$w$,
  'curated',
  ARRAY['poster', 'travel', 'double-exposure', 'paris', 'portrait', 'cinematic', 'editorial']
) ON CONFLICT (id) DO NOTHING;
