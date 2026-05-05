-- Batch 4: 20 new curated prompts extracted from uploaded image screenshots
-- Run in Supabase SQL Editor (anon key cannot INSERT due to RLS)

-- ============================================================================
-- GENERATION PROMPTS (14) — can generate thumbnails
-- ============================================================================

-- 1. Museum Prehistoric Creature Infographic
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-museum-creature-infographic',
  'Museum Prehistoric Creature Infographic',
  'Infographics',
  'museum infographic about a prehistoric creature',
  'Create a visually rich museum-style infographic of a [CREATURE], designed like a premium prehistoric discovery plate.

Use a hyper-realistic central [CREATURE] as the focal point, massive and intimidating, with ultra-detailed fur, powerful muscles, and cinematic lighting.

Include:
– skeleton breakdown
– skull anatomy
– hunting strategy diagrams
– prey comparison
– size comparison with human silhouette
– habitat map
– fossil evidence
– extinction timeline
– clean layered composition
– bold editorial design
– strong typography
– premium documentary style
Background should be clean, museum-grade, with neutral tones and subtle texture.
Every detail must feel scientific, dramatic, and worthy of a National Geographic cover.
Ultra detailed, 4K, stop-scroll quality, highly shareable.',
  'Combines scientific illustration with editorial design. The structured layout with creature anatomy, size comparisons, habitat maps, and fossil evidence creates an information-dense infographic. Museum-grade neutral backgrounds and National Geographic-worthy composition give it a premium documentary feel.',
  'curated',
  ARRAY['infographic', 'museum', 'prehistoric', 'creature', 'scientific', 'editorial', 'anatomy', 'national-geographic']
) ON CONFLICT (id) DO NOTHING;

-- 2. Pixel Art FPS Flipbook Animation
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-pixel-art-fps-flipbook',
  'Pixel Art FPS Flipbook Animation',
  'Open-Ended Creative',
  'pixel art flipbook animation of a first person shooter game',
  'Generate a 10x10 square layout with pixel art sprites in sequential order like a flipbook animation showing a full first person shooter game',
  'Deceptively simple prompt that leverages the model''s understanding of sequential storytelling and pixel art aesthetics. The 10x10 grid constraint forces 100 frames of coherent narrative — title screen, menu, enemies, boss fights, keycard pickups, mission complete, credits — all in a single image. Demonstrates structured storytelling in a single output.',
  'curated',
  ARRAY['pixel-art', 'animation', 'flipbook', 'gaming', 'fps', 'sprite-sheet', 'retro', 'sequential']
) ON CONFLICT (id) DO NOTHING;

-- 3. Japanese Convenience Store Scene
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-japanese-convenience-store',
  'Japanese Convenience Store Scene',
  'Cinematic',
  'photorealistic candid image of a Japanese convenience store cashier',
  'Photorealistic candid image of a young Japanese female cashier (early 20s) working in a convenience store, wearing a typical uniform (white shirt with green, red, and orange accents, name tag "Aiko," hair neatly tied back). She stands behind the counter, serving a customer with a natural, friendly expression. Shot from a customer''s smartphone POV—slight foreground blur, imperfect framing, unposed feel. On the counter: POS terminal, barcode scanner, small items like snacks and drinks. Bright, even convenience store lighting; clean interior with neatly stocked shelves in the background. Shallow depth of field, realistic skin tones, high detail, subtle motion blur, 4K quality. Optional: slight tilt, camera noise, glass reflections, handing receipt or change.',
  'The smartphone POV with slight foreground blur and imperfect framing creates an authentic candid feel. Specific uniform details, convenience store props (POS terminal, barcode scanner), and environmental cues (stocked shelves, even lighting) ground the scene in reality. The "unposed feel" instruction prevents the typical AI portrait stiffness.',
  'curated',
  ARRAY['cinematic', 'japanese', 'candid', 'convenience-store', 'photorealistic', 'smartphone-pov', 'slice-of-life']
) ON CONFLICT (id) DO NOTHING;

-- 4. Hand-Drawn Portrait with Golden Geometric Patterns
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-hand-drawn-golden-portrait',
  'Hand-Drawn Portrait with Golden Geometric Patterns',
  'Open-Ended Creative',
  'hand-drawn portrait illustration with golden geometric celestial patterns',
  'A highly detailed, hand-drawn illustration in a technical style of a young man looking upward with a hopeful and at the same time intense expression. His face is elaborated with fine cross-hatching that particularly emphasizes the facial structure and the emotional impact. The hair appears tousled and dynamic, with individual strands depicted in an ink-like sketch style. The portrait is surrounded by golden geometric patterns, celestial rings, and constellation-like lines, creating a fusion of scientific precision and spiritual atmosphere. Ratio 9:16',
  'The contrast between detailed ink cross-hatching technique and luminous golden geometric overlays creates visual tension. Specific instructions for facial expression ("hopeful and intense"), hair treatment ("tousled, individual strands"), and the fusion of "scientific precision and spiritual atmosphere" guide the model toward a distinctive aesthetic that blends technical illustration with mystical elements.',
  'curated',
  ARRAY['illustration', 'hand-drawn', 'portrait', 'golden', 'geometric', 'celestial', 'cross-hatching', 'ink-style']
) ON CONFLICT (id) DO NOTHING;

-- 5. Japanese Street Fashion Portrait
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-japanese-street-fashion',
  'Japanese Street Fashion Portrait',
  'Cinematic',
  'ultra realistic Japanese street fashion photo',
  'Ultra realistic full-body street fashion photo of a Japanese woman in her early 20s, long straight dark brown hair with soft bangs, natural makeup, gentle smile, looking slightly upward to the side, wearing a navy blue ribbed short-sleeve knit mini dress, slim elegant silhouette, small shoulder bag with gold chain strap, delicate necklace, gold bracelet, standing on a busy Japanese shopping street during daytime, blurred pedestrians in the background, urban arcade street, soft natural light, shallow depth of field, realistic skin texture, balanced composition, vertical portrait, high detail, DSLR photography, 85mm lens, f/1.8, cinematic bokeh, natural pose, photorealistic',
  'Camera-specific technical details (85mm lens, f/1.8, DSLR photography) guide the model toward authentic fashion photography aesthetics. The layered outfit description with specific accessories (gold chain strap bag, delicate necklace, gold bracelet) creates a complete styling. Environmental cues (busy Japanese shopping street, blurred pedestrians, arcade street) and lighting direction (soft natural light, cinematic bokeh) produce a lifestyle editorial feel.',
  'curated',
  ARRAY['fashion', 'street-style', 'japanese', 'portrait', 'photorealistic', 'dslr', 'bokeh', 'editorial']
) ON CONFLICT (id) DO NOTHING;

-- 6. Luxury Brand Identity Presentation Board
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-luxury-brand-identity-board',
  'Luxury Brand Identity Presentation Board',
  'Open-Ended Creative',
  'premium brand identity presentation board for a luxury brand',
  'Create a premium editorial brand identity presentation board for a luxury perfume brand called [BRAND NAME]. Show complete branding system including logo design, icon mark, typography system, primary and secondary fonts, color palette, brand applications, packaging mockups, hang tags, perfume box, tape design, visual language references, perfume bottle material closeups, and final brand lockups. Include a futuristic luxury perfume hero shot with premium lighting. Use golden colour as the primary brand color. Clean luxury layout, Behance case study style, Apple keynote meets Nike branding presentation, minimal composition, strong typography, sharp grid system, premium editorial design, ultra detailed, hyper realistic, soft luxury background. Aspect ratio: 1:1 for Instagram photo dimension.',
  'Exhaustive list of brand deliverables (logo, icon mark, typography, color palette, packaging, hang tags, tape design, bottle closeups, brand lockups) ensures a comprehensive brand system in a single image. Referencing Behance, Apple keynote, and Nike branding gives clear style anchors. The grid system and editorial layout instructions create a professional presentation aesthetic.',
  'curated',
  ARRAY['brand-identity', 'luxury', 'branding', 'presentation', 'packaging', 'typography', 'editorial', 'behance']
) ON CONFLICT (id) DO NOTHING;

-- 7. Luxury Product Hero Shot
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-luxury-product-hero-shot',
  'Luxury Product Hero Shot',
  'Open-Ended Creative',
  'premium product presentation board for a luxury brand',
  'Create a premium product presentation board for a luxury perfume brand called [BRAND NAME] featuring one hero perfume bottle as the signature product. Show large floating hero perfume bottle with dramatic lighting, front view, side profile, top view, cap detail closeup, bottle glass closeup, atomizer detail, premium material closeups, and feature callouts like elegance, refinement, longevity, signature scent. Strong luxury-focused layout with clean product breakdown. Use golden colour as the primary brand color. Luxury fragrance campaign aesthetic, Nike premium product board style, futuristic and polished composition, high-end product photography, ultra realistic, editorial presentation design. Aspect ratio: 1:1 for Instagram photo dimension.',
  'Multi-angle product breakdown (front view, side profile, top view, cap detail, bottle glass closeup, atomizer) creates an exhaustive visual catalog. Feature callouts (elegance, refinement, longevity) add a marketing dimension. The Nike product board reference and luxury fragrance campaign aesthetic provide clear style direction for a high-end editorial feel.',
  'curated',
  ARRAY['product-photography', 'luxury', 'hero-shot', 'editorial', 'branding', 'product-breakdown', 'premium']
) ON CONFLICT (id) DO NOTHING;

-- 8. Fashion Campaign Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-fashion-campaign-poster',
  'Fashion Campaign Poster',
  'Posters',
  'bold premium campaign poster for a luxury fashion brand',
  'Create a bold premium campaign poster for luxury perfume brand [BRAND NAME]. A stylish young model wearing elegant golden fashion is captured in a dramatic low-angle perspective walking forward confidently. Large bold typography says "DESIGNED TO MOVE" covering most of the frame. Show the premium perfume bottle clearly with strong focus. Blue sky background with urban rooftop environment. Fashion campaign meets Nike streetwear ad aesthetic. Sharp shadows, cinematic sunlight, powerful composition, bold editorial layout, strong typography, premium advertising visual, ultra realistic, high detail, luxury campaign poster style. Use golden colour as the primary brand colour. Aspect ratio: 1:1 for Instagram photo dimension.',
  'The low-angle perspective and confident forward walk create a powerful aspirational hero image. Bold typography covering most of the frame follows modern fashion advertising conventions. Combining luxury perfume with streetwear ad aesthetic (Nike reference) creates an energetic, contemporary feel rather than a static luxury ad.',
  'curated',
  ARRAY['campaign', 'poster', 'fashion', 'luxury', 'typography', 'advertising', 'editorial', 'streetwear']
) ON CONFLICT (id) DO NOTHING;

-- 9. Luxury E-Commerce App UI
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-luxury-ecommerce-app',
  'Luxury E-Commerce App UI',
  'UI Mockups',
  'luxury mobile app UI for a premium e-commerce brand',
  'Create a premium mobile app UI presentation for luxury perfume brand [BRAND NAME]. Show three iPhone mockups displaying homepage, product collection page, and detailed product page for a perfume shopping app. Dark luxury interface with golden CTA buttons, golden brand lighting, premium product presentation, clean minimal e-commerce layout, modern UI consistency, futuristic shopping experience. Background should have cinematic glowing golden light streaks. Apple keynote style product presentation, ultra realistic, premium UI design, clean composition, luxury brand ecosystem. Aspect ratio: 1:1 for Instagram photo dimension.',
  'Three iPhone mockups showing distinct screens (homepage, collection, product detail) demonstrate a complete e-commerce flow. Dark luxury interface with golden accents creates consistent brand language. The Apple keynote style reference and cinematic golden light streaks in the background elevate a standard UI mockup into a polished presentation piece.',
  'curated',
  ARRAY['ui-mockup', 'mobile-app', 'ecommerce', 'luxury', 'iphone', 'dark-ui', 'golden', 'presentation']
) ON CONFLICT (id) DO NOTHING;

-- 10. Luxury Packaging Design
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-luxury-packaging-design',
  'Luxury Packaging Design',
  'Open-Ended Creative',
  'premium luxury packaging design for a brand',
  'Create a premium luxury perfume packaging design for brand [BRAND NAME]. Show stacked perfume boxes in different golden tones. Minimal bold typography with branding clearly visible. Premium shelf-worthy packaging with realistic texture, elegant labels, luxury product presentation, clean studio background, soft shadow lighting, modern editorial packaging aesthetic, Apple meets Nike luxury packaging design, ultra realistic, high detail, premium product branding. Use golden colour as the primary brand colour. Aspect ratio: 1:1 for Instagram photo dimension.',
  'Stacked box composition in varied golden tones creates visual depth and a premium shelf display feel. Minimal bold typography and clean studio background follow Apple-style product photography conventions. Realistic texture and soft shadow lighting instructions push toward photorealistic quality rather than flat graphic design.',
  'curated',
  ARRAY['packaging', 'luxury', 'product-design', 'boxes', 'branding', 'editorial', 'studio', 'premium']
) ON CONFLICT (id) DO NOTHING;

-- 11. Luxury Brand Website Design
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-luxury-website-hero',
  'Luxury Brand Website Design',
  'UI Mockups',
  'premium website design for a luxury brand on a MacBook',
  'Create a premium luxury perfume website presentation for brand [BRAND NAME] displayed inside a MacBook Pro screen. Show hero section with bold typography saying "DESIGNED TO MOVE," floating perfume product hero, product cards, collection sections, navigation bar, premium CTA buttons, dark futuristic UI with golden accents. Cinematic golden light streak background with luxury editorial lighting. Apple keynote meets Nike e-commerce website design, ultra realistic laptop presentation, premium brand showcase, minimal luxury composition. Aspect ratio: 1:1 for Instagram photo dimension.',
  'Framing the website inside a MacBook Pro screen creates a realistic device mockup presentation. The dark UI with golden accents maintains brand consistency across deliverables. Specific UI elements (hero section, product cards, collection sections, navigation bar, CTA buttons) ensure a complete webpage rather than just a hero image.',
  'curated',
  ARRAY['website', 'ui-mockup', 'macbook', 'luxury', 'ecommerce', 'dark-ui', 'golden', 'hero-section']
) ON CONFLICT (id) DO NOTHING;

-- 12. Luxury Fashion Editorial Ad
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-luxury-ad-editorial',
  'Luxury Fashion Editorial Ad',
  'Posters',
  'luxury fashion editorial ad for a premium brand',
  'Create a luxury fashion editorial ad campaign visual for perfume brand [BRAND NAME]. Show one hand holding a premium perfume bottle against a deep black background with dramatic glowing golden light trails behind the bottle. Minimal composition, premium studio lighting, strong product focus, glossy reflections, fashion magazine aesthetic, elegant typography placement with brand logo and tagline "Designed to Move." High-end luxury campaign, premium advertising photography, ultra realistic, clean cinematic composition. Use golden colour as the primary brand colour. Aspect ratio: 1:1 for Instagram photo dimension.',
  'Single hand holding the bottle creates an intimate, aspirational interaction. Deep black background with golden light trails provides dramatic contrast that makes the product the absolute focal point. Fashion magazine aesthetic and glossy reflections reference high-end print advertising conventions.',
  'curated',
  ARRAY['advertising', 'editorial', 'luxury', 'fashion', 'product-photography', 'dramatic-lighting', 'magazine', 'premium']
) ON CONFLICT (id) DO NOTHING;

-- 13. Billboard Advertising Concept
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-billboard-ad-concept',
  'Billboard Advertising Concept',
  'Posters',
  'massive billboard campaign visual for a luxury brand',
  'Create a massive premium billboard campaign visual for luxury perfume brand [BRAND NAME]. Show a giant perfume bottle suspended in the air by a helicopter above a futuristic city skyline at sunset. People below are looking up at the massive bottle in awe. Wet reflective ground, dramatic cinematic clouds, fashion atmosphere, bold billboard-style campaign design with strong brand typography saying "DESIGNED TO MOVE." Luxury Nike meets Apple campaign aesthetic, epic cinematic scale, ultra realistic, premium outdoor advertising concept. Use golden colour as the primary brand colour. Aspect ratio: 1:1 for Instagram photo dimension.',
  'The helicopter-suspended giant bottle creates an impossible, attention-grabbing spectacle that embodies premium outdoor advertising''s goal of stopping traffic. Tiny spectators looking up in awe provide scale contrast. Environmental details (wet reflective ground, sunset, cinematic clouds) create a cinematic atmosphere that elevates a product shot into a narrative moment.',
  'curated',
  ARRAY['billboard', 'advertising', 'outdoor', 'cinematic', 'luxury', 'campaign', 'epic-scale', 'urban']
) ON CONFLICT (id) DO NOTHING;

-- 14. Social Media Campaign Creatives
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-social-media-campaign-set',
  'Social Media Campaign Creatives',
  'Social Posts',
  'social media campaign creatives for a luxury brand',
  'Create premium Instagram social media campaign creatives for perfume brand [BRAND NAME]. Show three vertical fashion poster variations side by side featuring a stylish young model in elegant golden fashion and a premium perfume bottle. Bold typography says "DESIGNED TO MOVE" with strong layout variations. Low-angle dynamic photography, urban rooftop environment, blue sky, fashion campaign styling, bold shadows, premium luxury editorial aesthetic. Luxury Nike Instagram campaign style, high-end social media creative design, ultra realistic, strong branding and visual consistency. Use golden colour as the primary brand colour. Aspect ratio: 1:1 for Instagram photo dimension.',
  'Three side-by-side variations demonstrate campaign versatility while maintaining visual consistency — exactly what social media campaigns need. Layout variations of the same headline ("DESIGNED TO MOVE") show how a brand system flexes across different compositions. Low-angle dynamic photography and urban rooftop setting create aspirational lifestyle content.',
  'curated',
  ARRAY['social-media', 'instagram', 'campaign', 'luxury', 'fashion', 'variations', 'editorial', 'branding']
) ON CONFLICT (id) DO NOTHING;

-- ============================================================================
-- IMAGE EDIT PROMPTS (6) — need input photo, skip thumbnail generation
-- ============================================================================

-- 15. Iridology Eye Chart
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-iridology-chart',
  'Iridology Eye Chart',
  'Image Edits',
  'create an iridology chart based on my iris photo',
  'Create an iridology chart based on my iris. Do a complete iris reading, what can you tell about a person from this? Be detailed. Generate a poster with all the details. The style of the guide should be clean and minimal, thin lines, rounded cards.',
  'Combines image analysis (reading the iris features) with infographic generation in a single prompt. The clean minimal style instruction with thin lines and rounded cards gives clear design direction. The conversational "what can you tell about a person" framing encourages comprehensive analysis rather than surface-level labeling.',
  'curated',
  ARRAY['iridology', 'medical', 'analysis', 'infographic', 'iris', 'health', 'image-edit', 'chart']
) ON CONFLICT (id) DO NOTHING;

-- 16. Cinematic Ensemble Movie Poster
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-cinematic-ensemble-poster',
  'Cinematic Ensemble Movie Poster',
  'Posters',
  'cinematic movie poster with ensemble cast walking toward camera',
  'Create a cinematic movie poster for [MOVIE/SHOW TITLE]. The background is a textured golden-yellow map of [CITY] with faint street names visible. The iconic [LANDMARK] stands prominently on the right side. In the foreground, six characters are walking confidently toward the camera on a dark teal-colored ground with long dramatic shadows.
From left to right:
A beautiful woman with long wavy dark hair, wearing a tight black mini dress and black knee-high boots.
A middle-aged man with glasses and a mustache, wearing a brown overcoat over a green turtleneck sweater, holding rolled-up blueprints and a small tool.
The lead character in the center, wearing a brown leather jacket over a dark shirt, green trousers, and carrying a large brown leather duffel bag with a red strap.
A young man with dark curly hair wearing a dark hoodie and denim jacket.
A young woman wearing a grey beanie, glasses, pink sweater, green bomber jacket, plaid mini skirt, white socks, and sneakers, with white headphones around her neck.
A handsome man on the far right wearing a brown shearling jacket, holding a red coffee cup.
The title "[MOVIE/SHOW TITLE]" appears in white at the top, with subtitle in large distressed white letters on a red background. At the bottom, text reads "COMING SOON" in white and red.
Dramatic lighting, high contrast, cinematic color grading with golden and teal tones, realistic, highly detailed, epic composition.',
  'Detailed per-character wardrobe descriptions create distinct personalities without naming real actors. The golden map background with landmark placement establishes setting. Teal-and-gold color grading, dramatic shadows, and "walking toward camera" composition follow proven blockbuster poster conventions. Distressed typography adds a gritty, cinematic texture.',
  'curated',
  ARRAY['movie-poster', 'cinematic', 'ensemble', 'characters', 'dramatic-lighting', 'golden-teal', 'typography']
) ON CONFLICT (id) DO NOTHING;

-- 17. Face Feature Analysis Infographic
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-face-feature-analysis',
  'Face Feature Analysis Infographic',
  'Image Edits',
  'face feature analysis infographic based on my portrait',
  'Face Features Analysis. Place the portrait in the center. Automatically analyze the face (do not use fixed or pre-written labels). Detect and label face shape, eyes, eyebrows, nose, cheeks, and lips. Add thin arrows pointing to each feature. For each feature, include a short label (e.g. "Soft Oval", "Almond Eyes") and 2-3 short bullet points describing the actual features based on the image. Use small rounded info cards with simple icons.',
  'The instruction to "automatically analyze" rather than use pre-written labels forces genuine image analysis. Thin arrows with info cards create a clean medical/beauty analysis aesthetic. Specific feature categories (face shape, eyes, eyebrows, nose, cheeks, lips) ensure comprehensive coverage while the bullet point format keeps descriptions concise.',
  'curated',
  ARRAY['face-analysis', 'beauty', 'infographic', 'portrait', 'annotation', 'image-edit', 'medical-style']
) ON CONFLICT (id) DO NOTHING;

-- 18. Spectacles Guide
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-spectacles-guide',
  'Spectacles Guide',
  'Image Edits',
  'spectacles recommendation guide based on my face shape',
  'Spectacles Guide. Create a clean, modern infographic poster using the uploaded portrait (100% facial followed) as the main subject. Style should be minimal, aesthetic, and visual-first, clean typography, rounded cards, thin lines, subtle shadows, and a high-end editorial look. Title: "Spectacles Guide". Automatically analyze the face shape and proportions, then generate suitable and unsuitable eyewear recommendations. Show side-by-side glasses try-on variations using the same face.',
  'Combines face shape analysis with practical product recommendations. The "100% facial followed" instruction ensures the subject''s identity is preserved across try-on variations. Side-by-side comparison format makes recommendations immediately actionable. Clean editorial styling with rounded cards and thin lines keeps the focus on the practical guidance.',
  'curated',
  ARRAY['spectacles', 'eyewear', 'face-shape', 'recommendation', 'try-on', 'infographic', 'image-edit', 'editorial']
) ON CONFLICT (id) DO NOTHING;

-- 19. Scrapbook Aesthetic Transformation
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-scrapbook-aesthetic-transform',
  'Scrapbook Aesthetic Transformation',
  'Image Edits',
  'transform my photo into a cozy scrapbook aesthetic with mini chibi versions',
  'Transform the provided reference image into a cozy aesthetic scrapbook-style composition while strictly preserving the original subject, identity, pose, lighting, and background.

Add multiple small "mini version" characters of the same person (chibi / doll-like style), placed naturally around the scene (on objects, table, shoulder, etc.). These mini figures must match the subject''s face, hairstyle, outfit, and vibe consistently, styled as cute 3D collectible figurines. Show them doing different activities (reading, posing, taking photos, relaxing).

Overlay handwritten-style doodles and annotations across the image: arrows, hearts, stars, sparkles, icons, and playful captions connected to elements in the scene.

Use a soft pastel color palette (white base with pink, peach, blue accents).

Keep the frame visually rich and filled but balanced and clean.

Style: warm, cozy lighting, dreamy Instagram scrapbook aesthetic, soft depth of field, highly detailed, polished but playful.

The final result must look like the SAME original image enhanced with mini alter-egos and aesthetic annotations — not a recreated or different scene.',
  'Identity preservation instruction ("strictly preserving the original subject") combined with chibi alter-ego creation is a sophisticated image edit technique. The mini figures matching face, hairstyle, and outfit creates a playful personalized effect. Handwritten doodle overlays (arrows, hearts, sparkles) add the scrapbook texture. The final instruction to enhance rather than recreate prevents the model from generating a new image.',
  'curated',
  ARRAY['scrapbook', 'aesthetic', 'chibi', 'doodles', 'pastel', 'image-edit', 'instagram', 'cozy', 'transformation']
) ON CONFLICT (id) DO NOTHING;

-- 20. Rinpa-Style Japanese Art Conversion
INSERT INTO public.curated_prompts (id, title, category, user_input, prompt, why_it_works, source, tags)
VALUES (
  'curated-rinpa-style-art',
  'Rinpa-Style Japanese Art Conversion',
  'Image Edits',
  'convert my illustration to Rinpa-style Japanese art with golden clouds and silver accents',
  'A gorgeous style that maximizes the decorative qualities of the Rinpa school. Boldly employing golden clouds and silver clouds, with flowing water and floral patterns arranged in a fluid manner. Emphasizing flat, decorative beauty. Vivid colors and gold and silver foil expressions. Faithfully maintaining the composition and characters of the original illustration.',
  'References a specific Japanese art movement (Rinpa school, 17th-19th century) known for bold decorative compositions with gold and silver leaf. The instruction to "faithfully maintain the composition and characters" ensures the original artwork is restyled rather than recreated. Gold/silver foil expressions and flowing water patterns are signature Rinpa techniques that give clear stylistic direction.',
  'curated',
  ARRAY['rinpa', 'japanese-art', 'gold-leaf', 'decorative', 'traditional', 'image-edit', 'art-style', 'conversion']
) ON CONFLICT (id) DO NOTHING;