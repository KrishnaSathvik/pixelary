-- Batch 5: 23 new curated prompts
-- Run in Supabase SQL Editor (anon key cannot INSERT due to RLS)

-- ============================================================================
-- GENERATION PROMPTS (19) — can generate thumbnails
-- ============================================================================

-- 1. Deconstructed Multimedia Portrait Collage
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-deconstructed-portrait-collage',
  'Deconstructed Multimedia Portrait Collage',
  'Cinematic',
  'high-fashion portrait with blueprint overlay and autumn leaves',
  'A high-fashion cinematic portrait of a young woman with a thoughtful expression, looking slightly upward. The image is a deconstructed multimedia collage: her face is overlaid with faint, intricate architectural blueprints, geometric grid lines, and technical schematics. The composition features an explosive, splattered edge effect with charcoal and white paint strokes. Scattered hyper-realistic orange autumn maple leaves drift around her neck and hair. She wears a thick, textured brown knit scarf. High-contrast lighting, 8k resolution, ultra-sharp focus on the eyes, featuring hyper-realistic skin textures, muted earth-tone color palette with pops of vibrant orange, editorial photography style.',
  'Layering architectural blueprints and technical schematics over a portrait creates a unique mixed-media effect. The specific paint-splatter edge treatment, combined with hyper-realistic autumn leaves, gives the model clear textural contrasts to render. Earth tones with pops of orange provide a controlled color palette that feels cohesive.',
  'curated',
  ARRAY['portrait', 'collage', 'mixed-media', 'fashion', 'editorial', 'blueprint', 'autumn']
) ON CONFLICT (id) DO NOTHING;

-- 2. Street Dance Choreography Sheet
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-choreography-sheet-infographic',
  'Street Dance Choreography Sheet',
  'Infographics',
  'colored pencil choreography sheet infographic for street dance',
  'A colored pencil sketch style choreography sheet infographic for an urban street dance solo performance.

Layout: 16 steps arranged in a clean 4x4 grid, each panel showing a different breakdance-inspired move.

Subject: a teenage Asian girl with long wavy hair, wearing effortless urban streetwear with stylish layered details (oversized washed black hoodie, loose cargo jogger pants, fitted inner top, chunky sneakers with muted grey, soft lavender, and faded blue accents, silver chain accessories, fingerless gloves).

Style: hand-drawn colored pencil illustration, soft shading, visible pencil texture, slightly sketchy but clean lines, muted urban tones blended with subtle pastel accents and dark outfit contrast.

Movement: each frame shows dynamic breakdance motions and freestyle street dance energy (toprock, footwork, spins, freezes, slides, shoulder drops, groove transitions, power poses), with small arrows indicating movement direction, momentum, and flow.

Design: modern urban dance aesthetic, minimal and stylish infographic layout, subtle graffiti-inspired visual accents, step numbers (1–16), short captions under each frame.

Text: Title at the top — "URBAN STREET BREAKDANCE – 16 COUNTS – 10 SECONDS – FREESTYLE FLOW".

Environment: simple industrial dance studio background with concrete textures, soft cinematic lighting, minimal shadows.

Quality: high detail, sharp composition, balanced layout, editorial dance tutorial poster, stylish choreography reference sheet.',
  'The 4x4 grid with numbered steps gives the model a rigid structural constraint that prevents layout drift. Specifying the colored pencil medium with visible texture creates a distinctive hand-drawn aesthetic. Movement arrows and caption callouts add informational density that makes the infographic feel functional rather than decorative.',
  'curated',
  ARRAY['infographic', 'dance', 'choreography', 'colored-pencil', 'streetwear', 'grid', 'tutorial']
) ON CONFLICT (id) DO NOTHING;

-- 3. UK Citizenship Identity Card
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-uk-citizenship-card',
  'UK Citizenship Identity Card',
  'Cinematic',
  'ultra-realistic studio photo of a UK citizenship identity card',
  'Ultra-realistic 16:9 close-up studio photograph of a United Kingdom citizenship identity card placed on a clean light grey or white background. The card is horizontally aligned, centered in frame, captured in sharp focus with soft diffused studio lighting.
The design follows an official government-issued ID aesthetic with structured layout, clean typography, and advanced anti-counterfeit detailing. The top header reads: "UNITED KINGDOM" and "CITIZENSHIP CARD," with a subtitle: "The United Kingdom of Great Britain and Northern Ireland."
Top-left includes the Union Jack flag. Top-right features the royal coat of arms.
The card contains a passport-style portrait of a young British woman:
– Fair to light skin tone with natural freckles
– Medium-length brown hair, softly wavy, center-parted
– Hazel or light brown eyes, neutral expression, direct gaze
– Minimal makeup, natural skin texture
– Wearing a dark top with small gold hoop earrings
Personal identity details displayed clearly in bilingual format (English / Welsh):
– Surname / Cyfenw: WILLIAMS
– Given names / Enwau cyntaf: OLIVIA ANNE
– Date of birth / Dyddiad geni: 23 MAY / MAI 1994
– Place of birth / Lleoliad geni: MANCHESTER, ENGLAND
– Nationality / Cenedligrwydd: BRITISH CITIZEN
– Citizenship number / Rhif dinasyddiaeth: UKC-94-523456
– Date of issue / Dyddiad cyhoeddi: 17 APR / EBR 2024
– Date of expiry / Dyddiad dod i ben: 17 APR / EBR 2034
– Sex / Rhyw: F
Security and design features include:
– Intricate guilloche patterns across the entire surface
– Fine-line engraving and microprinted text
– Holographic security patch with iridescent reflections
– Circular "UK" seal with crown emblem
– Subtle Union Jack pattern blended into background
– Engraved illustration of Big Ben / Westminster Palace on right side
– Signature at bottom: "Olivia A. Williams"
Additional elements:
– Machine-readable ID strip and barcode at bottom
– Subtle red, blue, and white gradient accents inspired by UK flag
Material: laminated polycarbonate card with slight gloss, visible reflections, layered holographic overlays.
Lighting: soft, even studio lighting highlighting texture, print clarity, and security features.
No hand visible. Clean, minimal, professional composition.
Style: ultra-detailed, photorealistic, 8K resolution, macro clarity, professional product photography.',
  'Exhaustive specification of every card element — guilloche patterns, holographic patches, bilingual text fields, machine-readable strips — forces the model to render a convincingly detailed government document. The studio photography framing with material callouts (laminated polycarbonate, visible reflections) adds physical realism.',
  'curated',
  ARRAY['photorealism', 'document', 'identity-card', 'product-photography', 'studio', 'official']
) ON CONFLICT (id) DO NOTHING;

-- 4. Jinx from Arcane — Thick Paint Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-jinx-arcane-poster',
  'Jinx from Arcane — Thick Paint Poster',
  'Posters',
  'Jinx from Arcane in American thick paint illustration poster',
  'Jinx from Arcane, rendered in an American-style thick paint illustration. Side-profile, half-body close-up with the character faithfully matching the original design, gaze directed to the left. Minimalist beige background with extensive negative space, composition weighted to the right. Clean, premium aesthetic with soft, cinematic lighting, rim light, high contrast but low saturation color palette, with subtle accent colors reflecting the character''s main tones. Geometric, faceted painting style with detailed skin texture and hair strands. Commercial poster layout with bold headline typography design. Vertical 9:16 format.',
  'The "American-style thick paint" directive creates a distinctive textured medium. Side-profile composition with right-weighted framing and extensive negative space gives the layout commercial poster DNA. Low saturation with subtle character-matched accents prevents the usual oversaturated anime look.',
  'curated',
  ARRAY['poster', 'arcane', 'character', 'thick-paint', 'illustration', 'commercial', 'portrait']
) ON CONFLICT (id) DO NOTHING;

-- 5. Attack on Titan Eren — Thick Paint Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-aot-eren-poster',
  'Attack on Titan Eren — Thick Paint Poster',
  'Posters',
  'Attack on Titan Eren Yeager thick paint illustration poster',
  '"Attack on Titan – Eren Yeager" in an American-style thick paint illustration, side-profile half-body close-up. The character faithfully matches the original design, looking toward the left. Minimalist beige background with extensive negative space, right-aligned composition, clean and premium aesthetic. Soft cinematic lighting with rim light, high contrast but low saturation color palette, with subtle accents of the character''s main colors. Geometric faceted shading style, detailed skin and hair rendering. Commercial poster layout with bold headline typography design. 9:16 vertical format.',
  'Same proven thick-paint poster formula applied to a different character. The geometric faceted shading creates painterly depth while the minimalist beige background and commercial layout prevent the typical busy anime aesthetic. Naming the specific character ensures design fidelity.',
  'curated',
  ARRAY['poster', 'anime', 'character', 'thick-paint', 'illustration', 'commercial', 'portrait']
) ON CONFLICT (id) DO NOTHING;

-- 6. Business Leader Ink & Watercolor Portrait
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-business-leader-ink-portrait',
  'Business Leader Ink & Watercolor Portrait',
  'Posters',
  'business leader portrait with ink sketch and watercolor splashes',
  'A powerful portrait of a high-status business leader wearing a premium luxury formal suit (tailored dark suit, crisp white shirt, elegant tie).
Sharp facial features, clean grooming, ultra-realistic detailing.
Expression & Mood:
Calm, confident, and highly authoritative expression — focused gaze symbolizing intelligence, control, and global influence.
Pose & Composition:
Half-body portrait (chest-up)
Slight diagonal cinematic angle for depth and intensity
Strong executive posture (hands relaxed or adjusting suit)
Art Style:
Hand-drawn ink sketch lines blended with watercolor textures
Luxury-inspired gold, black, and deep blue/red paint splashes
Dynamic abstract brush strokes representing power and innovation
Highly detailed realistic face with subtle gritty texture
Background:
Clean white or soft neutral base
Elegant watercolor splashes (gold + dark tones)
Soft glowing aura behind the subject for a premium elite feel
Typography Elements:
Main Title:
"[TYPE HERE]"
Name:
"[TYPE HERE]" (bold handwritten luxury brush style)
Extra Details:
Subtle gold accents for premium billionaire aesthetic
Light grunge texture overlay for cinematic depth
Minimal crown or abstract wealth/power symbols
Signature (Bottom):
"[TYPE HERE]"
Optional Quote Section:
"[TYPE HERE]"
Mood & Tone:
Elite, powerful, cinematic, luxury-driven legacy aesthetic',
  'The ink-sketch-meets-watercolor medium creates a premium editorial look. Structured layout with typography placeholders makes this a reusable template. Gold + black + deep blue palette with dynamic brush strokes conveys luxury without being gaudy. The diagonal cinematic angle adds visual tension to what could be a static portrait.',
  'curated',
  ARRAY['portrait', 'business', 'ink', 'watercolor', 'luxury', 'editorial', 'poster', 'template']
) ON CONFLICT (id) DO NOTHING;

-- 7. Instagram Frame 3D Breakout Scene
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-instagram-breakout-3d',
  'Instagram Frame 3D Breakout Scene',
  'Social Posts',
  '3D scene of woman bursting out of Instagram post frame',
  'A hyper-realistic 3D cinematic scene of a stylish young woman bursting out of a tilted Instagram post frame, breaking through a cracked concrete wall with debris and dust flying in motion, dynamic forward stepping pose with one leg outside the frame creating strong depth illusion, confident intense facial expression, short messy black bob haircut with volume and soft waves, wearing a black fitted turtleneck top with beige cargo pants and an oversized beige trench coat, black combat boots, gold hoop earrings and minimal necklace, dramatic cinematic lighting, high contrast shadows, ultra detailed textures, Instagram UI with profile name Noor and verification badge visible, viral social media concept, motion freeze, depth of field, 8k, ultra realistic',
  'The "breaking out of a frame" concept creates an eye-catching dimensional illusion. Specific outfit details (turtleneck, cargo pants, trench coat, combat boots) give the model enough to render a cohesive look. The cracked concrete and debris add dynamism while the Instagram UI overlay grounds it in a social media context.',
  'curated',
  ARRAY['3d', 'instagram', 'social-media', 'breakout', 'cinematic', 'fashion', 'viral']
) ON CONFLICT (id) DO NOTHING;

-- 8. TIME Magazine Cover Recreation
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-time-magazine-cover',
  'TIME Magazine Cover Recreation',
  'Posters',
  'realistic TIME magazine cover with portrait and editorial layout',
  'A highly detailed realistic photograph of a TIME magazine cover, red border, white background. Top right corner text reads "APRIL 29 / MAY 6, 2024". Large bold text at the top: "THE MOST INFLUENTIAL COMPANIES" above big red "TIME" and black "100".
Main subject is a close-up portrait of Hailey Bieber, elegant and beautiful, with sleek dark brown hair parted in the middle and pulled back into a tight low bun, flawless glowing skin, subtle makeup with glossy nude lips and defined eyebrows. She is looking slightly to the left with a confident expression.
A large, glossy, deep red Anthurium flower (with prominent spadix) is positioned near her neck and shoulder. She is wearing a white feathery or fluffy garment.
On the left side in bold text: "HOW HAILEY BIEBER DREAMS UP Rhode". Below it a vertical list of company names: APPLE, NVIDIA, MICROSOFT, AMAZON, TIKTOK, DISNEY, NETFLIX, UNITEDHEALTH + 90 MORE. Bottom right corner has "http://time.com".
Professional studio lighting, clean editorial style, high resolution, sharp details, iconic TIME magazine cover composition.',
  'Exhaustive recreation of every element of a recognizable magazine cover — red border, masthead placement, cover lines, date stamp, company list. The Anthurium flower prop and white feathery garment add specific editorial styling cues. This level of layout detail tests and showcases text rendering and compositional control.',
  'curated',
  ARRAY['magazine', 'cover', 'editorial', 'portrait', 'typography', 'photorealism', 'time']
) ON CONFLICT (id) DO NOTHING;

-- 9. Luxury Skincare Campaign Ad
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-luxury-skincare-ad',
  'Luxury Skincare Campaign Ad',
  'Posters',
  'high-end luxury skincare advertisement with Dior-style satin background',
  'Create a high-end luxury skincare advertisement. A young woman with radiant, glassy, and naturally glowing skin with soft highlights is holding a vitamin C face serum bottle close to her cheek. Only use the bottle, no box. Background should be elegant silky satin fabric (Dior-style) with smooth folds, in a rich champagne–olive tone, softly lit with golden highlights and gentle shadows to create depth and luxury.
Outfit should be a silky satin dress matching the background tones (olive/champagne), slightly reflective, premium fabric texture.
Lighting: soft diffused front light + subtle golden rim light on hair + gentle glow on skin. DSLR quality, shallow depth of field.
Add minimal, premium typography on the left side:
"10% Vitamin C" (large, elegant serif)
"Face Serum" (smaller)
"Triple Glow +++" (refined thin style)
Add 3–4 minimal benefit points with small luxury icons:
Boosts natural glow
Fades dark spots
Hydrates & repairs
Antioxidant protection
Text and icons should be subtle gold/cream tone, well-spaced, not cluttered.
Composition should feel like a Dior-style campaign: clean, balanced, cinematic, ultra-realistic, premium skincare ad.',
  'The Dior-style satin background with matching outfit creates a monochromatic luxury palette. Specific lighting setup (diffused front + golden rim + skin glow) mimics professional beauty photography. Typography hierarchy with benefit points adds commercial readability without cluttering the premium feel.',
  'curated',
  ARRAY['skincare', 'advertisement', 'luxury', 'beauty', 'product', 'editorial', 'dior-style']
) ON CONFLICT (id) DO NOTHING;

-- 10. Snack Brand Identity System Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-snack-brand-identity-system',
  'Snack Brand Identity System Poster',
  'Infographics',
  'premium snack brand identity system poster with dark theme',
  'Create a premium snack brand identity system poster using the provided logo as the only source of visual DNA.
All design decisions must be derived from the logo itself including color palette, tone, shapes, textures, and visual rhythm. Do not reference or imitate existing brands. Build a bold, original, high-energy snack identity.
Canvas & Layout: Vertical 4:5 aspect ratio. Dark near-black background (#0D0D0D range). Dense multi-layered grid system. No empty space, every area should feel intentional. Use sharp accent-colored rule lines to divide sections.
Top Section: Prominent brand wordmark in bold, clean, modern display type. Brand statement: "Snack Loud. Live Bigger." Three descriptors: BOLD / PLAYFUL / HIGH-ENERGY. Tight spacing, strong hierarchy, visually punchy.
Color System: Primary palette derived from logo. Display as large swatches with HEX codes and usage labels. Include a gradient strip.
Typography System: Headline: bold display sans-serif, white, text: "Make It Viral." Subhead: modern sans-serif in accent color. Body: light gray. Caption: tiny monospaced font. Show clear 4-level hierarchy with scale contrast.
Applications Section: Chocolate bar packaging mockup (hero focus, premium lighting). Dark e-commerce website hero with bold CTA. Mobile product card UI. Three social posts (bold hype style, dark premium style, fun lifestyle style). Business card with neon edge stripe. Full-bleed billboard campaign.
Icon System: 8 minimal line icons (1.5px stroke). Pattern System: Logo-based repeat grid, diagonal neon stripes, dot matrix texture, monogram tile pattern.
Micro Details: Layered soft shadows, foil texture, gloss reflections, cross-section depth slices.
Overall Feel: Behance-level presentation, agency-quality execution, high-energy snack branding, sharp, modern, bold, and addictive visual language.',
  'Exhaustive brand system specification — color swatches with HEX codes, 4-level typography hierarchy, icon system with stroke weights, multiple application mockups — forces the model to render a comprehensive, agency-grade presentation. The dark background with neon accents creates visual punch while the grid system maintains order.',
  'curated',
  ARRAY['brand-identity', 'snack', 'packaging', 'branding', 'behance', 'dark-theme', 'grid-system']
) ON CONFLICT (id) DO NOTHING;

-- 11. East Asian Imperial Flame Character
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-imperial-anime-flame-character',
  'East Asian Imperial Flame Character',
  'Open-Ended Creative',
  'ornate East Asian imperial anime character with flame aesthetic',
  'An ultra-detailed, ornate East Asian imperial illustration of a regal anime-style male character inspired by flame aesthetics, standing in a full-body portrait pose. He has long flowing golden-blonde hair with fiery red-orange tips, styled voluminously with elegant movement, sharp eyes, and a calm, noble expression.
He wears luxurious layered traditional robes in deep red, gold, and ivory tones, heavily embroidered with intricate phoenix and flame motifs, with detailed patterns, brocade textures, and gold thread ornamentation. The sleeves are wide and flowing, with rich inner linings and tassel accessories hanging from the waist.
The background is a highly decorative classical Chinese painting composition: golden clouds, distant mountains, a large red sun, traditional lanterns, floral elements (peonies), and ornate architectural panels with vertical calligraphy scrolls.
Color palette is warm and rich: crimson, gold, amber, ivory, and black accents.
Art style blends anime character design with traditional Chinese ink painting and gold-leaf illustration.
Highly detailed, symmetrical composition, soft atmospheric depth, elegant lighting, intricate textures, premium poster quality, 4K resolution. 2:3 aspect ratio.',
  'Blending anime character design with traditional Chinese ink painting and gold-leaf illustration creates a distinctive fusion style. The exhaustive costume detail (phoenix motifs, brocade textures, gold thread, tassel accessories) gives the model rich material to render. The warm crimson-gold-amber palette with symmetrical composition creates an iconic, regal presentation.',
  'curated',
  ARRAY['anime', 'chinese', 'imperial', 'character-design', 'illustration', 'gold-leaf', 'fantasy']
) ON CONFLICT (id) DO NOTHING;

-- 12. Printmaking Pastel Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-printmaking-pastel-poster',
  'Printmaking Pastel Poster',
  'Open-Ended Creative',
  'printmaking poster with pastel colors and vintage texture',
  'A crisp, printmaking-like aesthetic with bold outlines and natural deformation. Pastel color palette, vintage print texture, slightly misaligned ink layers, and rough paper grain. A calm poster composition with generous negative space rather than filling the frame. Props and background kept minimal. Color theme 2–3 colors.',
  'Deliberately minimal prompt that works by specifying a precise aesthetic rather than content. The "misaligned ink layers" and "rough paper grain" create authentic printmaking imperfections. Limiting to 2-3 colors with generous negative space prevents the model from overproducing detail, resulting in a refined, gallery-worthy output.',
  'curated',
  ARRAY['printmaking', 'pastel', 'minimal', 'vintage', 'poster', 'texture', 'negative-space']
) ON CONFLICT (id) DO NOTHING;

-- 13. Convenience Store Action Storyboard
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-convenience-store-storyboard',
  'Convenience Store Action Storyboard',
  'Storyboards',
  'cinematic 3x3 storyboard of action sequence in convenience store',
  'A cinematic 3x3 storyboard grid showing a dramatic action sequence inside a modern convenience store at night. The style is dark, moody, high-end film stills, realistic lighting, slight teal-green color grading, shallow depth of field, motion blur in action shots.

Each of the 9 panels should be separated by thin black borders, forming a clean storyboard layout.

Each panel has small white text in the top-left corner showing: Shot number (SHOT 1–9), Camera type (e.g. ARRI Alexa Mini LF), Lens (e.g. 35mm, 50mm, 85mm). Subtle cinematic subtitles in English at the bottom of each frame describing the action. Maintain consistent character appearance: a young athletic Asian woman, energetic and physically strong, toned body, lively yet intense expression, wearing a pink spaghetti-strap sports top and a pink sporty mini skirt, with practical athletic styling suited for fast movement.

SHOT 1 – Medium shot, 35mm: A young athletic woman standing in a convenience store aisle, casually looking at a snack package. Fluorescent lighting, calm atmosphere.
SHOT 2 – Wide shot, 24mm: Store doors burst open violently. A large group of heavily armed tactical soldiers rush in.
SHOT 3 – Over-the-shoulder shot, 50mm: From behind the woman, facing a line of soldiers aiming rifles directly at her.
SHOT 4 – Extreme close-up, 85mm: The woman''s eyes sharpen with focus, showing intense determination. Background slightly blurred.
SHOT 5 – Motion blur tracking shot, 35mm: The woman suddenly dashes forward at superhuman speed. Her pink athletic outfit flows dynamically. Soldiers appear blurred.
SHOT 6 – Wide action shot, 28mm: She strikes multiple soldiers mid-air, dynamic combat pose, debris flying.
SHOT 7 – Low angle shot, 35mm: Close combat: the woman overpowering soldiers on the ground, fast brutal movements.
SHOT 8 – Wide aftermath shot, 24mm: All soldiers are down. The woman stands in the center, surrounded by fallen bodies, breathing steadily.
SHOT 9 – Medium wide shot, 35mm: The woman stands calmly in the destroyed store, untouched. Pink sports outfit contrasts sharply with the dark cinematic environment.

Style: cinematic, film stills, ultra realistic, dramatic lighting, teal color grade, shallow depth of field, motion blur, high detail, 8k, storyboard layout, grid composition, professional filmmaking, ARRI Alexa look.',
  'The 3x3 grid with camera specs (ARRI Alexa, specific focal lengths) per panel creates authentic storyboard production value. Each shot specifies a distinct camera angle and narrative beat, building dramatic tension. The pink athletic outfit against dark teal cinematography creates strong visual contrast that reads even at small panel sizes. Consistent character description across 9 panels tests coherence.',
  'curated',
  ARRAY['storyboard', 'action', 'cinematic', 'grid', 'film-stills', 'narrative', 'combat']
) ON CONFLICT (id) DO NOTHING;

-- 14. The Life Path Decoder — Numerology Infographic
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-life-path-decoder',
  'The Life Path Decoder — Numerology Infographic',
  'Infographics',
  'numerology life path decoder infographic poster for a birth date',
  'A premium editorial infographic poster titled "THE LIFE PATH DECODER" for birth date [insert date]. Vertical 9:16 format, dark navy-to-black gradient background with gold and warm white typography.

Top section: large birth date "[insert date]" in bold serif type with a glowing golden celestial ring behind it. Below, a circular numerology wheel diagram showing the calculated life path number at center, surrounded by segmented arcs for personality, strengths, weaknesses, and destiny.

Middle section: three vertical columns with gold divider lines — "CORE TRAITS" (3–4 personality descriptors with minimal icons), "HIDDEN STRENGTHS" (key talents with subtle star symbols), "SHADOW SIDE" (honest weaknesses with small warning icons). Each item is short, punchy text — not paragraphs.

Bottom section: a horizontal "DESTINY MAP" timeline ribbon showing life phases (Youth, Growth, Peak, Legacy) with age ranges and one-line descriptions. Below, a bold callout box: "YOUR LIFE PURPOSE" with a single powerful sentence.

Design style: astrology app meets luxury editorial — clean grid layout, constellation dot patterns in the background, subtle zodiac line art, gold foil texture on headings, modern sans-serif body text. Inspired by Co-Star and The Pattern app aesthetics. No clutter, generous negative space, premium feel, 4K resolution.',
  'The circular numerology wheel at the center creates a strong visual anchor. Three-column trait breakdown with icons adds informational density without clutter. The destiny timeline ribbon at the bottom provides narrative structure. Dark background with gold foil typography creates the premium astrology-app aesthetic that performs well on social media.',
  'curated',
  ARRAY['numerology', 'infographic', 'astrology', 'life-path', 'editorial', 'dark-theme', 'gold']
) ON CONFLICT (id) DO NOTHING;

-- 15. The Soul Purpose Discoverer — Visual Guide
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-soul-purpose-discoverer',
  'The Soul Purpose Discoverer — Visual Guide',
  'Infographics',
  'soul purpose discoverer infographic with mandala and flowchart',
  'A mystical editorial infographic poster titled "SOUL PURPOSE DISCOVERER" for birth date [insert date]. Vertical 9:16 format, deep indigo-to-purple gradient background with soft luminous white and lavender typography.

Top section: birth date "[insert date]" set inside a radiant mandala design with layered geometric petals and soft glowing light at the center, symbolizing the soul''s core.

Main section: a vertical flowchart-style layout with three interconnected nodes — "CORE LIFE MISSION" (a single bold statement inside a glowing orb), "LESSONS TO LEARN" (3 key lessons in rounded cards with symbolic icons — mirror, flame, compass), and "YOUR CONTRIBUTION" (one clear sentence about the impact this person is meant to make, inside a diamond-shaped frame).

Bottom section: "START TODAY" action panel — 3 short, concrete daily actions displayed as minimal checklist items with soft checkmark icons and brief captions.

Design style: spiritual yet modern — sacred geometry patterns in the background, subtle nebula textures, thin luminous connection lines between nodes, elegant serif headings with clean sans-serif body text. Ethereal, premium, contemplative. No clutter, balanced whitespace, 4K resolution.',
  'The mandala center piece creates immediate spiritual visual identity. The flowchart structure (mission → lessons → contribution → actions) provides a clear reading path. Sacred geometry background adds depth without competing with content. The actionable "Start Today" section grounds the mystical theme in practical steps, making it shareable and useful.',
  'curated',
  ARRAY['numerology', 'soul-purpose', 'infographic', 'spiritual', 'mandala', 'flowchart', 'mystical']
) ON CONFLICT (id) DO NOTHING;

-- 16. The Career Destiny Detector — Infographic
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-career-destiny-detector',
  'The Career Destiny Detector — Infographic',
  'Infographics',
  'career destiny detector infographic with tech dashboard aesthetic',
  'A bold, professional infographic poster titled "CAREER DESTINY DETECTOR" for birth date [insert date]. Vertical 9:16 format, charcoal-black background with electric teal, white, and gold accents.

Top section: birth date "[insert date]" displayed in a futuristic data-panel style with thin tech grid lines and a subtle radar/scan animation aesthetic. Heading in bold condensed sans-serif.

Core section: a three-lane horizontal layout — each lane is a "DESTINY PATH" card showing one ideal career/business path. Each card includes: a minimal icon representing the field, a bold career title, a 2-line description of why this path fits, and a small "match score" percentage bar. Cards have subtle glassmorphism styling with frosted borders.

Below: a single "DANGER ZONE" red-accented panel showing the one career field to avoid, with a warning icon and brief explanation.

Side column: "YOUR NATURAL TALENTS" — 4–5 small badge-style tags (e.g., "Strategic Thinker," "Creative Problem Solver," "Natural Leader") with thin outline icons.

Bottom: "DECISION STYLE" — a small horizontal spectrum bar showing where this person falls between intuitive and analytical.

Design style: tech-meets-editorial — futuristic dashboard aesthetic, clean data visualization, subtle circuit-pattern background textures, professional and aspirational. No clutter, sharp grid, 4K resolution.',
  'The dashboard/data-panel aesthetic makes career analysis feel objective and tech-driven rather than mystical. Three destiny path cards with match-score bars add a gamified, personalized element. The "Danger Zone" red panel creates contrast and urgency. Badge-style talent tags and the decision-style spectrum bar add layered data visualization.',
  'curated',
  ARRAY['career', 'infographic', 'dashboard', 'tech', 'data-visualization', 'futuristic', 'glassmorphism']
) ON CONFLICT (id) DO NOTHING;

-- 17. Relationship Destiny Map — Visual Guide
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-relationship-destiny-map',
  'Relationship Destiny Map — Visual Guide',
  'Infographics',
  'relationship destiny map infographic with romantic editorial style',
  'An elegant editorial infographic poster titled "RELATIONSHIP DESTINY MAP" for birth date [insert date]. Vertical 9:16 format, warm blush-to-rose gradient background with cream, gold, and deep burgundy typography.

Top section: birth date "[insert date]" framed inside two interlocking celestial rings (representing connection), with soft golden light at the intersection point.

Main section: three horizontal panels stacked vertically —
Panel 1: "MOST COMPATIBLE WITH" — 3 personality archetype cards side by side, each with a minimal symbolic icon (e.g., anchor, flame, star), a short archetype name, and a one-line description of why they''re compatible.
Panel 2: "LOVE LESSONS" — 3 key relationship lessons displayed as numbered insights with elegant small icons (heart, key, mirror), each with a brief sentence.
Panel 3: "YOUR IDEAL PARTNER" — a detailed profile card with traits listed in a clean two-column layout (emotional style, communication, values, growth style), framed with a subtle ornate border.

Bottom: "ROLE OF LOVE IN YOUR PATH" — a single reflective sentence in italic serif, centered, with subtle decorative flourishes.

Design style: romantic editorial — soft watercolor texture accents, delicate gold line art, warm intimate color palette, elegant serif headings with modern sans-serif body. Premium, intimate, visually warm. 4K resolution.',
  'The interlocking celestial rings create a romantic visual hook. Three stacked panels provide clear information hierarchy — compatibility, lessons, ideal partner profile. The two-column partner trait card mimics dating-app aesthetics while the watercolor textures and gold line art elevate it to editorial quality. Warm blush-rose palette signals romance without being cliché.',
  'curated',
  ARRAY['relationship', 'infographic', 'love', 'compatibility', 'editorial', 'romantic', 'warm-palette']
) ON CONFLICT (id) DO NOTHING;

-- 18. The Wealth & Abundance Code — Infographic
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-wealth-abundance-code',
  'The Wealth & Abundance Code — Infographic',
  'Infographics',
  'wealth and abundance code infographic with luxury dark theme',
  'A luxurious editorial infographic poster titled "THE WEALTH & ABUNDANCE CODE" for birth date [insert date]. Vertical 9:16 format, deep black background with rich gold, emerald green, and cream accents.

Top section: birth date "[insert date]" engraved inside a golden vault-door circular motif with intricate gear-like detailing and radiating golden light beams.

Main section: four stacked content blocks —
Block 1: "FINANCIAL PERSONALITY" — a bold archetype name (e.g., "The Strategic Builder") inside a gold-bordered banner with a one-line description and a minimal icon.
Block 2: "WEALTH BLOCKS" — 3 specific mistakes or patterns displayed as crossed-out items in muted red, each with a brief callout explaining the trap.
Block 3: "YOUR ABUNDANCE STRATEGY" — a step-by-step vertical flow (3 steps) with numbered gold circles, bold action titles, and short descriptions. Connected by thin golden lines.
Block 4: "MONEY MAGNETISM SCORE" — a horizontal gauge/meter styled like a luxury dashboard, showing a position on a spectrum from "Dormant" to "Magnetic."

Bottom: a single bold quote in elegant serif: "Your wealth path is unique — stop following generic blueprints."

Design style: luxury finance meets editorial — gold foil textures, subtle money-inspired patterns (fine guilloche lines), premium dark-mode aesthetic, sharp typography hierarchy, Art Deco geometric accents. 4K resolution.',
  'The vault-door motif at the top immediately signals wealth and exclusivity. Red crossed-out wealth blocks create visual contrast and urgency. The step-by-step abundance strategy with gold numbered circles provides actionable structure. The luxury dashboard gauge adds a gamified element. Art Deco + gold foil textures create a premium feel that matches the wealth theme.',
  'curated',
  ARRAY['wealth', 'abundance', 'infographic', 'luxury', 'finance', 'gold', 'dark-theme', 'art-deco']
) ON CONFLICT (id) DO NOTHING;

-- 19. Future Timeline Guide — Life Roadmap
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-future-timeline-guide',
  'Future Timeline Guide — Life Roadmap',
  'Infographics',
  'future timeline life roadmap infographic with cosmic theme',
  'A cinematic editorial infographic poster titled "YOUR FUTURE TIMELINE" for birth date [insert date]. Vertical 9:16 format, deep space-black background with soft blue, silver, and white accents.

Top section: birth date "[insert date]" displayed inside a glowing orbital ring system, with small planetary dots marking key life phases along the orbit.

Main section: a vertical timeline running down the center of the poster with a luminous silver line. Five milestone nodes along the timeline, each representing a life phase:
Node 1: "PAST — Foundation Phase" — small card with age range and a one-line insight about formative experiences.
Node 2: "PRESENT — Current Crossroads" — slightly larger highlighted card with a glowing border, showing where you are now and the key decision ahead.
Node 3: "YEAR 1–2 — Growth Surge" — card showing the opportunity window opening.
Node 4: "YEAR 3–4 — Challenge & Transformation" — card with a subtle amber accent showing the difficulty phase and what it teaches.
Node 5: "YEAR 5 — Breakthrough" — gold-accented card showing the destination and achievement.

Side elements: small constellation-style dots and thin lines connecting related phases. Subtle nebula textures in the background adding depth.

Bottom: "YOUR ROADMAP IS WRITTEN IN THE STARS — BUT YOU HOLD THE PEN." in elegant spaced serif type.

Design style: cosmic editorial — planetarium-inspired, soft atmospheric glow effects, clean data visualization meets celestial aesthetics, silver and blue with gold highlights at the breakthrough node. Premium, contemplative, aspirational. 4K resolution.',
  'The orbital ring system with planetary dots creates a literal "life orbit" visual metaphor. The vertical timeline with progressively larger nodes builds narrative momentum toward the breakthrough. Amber accent on the challenge phase adds honest visual tension. Cosmic/planetarium aesthetic gives the life roadmap a sense of grandeur. The closing quote adds a personal, empowering touch.',
  'curated',
  ARRAY['timeline', 'infographic', 'future', 'roadmap', 'cosmic', 'celestial', 'life-path', 'editorial']
) ON CONFLICT (id) DO NOTHING;

-- ============================================================================
-- IMAGE EDIT PROMPTS (4) — need input image, skip thumbnail generation
-- ============================================================================

-- 20. Anime × Pop Art Style Conversion
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-anime-pop-art-conversion',
  'Anime × Pop Art Style Conversion',
  'Image Edits',
  'convert illustration to anime pop art style with pastel colors',
  'Convert this illustration into a unique style that strongly blends modern anime-style character design with pop art, finishing it as an attractive and refined design typical of modern anime. For the background, boldly arrange repetitive motifs such as abstract patterns, geometric shapes, dots, lines, spirals, swirls, and wave patterns to create an energetic composition reminiscent of street art or graffiti. For the colors, combine soft, pale pastel tones (pastel pink, mint green, lavender, light blue, etc.) to achieve both strong contrast and a light, airy feel. The drawing technique should primarily use uniform flat coloring, emphasizing thick, clean, and sharp outline lines. Avoid complex shading or gradients as much as possible, and instead create a graphical and dynamic impression through flat, vibrant color planes. Do not include any text, logos, or typography elements. Maintain the original illustration''s composition and characters.',
  'Clear style directive: flat coloring with thick outlines, no gradients. The pop art background instructions (dots, spirals, wave patterns) create visual energy without competing with the subject. Pastel palette constraint prevents the AI from defaulting to oversaturated anime colors while maintaining contrast.',
  'curated',
  ARRAY['anime', 'pop-art', 'style-transfer', 'flat-color', 'pastel', 'illustration', 'image-edit']
) ON CONFLICT (id) DO NOTHING;

-- 21. Doodle & Chibi Aesthetic Photo Enhancement
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-doodle-chibi-aesthetic',
  'Doodle & Chibi Aesthetic Photo Enhancement',
  'Image Edits',
  'add cute doodles and chibi characters around a photo',
  'Add hand-drawn doodle elements around the main objects: white outline strokes, sketchy sparkles, stars, hearts, arrows, tiny flowers, playful swirls, mini handwritten notes. Add small cute mascot-style doodles that match the vibe of the photo (tiny bear, smiling drink, cute food character, sleepy cloud, etc.) but keep them subtle and balanced. Use handwritten white text with short relatable captions only.

Do NOT add too many words or overcrowd the image. Use a real face as a reference photo. The background is the same as in the photo. The lighting is warm, soft, and clean, with subtle shadows. Around the image, add several mini chibi (3D cute style) versions of the character, while maintaining the original facial features. Chibi characters have various poses and expressions: jumping cheerfully, waving, sitting relaxed, holding a drink, cute and playful expressions.

Add hand-drawn white doodle elements: outline around the main body, stars, hearts, sparkles, motion lines, small cute icons. Add aesthetic handwriting such as: "shine," "bright day," "happy," "smile," "gym time," etc. (casual doodle font). Overall style: clean & aesthetic composition, white sticker outline, soft pastel color tone, high detail 3D chibi glossy look, cute Korean aesthetic.',
  'Layered enhancement approach: white doodles add whimsy without obscuring the photo, while 3D chibi versions of the subject create a viral social-media-ready aesthetic. The "do NOT overcrowd" constraint prevents the common failure of AI adding too many elements. Korean aesthetic styling gives a clear visual direction.',
  'curated',
  ARRAY['doodle', 'chibi', 'aesthetic', 'photo-enhancement', 'cute', 'korean', 'image-edit']
) ON CONFLICT (id) DO NOTHING;

-- 22. Netflix Homepage UI with Hero Film
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-netflix-homepage-hero',
  'Netflix Homepage UI with Hero Film',
  'UI Mockups',
  'Netflix homepage UI with hero film from reference image',
  'Create a Netflix homepage UI featuring a main hero film with its title and still generated from the uploaded reference.',
  'Concise prompt that leverages the model''s knowledge of Netflix''s UI patterns. The reference image provides the creative direction while the model fills in the familiar dark UI, navigation elements, and row-based content layout. Demonstrates how minimal text + strong reference can produce detailed results.',
  'curated',
  ARRAY['ui-mockup', 'netflix', 'streaming', 'hero', 'reference-based', 'interface']
) ON CONFLICT (id) DO NOTHING;

-- 23. 3D Character Breakdown Knolling Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-character-breakdown-knolling',
  '3D Character Breakdown Knolling Poster',
  'Posters',
  'photorealistic 3D character breakdown with knolling layout from reference',
  'Based on the reference image provided by the user, create an ultra-high-quality, photorealistic 3D character breakdown art poster. Transform the character into an Unreal Engine 5 (Metahuman)-level hyper-realistic digital human, and arrange their intensely personal, charismatic items in a meticulous "Knolling" style layout display.

Aspect ratio: 16:9 landscape. Core art style: Fashion Hyper-realism — extreme skin texture, luxurious material rendering, seductive cinematic atmosphere. Quality benchmark: On par with Tom Ford/Gucci fashion ad campaigns, Cyberpunk 2077''s high-end character modeling, Vogue photography.

Item Layout — Knolling Radial Composition: Total items 25-30 pieces, arranged radially around the character, emphasizing negative space.

Category 1: Haute Couture Outfits (Deep Red Velvet Labels) — Main outfit breakdown with material focus on silk''s fluid shimmer, leather''s grainy texture, and skin-fabric contact impressions.
Category 2: Intimate Beauty (Champagne Gold Labels) — Makeup details with creamy textures, vintage perfume bottle, half-burned scented candle with smoke wisps, glass of red wine.
Category 3: Luxury Accessories (Platinum Labels) — Diamond necklace with dispersion fire, snake-shaped bracelet, mechanical watch with see-through movement, genuine leather handbag.
Category 4: Symbols of Desire (Neon Purple Labels) — Retro sunglasses, film camera, fashion magazine, vinyl record, scattered pearls, red rose with dewdrops.

Character: slightly languid confident posture, eyes locking with the lens. Skin with real pores, faint peach fuzz, lip texture, collarbone shadows, dewy glow.
Connection lines: ultra-fine golden laser lines with glow halos. Technical annotations in tiny sharp fonts.
Typography: Didot or Bodoni serifs, white or gold. Subtitle: "Elegance is an attitude."
Color scheme: Midnight blue (#000033) + Burgundy red (#800020) + Champagne gold (#D4AF37).
Lighting: Rembrandt lighting with dramatic triangular face patches + strong rim light. Dark backdrop with caustics or city bokeh. Subtle swirling smoke.
Camera: 85mm portrait, f/1.8, sharp focus on eyes and key items. Cinematic LUT color grading, Pro-Mist filter glow on highlights.',
  'The most ambitious single-prompt specification in the library — 25-30 categorized items in knolling layout, each with material-specific rendering instructions. Fashion brand benchmarks (Tom Ford, Gucci, Vogue) set the quality bar. Rembrandt lighting + rim light + caustics create cinematic depth. The color-coded category labels add information design structure to what could be a chaotic composition.',
  'curated',
  ARRAY['3d', 'character-breakdown', 'knolling', 'fashion', 'luxury', 'hyper-realistic', 'poster', 'reference-based']
) ON CONFLICT (id) DO NOTHING;
