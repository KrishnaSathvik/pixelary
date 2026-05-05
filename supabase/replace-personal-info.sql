-- Replace real people's names with placeholders in curated prompts
-- Run in Supabase SQL Editor

-- 1. curated-celebrity-real-life: Sam Altman, Donald Trump, Elon Musk → placeholders
UPDATE public.curated_prompts SET
  prompt = '[celebrity 1], [celebrity 2], and [celebrity 3] working behind the counter of a busy movie theater',
  why_it_works = 'Three named celebrities + an ordinary workplace = strong photorealistic result. GPT Image 2 has solid world knowledge of public figures and renders the mundane setting convincingly. Template: `[celebrity 1], [celebrity 2], and [celebrity 3] working behind the counter of [ordinary workplace]`.'
WHERE id = 'curated-celebrity-real-life';

-- 2. curated-lol-midlane: Trump vs Khamenei → placeholders
UPDATE public.curated_prompts SET
  prompt = 'Help me generate a screenshot of [character A] versus [character B] in the mid lane in League of Legends',
  why_it_works = 'LoL gameplay screenshot with correct UI overlay (HP bars, minimap, item icons). Template: `screenshot of [character A] versus [character B] in the mid lane in League of Legends`.'
WHERE id = 'curated-lol-midlane';

-- 3. curated-1980s-propaganda: Sam Altman, Dario Amodei, Elon Musk → placeholders
UPDATE public.curated_prompts SET
  prompt = E'Generate a 1980s propaganda poster. Use the exact slogan "热烈庆祝GPT-Image-2全量开放". Include [person 1], [person 2], and [person 3], and give [person 2] a red scarf.',
  why_it_works = 'Cultural Revolution-era poster aesthetic with custom slogan and characters. Template: era + exact slogan + named figures + costume details.'
WHERE id = 'curated-1980s-propaganda';

-- 4. curated-time-magazine-cover: Hailey Bieber → placeholder
UPDATE public.curated_prompts SET
  prompt = E'A highly detailed realistic photograph of a TIME magazine cover, red border, white background. Top right corner text reads "APRIL 29 / MAY 6, 2024". Large bold text at the top: "THE MOST INFLUENTIAL COMPANIES" above big red "TIME" and black "100".\nMain subject is a close-up portrait of [celebrity name], elegant and beautiful, with sleek dark brown hair parted in the middle and pulled back into a tight low bun, flawless glowing skin, subtle makeup with glossy nude lips and defined eyebrows. She is looking slightly to the left with a confident expression.\nA large, glossy, deep red Anthurium flower (with prominent spadix) is positioned near her neck and shoulder. She is wearing a white feathery or fluffy garment.\nOn the left side in bold text: "HOW [CELEBRITY NAME] BUILT HER EMPIRE". Below it a vertical list of company names: APPLE, NVIDIA, MICROSOFT, AMAZON, TIKTOK, DISNEY, NETFLIX, UNITEDHEALTH + 90 MORE. Bottom right corner has "http://time.com".\nProfessional studio lighting, clean editorial style, high resolution, sharp details, iconic TIME magazine cover composition.',
  why_it_works = 'TIME cover recreation — red border framing, specific typography hierarchy, celebrity portrait, and supporting text layout. Template: replace [celebrity name] with any public figure and customize the headline/company list.'
WHERE id = 'curated-time-magazine-cover';

-- 5. curated-founder-infographic: Jensen Huang → placeholder
UPDATE public.curated_prompts SET
  prompt = E'Vertical poster composition, portrait orientation, 4:5 (1080x1350). High-impact, scroll-stopping infographic poster of [founder name]. TOP 30% HOOK ZONE: Huge bold uppercase headline "[HEADLINE TEXT]" in white + [brand color], extremely large typography, high contrast, strong spacing. MIDDLE 40% HERO: Ultra-realistic portrait of [founder name], chest-up, looking slightly upward, cinematic soft shadows, subtle rim light using [brand color], soft glow behind subject, dark tech/editorial environment with subtle grid overlays. BOTTOM 30% INFO GRID: Glassmorphism cards with rounded corners and soft shadows. Mini bio: "[founder name], [title], [company] — [one-line description]." Timeline: [year]→[event], [year]→[event], [year]→[event], [year]→[event]. Numbers: [stat 1], [stat 2], [stat 3]. Quote: "[famous quote]" — [founder name]. Design: black/deep navy base, [brand color] accents, white typography, subtle glow, gradient lighting, thin grid overlays, bold modern sans-serif.',
  why_it_works = 'The three-zone layout (hook → hero → info grid) is optimized for mobile scrolling. Glassmorphism cards add modern depth. The specific data points (timeline, stats, quote) make it informational rather than just decorative. Brand color as accent throughout creates cohesion. Template: replace all bracketed fields with any founder/company.'
WHERE id = 'curated-founder-infographic';

-- 6. curated-apple-park-keynote: Tim Cook → placeholder
UPDATE public.curated_prompts SET
  prompt = 'Amateur iPhone photo at Apple Park during the iPhone 20 keynote, [speaker name] presenting on stage. Shot from the crowd at a distance',
  why_it_works = 'Convincing fake event-attendee photo. "Amateur iPhone photo" + "shot from the crowd at a distance" beats the AI''s instinct to compose perfectly. Template: replace [speaker name] with any public figure.'
WHERE id = 'curated-apple-park-keynote';

-- 7. curated-uk-citizenship-card: Olivia Anne Williams + DOB + ID number → placeholders
UPDATE public.curated_prompts SET
  prompt = E'Ultra-realistic 16:9 close-up studio photograph of a United Kingdom citizenship identity card placed on a clean light grey or white background. The card is horizontally aligned, centered in frame, captured in sharp focus with soft diffused studio lighting.\nThe design follows an official government-issued ID aesthetic with structured layout, clean typography, and advanced anti-counterfeit detailing. The top header reads: "UNITED KINGDOM" and "CITIZENSHIP CARD," with a subtitle: "The United Kingdom of Great Britain and Northern Ireland."\nTop-left includes the Union Jack flag. Top-right features the royal coat of arms.\nThe card contains a passport-style portrait of a young British woman:\n– Fair to light skin tone with natural freckles\n– Medium-length brown hair, softly wavy, center-parted\n– Hazel or light brown eyes, neutral expression, direct gaze\n– Minimal makeup, natural skin texture\n– Wearing a dark top with small gold hoop earrings\nPersonal identity details displayed clearly in bilingual format (English / Welsh):\n– Surname / Cyfenw: [SURNAME]\n– Given names / Enwau cyntaf: [GIVEN NAMES]\n– Date of birth / Dyddiad geni: [DD MONTH YYYY]\n– Place of birth / Lleoliad geni: [CITY], ENGLAND\n– Nationality / Cenedligrwydd: BRITISH CITIZEN\n– Citizenship number / Rhif dinasyddiaeth: UKC-XX-XXXXXX\n– Date of issue / Dyddiad cyhoeddi: [DD MON YYYY]\n– Date of expiry / Dyddiad dod i ben: [DD MON YYYY]\n– Sex / Rhyw: F\nSecurity and design features include:\n– Intricate guilloche patterns across the entire surface\n– Fine-line engraving and microprinted text\n– Holographic security patch with iridescent reflections\n– Circular "UK" seal with crown emblem\n– Subtle Union Jack pattern blended into background\n– Engraved illustration of Big Ben / Westminster Palace on right side\n– Signature at bottom: "[Signature]"\nAdditional elements:\n– Machine-readable ID strip and barcode at bottom\n– Subtle red, blue, and white gradient accents inspired by UK flag\nMaterial: laminated polycarbonate card with slight gloss, visible reflections, layered holographic overlays.\nLighting: soft, even studio lighting highlighting texture, print clarity, and security features.\nNo hand visible. Clean, minimal, professional composition.\nVerbatim text — no extra characters, no substitutions.',
  why_it_works = 'Government-issued ID aesthetic with bilingual text, security features, and structured layout. Template: replace bracketed fields [SURNAME], [GIVEN NAMES], [DD MONTH YYYY], [CITY] with any details. The holographic overlays and guilloche patterns test fine-detail rendering.'
WHERE id = 'curated-uk-citizenship-card';

-- 8. curated-messaging-app-chat: Sarah Chen → placeholder
UPDATE public.curated_prompts SET
  prompt = E'A high-fidelity mobile messaging app chat screen. Top bar: back arrow, contact avatar (small circle), contact name "[contact name]," online status green dot, video call and voice call icons. Message area: a natural conversation with exactly 8 message bubbles alternating between sent (right, blue) and received (left, light gray). Include a mix of: text messages, one photo message (food photo thumbnail with rounded corners), one voice message (waveform bar with play button and duration "0:23"), and one link preview card with thumbnail and title. Messages have timestamps and read receipts (double blue checkmarks). Bottom: text input field with placeholder "Message," attachment (+) button, camera button, and send arrow button. Keyboard not visible. Clean white background, iOS-style design. Aspect ratio 9:16 vertical.',
  why_it_works = 'Mixing message types (text, photo, voice, link preview) demonstrates realistic chat variety. Exactly 8 bubbles prevents overcrowding while showing enough conversation. Read receipts and online status are the details that separate realistic from wireframe UIs.'
WHERE id = 'curated-messaging-app-chat';

-- 9. curated-fitness-tracker-app: Alex → placeholder
UPDATE public.curated_prompts SET
  prompt = E'High-fidelity mobile fitness tracking app screenshot. Dark background with vibrant accent colors. Top: greeting "Good morning, [name]" with small avatar. Below: large circular progress ring showing daily step goal (7,432 / 10,000) with percentage in the center. Three horizontal stat cards: Calories (flame icon, 342 kcal), Distance (pin icon, 4.2 km), Active Minutes (clock icon, 28 min). Each card with a small bar chart showing the last 7 days. Below: "Today''s Workout" card with an exercise illustration, workout name "Full Body HIIT," duration "32 min," difficulty dots. Bottom tab bar with 5 icons: Home (active), Workouts, Nutrition, Progress, Profile. Status bar: 10:24 AM. Brand accent color: electric green. iOS-style design with rounded corners and subtle glassmorphism cards.',
  why_it_works = 'Specific data values (7,432 steps, 342 kcal, 4.2 km) anchor realism — vague placeholders produce vague UIs. Named UI patterns (glassmorphism, rounded corners) guide rendering precision. The bottom tab bar with exactly 5 items matches iOS Human Interface Guidelines.'
WHERE id = 'curated-fitness-tracker-app';

-- 10. curated-tiktok-screenshot-mockup: @chef.marcus / Chef Marcus → placeholder
UPDATE public.curated_prompts SET
  prompt = E'A realistic TikTok video screenshot. 9:16 vertical aspect ratio. The video shows a person in a modern kitchen mid-action, gesturing at a cutting board with colorful vegetables. TikTok UI overlays: right sidebar with heart icon (24.5K), comment icon (892), bookmark (3,210), share arrow, and spinning music disc. Bottom left: username "@[username]" with verified badge, caption text "Wait for it... the secret ingredient changes EVERYTHING" with hashtags "#cookinghack #foodtok #viral." Bottom: scrolling music credit bar "Original Sound - [creator name]." Top left: "Following | For You" tabs with "For You" underlined. Progress bar at very bottom. All UI elements authentic to current TikTok layout.',
  why_it_works = 'Specific engagement numbers (24.5K hearts, 892 comments) make the mockup feel like a real viral video. Authentic UI elements (spinning music disc, progress bar, Following/For You tabs) are what separate a realistic mockup from a generic phone screenshot.'
WHERE id = 'curated-tiktok-screenshot-mockup';
