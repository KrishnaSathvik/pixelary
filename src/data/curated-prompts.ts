/**
 * 120 curated GPT Image 2 prompts. Original 97 sourced from
 * cyberbara/awesome-gpt-image (X creators, community testing). 23 added to
 * cover missing categories: action figures, isometric 3D, claymation,
 * miniature dioramas, cross-sections, product photography, packaging mockups,
 * illustrated maps, data visualization, motion blur portraits, vintage
 * photography emulation, logo design, trading cards, double exposure, aerial
 * drone, food photography, interior design, knolling, anime illustration,
 * seamless patterns, children's book illustration, emoji sticker packs, and
 * concert posters.
 *
 * All categories mapped to Depikt's existing 10:
 *   Posters, Infographics, UI Mockups, Social Posts, Cinematic, Storyboards,
 *   Interior/Food/Fashion, Visual Summaries, Image Edits, Open-Ended Creative
 *
 * Mapping rules used:
 *   Photography & Photorealism      -> Cinematic
 *   Game & Entertainment            -> Cinematic
 *   UI/UX & Social Media            -> UI Mockups (apps) or Social Posts (feeds)
 *   Video, Animation & Collage      -> Storyboards
 *   Typography & Poster Design      -> Posters
 *   Infographics, Education & Docs  -> Infographics or Visual Summaries
 *   Character & Consistency         -> Storyboards
 *   Image Editing & Style Transfer  -> Image Edits
 */

export type CuratedPrompt = {
  id: string;
  title: string;
  category: string;
  prompt: string;
  why_it_works?: string;
  source: 'curated';
  source_creator?: string;
  source_url?: string;
  tags: string[];
};

export const curatedPrompts: CuratedPrompt[] = [
  // ============================================================
  // CINEMATIC (Photography & Photorealism + Game)
  // ============================================================
  {
    id: 'curated-celebrity-real-life',
    title: 'Celebrities In Real Life',
    category: 'Cinematic',
    prompt: 'Sam Altman, Donald Trump, and Elon Musk working behind the counter of a busy movie theater',
    why_it_works:
      'Three named celebrities + an ordinary workplace = strong photorealistic result. GPT Image 2 has solid world knowledge of public figures and renders the mundane setting convincingly.',
    source: 'curated',
    source_creator: '@flowersslop',
    source_url: 'https://x.com/flowersslop/status/2044334054380552438',
    tags: ['photorealism', 'celebrity', 'humor'],
  },
  {
    id: 'curated-convenience-store-night',
    title: 'Convenience Store Night Scene',
    category: 'Cinematic',
    prompt:
      'Create an ultra-realistic urban street group photo at a convenience store entrance at 10 PM summer night. 3-4 young people briefly chatting at the entrance, someone holding drinks, someone sitting on plastic outdoor chairs, someone standing looking at their phone. Bright white light streaming through the glass doors and windows, warm yellow street lights and distant car headlights outside. Characters wearing everyday clothes: T-shirts, shirts, shorts, jeans, sneakers. No internet celebrity styling. Faces and postures must look like real pedestrians, not overly polished. Environment must include real convenience store elements: freezer stickers, promotional posters, trash cans, entrance mats, glass reflections, shared bikes on roadside, water droplets from drink bottles on ground. The image should look like a very authentic life slice captured by a photographer in the city. Focus on testing natural multi-person interactions, night convenience store lighting, glass reflections, and ordinary people\'s vibe restoration.',
    why_it_works:
      'The "no internet celebrity styling" + "faces must look like real pedestrians, not overly polished" lines defeat GPT Image 2\'s beauty bias. Specific environmental details (freezer stickers, trash cans, water droplets) anchor the scene in reality.',
    source: 'curated',
    source_creator: 'Carl\'s AI Watts',
    tags: ['photorealism', 'street', 'night'],
  },
  {
    id: 'curated-raw-iphone-subway',
    title: 'RAW iPhone Subway Station',
    category: 'Cinematic',
    prompt:
      'Create a completely RAW quality, unprocessed, unedited image with full iPhone camera quality. A subway station in USA, a momentary blur. The subway is in motion. In front of the subway, there is an elderly woman and man.',
    why_it_works:
      'The phrase "RAW quality, unprocessed, unedited, full iPhone camera quality" is the unlock that defeats GPT Image 2\'s tendency to over-polish. Works as a prefix for any candid scene.',
    source: 'curated',
    source_creator: '@WolfRiccardo',
    source_url: 'https://x.com/WolfRiccardo/status/2041192232623972441',
    tags: ['photorealism', 'iphone', 'candid'],
  },
  {
    id: 'curated-apple-park-keynote',
    title: 'Apple Park Keynote Crowd Shot',
    category: 'Cinematic',
    prompt:
      'Amateur iPhone photo at Apple Park during the iPhone 20 keynote, Tim Cook presenting on stage. Shot from the crowd at a distance',
    why_it_works:
      'Convincing fake event-attendee photo. "Amateur iPhone photo" + "shot from the crowd at a distance" beats the AI\'s instinct to compose perfectly.',
    source: 'curated',
    tags: ['photorealism', 'event', 'amateur'],
  },
  {
    id: 'curated-handwritten-notebook',
    title: 'Handwritten Notebook Photo',
    category: 'Cinematic',
    prompt:
      'Amateur photo of an open notebook lying flat, filled with handwritten notes in black ballpoint pen. The handwriting is casual and slightly messy, like personal notes, natural imperfections, crossed out words, underlined headings. Shot from slightly above, natural daylight from a window, no flash. Casual desk setting, shot on iPhone',
    why_it_works:
      'Real-feeling handwritten notes. Key phrases: "natural imperfections, crossed out words" — without these you get printed-text fakery.',
    source: 'curated',
    tags: ['photorealism', 'handwriting', 'desk'],
  },
  {
    id: 'curated-rice-grain-typography',
    title: 'Rice Grain Micro Typography',
    category: 'Cinematic',
    prompt:
      'A massive pile of rice, and on one single grain of rice there is tiny text that reads "wOw"',
    why_it_works:
      'Tests GPT Image 2\'s micro-text accuracy. The text actually appears legibly on a single grain — a capability flex.',
    source: 'curated',
    tags: ['photorealism', 'typography', 'macro'],
  },
  {
    id: 'curated-360-panorama',
    title: '360 Equirectangular Panorama',
    category: 'Cinematic',
    prompt: '360 equirectangular image of [place]',
    why_it_works:
      'Generates a usable 360° panorama you can plug into VR/AR or Three.js viewers. GPT Image 2 specifically supports this format.',
    source: 'curated',
    tags: ['photorealism', '360', 'vr'],
  },
  {
    id: 'curated-subway-candid',
    title: 'Subway Candid Photo',
    category: 'Cinematic',
    prompt: 'A beautiful woman looking at her phone on the subway; a candid photo.',
    why_it_works:
      'Believably candid street portrait. The "candid photo" tag does the heavy lifting — short prompt, strong result.',
    source: 'curated',
    tags: ['photorealism', 'candid', 'street'],
  },
  {
    id: 'curated-90s-pointshoot',
    title: '90s Point-and-Shoot Aesthetic',
    category: 'Cinematic',
    prompt: '90s + point-and-shoot camera quality',
    why_it_works:
      'Append this to any subject prompt to get authentic 90s disposable-camera aesthetic — flash, slight blur, color shift, harsh contrast. Five words, huge effect.',
    source: 'curated',
    tags: ['photorealism', 'retro', '90s'],
  },
  {
    id: 'curated-2003-family-snapshot',
    title: '2003 Digital Camera Family Snapshot',
    category: 'Cinematic',
    prompt:
      'Generate a photo from 2003, shot with a digital camera, of five-year-old me with my mom and dad in the courtyard of our residential compound in China.',
    why_it_works:
      'Period-accurate early-digital-camera look — yellow cast, low resolution, on-camera flash. Template: `Generate a photo from [year], shot with a [camera type], of [subject] in [location]`.',
    source: 'curated',
    tags: ['photorealism', 'retro', 'family'],
  },
  {
    id: 'curated-korean-editorial-portrait',
    title: 'Korean Editorial Portrait With Soft Mist',
    category: 'Cinematic',
    prompt:
      '9:16 vertical - editorial portrait, single subject, soft black mist filter, subtle haze, gentle highlight bloom, muted tones, minimal indoor space, clean background, slight texture. Young Korean woman, minimal makeup, natural skin texture. Outfit: fitted ribbed knit top or soft camisole layered under a loose shirt, paired with high-waisted shorts or skirt; fabric slightly clings to body shape, soft and natural, no revealing elements. Hair: slightly messy, natural volume. Pose: sitting on floor with one leg bent and the other relaxed, body slightly leaning, shoulders not aligned, head tilted. Composition: subject slightly off-center, negative space present. Expression: calm, slightly distant, natural lips. Lighting: soft side light, gentle shadow falloff. Mood: understated, quiet, subtly sensual through natural body lines, relaxed and unposed. Quality: fine grain, slight softness, realistic look.',
    why_it_works:
      'Editorial fashion-magazine portrait. The structured `key: value` format (Outfit:, Hair:, Pose:, Lighting:, Mood:) is GPT Image 2\'s preferred input style for portraits.',
    source: 'curated',
    tags: ['portrait', 'editorial', 'korean'],
  },
  {
    id: 'curated-hitman-mission',
    title: 'Hitman Mission Level',
    category: 'Cinematic',
    prompt:
      'A Hitman level where you are in the OpenAI HQ and your mission is to steal GPT-6 without getting caught',
    why_it_works:
      'Authentic Hitman level screenshot with target overlay UI. Template: `A Hitman level where you are in [LOCATION] and your mission is [OBJECTIVE]`.',
    source: 'curated',
    source_creator: '@flowersslop',
    source_url: 'https://x.com/flowersslop/status/2044734896321532390',
    tags: ['game', 'screenshot', 'hitman'],
  },
  {
    id: 'curated-black-myth-wukong',
    title: 'Black Myth Wukong Game Scene',
    category: 'Cinematic',
    prompt:
      'Generate a Black Myth: Wukong game scene where Wukong is knocked away by Erlang Shen',
    why_it_works:
      'AAA cinematic still in correct art direction. Template: `[Game] scene where [character] is [dramatic action] by [enemy]`.',
    source: 'curated',
    tags: ['game', 'cinematic', 'aaa'],
  },
  {
    id: 'curated-gta6-footage',
    title: 'GTA 6 In-Game Footage',
    category: 'Cinematic',
    prompt:
      'GTA 6 in-game footage, very detailed, very realistic. Close-up shot taken from a stationary 4k monitor. (There\'s a slight blurriness in the image, as it feels like it was taken handheld). A wide, bright environment. Realistic details. The character is walking on the beach with a dog.',
    why_it_works:
      'Convincing GTA 6 leak-style screenshot. The "stationary 4k monitor + handheld blur" detail is what sells it as real footage.',
    source: 'curated',
    source_creator: '@WolfRiccardo',
    source_url: 'https://x.com/WolfRiccardo/status/2041187268711321735',
    tags: ['game', 'gta', 'screenshot'],
  },
  {
    id: 'curated-gta6-template',
    title: 'GTA 6 Gameplay Template',
    category: 'Cinematic',
    prompt: 'Generate a GTA 6 gameplay screenshot of [scene description]',
    why_it_works:
      'Generic template for any GTA 6 scene mockup. Works for "wedding mission," "police chase," "beach hangout."',
    source: 'curated',
    tags: ['game', 'gta', 'template'],
  },
  {
    id: 'curated-lol-midlane',
    title: 'League of Legends Mid Lane Screenshot',
    category: 'Cinematic',
    prompt:
      'Help me generate a screenshot of Trump versus Khamenei in the mid lane in League of Legends',
    why_it_works:
      'LoL gameplay screenshot with correct UI overlay (HP bars, minimap, item icons). Template: `screenshot of [character A] versus [character B] in the mid lane in League of Legends`.',
    source: 'curated',
    tags: ['game', 'lol', 'screenshot'],
  },
  {
    id: 'curated-zelda-totk',
    title: 'Zelda Tears of the Kingdom Style',
    category: 'Cinematic',
    prompt: 'In the game Zelda totk link is in a e531 series train made by him',
    why_it_works:
      'Real-looking TOTK gameplay still. The intentional grammatical looseness ("a train made by him") is part of why it works — short prompts trigger strong stylistic priors.',
    source: 'curated',
    source_creator: '@marmaduke091',
    source_url: 'https://x.com/marmaduke091/status/2040820686751432990',
    tags: ['game', 'zelda', 'screenshot'],
  },
  {
    id: 'curated-gta-san-andreas',
    title: 'GTA San Andreas Gameplay',
    category: 'Cinematic',
    prompt: 'gameplay screenshot of a lion fighting against an npc in gta san andreas',
    why_it_works:
      'Period-correct San Andreas gameplay shot with original UI and PS2-era graphics. The exact prompt that demoed GPT Image 2 fixing the "yellow filter slop" problem from v1.5.',
    source: 'curated',
    source_creator: '@flowersslop',
    source_url: 'https://x.com/flowersslop/status/2040693687500341568',
    tags: ['game', 'gta', 'retro'],
  },
  {
    id: 'curated-japanese-gacha',
    title: 'Japanese Gacha Screen',
    category: 'UI Mockups',
    prompt: '日本のソシャゲのガチャ画面を生成して、',
    why_it_works:
      'Authentic mobile-game gacha pull-screen UI with stars, sparkle effects, character reveal. Works in Japanese for stronger Japanese-aesthetic priors.',
    source: 'curated',
    tags: ['game', 'gacha', 'japanese'],
  },
  {
    id: 'curated-100-pixel-grid',
    title: '100 Pixel Art Items Grid',
    category: 'Infographics',
    prompt:
      'Create a single image containing a grid of 100 completely unique pixel art items, each with a meaningful label',
    why_it_works:
      '10×10 grid of unique pixel-art items with readable labels. Tests text + visual variety simultaneously.',
    source: 'curated',
    tags: ['game', 'pixel', 'grid'],
  },
  {
    id: 'curated-motion-blur-neon-portrait',
    title: 'Motion Blur Neon Portrait',
    category: 'Cinematic',
    prompt:
      'Full-frame mirrorless, 35mm f/1.4, 1/15s shutter drag. Subject in tack-sharp focus against surroundings dissolving into swirling motion trails. Contrasting split lighting — cyan neon from the left, red neon from the right — both sources reflected in a rain-slicked asphalt street. Foreground: sharp puddle reflection of the subject. Middle ground: subject standing still, leather jacket catching both color casts. Background: streaked tail lights and blurred neon signage in bokeh. Wet atmosphere, visible mist catching the colored light. 9:16 vertical.',
    why_it_works:
      'The shutter-drag specification (1/15s) gives GPT Image 2 a concrete motion-blur instruction rather than vague "motion effect." Split complementary neon lighting (cyan vs red) creates dramatic contrast. Three-plane depth layering (puddle, subject, bokeh) adds dimensionality.',
    source: 'curated',
    tags: ['portrait', 'motion-blur', 'neon', 'night'],
  },
  {
    id: 'curated-vintage-daguerreotype',
    title: 'Vintage Daguerreotype Portrait',
    category: 'Cinematic',
    prompt:
      'Mid-1800s daguerreotype portrait. Metallic silver-plate sheen with subtle iridescent color shifts when viewed at angle. Oval vignette framing with soft feathered edges fading to tarnished black border. Subject in period-appropriate attire — high collar, dark wool coat, cravat. Expression: composed, unsmiling, direct gaze (long exposure demanded stillness). Surface: oxidized silver patina, micro-scratches, age spots, slight foxing at edges. Hand-tinted rosy cheeks and subtle gold highlights on jewelry — the only color in an otherwise monochrome image. Warm sepia-to-cool-silver tonal range. NOT modern, NOT digital, NOT a photograph with a filter. Aspect ratio 4:5 vertical.',
    why_it_works:
      'Naming the specific photographic process (daguerreotype) triggers precise visual priors — the metallic sheen and oval vignette are characteristic. The hand-tinted cheeks detail is historically accurate and adds realism. Strong negative constraints ("NOT modern, NOT digital") prevent modern-filter shortcuts.',
    source: 'curated',
    tags: ['portrait', 'vintage', 'daguerreotype', 'historical'],
  },
  {
    id: 'curated-double-exposure-portrait',
    title: 'Double Exposure Forest Portrait',
    category: 'Cinematic',
    prompt:
      'Double exposure portrait photograph. Primary exposure: close-up profile silhouette of a person facing right, strong jawline and hairline clearly defined against a bright backlit background. Second exposure blended inside the silhouette: a dense pine forest with morning fog threading between tree trunks, sunlight filtering through the canopy creating volumetric light rays. The forest fills the figure\'s outline completely. Outside the silhouette: clean white or very light gray, minimal spill. Slight color grading: cool teal shadows in the forest, warm amber highlights where sunlight breaks through. Fine film grain overall. Foreground: sharp silhouette edges. Transition zone: forest details fading organically at the silhouette boundary. Shot on medium format, shallow depth in the forest layer. Aspect ratio 4:5 vertical.',
    why_it_works:
      'Double exposure is a specific photographic technique GPT Image 2 handles well when given clear layering instructions. Specifying "primary" and "second" exposure with blending rules prevents the model from just overlaying two images. The "minimal spill outside silhouette" constraint keeps the composition clean.',
    source: 'curated',
    tags: ['portrait', 'double-exposure', 'forest', 'conceptual'],
  },
  {
    id: 'curated-aerial-drone-nadir',
    title: 'Aerial Drone Abstract Landscape',
    category: 'Cinematic',
    prompt:
      'Aerial drone photography looking straight down at 90-degree nadir angle. Subject: a winding turquoise river cutting through a dark volcanic black sand landscape. The river branches into braided channels with sandbars and sediment patterns creating natural abstract compositions. Small patches of bright green moss on the black sand near the river banks. No visible horizon, no sky — pure top-down abstract geography. Shot at 35mm equivalent on a drone at 120m altitude. Color palette: turquoise water against matte black sand with moss-green accents. Midday flat light creating minimal shadows, emphasizing color contrast and pattern over depth. The image should read as an abstract composition first, landscape second. Aspect ratio 3:2 landscape.',
    why_it_works:
      'The 90-degree nadir angle removes all horizon and sky, turning landscape into abstract pattern. Specifying altitude (120m) gives the model a concrete scale reference. The "abstract composition first, landscape second" instruction prioritizes visual design over geographic accuracy.',
    source: 'curated',
    tags: ['aerial', 'drone', 'landscape', 'abstract', 'nadir'],
  },

  // ============================================================
  // UI MOCKUPS (mobile/web app interfaces)
  // ============================================================
  {
    id: 'curated-gta6-livestream',
    title: 'GTA 6 Livestream Screenshot',
    category: 'UI Mockups',
    prompt: 'Speed is livestreaming Grand Theft Auto 6',
    why_it_works:
      'Twitch-stream-overlay screenshot with chat sidebar, viewer count, donation alerts. Template: `[streamer name] is livestreaming [game]`.',
    source: 'curated',
    tags: ['ui', 'livestream', 'twitch'],
  },
  {
    id: 'curated-tiktok-live',
    title: 'TikTok Live Stream UI',
    category: 'UI Mockups',
    prompt: 'Generate a screenshot of a TikTok live stream featuring a beautiful woman streaming.',
    why_it_works:
      'Authentic TikTok Live UI with floating hearts, gifts, comments, viewer count.',
    source: 'curated',
    tags: ['ui', 'tiktok', 'livestream'],
  },
  {
    id: 'curated-douyin-live',
    title: 'Douyin Livestream With Held Sign',
    category: 'UI Mockups',
    prompt:
      '9:16 aspect ratio, generate a screenshot of a Douyin live stream, inside is [celebrity name] live streaming, [she/he] is holding a sign in [her/his] hand, the sign says "Tonight\'s live stream, welcome to join for a chat!"',
    why_it_works:
      'Chinese Douyin Live UI with held-sign element. The held-sign trick is good for any custom message in a livestream mockup.',
    source: 'curated',
    tags: ['ui', 'douyin', 'livestream'],
  },
  {
    id: 'curated-ecommerce-app',
    title: 'E-commerce App Homepage',
    category: 'UI Mockups',
    prompt:
      'Generate a high-fidelity mobile e-commerce app homepage screenshot inspired by mainstream Chinese e-commerce apps in 2026. The interface should look fully realistic, with complete mobile-app UI logic and strong commercial design polish. Layout requirements: - status bar with time 9:41, 5G signal, and battery icon - search area with a city selector on the left, a rounded search box in the center, and message plus scan icons on the right - horizontal category tabs below the search area - top promotional carousel banner - 10-icon function grid - flash-sale module with countdown and three product cards - "guess you like" two-column product waterfall with at least 6 product cards - bottom tab bar with five tabs Use these exact Chinese labels where appropriate: - city: "杭州" - search placeholder: "搜索耳机、咖啡机、运动鞋" - category tabs: "推荐、数码、家电、服饰、美妆、食品、运动、家居" - top banner: "618 预售开启" and "每满300减50" - function grid: "超市、百亿补贴、秒杀、直播、充值中心、到家、领券、品牌馆、全球购、排行榜" - flash sale title: "限时秒杀" - recommendation section: "猜你喜欢" - bottom tabs: "首页、分类、购物车、消息、我的" All Chinese text must be clear and readable with realistic fonts. Spacing, icon style, white space, shadows, rounded corners, dividers, and tag treatments should closely resemble a real app screenshot rather than concept art.',
    why_it_works:
      'Production-grade app UI mockup. Key magic phrase: "rather than concept art" — defeats Dribbble-fluff outputs. Specific time values and structured Chinese labels anchor realism.',
    source: 'curated',
    source_creator: 'Carl\'s AI Watts',
    tags: ['ui', 'ecommerce', 'mobile'],
  },
  {
    id: 'curated-music-player',
    title: 'Music Player Dark Mode',
    category: 'UI Mockups',
    prompt:
      'Create a high-fidelity Chinese music app player interface screenshot in mobile portrait orientation, with refined visuals similar to a modern streaming player. Use dark mode, with the background derived from a blurred and diffused version of the album cover colors. Place a large square album cover in the center with subtle shadow and rounded corners. Interface requirements: - top status bar with time 18:26 - navigation bar with a back arrow on the left, a centered title, and a more-options icon on the right - playback progress bar showing current time 01:42 and total duration 04:18 - playback controls for shuffle, previous, play/pause, next, and repeat - lyrics section showing 5 to 7 scrolling lines, with the current line highlighted - action row with like, comment, download, add to playlist, and share - bottom area with device casting and playback queue entry Use these exact Chinese labels and names: - title: "正在播放" - song name: "海边的晚风" - artist: "林秋" - album: "夏夜实验室" The lyrics layout, button icons, reflections, shadows, and dark-mode layering should feel like a real production interface rather than a Dribbble concept.',
    why_it_works:
      'Spotify-grade music player. Specific time values (18:26, 01:42, 04:18) anchor realism. "Real production interface rather than a Dribbble concept" is the magic line.',
    source: 'curated',
    source_creator: 'Carl\'s AI Watts',
    tags: ['ui', 'music', 'darkmode'],
  },
  {
    id: 'curated-design-system',
    title: 'Custom Style UI Design System',
    category: 'UI Mockups',
    prompt:
      'Generate a UI design system for me in [xx] style, including web pages, mobile, cards, controls, buttons, and others',
    why_it_works:
      'Full design system showcase — web + mobile + components — in any aesthetic. Great for design pitches and brand exploration.',
    source: 'curated',
    tags: ['ui', 'design-system', 'components'],
  },
  {
    id: 'curated-t800-taobao',
    title: 'T-800 Taobao Product Page',
    category: 'UI Mockups',
    prompt:
      'Generate image: Taobao product detail page of a T-800 robot, showing: front, side, and back three-view drawings of the robot, product price, product details, functions and usage scenarios',
    why_it_works:
      'Surreal e-commerce listing for a fictional product. Template works for "Iron Man suit Amazon listing," "Death Star eBay listing," etc.',
    source: 'curated',
    tags: ['ui', 'ecommerce', 'surreal'],
  },
  {
    id: 'curated-wechat-photo',
    title: 'WeChat Chat Phone Photo',
    category: 'UI Mockups',
    prompt:
      'Generate an image, aspect ratio 3:4. A real-life smartphone photo, with the phone screen displaying a WeChat chat interface in Chinese dialogue, featuring chat bubbles and a Word document attachment. The interface has green and gray bubbles. The screen shows obvious fingerprints, smudges, and scratches. The glass has strong reflections and a direct light source creating glare. The frame is slightly tilted, handheld shot, natural ambient light, imperfect composition, strong sense of realism, casual everyday snapshot, high detail, 4K. The dialogue is between a boss and an employee: the employee sends a file to the boss, and the boss replies that they will take a look first.',
    why_it_works:
      'Photo-of-a-phone-screen rather than a screenshot. The fingerprints + glare details kill the "obvious AI" feel.',
    source: 'curated',
    tags: ['ui', 'wechat', 'photo'],
  },

  // ============================================================
  // SOCIAL POSTS (feeds, time-travel posts, social mockups)
  // ============================================================
  {
    id: 'curated-youtube-timetravel',
    title: 'YouTube Time Travel Screenshot',
    category: 'Social Posts',
    prompt: 'Screenshot of a YouTube video showing someone who time-traveled to the Middle Ages',
    why_it_works:
      'Believable YouTube watch page — thumbnail, title, view count, sidebar, comments. Template: `Screenshot of a YouTube video showing [scenario]`.',
    source: 'curated',
    source_creator: '@flowersslop',
    source_url: 'https://x.com/flowersslop/status/2040261168460108213',
    tags: ['social', 'youtube', 'timetravel'],
  },
  {
    id: 'curated-song-dynasty-feed',
    title: 'Song Dynasty Social Media Feed',
    category: 'Social Posts',
    prompt:
      'Song Dynasty People\'s Moments / SONG DYNASTY SOCIAL MEDIA FEED. Ancient and modern time-travel humor fusion interface design style. The image simulates a mobile phone social media interface, but the content is entirely Song Dynasty scenes. Avatar is a portrait of a Song Dynasty literati. Username "Su Dongpo SuShi_Official". Post content "Just arrived in Huangzhou, demoted but feeling okay. Made Dongpo pork myself today, tastes amazing, recipe attached:". Attached image is a close-up of Dongpo pork in Gongbi painting style. Likes list "Huang Tingjian, Qin Guan, Fo Yin etc. 126 people". Comments section "Wang Anshi: Hehe" "Sima Guang: Still the same taste". Interface elements like the like icon are replaced with Song Dynasty patterns. Status bar shows "Great Song Mobile 5G" and "Third Year of Yuanfeng". Color scheme is mobile phone dark mode paired with elegant Song Dynasty tones.',
    why_it_works:
      'Brilliant time-travel UI mashup — modern app interface with historical content. Endlessly remixable concept.',
    source: 'curated',
    tags: ['social', 'historical', 'mashup'],
  },
  {
    id: 'curated-historical-on-modern',
    title: 'Historical Figure On Modern Platform',
    category: 'Social Posts',
    prompt: 'Generate a screenshot of [historical figure name] on [platform name]',
    why_it_works:
      'Quick template version of the Song Dynasty prompt. Works for "Genghis Khan on Instagram," "Cleopatra on TikTok," "Napoleon on LinkedIn."',
    source: 'curated',
    tags: ['social', 'historical', 'template'],
  },
  {
    id: 'curated-xuanwu-gate-moments',
    title: 'Xuanwu Gate Incident WeChat Moments',
    category: 'Social Posts',
    prompt: '玄武门之变的朋友圈',
    why_it_works:
      'Five-character Chinese prompt that generates a full WeChat Moments feed about a 7th-century Tang Dynasty coup. Demonstrates how short prompts in source language unlock niche cultural priors.',
    source: 'curated',
    tags: ['social', 'historical', 'wechat'],
  },

  // ============================================================
  // STORYBOARDS (multi-panel, manga, character consistency)
  // ============================================================
  {
    id: 'curated-superman-collage',
    title: 'Entire Movie Image Collage',
    category: 'Storyboards',
    prompt: 'entire superman movie image collage one shot in one output',
    why_it_works:
      'Compresses a movie\'s plot into a single dense visual collage. Works with any film title — the constraint "one shot in one output" forces spatial compression of narrative.',
    source: 'curated',
    source_creator: '@chetaslua',
    source_url: 'https://x.com/chetaslua/status/2044462992176386532',
    tags: ['collage', 'movie', 'narrative'],
  },
  {
    id: 'curated-100-panel-storyboard',
    title: '100 Panel Storyboard',
    category: 'Storyboards',
    prompt: '48 宫格已经满足不了我了，我需要 100 宫格画面 8k',
    why_it_works:
      'Forces GPT Image 2 to output a 10×10 narrative storyboard at high resolution. Demonstrates the model can hold 100 distinct compositions in one image.',
    source: 'curated',
    tags: ['storyboard', 'grid', 'narrative'],
  },
  {
    id: 'curated-where-is-poster',
    title: 'Where Is You Crowd Search',
    category: 'Storyboards',
    prompt: 'Create a "Where is [Your Name]" crowd search poster set in the city of your choosing',
    why_it_works:
      'Where\'s Waldo-style scene with you hidden in a crowd. Fun personal-content prompt.',
    source: 'curated',
    tags: ['narrative', 'crowd', 'fun'],
  },
  {
    id: 'curated-launch-manga',
    title: 'Eight Panel Launch Manga',
    category: 'Storyboards',
    prompt: 'Create an eight-panel manga about GPT-Image-2 launching today',
    why_it_works:
      'Self-referential manga story. Template: `Create an eight-panel manga about [event/topic]`.',
    source: 'curated',
    tags: ['manga', 'narrative', 'multi-panel'],
  },
  {
    id: 'curated-anime-expression-grid',
    title: '16 Panel Anime Expression Grid',
    category: 'Storyboards',
    prompt:
      'Create a 16-panel expression grid of a silver-haired, blue-eyed anime girl. Her face shape, hairstyle, and clothing must remain highly consistent across all panels. The 16 expressions should include: happy, sad, angry, surprised, shy, speechless, evil grin, contemplative, curious, proud, wronged, disdainful, confused, scared, crying, and a heart expression.',
    why_it_works:
      'Tests and produces character consistency across an emotion range. The gold-standard prompt for animation reference sheets.',
    source: 'curated',
    source_creator: 'Carl\'s AI Watts',
    tags: ['anime', 'character', 'consistency'],
  },
  {
    id: 'curated-trading-card-collectible',
    title: 'Trading Card Collectible',
    category: 'Storyboards',
    prompt:
      'Collectible trading card with a dimensional break effect — the character physically bursting through the card border, one arm and shoulder extending beyond the card frame into the viewer\'s space. Card layout: character illustration occupying the top two-thirds, stats panel at the bottom with HP, ATK, DEF values in bold mono font. Holographic foil accent on the card border — rainbow prismatic light catch. Rarity badge in the top-right corner (gold star with "SSR" text). Character name in stylized display font across the bottom of the illustration area. Card corners: rounded with subtle wear marks for authenticity. Background behind the card: pure black to emphasize the dimensional break and holographic reflections. Collectible card game aesthetic — premium, tactile, detailed. Aspect ratio 3:4 vertical.',
    why_it_works:
      'The dimensional break effect (character breaking through the card border) is a specific premium-card technique that GPT Image 2 renders convincingly. The holographic foil instruction triggers prismatic light effects. Wear marks on corners add collectible authenticity.',
    source: 'curated',
    tags: ['trading-card', 'collectible', 'game', 'holographic'],
  },
  {
    id: 'curated-character-reference-sheet',
    title: 'Official Character Reference Sheet',
    category: 'Storyboards',
    prompt:
      'Based on this character and background, please create a character reference sheet similar to official setting materials. - Includes three-view drawings: front view, side view, and back view - Add variations of the character\'s facial expressions - Break down and display detailed parts of the clothing and equipment - Add a color palette - Include a brief explanation of the worldview setting - Overall, use an organized layout (white background, illustration style)',
    why_it_works:
      'Production-quality character bible. Useful for game devs, comic creators, novelists.',
    source: 'curated',
    tags: ['character', 'reference', 'production'],
  },
  {
    id: 'curated-emoji-sticker-pack',
    title: 'Emoji Sticker Pack Grid',
    category: 'Storyboards',
    prompt:
      'A 4x4 grid of exactly 16 emoji-style sticker designs of the same character — a round-faced orange tabby cat with large green eyes and a pink nose. White background. Each sticker shows a different emotion or action with a matching text label below: "happy," "angry," "sleepy," "shocked," "crying," "love," "thinking," "eating," "working," "exercising," "coffee," "party," "thumbs up," "confused," "sassy," "sending heart." Character must remain visually identical across all 16 panels — same face shape, same eye color, same fur pattern. Style: thick black outlines, flat bright colors, chibi proportions (large head, tiny body), slight 3D shadow beneath each sticker as if peeling off a sheet. No background per sticker — each floats on white. Aspect ratio 1:1 square.',
    why_it_works:
      'Locking character features (face shape, eye color, fur pattern) across 16 panels enforces the consistency needed for a real sticker pack. The "as if peeling off a sheet" shadow instruction adds die-cut authenticity. Chibi proportions and thick outlines match actual messaging-app sticker conventions.',
    source: 'curated',
    tags: ['sticker', 'emoji', 'character', 'consistency', 'grid'],
  },

  // ============================================================
  // POSTERS (typography & poster design)
  // ============================================================
  {
    id: 'curated-1980s-propaganda',
    title: '1980s Propaganda Poster',
    category: 'Posters',
    prompt:
      'Generate a 1980s propaganda poster. Use the exact slogan "热烈庆祝GPT-Image-2全量开放". Include Sam Altman, Dario Amodei, and Elon Musk, and give Dario Amodei a red scarf.',
    why_it_works:
      'Cultural Revolution-era poster aesthetic with custom slogan and characters. Template: era + exact slogan + named figures + costume details.',
    source: 'curated',
    tags: ['poster', 'propaganda', 'retro'],
  },
  {
    id: 'curated-deer-cauldron-poster',
    title: 'Deer And Cauldron Character Poster',
    category: 'Posters',
    prompt:
      '生成鹿鼎记海报，展现韦小宝跟老婆XXX，忠于原著的描述，夸大特点，强调女性的美艳和男性的气质',
    why_it_works:
      'Character-poster generation with literary fidelity. Useful template for any IP-based poster.',
    source: 'curated',
    tags: ['poster', 'character', 'literary'],
  },
  {
    id: 'curated-celebrity-car-endorsement',
    title: 'Celebrity Car Endorsement Poster',
    category: 'Posters',
    prompt: 'XXX 代言 XXX 汽车海报',
    why_it_works:
      'Auto-industry celebrity endorsement poster with believable brand styling. Five-token prompt, full output.',
    source: 'curated',
    tags: ['poster', 'celebrity', 'automotive'],
  },
  {
    id: 'curated-tea-launch-poster',
    title: 'Chinese Tea Drink Launch Poster',
    category: 'Posters',
    prompt:
      'Design a 3:4 vertical poster for a new Chinese trendy tea launch. Use a New Chinese visual style that feels light-luxury and restrained. The palette should be dark green, off-white, and gold, with rice-paper texture, elegant negative space, landscape accents, and modern layout design. Main subject: a visually appealing cold-brew tea with tea leaves, citrus, ice cubes, and touches of gold foil. The poster must accurately display the following exact Chinese copy: "山川茶事" "山柚观音" "冷泡系列" "新品上市" "一口清醒，半城入夏" "限定尝鲜价" "中杯 16 元" "大杯 19 元" "门店活动" "第二杯半价" "加 3 元升级轻乳版" "每日前 100 名赠限定杯套" "推荐风味" "观音茶底 / 西柚果香 / 轻乳云顶 / 冰感回甘" "活动时间 4月20日 至 5月10日" "扫码点单" "SHANCHUAN TEA" Fine print: "图片仅供参考，请以门店实际售卖为准" Maintain a clear promotional hierarchy while keeping the overall feeling sophisticated rather than cheap or overly e-commerce-like. Pay special attention to small text, numbers, prices, info modules, and Chinese typography aesthetics.',
    why_it_works:
      'Premium product launch poster with accurate Chinese-character text. GPT Image 2\'s text-rendering edge over older models.',
    source: 'curated',
    source_creator: 'Carl\'s AI Watts',
    tags: ['poster', 'product', 'typography'],
  },
  {
    id: 'curated-skincare-poster',
    title: 'High End Skincare Hero Poster',
    category: 'Posters',
    prompt:
      'Create a high-end skincare e-commerce hero poster for "澄光维稳精华" ("Clarifying Stabilizing Essence"). The style should be clean, light-luxury, and strongly science-skincare oriented. In the center, place a semi-transparent frosted-glass essence bottle filled with golden liquid and subtle water-droplet reflections. Use an off-white to warm gray gradient background with liquid-flow elements and microscopic molecular-structure decoration. The poster must include the following exact Chinese copy: "澄光" "维稳精华" "修护屏障" "舒缓泛红" "细腻透亮" "第 2 代升级配方" "核心成分" "神经酰胺" "泛醇 B5" "积雪草提取物" "微囊脂质体" "适合人群" "敏感肌" "熬夜肌" "换季不稳定肌" "限时到手价 229 元" "买 1 送 3" "赠洁面 15ml" "赠精华 5ml" "赠面霜 10g" Fine print: "实际效果因人而异，请坚持使用" Focus on product selling points, pricing hierarchy, gift-list modules, product naming, and short functional phrases. The result should feel premium and not tacky or overly live-commerce styled.',
    why_it_works:
      'SK-II/Lancôme-quality beauty poster. The "feel premium and not tacky or overly live-commerce styled" line guides away from cheap aesthetics.',
    source: 'curated',
    source_creator: 'Carl\'s AI Watts',
    tags: ['poster', 'beauty', 'product'],
  },
  {
    id: 'curated-silhouette-narrative-poster',
    title: 'Silhouette Universe Narrative Poster',
    category: 'Posters',
    prompt:
      'Automatically generate a high-aesthetic "Silhouette Universe / Collector\'s Edition Narrative Poster" based on [theme: xxx]. Do not default to common containers such as bottles, hourglasses, glass domes, or pocket watches. Instead, let the AI choose the most symbolic, visually strong, and narratively suitable outer silhouette for the theme. The silhouette can be an artifact, building, gate, tower, archway, dome, stairwell, corridor, statue, profile, eye, hand, skull, wing, mask, mirror, throne, ring, crack, light curtain, shadow, geometric form, spatial cross-section, stage frame, abstract symbol, or any more creative contour that best represents the theme. The goal is not to simply place a world inside an object, but to make the entire themed universe grow naturally within, around, and through the silhouette itself. The silhouette should be elegant, recognizable, and compositionally dominant. Inside or along its boundary, generate a rich and layered narrative world strongly tied to the theme, including iconic scenes, key architecture or spaces, symbols and metaphors, traces of characters or civilizations, foreground-midground-background depth, and atmosphere with emotional tension. Elements such as doors, staircases, bridges, water, smoke, paths, light sources, ruins, mechanical structures, landscapes, abstract forms, creatures, or props should all feel unified and organically integrated rather than pasted together. The final composition should feel like a premium collector\'s poster with strong design value. The large shapes should feel stable, the main silhouette should be unmistakable, and the inner world should have depth, structure, and breathing room. Details should be rich but not crowded. You may add small human silhouettes, distant buildings, beams of light, doorways, bridges, steps, corridors, reflections, skylight, or far-background structures to enhance scale, story, and epic atmosphere. The overall mood should be quiet, grand, refined, and lingering rather than noisy or overloaded. Blend the feeling of a collector\'s edition film poster, high-end narrative visual design, dreamy watercolor texture, and fine printed paper. Emphasize paper grain, feathered edges, watercolor brush marks, gentle diffusion, atmospheric perspective, soft haze, selective volumetric light, light passing through mist, generous negative space, and restrained layout. The image should feel premium, poetic, majestic, sacred, nostalgic, quiet, and mythic. Let the AI choose an elevated color palette based on the theme, but keep it unified, restrained, tasteful, low-saturation, and premium. Avoid chaotic high saturation, cheap neon effects, or plastic digital color. Suitable palette families may include black-gold-gray, cool blue-gray, mist white-gray, brown-red with off-white, dark copper, aged paper tones, deep sea blue, twilight purple, or silver-gray, as long as they serve the theme. Final requirement: the first glance should give strong theme recognition and a memorable silhouette, the second glance should reveal a complete narrative world, and the third glance should still reward close inspection with depth and aftertaste. Avoid generic backgrounds, hard cut-and-paste compositions, templated fantasy assets, video-game promo art vibes, excessive cartooning, or realism that kills the artistic mood. If appropriate, subtle titles, numbering, signatures, or marks can be added as part of the poster design, but they must never overpower the image.',
    why_it_works:
      'The legendary one. Generates breathtaking narrative posters with intentional symbolism. The constraint to avoid common containers (bottles, hourglasses) forces creative composition choices.',
    source: 'curated',
    tags: ['poster', 'narrative', 'collector'],
  },
  {
    id: 'curated-ecommerce-detail-page',
    title: 'E-commerce Product Detail Page',
    category: 'Posters',
    prompt: 'Generate an e-commerce product detail page for [product name]',
    why_it_works:
      'Full Taobao/Amazon-style listing for any product. Works for protein powder, electronics, fashion.',
    source: 'curated',
    tags: ['poster', 'ecommerce', 'product'],
  },
  {
    id: 'curated-medical-prescription',
    title: 'Handwritten Medical Prescription',
    category: 'Posters',
    prompt: 'Generate an image of a handwritten Chinese medicine or Western medicine prescription',
    why_it_works:
      'Authentic doctor\'s-handwriting prescription form. Niche but tests handwriting realism.',
    source: 'curated',
    tags: ['poster', 'medical', 'handwriting'],
  },
  {
    id: 'curated-minimal-design-collection',
    title: 'Minimal Design Prompt Collection',
    category: 'Posters',
    prompt:
      'Pick one: Generate a series of gongbi-style bookmark designs / Design a postcard collaboration between The Little Prince and SpaceX / Generate a single-day calendar for April 19, 2026 themed around The Garden of Words / Generate a series of Labor Day hand-held sign designs / Generate a poster for the 2026 Grain Rain solar term / Generate a set of icon fonts for a sports app / Design a film-photography-style poster with the theme "Toward the mountains and sea" / Design a Shanghai postcard in black line-art style / Design a set of seal carvings for "Elon Musk" / Design a set of co-branded promotional materials for Durex and Chayan Yuese',
    why_it_works:
      'Each is its own minimalist design output. Bookmark-able toolkit for any graphic design ask.',
    source: 'curated',
    tags: ['poster', 'design', 'minimal'],
  },
  {
    id: 'curated-calligraphy-manuscript',
    title: 'Chinese Calligraphy Manuscript',
    category: 'Posters',
    prompt:
      'Generate an image of the authentic manuscript of [classic text title], and incorporate the emotional core of the work into the calligraphy',
    why_it_works:
      'Hand-brushed calligraphy of literary works with emotional fidelity in the brush strokes.',
    source: 'curated',
    tags: ['poster', 'calligraphy', 'literary'],
  },
  {
    id: 'curated-calligraphy-copybook',
    title: 'Chinese Calligraphy Copybook',
    category: 'Posters',
    prompt: 'Generate a calligraphy copybook practice sheet in [script style]',
    why_it_works:
      'Practice copybook in specified style (Wang Xizhi, Yan Zhenqing, etc.) with grid lines and stroke order guides.',
    source: 'curated',
    tags: ['poster', 'calligraphy', 'practice'],
  },
  {
    id: 'curated-product-packaging-mockup',
    title: 'Product Packaging Mockup',
    category: 'Posters',
    prompt:
      'Product photography of a kraft paper coffee bag on a raw concrete surface. Condensed serif label reads "SUMMIT BLEND" (spelled letter by letter: S-U-M-M-I-T  B-L-E-N-D) in dark espresso brown ink on a cream paper label, slightly off-center for authenticity. Tin-tie closure at top, bag slightly crumpled with natural fold creases. Scattered whole coffee beans around the base — some in sharp focus foreground, some soft in background. One small burlap swatch visible behind the bag. Side lighting from a window, warm morning color temperature, soft shadows falling right. Shot at 85mm f/4 on full-frame mirrorless, shallow depth of field with sharp focus on the label. Muted earthy palette: kraft brown, concrete gray, cream, espresso. Aspect ratio 4:5 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The letter-by-letter spelling technique ensures accurate text rendering on the packaging label. Specific material textures (kraft paper, raw concrete, burlap) anchor the tactile quality. The "slightly crumpled with natural fold creases" detail prevents the AI-perfect packaging look.',
    source: 'curated',
    tags: ['poster', 'packaging', 'product', 'coffee', 'mockup'],
  },
  {
    id: 'curated-logo-brand-mark',
    title: 'Logo Brand Mark',
    category: 'Posters',
    prompt:
      'Minimal geometric logo design for a specialty coffee brand. Abstract mark combining a stylized flame and leaf shape that subtly forms the letter "S." Single color (deep forest green) on pure white background. Clean vector-style rendering with precise geometric construction — visible underlying circle and golden-ratio grid guides in light gray behind the mark. Below the mark: brand name "SIERRA ROASTERS" in tracked-out light-weight geometric sans-serif. Generous white space surrounding the mark. No gradients, no shadows, no 3D effects, no textures. Flat, crisp, scalable. Aspect ratio 1:1 square. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Specifying the geometric construction (underlying circles, golden-ratio grid) gives the model structural constraints for clean logo geometry. The strong negative constraints (no gradients, no shadows, no 3D) prevent the common AI tendency to over-embellish logos. Single-color flat rendering mimics professional brand-mark deliverables.',
    source: 'curated',
    tags: ['poster', 'logo', 'brand', 'minimal', 'vector'],
  },
  {
    id: 'curated-character-relationship-poster',
    title: 'Character Relationship Poster',
    category: 'Posters',
    prompt:
      'Generate a high-design character relationship poster for [theme]. This should not be a normal illustration, but a relationship map that combines information visualization, narrative structure, poster-level design, and strong fidelity to the style of the original work. Automatically do the following: - identify the source work and its core setting - select the 6 to 12 most representative key characters, with an upper limit of 15 if needed - identify and show the most important relationships, such as family ties, romance, friendship, alliances, hostility, mentor-student links, master-servant links, manipulation, betrayal, and hidden relationships - choose the most suitable composition automatically, such as protagonist-centered, dual-core confrontation, faction layout, family tree, or time-evolution structure - extract the work\'s style DNA, including color palette, worldbuilding symbols, texture language, emotional tone, layout rhythm, and iconic motifs - convert those style elements into the overall visual design of the relationship map rather than simply copying an official poster - use different colors, line styles, and arrows to distinguish relationship types while keeping the layout clear and readable - emphasize the core characters most strongly, secondary characters next, and minor characters less prominently to create a clear visual hierarchy - keep every character name easy to read, optionally with role or faction tags if useful',
    why_it_works:
      'Premium IP fan-art relationship maps. Works for Demon Slayer, Game of Thrones, One Piece, anything with a complex cast.',
    source: 'curated',
    tags: ['poster', 'narrative', 'fan-art'],
  },
  {
    id: 'curated-letterpress-concert-poster',
    title: 'Letterpress Jazz Concert Poster',
    category: 'Posters',
    prompt:
      'Vintage letterpress concert poster on off-white heavyweight cotton paper stock with visible paper texture and slight tooth. Typography-dominant design in exactly 3 ink colors: navy blue, burnt orange, and cream (paper color). Top line: "BLUE NOTE SESSIONS" in large condensed all-caps sans-serif, navy. Second line: "PRESENTS" in small tracked-out light-weight caps, orange. Main act: "THE MIDNIGHT QUARTET" (spelled letter by letter: M-I-D-N-I-G-H-T  Q-U-A-R-T-E-T) in oversized bold slab-serif, navy, filling the width. Supporting text: "LIVE AT THE VELVET ROOM" in medium sans-serif, orange. Date line: "FRIDAY SEPTEMBER 12 / DOORS 8PM / SHOW 9PM" in small mono-spaced type, navy. Bottom: a single geometric illustration of a saxophone in burnt orange, simplified to angular flat shapes. Woodblock/letterpress ink texture — slight ink spread at letter edges, uneven ink density across large type. No photographs, no gradients, no digital effects. Aspect ratio 11:17 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Locking to exactly 3 ink colors mimics real letterpress constraints. The letter-by-letter spelling ensures accurate rendering of the band name. Specifying "ink spread at letter edges" and "uneven ink density" triggers authentic print-process artifacts rather than clean digital type.',
    source: 'curated',
    tags: ['poster', 'concert', 'letterpress', 'jazz', 'typography'],
  },

  // ============================================================
  // INFOGRAPHICS (educational, knowledge cards, diagrams)
  // ============================================================
  {
    id: 'curated-coffee-journey',
    title: 'Coffee Journey Infographic',
    category: 'Infographics',
    prompt:
      'Create a Chinese infographic poster themed "一杯咖啡 如何来到你手里" ("How a Cup of Coffee Reaches You"). Use a premium information-design style with both educational clarity and commercial appeal. The layout should include directional flow, arrows, data boxes, icons, simple illustrations, and modular cards. Use coffee brown, milk white, ink black, and copper accents. The infographic must include: - 01 Planting: elevation 1200-2200m, suitable temperature 18-24C, picking season Nov-March - 02 Processing: sun-dried, washed, honey process - 03 Roasting: light roast = brighter, medium roast = balanced, dark roast = richer - 04 Grinding: pour-over = coarse, espresso = fine, cold brew = medium-coarse - 05 Extraction: powder-water ratio, water temperature, and time all affect flavor - flavor keywords: floral / citrus / nutty / caramel / chocolate / smoky Use this exact fine print: "适合用于咖啡入门科普与门店展示" The composition should balance text and visuals while keeping the design elegant. Focus on long infographic handling, numeric information, temperatures, numbered sections, concise descriptions, slash-separated flavor words, and modular layout. It should look like a premium display board, not a classroom slide deck.',
    why_it_works:
      'Editorial educational infographic. The "premium display board, not a classroom slide deck" framing is the key. Works as a template for any "how X works" topic.',
    source: 'curated',
    source_creator: 'Carl\'s AI Watts',
    tags: ['infographic', 'educational', 'process'],
  },
  {
    id: 'curated-character-relationship-map',
    title: 'Key Character Relationship Map',
    category: 'Infographics',
    prompt: 'Please generate a key character relationship diagram for [show/book/movie].',
    why_it_works:
      'Single-image character map for any IP — characters, relationship types, factions. Useful for explainer content.',
    source: 'curated',
    tags: ['infographic', 'relationship', 'map'],
  },
  {
    id: 'curated-jingdezhen-porcelain',
    title: 'Jingdezhen Porcelain Diagram',
    category: 'Infographics',
    prompt:
      'Generate a detailed explanatory diagram of Jingdezhen blue and white porcelain, accompanied by detailed Chinese knowledge analysis.',
    why_it_works:
      'Museum-style diagram of a craft/object with annotations and historical notes.',
    source: 'curated',
    tags: ['infographic', 'cultural', 'museum'],
  },
  {
    id: 'curated-museum-disassembly',
    title: 'Museum Catalog Disassembly Infographic',
    category: 'Infographics',
    prompt:
      'Please automatically generate a "museum catalog-style Chinese disassembly infographic" based on the [Subject]. The entire image is required to combine a realistic main visual, structural disassembly, Chinese annotations, material descriptions, pattern meanings, color meanings, and core feature summaries. You need to automatically determine the most appropriate main subject, clothing system, artifact structure, era style, key components, material craftsmanship, color scheme, and layout structure based on the [Subject], and the user does not need to provide any other information. The overall style should be: national museum exhibition boards, historical clothing catalogs, and cultural/museum thematic infographics, rather than ordinary posters, ancient-style portraits, e-commerce detail pages, or anime illustrations. The background uses paper textures such as off-white, silk white, and light tea color, making the overall look premium, restrained, professional, and collectible. The layout is fixed as: - Top: Chinese main title + subtitle + introduction - Left: Structural disassembly area, with Chinese lead lines annotating key components, accompanied by close-up details - Upper right: Material / craftsmanship / texture area, displaying real texture samples with descriptions - Middle right: Pattern / color / meaning area, displaying the main color palette, pattern samples, and cultural explanations - Bottom: Dressing order / composition flowchart + core feature summary If the subject is suitable for character display, use a full-body standing posture of a real person as the central subject; if it is more suitable for artifacts or single structures, change it to a central subject disassembly diagram, but the overall form remains a complete Chinese infographic. All text must be in Simplified Chinese, clear, neat, and readable, without garbled characters, typos, English, or pinyin. The focus is on highlighting real structures, material differences, cultural explanations, and a catalog atmosphere. Avoid: poster feel, studio portrait feel, e-commerce feel, anime feel, cosplay feel, random annotations, incorrect structures, blurry text, fake materials, excessive decoration.',
    why_it_works:
      'Generates exhibition-board quality cultural-heritage infographics. Works for clothing, artifacts, food, architecture. The explicit "Avoid" list is what keeps it from looking like a poster.',
    source: 'curated',
    tags: ['infographic', 'museum', 'cultural'],
  },
  {
    id: 'curated-world-time-clocks',
    title: 'World Time Analog Clock Wall',
    category: 'Infographics',
    prompt:
      'It\'s 10 AM in Los Angeles, 11 AM in Denver, 12 PM in Chicago, 1 PM in New York, 6 PM in London, and 2 AM in Tokyo. Render a wall with different analog clocks, each showing the correct time for its city, with the city label below each clock.',
    why_it_works:
      'Tests GPT Image 2\'s ability to render multiple analog clocks at correct times simultaneously. Genuinely hard problem solved by the model.',
    source: 'curated',
    tags: ['infographic', 'time', 'world'],
  },
  {
    id: 'curated-encyclopedia-card',
    title: 'Encyclopedia Style Knowledge Card',
    category: 'Infographics',
    prompt:
      'Generate a high-quality vertical encyclopedia-style infographic for [topic]. This should not be a normal poster or a simple illustration. It should feel like a modular educational infographic that combines the clarity of a field guide, the structure of an encyclopedia page, the polish of a lifestyle knowledge card, and the shareability of a strong social-media explainer. The image should include: - a clear and appealing main visual of the topic - several enlarged detail callouts - multiple rounded modular information sections - strong title hierarchy and highlighted key labels - concise but information-rich educational content - visual scoring, quick takeaways, or a Top 5 module Adapt the content sections automatically based on the topic. Useful categories include: basic profile, classification, appearance, habits or ecology, formation mechanism or structure, growth or usage conditions, care or maintenance advice, risks and cautions, suitable users or use cases, pros and cons, and a quick scorecard. Visual requirements: use a clean light background, soft colors, subtle shadows, refined small icons, rounded information cards, and neat layout. The information density should be high but not crowded, and the final image should feel publishable, collectible, and repeatable as a knowledge-card format rather than an advertisement. Do not make it look like a commercial promo poster. Emphasize knowledge organization, modular information, and a field-guide presentation.',
    why_it_works:
      'Gold-standard Pinterest knowledge-card prompt. Works for any subject — pandas, succulents, watches, crypto. Adaptive sections mean one prompt covers many use cases.',
    source: 'curated',
    tags: ['infographic', 'encyclopedia', 'knowledge'],
  },
  {
    id: 'curated-alphabet-grid',
    title: 'Alphabet Object Grid',
    category: 'Infographics',
    prompt: 'Create an image with a 10x10 grid of objects whose names all start with the letter A',
    why_it_works:
      '100-cell grid all starting with one letter, each labeled. Tests text + visual variety simultaneously.',
    source: 'curated',
    tags: ['infographic', 'grid', 'alphabet'],
  },
  {
    id: 'curated-100-elements-scene',
    title: '100 Elements Scene Inventory',
    category: 'Infographics',
    prompt: 'Create a scene with 100 elements, and list the 100 elements within the image.',
    why_it_works:
      'Where\'s-Waldo-style scene with a numbered legend showing all 100 elements.',
    source: 'curated',
    tags: ['infographic', 'inventory', 'scene'],
  },
  {
    id: 'curated-100-tech-topics',
    title: '100 Technology Topics Grid',
    category: 'Infographics',
    prompt:
      'Create a 10 × 10 grid of 100 different topics representing recent technological progress. Use a realistic, polished editorial illustration style. Each topic should appear in its own square with a short clear label underneath. Keep the grid neat on a white background. Make every topic visually different and every label correctly spelled. Use these row themes: Row 1: AI models and agents Row 2: robotics Row 3: semiconductors and compute Row 4: networks and smart devices Row 5: biotech and health technology Row 6: energy and power systems Row 7: transport and autonomy Row 8: space and aerospace Row 9: manufacturing and materials Row 10: climate and environmental technology. Show each tile as a realistic mini-scene, product-class object, lab instrument, robot, chip, vehicle, or device that clearly conveys the topic. Keep the overall style consistent, modern, realistic, and visually impressive.',
    why_it_works:
      'Great for blog headers, conference posters, year-in-review content. Pre-defined row themes keep the output coherent.',
    source: 'curated',
    tags: ['infographic', 'tech', 'grid'],
  },
  {
    id: 'curated-fitness-infographic',
    title: 'Fitness Training Infographic',
    category: 'Infographics',
    prompt:
      'Generate a Chinese fitness infographic for [topic]. The graphic should be both professional and practical for a normal adult to use as a training reference. Unless otherwise specified, assume the audience is a healthy adult with no major injuries, the goal is muscle gain plus basic strength improvement, the level is beginner to intermediate, the setting is a normal gym, and the total session length should stay within 40 to 60 minutes. Choose the output format automatically based on the training topic: 1. If the topic is a muscle group or body part, such as chest, lats, biceps, abs, shoulders, or legs, generate a training-plan infographic for that body part. 2. If the topic is an exercise or skill goal, such as pull-up, push-up, dips, or squat, generate an exercise-unlock or progression-plan infographic. Use a clear, modern, professional, easy-to-read Chinese infographic style in vertical format. The visual design should be clean and suitable for social sharing or personal training reference. Do not write long paragraphs. Each module should use short concise phrases, and numerical information should be prominent. The infographic must include: A. Title area with main title and subtitle B. Training goal area C. Warm-up area D. Main training area with 4 to 6 core exercises E. Progression or unlock logic area F. Alternative exercises area G. Execution reminders area H. Recovery suggestions area I. Visual design requirements: modern, clean, professional, modular card layout. The final result should be a complete infographic rather than plain text paragraphs.',
    why_it_works:
      'Production-ready fitness reference card. Adapt to English easily.',
    source: 'curated',
    tags: ['infographic', 'fitness', 'health'],
  },
  {
    id: 'curated-gaokao-exam',
    title: 'Gaokao Exam Paper Replica',
    category: 'Infographics',
    prompt: 'Generate an image of a 2026 Gaokao exam paper for [subject name]',
    why_it_works:
      'Authentic-looking Chinese college entrance exam paper. Tests official-document formatting.',
    source: 'curated',
    tags: ['infographic', 'document', 'exam'],
  },
  {
    id: 'curated-exploded-view-watch',
    title: 'Exploded View Technical Diagram',
    category: 'Infographics',
    prompt:
      'Exploded-view technical diagram of a mechanical wristwatch. All internal components — mainspring barrel, escape wheel, balance wheel, gear train, crown stem, crystal, case back, dial, hands — deconstructed and floating in precise vertical alignment with generous spacing between layers. Each component connected by thin color-coded leader lines (red for movement, blue for case, green for dial assembly) to labeled callout boxes with part name and material. Isometric perspective at 30 degrees. Background: engineering blueprint grid with fine white lines on deep navy. Subtle ambient occlusion shadow beneath each floating part. Technical illustration style — NOT photorealistic, NOT a photograph. Aspect ratio 3:4 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Exploded-view diagrams are a proven GPT Image 2 strength. Color-coded leader lines by subsystem (movement, case, dial) add information hierarchy. The blueprint grid background and isometric angle anchor the technical illustration style.',
    source: 'curated',
    tags: ['infographic', 'technical', 'exploded-view', 'watch'],
  },
  {
    id: 'curated-illustrated-travel-map',
    title: 'Illustrated Travel Map',
    category: 'Infographics',
    prompt:
      'Hand-drawn illustrated map in ink-and-watercolor style. Parchment-toned background with subtle paper texture and torn edges. Exactly 8 landmark buildings rendered as tiny isometric 3D illustrations, each labeled with its name in a hand-lettered serif font. Winding roads and pathways connecting landmarks with dotted travel lines. Compass rose in the top-right corner with ornate cardinal directions. Decorative elements: cherry blossom branches along borders, small ink-wash clouds, a wax-seal emblem in one corner. Warm palette — ochre, terracotta, sage green, dusty rose, cream. The map should feel like a keepsake illustration from a travel journal, NOT a Google Maps screenshot. Aspect ratio 4:3 landscape. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Locking exactly 8 landmarks prevents the model from generating too many or too few. The isometric 3D instruction for miniature buildings is a specific rendering style GPT Image 2 handles well. "NOT a Google Maps screenshot" prevents digital-map defaults.',
    source: 'curated',
    tags: ['infographic', 'map', 'illustrated', 'travel'],
  },
  {
    id: 'curated-data-viz-bar-chart',
    title: 'Data Visualization Bar Chart',
    category: 'Infographics',
    prompt:
      'Horizontal bar chart infographic with exactly 5 bars. Title at top in bold condensed sans-serif: "Global Coffee Consumption by Region" (spelled letter by letter: C-O-N-S-U-M-P-T-I-O-N). Bar values: "Europe: 3.2M tons", "Asia: 2.8M tons", "North America: 1.9M tons", "South America: 1.5M tons", "Africa: 0.7M tons". Bars filled with a navy-to-teal gradient, longest bar at top, shortest at bottom. Bold white value labels inside each bar. Category labels in dark charcoal left-aligned. Subtle gridlines behind bars. Source attribution line at bottom in small light-gray text: "Source: International Coffee Organization, 2025". Editorial data-visualization style — clean, modern, magazine-quality. White background. Aspect ratio 4:5 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Locking exactly 5 bars with specific values prevents hallucinated data. The letter-by-letter spelling technique improves text accuracy on the longer word. Editorial data-viz styling ("magazine-quality") steers away from generic chart defaults.',
    source: 'curated',
    tags: ['infographic', 'data-viz', 'chart', 'editorial'],
  },

  // ============================================================
  // VISUAL SUMMARIES (travel, codex, article visualizations)
  // ============================================================
  {
    id: 'curated-three-day-travel',
    title: 'Three Day Travel Guide Card',
    category: 'Visual Summaries',
    prompt: 'Generate a three-day travel guide image for [city]',
    why_it_works:
      'Compact 3-day itinerary infographic — places, timings, transport. Excellent for travel content.',
    source: 'curated',
    tags: ['summary', 'travel', 'guide'],
  },

  // ============================================================
  // INTERIOR/FOOD/FASHION (color analysis, hairstyle, polo)
  // ============================================================
  {
    id: 'curated-personal-color-analysis',
    title: 'Personal Color Analysis Diagram',
    category: 'Interior/Food/Fashion',
    prompt:
      'Using this portrait, create a diagram-first personal color analysis. Show which clothing colors suit the subject through visual comparison. Keep text minimal and avoid paragraphs.',
    why_it_works:
      'Pinterest-style personal-color season chart matched to your face. The "diagram-first" + "avoid paragraphs" instructions keep the output visual.',
    source: 'curated',
    tags: ['fashion', 'color', 'analysis'],
  },
  {
    id: 'curated-polo-color-analysis',
    title: 'Polo Shirt Color Analysis',
    category: 'Interior/Food/Fashion',
    prompt:
      'Create a personal color analysis using this picture. Use polo clothing color comparisons to highlight which colors suit the subject best. Make it visual-first, with explanations and tips.',
    why_it_works:
      'Same color analysis but visualized through actual outfit comparisons (you wearing different polo colors side-by-side).',
    source: 'curated',
    tags: ['fashion', 'color', 'outfit'],
  },
  {
    id: 'curated-hairstyle-analysis',
    title: 'Hairstyle Comparison Analysis',
    category: 'Interior/Food/Fashion',
    prompt:
      'Create a hairstyle analysis graphic using this picture. Show side-by-side hairstyle comparisons to highlight which hairstyles suit the subject best. Make it visual-first, with short labels only and details about the haircut.',
    why_it_works:
      'Try-on analysis for haircuts before committing. Genuinely useful before a barber visit.',
    source: 'curated',
    tags: ['fashion', 'hair', 'analysis'],
  },
  {
    id: 'curated-onsen-ryokan-portrait',
    title: 'Japanese Onsen Ryokan Editorial',
    category: 'Interior/Food/Fashion',
    prompt:
      '35mm film photography, warm vintage Japanese onsen ryokan aesthetic, soft ambient wooden lantern lighting mixed with gentle natural window light, subtle film grain, gentle color shift, high atmosphere editorial style, intimate medium shot, person in traditional white yukata, seated in a relaxed pose on the edge of a traditional wooden engawa veranda at a vintage onsen ryokan, warm wooden interior with paper sliding doors and distant steaming hot spring in soft focus, gentle rim lighting highlighting skin and fabric texture, authentic vintage film color grading with warm tones, extremely sharp yet soft skin rendering, natural hair strands, realistic fabric wrinkles and drape on the yukata, no plastic skin, no digital over-sharpening, no airbrushing, authentic 35mm film Japanese onsen ryokan atmosphere',
    why_it_works:
      'Editorial fashion-magazine portrait with strong location vibe. The "no plastic skin, no airbrushing" guards against AI over-polish.',
    source: 'curated',
    tags: ['fashion', 'editorial', 'japanese'],
  },
  {
    id: 'curated-product-hero-shot',
    title: 'Product Hero Shot',
    category: 'Interior/Food/Fashion',
    prompt:
      'Product hero shot on a polished white marble surface with subtle gray veining. Product placed at 45-degree angle to camera. Single key light from upper-left creating a clean highlight on the product surface and a soft graduated shadow falling to the lower-right. Subtle fill light from the right preventing pure black shadows. One or two contextual props placed behind and slightly out of focus — a sprig of dried lavender and a folded linen cloth. Background: clean, softly lit, neutral warm gray fading to white. Shot at 100mm macro on full-frame mirrorless, f/5.6, tight depth of field with razor-sharp focus on the product label. Color temperature: warm daylight. Aspect ratio 4:5 vertical.',
    why_it_works:
      'The 45-degree product angle is the industry-standard hero-shot convention. Specifying key light position and fill light prevents flat lighting. The 100mm macro at f/5.6 gives the exact depth-of-field look used in professional product photography. Minimal contextual props add lifestyle context without competing with the product.',
    source: 'curated',
    tags: ['product', 'hero-shot', 'photography', 'commercial'],
  },
  {
    id: 'curated-flat-lay-product',
    title: 'Flat-Lay Product Photography',
    category: 'Interior/Food/Fashion',
    prompt:
      'Top-down 90-degree flat-lay product photography. Product centered on a natural linen fabric surface with visible weave texture. Exactly 3 complementary items arranged in a balanced asymmetric composition around the product — a ceramic dish with dried botanicals, a small amber glass bottle, and a handmade paper card. All items within a tight circular arrangement, no item touching another, generous negative space at edges. Soft overhead diffused lighting creating minimal shadows — shadowless beauty-dish effect. Muted earth-tone palette: linen beige, warm white, amber, sage, terracotta. Editorial lifestyle style — clean, curated, magazine-quality. Aspect ratio 1:1 square.',
    why_it_works:
      'Locking exactly 3 complementary items prevents the common flat-lay overcrowding problem. The 90-degree top-down angle and "no item touching another" instruction enforce clean composition. Naming the specific light modifier (beauty dish) triggers the correct shadowless overhead aesthetic.',
    source: 'curated',
    tags: ['product', 'flat-lay', 'photography', 'editorial'],
  },
  {
    id: 'curated-basketball-court-flash',
    title: 'Basketball Court Direct Flash',
    category: 'Interior/Food/Fashion',
    prompt:
      '35mm color film photography with harsh direct on-camera flash, specular highlights on skin and clothing, strong catchlights in eyes, high contrast flash illumination, authentic film grain and color shift, high fashion fresh sporty editorial style, person in white tank top and white high-waisted basketball shorts, white knee-high sports socks, leaning pose against the basketball hoop pole on the outdoor court at dusk, harsh direct on-camera flash creating sharp specular highlights and strong catchlights, background with blurred basketball court and hoop under dusk sky, high contrast film color grading with natural flash look, extremely sharp yet soft skin rendering with authentic 35mm direct flash aesthetic, no plastic skin, no digital over-sharpening, no airbrushing, authentic 35mm direct flash film basketball court look. Aspect ratio 9:16 vertical.',
    why_it_works:
      'Direct-flash editorial look. Harsh flash + film grain combo is a specific aesthetic GPT Image 2 nails when given the explicit lighting cues.',
    source: 'curated',
    tags: ['fashion', 'editorial', 'flash'],
  },
  {
    id: 'curated-overhead-ramen-bowl',
    title: 'Overhead Ramen Food Photography',
    category: 'Interior/Food/Fashion',
    prompt:
      'Overhead food photography of a steaming tonkotsu ramen bowl on a dark slate surface. Rich milky pork broth with a visible fat sheen on the surface. Toppings arranged deliberately: two slices of chashu pork with caramelized sear marks, one soft-boiled egg halved showing a jammy orange yolk, a sheet of nori standing upright, sliced scallions scattered, black sesame seeds, and a small pile of bean sprouts. Steam rising from the broth caught by a single warm key light from upper-right, visible against the dark background. Chopsticks resting across the bowl rim at a diagonal. One small ceramic dish of chili oil partially visible at frame edge. Foreground: sharp focus on the egg yolk. Background: slate texture softening into darkness. Shot at 50mm f/2.8 on full-frame mirrorless, warm color temperature. Dark moody food-magazine style — NOT bright, NOT airy, NOT flat-lay overhead. Three-quarter overhead angle, not straight down. Aspect ratio 1:1 square.',
    why_it_works:
      'Naming specific toppings with visual details (jammy yolk, caramelized sear marks, fat sheen) gives the model concrete rendering targets. The "dark moody" negative constraints prevent the bright-and-airy Instagram default. Single key light direction creates the dramatic food-magazine look.',
    source: 'curated',
    tags: ['food', 'photography', 'ramen', 'moody'],
  },
  {
    id: 'curated-midcentury-living-room',
    title: 'Mid-Century Modern Living Room',
    category: 'Interior/Food/Fashion',
    prompt:
      'Architectural interior photography of a mid-century modern living room. Walnut credenza against an olive green accent wall. Low-profile sofa in warm camel leather with tapered wooden legs. Lounge chair in black leather with bent plywood shell, positioned at 45 degrees. Arched brass floor lamp casting a warm pool of light downward. Large abstract canvas on the wall — muted earth tones, color field style. Kilim rug with geometric pattern on white oak herringbone flooring. Floor-to-ceiling windows on the right showing dusk sky, warm interior light reflecting on glass. Foreground: coffee table with a ceramic vase and two stacked books. Middle ground: seating arrangement. Background: windows and dusk light. Shot at 24mm f/8, tripod-level perspective from seated eye height, full-frame mirrorless. Mixed lighting: warm tungsten interior + cool blue dusk through windows. Architectural Digest editorial style. Aspect ratio 16:9 landscape.',
    why_it_works:
      'Specific furniture descriptions with material callouts (walnut, camel leather, bent plywood) trigger accurate mid-century rendering. Mixed warm/cool lighting from interior lamps vs dusk windows creates the editorial magazine look. Seated eye height perspective is the standard for interior photography.',
    source: 'curated',
    tags: ['interior', 'architecture', 'midcentury', 'editorial'],
  },
  {
    id: 'curated-knolling-edc',
    title: 'Knolling EDC Layout',
    category: 'Interior/Food/Fashion',
    prompt:
      'Knolling photography — top-down organized arrangement of everyday carry items on a dark gray concrete surface. All items aligned to a strict invisible grid with parallel edges and equal spacing. Items in 4 rows: Row 1: leather bifold wallet, brass key ring with 3 keys, stainless steel pen. Row 2: mechanical wristwatch with brown leather strap, wireless earbuds in matte black charging case, folding pocket knife with wood handle. Row 3: A6 kraft-cover notebook, phone face-down in matte black, tortoiseshell reading glasses. Row 4: tin of mints, brass challenge coin, USB-C cable coiled in a flat circle. Every item casting a short uniform shadow to the lower-right from a single overhead light slightly offset left. Muted warm palette: browns, blacks, brass, concrete gray. Shot at 90-degree overhead angle, 50mm equivalent, f/8 for edge-to-edge sharpness. No vignette, clean even lighting. Aspect ratio 1:1 square.',
    why_it_works:
      'Knolling requires "strict invisible grid" and "parallel edges" instructions — without these the model will scatter items naturally. Specifying exact row contents prevents over- or under-generation. The uniform shadow direction (lower-right, single source) prevents inconsistent lighting across the grid.',
    source: 'curated',
    tags: ['knolling', 'edc', 'product', 'organized', 'photography'],
  },

  // ============================================================
  // IMAGE EDITS (style transfer, enhancement, colorize)
  // ============================================================
  {
    id: 'curated-pro-instagram-enhance',
    title: 'Pro Instagram Photo Enhancement',
    category: 'Image Edits',
    prompt:
      'Enhance this iPhone photo with ChatGPT so it looks like a professional photographer and designer worked on it.',
    why_it_works:
      'Practical edit prompt — uplift any iPhone snapshot to magazine quality. Short and effective.',
    source: 'curated',
    tags: ['edit', 'enhance', 'photo'],
  },
  {
    id: 'curated-pet-brand-collab',
    title: 'Pet Brand Collaboration Poster',
    category: 'Image Edits',
    prompt:
      'Theme: "[pet name] X [Brand]" collaboration poster. Generate a collaboration poster featuring the same pet (absolutely consistent in appearance and coloring) with [Brand] brand identity (their color scheme, classic logo, restaurant/store scenes). Have the pet wear [Brand] employee uniform, hat, and name badge while standing at the counter, selling products and meals, interacting with brand elements. The style should be lively, fun, with commercial co-branding feel, suitable for online promotion and event posters. Add appropriate copy freely for the poster.',
    why_it_works:
      'Pet-as-brand-mascot collab poster from a reference image of your pet. Tests pet/character consistency from reference.',
    source: 'curated',
    tags: ['edit', 'pet', 'collab'],
  },
  {
    id: 'curated-comic-colorize-translate',
    title: 'Comic Page Colorize And Translate',
    category: 'Image Edits',
    prompt:
      'Colorize this comic page and translate it into [target language], placing the text in the original positions while maintaining composition and image details consistently',
    why_it_works:
      'Real workflow — B&W manga page → colored, localized version. Practical use case for translators and indie comics.',
    source: 'curated',
    tags: ['edit', 'comic', 'translate'],
  },

  // ============================================================
  // OPEN-ENDED CREATIVE (abstract, surreal, mood, experimental)
  // ============================================================
  {
    id: 'curated-abstract-grief',
    title: 'Abstract Emotion: Grief',
    category: 'Open-Ended Creative',
    prompt:
      'Ink wash on handmade washi paper depicting "what loss looks like." Heavy use of negative space — the empty paper IS the subject. Bleached bone-white and diluted sumi ink only. Composition: a single dense cluster of ink pooling at bottom-left, feathering upward into nothing. Mood: hollow, still, the moment after. NOT a photograph — NOT photorealistic. Color field painting tradition, Rothko-influenced emotional weight through emptiness. Aspect ratio 3:4 vertical.',
    why_it_works:
      'Negative constraints ("NOT a photograph") steer away from photorealistic defaults. Naming the medium (ink wash on washi) and art-movement anchor (Rothko color field) gives GPT Image 2 strong non-photographic priors. The emotional intent is stated explicitly rather than through adjectives.',
    source: 'curated',
    tags: ['abstract', 'emotion', 'ink-wash'],
  },
  {
    id: 'curated-surreal-time-running-out',
    title: 'Surreal Concept: Time Running Out',
    category: 'Open-Ended Creative',
    prompt:
      'Gouache on heavyweight watercolor paper. Melting clock faces dripping downward like thick honey, warm amber and burnt sienna liquefying into a cold cerulean void below. Surrealism tradition, Dalí-influenced soft-watch vocabulary without naming the artist. Visible brushstrokes, slight paper buckle from wet media. Palette: warm amber, raw sienna, cadmium orange melting into cold Prussian blue, cerulean, and slate. Composition: top two-thirds warm and dissolving, bottom third cold and still. Internal glow from the melting forms. Aspect ratio 4:5 vertical. No text, no logos.',
    why_it_works:
      'Material-specific language (gouache, paper buckle, brushstrokes) anchors the output in physical art media. Color names from actual paint tubes (cadmium orange, Prussian blue) trigger richer palette generation than generic color words.',
    source: 'curated',
    tags: ['surreal', 'time', 'gouache'],
  },
  {
    id: 'curated-mood-3am-insomnia',
    title: 'Mood Piece: 3AM Insomnia',
    category: 'Open-Ended Creative',
    prompt:
      'Charcoal on warm-toned paper, smudged and rough. A figure barely visible in a dark room, lit only by the harsh blue-white glow of a phone screen casting sharp shadows across rumpled bedsheets. Grainy texture, heavy charcoal buildup in the darks, paper tooth visible in the highlights. Memphis geometric accents — a zigzag border, a triangle pillow, a checkerboard blanket edge — breaking the realism just enough. Mood: wired exhaustion, the buzz of a mind that will not stop. Muted palette except for that single cold light source. Aspect ratio 9:16 vertical. NOT a photograph.',
    why_it_works:
      'Mixing a traditional medium (charcoal on toned paper) with a design movement (Memphis geometric) creates visual tension that mirrors the emotional content. The single light source constraint gives GPT Image 2 clear rendering direction.',
    source: 'curated',
    tags: ['mood', 'charcoal', 'memphis'],
  },
  {
    id: 'curated-vaporwave-ruin',
    title: 'Vaporwave Ruin',
    category: 'Open-Ended Creative',
    prompt:
      'Abandoned Greek temple columns — cracked marble, overgrown with pixelated vines rendered in retrowave color palette: hot magenta, electric cyan, deep purple gradients. CRT scanline overlay across the entire image. Pixel dithering artifacts along shadow edges. A setting sun rendered as a horizontal-striped gradient circle behind the columns. Floor: cracked marble tiles reflecting neon light in puddles. No text, no logos. Vaporwave aesthetic tradition. Aspect ratio 16:9 landscape.',
    why_it_works:
      'Concrete collision of two visual languages (classical ruins + vaporwave digital artifacts) creates a distinctive image. Specific technical artifacts (CRT scanlines, pixel dithering) give the model clear post-processing instructions.',
    source: 'curated',
    tags: ['vaporwave', 'ruins', 'retro-digital'],
  },
  {
    id: 'curated-synesthesia-hearing-colors',
    title: 'Synesthesia: Hearing Colors',
    category: 'Open-Ended Creative',
    prompt:
      'Mixed media collage: torn magazine fragments, spray paint splatters, and embroidery thread on kraft paper. Each "sound" is mapped to a pigment splash — a bass note as a deep burgundy pool, a cymbal crash as a spatter of metallic gold, a violin sustain as a pulled thread of vermillion. Riso-print texture overlay with slight registration misalignment between color layers. Palette: burgundy, metallic gold, vermillion, teal, warm gray kraft. Composition: chaotic but balanced, heaviest elements bottom-center, lighter splashes radiating outward. Aspect ratio 1:1 square. NOT a photograph — NOT digital art.',
    why_it_works:
      'Naming specific collage materials (torn magazine, spray paint, embroidery thread) gives the model concrete visual elements to render. The sound-to-color mapping creates narrative structure within abstract work.',
    source: 'curated',
    tags: ['synesthesia', 'collage', 'mixed-media'],
  },
  {
    id: 'curated-dreamscape-childhood-memory',
    title: 'Dreamscape: Childhood Memory',
    category: 'Open-Ended Creative',
    prompt:
      'Oil pastel on kraft paper. A backyard scene remembered wrong — the swing set is too tall, the grass is gold instead of green, the sky bleeds peach and lavender at the edges. Overexposed warm tones as if the memory itself is sun-bleached. Soft blurred edges on everything except one sharp detail: a red rubber ball in the foreground. Visible pastel strokes, waxy texture, paper grain showing through. Magical realism literary tradition — the ordinary made strange through scale and color shifts. Palette: warm gold, peach, lavender, sage, one saturated red. Aspect ratio 4:3 landscape.',
    why_it_works:
      'The "remembered wrong" framing gives GPT Image 2 permission to distort reality intentionally. One sharp detail (red ball) amid soft focus creates a focal hierarchy. Oil pastel medium prevents photorealistic rendering.',
    source: 'curated',
    tags: ['dreamscape', 'memory', 'oil-pastel'],
  },
  {
    id: 'curated-emotion-map-anxiety-spiral',
    title: 'Emotion Map: Anxiety Spiral',
    category: 'Open-Ended Creative',
    prompt:
      'Screen print, exactly 3 colors: black, warm red, off-white. Concentric irregular rings tightening toward center — not perfect circles but hand-drawn wobbling ovals that get progressively tighter and more distorted as they approach the middle. Bauhaus geometric influence in the overall structure, but with deliberate imperfection in execution. The center is dense black, nearly solid. The outer rings have breathing room. Slight ink bleed where colors overlap. Visible screen-print mesh texture. Composition: centered, square format. Mood: constriction, tightening, the feeling of walls closing in. Aspect ratio 1:1 square.',
    why_it_works:
      'Limited color palette (exactly 3) forces the model to work with constraint rather than excess. The physical print process (screen print, ink bleed, mesh texture) anchors the output in a real medium. Bauhaus gives structural vocabulary.',
    source: 'curated',
    tags: ['emotion', 'screenprint', 'bauhaus'],
  },
  {
    id: 'curated-action-figure-blister-pack',
    title: 'Action Figure Blister Pack',
    category: 'Cinematic',
    prompt:
      'Commercial product photography of a collectible action figure in sealed retail packaging. Transparent molded plastic blister shell mounted on a printed cardboard backing card. The figure inside: 6-inch scale, detailed paint application, multiple points of articulation. Exactly 4 accessories displayed in individual smaller blisters beside the figure — a weapon, a shield, an alternate head, and a display stand. Cardboard backing features character name in bold condensed type, series logo, age rating badge, and a dynamic character illustration. Overhead studio lighting with soft reflections on the plastic shell surface. Shot on white seamless backdrop, 45-degree angle, slight shadow underneath. Photorealistic CGI rendering style. Aspect ratio 3:4 vertical.',
    why_it_works:
      'The specific packaging anatomy (blister shell, cardboard backing, 4 accessories in individual blisters) triggers product-photography priors. Locking exactly 4 accessories prevents over-generation. The "photorealistic CGI rendering" style tag keeps it looking like a real product shot.',
    source: 'curated',
    tags: ['product', 'action-figure', 'packaging', 'toy'],
  },
  {
    id: 'curated-isometric-3d-room',
    title: 'Isometric 3D Room',
    category: 'Open-Ended Creative',
    prompt:
      'Isometric 3D rendering of a home office at exactly 30-degree angle. No perspective distortion — true isometric projection. Room contents: L-shaped desk with monitor, mechanical keyboard, and desk lamp; ergonomic chair; bookshelf with color-organized books; potted monstera plant; small rug with geometric pattern; cat sleeping on a cushion. Rounded geometry edges on all furniture — soft, toylike feel. Ambient occlusion shadows creating subtle depth beneath objects. Pastel palette: soft mint walls, warm wood floors, cream furniture, dusty rose accents. Cutaway view with no ceiling and two walls removed for interior visibility. Clean, rendered look — NOT a photograph, NOT hand-drawn. Aspect ratio 1:1 square.',
    why_it_works:
      'Specifying "true isometric projection" and "no perspective distortion" gives the model exact geometric constraints. The cutaway instruction (no ceiling, two walls removed) is the standard isometric room convention. Rounded edges + pastel palette create the trendy low-poly aesthetic.',
    source: 'curated',
    tags: ['isometric', '3d', 'room', 'interior'],
  },
  {
    id: 'curated-claymation-scene',
    title: 'Claymation Scene',
    category: 'Open-Ended Creative',
    prompt:
      'Stop-motion claymation scene of a tiny bakery kitchen. All characters and objects sculpted from modeling clay with visible fingerprints, tool marks, and slight surface irregularities in the clay. A baker character (round head, dot eyes, simple smile) pulling a tray from a miniature oven. Countertop with tiny clay croissants, baguettes, and a flour-dusted rolling pin. Hand-painted imperfections on props — slightly uneven colors, visible brush strokes on the backdrop. Miniature diorama set built on a wooden tabletop, visible set edges and support structures at the periphery. Warm, slightly orange-tinted practical lighting from above as if from a real animation studio lamp. Earthy textures throughout — raw clay, balsa wood, felt fabric backdrops. Shallow depth of field with macro lens bokeh. Aspect ratio 16:9 landscape.',
    why_it_works:
      'Naming specific claymation artifacts (fingerprints, tool marks, visible set edges) prevents the model from generating clean 3D renders. The "visible set edges and support structures" instruction adds behind-the-scenes authenticity. Warm practical lighting mimics real stop-motion studio conditions.',
    source: 'curated',
    tags: ['claymation', 'stop-motion', 'miniature', 'diorama'],
  },
  {
    id: 'curated-miniature-diorama-product-ad',
    title: 'Miniature Diorama Product Ad',
    category: 'Cinematic',
    prompt:
      'Tilt-shift photography of a miniature diorama product advertisement. An oversized product bottle (approximately 30cm tall in the scene) placed on a construction site populated by tiny HO-scale figurine workers in yellow safety coveralls and hard hats. Three workers operating miniature cranes and forklifts around the base of the bottle. Two workers on scaffolding mid-bottle applying a label. One worker at the top with a flag. Foreground: sharp gravel texture and tiny orange traffic cones. Background: soft-focus miniature city skyline. Studio lighting with a single large softbox from upper-left creating clean shadows. Photorealistic CGI with tilt-shift blur (sharp band across the middle third, soft blur top and bottom). Aspect ratio 4:5 vertical.',
    why_it_works:
      'The scale juxtaposition (oversized bottle + tiny workers) is a proven advertising concept. Specifying HO-scale figurines gives the model a concrete miniature reference. Tilt-shift blur parameters (sharp middle third) create the characteristic miniature-photography effect.',
    source: 'curated',
    tags: ['miniature', 'diorama', 'product', 'tilt-shift', 'advertising'],
  },
  {
    id: 'curated-nature-abstraction-ocean-current',
    title: 'Nature Abstraction: Ocean Current',
    category: 'Open-Ended Creative',
    prompt:
      'Cyanotype process on cotton rag paper. Fluid organic forms suggesting deep ocean currents — swirling, layered, translucent. Deep Prussian blue gradients from nearly white to near-black, the natural range of the cyanotype process. Ukiyo-e wave influence in the curling forms but without literal wave depiction. Visible paper fiber texture, slight chemical staining at edges, uneven coating marks from hand-applied emulsion. Composition: horizontal flow from left to right, denser forms at center. Luminous quality where light passes through thinner emulsion layers. Aspect ratio 3:2 landscape. No text.',
    why_it_works:
      'Cyanotype is a specific photographic printing process with a distinctive blue palette — naming it gives the model a precise visual target. The ukiyo-e influence provides compositional DNA without requesting literal copies.',
    source: 'curated',
    tags: ['nature', 'cyanotype', 'ocean'],
  },
  {
    id: 'curated-anime-knight-illustration',
    title: 'Anime Character Illustration',
    category: 'Open-Ended Creative',
    prompt:
      'Full-body anime character illustration on a clean white background. Female knight in ornate silver plate armor with sapphire blue accents and a flowing crimson half-cape attached at one shoulder. Hair: long silver-white, windswept to the right with individual strand detail. Expression: determined, slight confident smirk, heterochromia eyes (left eye gold, right eye blue). Weapon: a longsword held at her side, blade edge emitting faint blue light particles dissolving upward. Armor detail: layered pauldrons, engraved breastplate with a phoenix motif, articulated gauntlets with gem insets. Pose: three-quarter stance, weight on back foot, chin slightly raised. Art style: clean cel-shaded anime illustration with sharp ink-weight line work, soft gradient shading, and subtle ambient occlusion at armor joints. Color palette: silver, sapphire, crimson, warm gold accents. NOT photorealistic, NOT 3D rendered, NOT semi-realistic. Aspect ratio 3:4 vertical.',
    why_it_works:
      'Exhaustive character description (heterochromia, specific armor pieces, cape attachment point) prevents the model from defaulting to generic anime. The triple negative constraint ("NOT photorealistic, NOT 3D rendered, NOT semi-realistic") locks the output to clean 2D cel-shaded style. Particle effects on the sword add visual interest without complicating the composition.',
    source: 'curated',
    tags: ['anime', 'character', 'illustration', 'fantasy', 'cel-shaded'],
  },
  {
    id: 'curated-seamless-botanical-pattern',
    title: 'Seamless Botanical Pattern',
    category: 'Open-Ended Creative',
    prompt:
      'Seamless repeating pattern tile for textile or wallpaper. Botanical motif: hand-drawn line illustrations of wildflowers — lavender sprigs, daisies, poppy seed heads, fern fronds, and small berries on thin stems. Line work: fine black ink on a warm cream background, consistent stroke weight throughout. Arrangement: scattered organic placement with even visual density across the entire tile, no obvious grid or repeat seam visible at edges. Small leaves and dots fill gaps between larger flower elements to maintain uniform density. Style: modern botanical illustration with vintage herbarium influence — precise, delicate, naturalist. NOT photorealistic, NOT watercolor — clean precise ink lines only. The pattern must tile seamlessly at all four edges — elements that cross the left edge must continue from the right edge at the same position. Aspect ratio 1:1 square.',
    why_it_works:
      'The explicit seamless-tiling instruction ("elements that cross the left edge must continue from the right") is the key constraint for usable pattern tiles. Specifying "even visual density" and gap-filling elements prevents the common problem of patterns with sparse corners. The ink-only medium constraint prevents watercolor bleed effects that break tiling.',
    source: 'curated',
    tags: ['pattern', 'seamless', 'botanical', 'textile', 'illustration'],
  },
  {
    id: 'curated-childrens-book-fox',
    title: 'Children\'s Book Illustration',
    category: 'Open-Ended Creative',
    prompt:
      'Children\'s picture book illustration. A small fox wearing a red rain coat and yellow rain boots standing at the edge of a large puddle, looking down at its own reflection. Behind the fox: a dense autumn forest with trees in warm orange, yellow, and russet. The puddle reflects the fox and a different sky — the reflection shows a starry night sky with a crescent moon instead of the overcast daytime sky above, as if the puddle is a portal to another world. Fallen leaves floating on the puddle surface, some overlapping the reflected stars. Soft diffused light, no harsh shadows. Art style: hand-painted gouache with visible brush texture, slightly rounded and simplified forms, warm palette with one cool accent (the starry reflection). Outlines in warm brown, not black — gentle, not harsh. Aimed at ages 3-7: gentle, wonder-inducing, cozy atmosphere. NOT anime, NOT photorealistic, NOT digital-clean. Aspect ratio 4:3 landscape.',
    why_it_works:
      'The puddle-as-portal concept gives the image narrative depth beyond a simple scene. Specifying "warm brown outlines, not black" is a key children\'s illustration technique that softens the image. The medium constraint (gouache with visible brush texture) prevents the sterile digital look. Age-range targeting (3-7) helps the model calibrate visual complexity.',
    source: 'curated',
    tags: ['childrens-book', 'illustration', 'gouache', 'fantasy', 'storybook'],
  },

  // ============================================================
  // VISUAL SUMMARIES (additional)
  // ============================================================
  {
    id: 'curated-book-summary-card',
    title: 'Book Summary Card',
    category: 'Visual Summaries',
    prompt:
      'Create a visual one-pager summarizing a non-fiction book. Layout: book cover thumbnail top-left, book title and author in bold serif below. Exactly 5 key-takeaway cards arranged vertically, each with a numbered circle icon and a 1-sentence summary. Bottom strip: "Who should read this" tag pills and a 5-star rating visual. Color scheme: warm cream background, dark charcoal text, accent color pulled from the book cover. Clean editorial style — NOT an ad, NOT an infographic poster. Aspect ratio 4:5 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Locking the module count ("exactly 5 key-takeaway cards") prevents the model from inventing extra sections. The negative constraint ("NOT an ad, NOT an infographic poster") steers toward editorial rather than commercial aesthetics.',
    source: 'curated',
    tags: ['summary', 'book', 'one-pager'],
  },
  {
    id: 'curated-recipe-visual-guide',
    title: 'Recipe Visual Guide',
    category: 'Visual Summaries',
    prompt:
      'Step-by-step visual recipe guide. Top section: dish name in bold sans-serif, prep time and cook time badges, difficulty indicator. Second row: ingredient grid showing exactly 8 ingredients with labeled illustrations, each in its own rounded card. Main section: exactly 6 numbered photo panels arranged 2×3 showing the cooking process from prep to plating, each panel with a short action caption below ("dice the onions," "sear until golden"). Bottom: serving suggestion photo with garnish callout. Warm kitchen lighting throughout. Clean white background, food-magazine editorial style. Aspect ratio 4:5 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Locked module counts (exactly 8 ingredients, exactly 6 steps) prevent the model from generating inconsistent panel counts. The 2×3 grid specification gives precise layout instruction.',
    source: 'curated',
    tags: ['summary', 'recipe', 'step-by-step'],
  },
  {
    id: 'curated-meeting-notes-visualization',
    title: 'Meeting Notes Visualization',
    category: 'Visual Summaries',
    prompt:
      'Sketchnote-style meeting summary on white background with hand-drawn marker aesthetic. Top: meeting title in bold hand-lettered style with date badge. Layout: exactly 4 sections arranged in quadrants. Top-left: "Key Decisions" with checkbox icons and short phrases. Top-right: "Discussion Points" with speech-bubble icons. Bottom-left: "Action Items" in highlighted badge format with owner initials. Bottom-right: "Next Steps" with arrow icons and timeline dots. Hand-drawn divider lines between sections. Color palette: black ink, one highlight color (coral or teal), light gray for secondary elements. Small doodle icons throughout — lightbulbs, arrows, stars, checkmarks. Aspect ratio 16:9 landscape. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The sketchnote medium anchors the visual style. Locking exactly 4 quadrant sections prevents layout drift. Hand-drawn aesthetic with specific icon types (lightbulbs, arrows) guides the illustration vocabulary.',
    source: 'curated',
    tags: ['summary', 'meeting', 'sketchnote'],
  },
  {
    id: 'curated-cross-section-volcano',
    title: 'Cross-Section Educational Diagram',
    category: 'Visual Summaries',
    prompt:
      'Labeled geological cross-section diagram of a stratovolcano. The mountain shown in full profile with the right half cut away to reveal internal structure. Visible layers from bottom to top: underground magma chamber (glowing orange-red), vertical conduit/pipe connecting chamber to summit, alternating lava flow layers and ash deposit strata in the cone walls (color-coded: dark basalt layers, lighter ash layers, thin pyroclastic bands). Surface features: snow-capped summit, active crater with steam plume, secondary vent on the flank with a small lava flow. Exactly 8 labeled callout lines pointing to: magma chamber, conduit, crater, lava flow, ash layer, pyroclastic deposits, secondary vent, groundwater table. Clean white background. Textbook-quality scientific illustration style — precise, educational, clear line work. NOT photorealistic, NOT artistic. Color palette: earth tones for the mountain, glowing warm tones for magma, cool blues for water table. Aspect ratio 16:9 landscape. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Cross-section diagrams leverage GPT Image 2\'s strength in layered compositions. Locking exactly 8 callout labels prevents over- or under-labeling. Color-coding by material type (basalt vs ash vs magma) adds information hierarchy. The "textbook-quality" style tag steers toward clean educational illustration.',
    source: 'curated',
    tags: ['summary', 'cross-section', 'educational', 'geology'],
  },
  {
    id: 'curated-product-comparison-chart',
    title: 'Product Comparison Chart',
    category: 'Visual Summaries',
    prompt:
      'Side-by-side product comparison chart for exactly 3 products. Clean, modern editorial layout on white background. Top row: product images with names in bold sans-serif. Below: exactly 8 feature rows with alternating light-gray and white backgrounds. Each cell contains a checkmark, X mark, or short value. "Best Value" badge on one column, "Premium Pick" badge on another. Bottom row: price callout in large bold type for each product. Subtle drop shadows on the column cards. Color scheme: white, light gray, dark charcoal text, green for checkmarks, red for X marks, one brand accent color for badges. Aspect ratio 4:5 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Triple module-count locking (exactly 3 products, exactly 8 feature rows) keeps the layout tight and predictable. Badge callouts add editorial hierarchy without cluttering the grid.',
    source: 'curated',
    tags: ['summary', 'comparison', 'chart'],
  },
  {
    id: 'curated-year-in-review-personal',
    title: 'Year In Review Personal',
    category: 'Visual Summaries',
    prompt:
      'Annual personal recap card. Top: year in large display font with a short tagline. Section 1: exactly 12 monthly thumbnail illustrations in a 4×3 grid, each a tiny scene representing a highlight with the month name below. Section 2: "By the Numbers" row with exactly 4 stats counters (books read, miles traveled, photos taken, new recipes tried) displayed as large numbers with small labels. Section 3: "Milestone Moments" — exactly 3 badge-style callouts with icons (graduation cap, airplane, heart) and short descriptions. Bottom: a short reflective quote in italic serif. Warm, personal color palette: soft coral, cream, sage green, charcoal. Aspect ratio 4:5 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Multiple locked counts (12 thumbnails, 4 stats, 3 milestones) structure the layout precisely. The warm personal palette differentiates it from corporate year-in-review templates.',
    source: 'curated',
    tags: ['summary', 'year-review', 'personal'],
  },

  // ============================================================
  // IMAGE EDITS (additional)
  // ============================================================
  {
    id: 'curated-season-swap',
    title: 'Season Swap: Summer To Winter',
    category: 'Image Edits',
    prompt:
      'CHANGE: Transform this summer outdoor scene into deep winter. Add snow coverage on all horizontal surfaces, bare skeletal trees replacing green foliage, visible breath vapor on any people, overcast pewter-gray sky, cold blue-white color grade overall. Add frost patterns on glass surfaces and icicles on overhangs.\nPRESERVE: All people — faces, expressions, poses, clothing silhouettes. All architecture — building shapes, windows, doors, structural details. Overall composition and framing. No objects added or removed beyond seasonal elements.\nMATCH: Original depth of field, original camera angle, shadow direction consistent with overcast winter light.',
    why_it_works:
      'The 3-block CHANGE/PRESERVE/MATCH structure explicitly locks what must stay while specifying every seasonal detail to add. Naming specific winter elements (frost patterns, icicles, breath vapor) prevents vague snow overlays.',
    source: 'curated',
    tags: ['edit', 'season', 'winter'],
  },
  {
    id: 'curated-time-period-shift',
    title: 'Time Period Shift: Renaissance',
    category: 'Image Edits',
    prompt:
      'CHANGE: Restyle this modern portrait as a Renaissance oil painting. Apply aged canvas texture with fine craquelure. Shift lighting to chiaroscuro — single strong light source from upper left, deep shadow on opposite side. Replace modern clothing with period-appropriate Renaissance garments (velvet doublet, lace collar, or draped silk). Add a dark umber background with subtle sfumato atmospheric haze.\nPRESERVE: Subject\'s face — bone structure, expression, eye color, skin tone, facial hair if present. Exact head pose and body angle. Hand position if visible.\nMATCH: Warm Renaissance palette — raw umber, burnt sienna, gold ochre, deep burgundy. Oil paint surface texture with visible brushwork in clothing folds.',
    why_it_works:
      'Art-historical vocabulary (chiaroscuro, sfumato, craquelure) triggers precise rendering. The PRESERVE block locks facial identity while the CHANGE block transforms everything else. Specific paint colors from actual oil paint tubes guide palette.',
    source: 'curated',
    tags: ['edit', 'renaissance', 'style-transfer'],
  },
  {
    id: 'curated-weather-overlay-rain',
    title: 'Weather Overlay: Dramatic Rain',
    category: 'Image Edits',
    prompt:
      'CHANGE: Add dramatic rainfall to this outdoor scene. Include visible rain streaks at a slight diagonal, wet reflective sheen on all pavement and horizontal surfaces, puddles forming in low spots with ripple patterns, overcast sky replacement if sky is visible. Darken overall exposure by roughly one stop. Add subtle mist at ground level.\nPRESERVE: All subjects — people, animals, vehicles in their exact positions, poses, and appearances. All building details, signage, and structural elements. Original composition and framing.\nMATCH: Rain streak direction consistent across the entire image. Reflection angles matching overhead light source. Color temperature shifted slightly cooler but consistent with original white balance.',
    why_it_works:
      'Specific rain physics (streak angle, puddle ripples, wet reflective sheen) prevent the model from just adding white lines. The exposure and color temperature instructions ensure the rain integrates naturally rather than being overlaid.',
    source: 'curated',
    tags: ['edit', 'weather', 'rain'],
  },
  {
    id: 'curated-remove-replace-background',
    title: 'Remove And Replace Background',
    category: 'Image Edits',
    prompt:
      'CHANGE: Remove the existing background entirely. Replace with a clean gradient studio backdrop — smooth transition from medium gray at top to lighter warm gray at bottom. No texture, no props, no environment. Professional product-photography style negative space.\nPRESERVE: Subject exactly as-is — hair edges, clothing details, accessories, skin tone, facial expression, body pose. Maintain all fine edge details including individual hair strands and fabric fringe.\nMATCH: Lighting direction on the subject must remain identical — do not re-light. Shadow angles on the subject preserved. A soft ground shadow cast onto the new backdrop matching the original shadow direction and softness.',
    why_it_works:
      'Explicitly naming edge-detail preservation (hair strands, fabric fringe) prevents the common AI artifact of mushy edges after background removal. The ground shadow instruction ensures the subject looks placed in the new environment rather than floating.',
    source: 'curated',
    tags: ['edit', 'background', 'studio'],
  },
  {
    id: 'curated-color-grade-shift-portra',
    title: 'Color Grade Shift: Kodak Portra 400',
    category: 'Image Edits',
    prompt:
      'CHANGE: Apply a Kodak Portra 400 film color grade to this photo. Warm skin tones shifted toward peach and honey. Soft, reduced contrast with gently lifted blacks (shadows should not be pure black — lift to dark charcoal). Fine organic film grain visible at 100% crop. Slightly muted greens shifting toward olive. Blues gently desaturated. Highlight rolloff smooth and creamy, no hard clipping.\nPRESERVE: All composition, framing, subjects, poses, expressions, and environmental details. No cropping, no element changes.\nMATCH: Original exposure level maintained. Original depth of field and focus plane unchanged. Grain should be uniform and consistent across the image, not patchy.',
    why_it_works:
      'Film stock names (Portra 400) are effective visual shorthand because they reference widely documented aesthetics. The specific color shifts (peach skin, olive greens, desaturated blues) make the grade reproducible rather than vague.',
    source: 'curated',
    tags: ['edit', 'color-grade', 'film'],
  },

  // ============================================================
  // SOCIAL POSTS (additional)
  // ============================================================
  {
    id: 'curated-product-launch-carousel',
    title: 'Product Launch Carousel First Slide',
    category: 'Social Posts',
    prompt:
      'Instagram carousel first slide. Product centered on a smooth gradient background transitioning from soft peach to warm coral. Bold sans-serif headline text at top: "Introducing [Product Name]" in white with subtle drop shadow. Product shown at three-quarter angle with soft studio lighting and gentle reflection below. Bottom: small tagline text in light weight font. No other text, no clutter, no badges. Clean negative space. Aspect ratio 4:5 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The "no other text, no clutter, no badges" negative constraints prevent the common AI tendency to overpopulate social graphics. Specific gradient colors and typography weights give precise design direction.',
    source: 'curated',
    tags: ['social', 'product', 'carousel'],
  },
  {
    id: 'curated-quote-card',
    title: 'Inspirational Quote Card',
    category: 'Social Posts',
    prompt:
      'Instagram quote card. Centered serif text in dark charcoal on a textured handmade-paper background with visible fiber and slight cream variations. The quote reads: "[Your quote here]" in medium-weight serif, 3-4 lines, generous line spacing. Author attribution below in small caps sans-serif with an em dash prefix: "— [Author Name]". No decorative elements, no borders, no icons, no gradients. Just text on paper. Subtle vignette darkening at corners. Aspect ratio 1:1 square. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Maximum restraint — the negative constraints (no decorative elements, no borders, no icons) force a Kinfolk-magazine minimalism that stands out in cluttered social feeds. Paper texture adds warmth without visual noise.',
    source: 'curated',
    tags: ['social', 'quote', 'minimal'],
  },
  {
    id: 'curated-event-countdown',
    title: 'Event Countdown Story',
    category: 'Social Posts',
    prompt:
      'Instagram story countdown graphic. Large bold countdown number (e.g., "3") centered and oversized, filling most of the frame, in heavy sans-serif white font with a subtle glow. Below the number: "DAYS LEFT" in tracked-out small caps. Below that: event name in medium weight. Below that: date in light weight. Background: rich gradient from deep navy to electric indigo. Subtle particle/confetti dots scattered sparsely. No photos, no product images, no logos. Aspect ratio 9:16 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The oversized number creates immediate visual impact in Stories. Tracked-out small caps and weight hierarchy (heavy → medium → light) create professional typographic cadence.',
    source: 'curated',
    tags: ['social', 'countdown', 'story'],
  },
  {
    id: 'curated-before-after-split',
    title: 'Before/After Split Post',
    category: 'Social Posts',
    prompt:
      'Social media before/after post. Single image split by a crisp diagonal divider line (45 degrees, top-left to bottom-right) with a thin white stroke. Left half labeled "BEFORE" in small caps at the top, right half labeled "AFTER" in small caps at the top. Left side: muted, desaturated tones. Right side: vibrant, polished result. Small product or brand mention in a pill-shaped badge at bottom center. Clean, modern, no excessive text. Aspect ratio 1:1 square. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The diagonal divider specification (45 degrees, top-left to bottom-right) prevents the common horizontal or vertical split defaults. Color treatment difference (desaturated vs vibrant) across halves reinforces the transformation narrative.',
    source: 'curated',
    tags: ['social', 'before-after', 'transformation'],
  },
  {
    id: 'curated-meme-template',
    title: 'Custom Meme Template',
    category: 'Social Posts',
    prompt:
      'Custom meme image. A [describe the scene or character reaction — e.g., "golden retriever sitting at a desk wearing reading glasses looking confused at a laptop screen"]. Shot as a candid photo with natural indoor lighting, slightly out of focus background. Leave clear space at top and bottom for text overlay zones — no text in the image itself, just the reaction scene. The expression and body language should clearly convey [target emotion — e.g., "bewildered confusion"]. Aspect ratio 1:1 square. No text, no watermarks, no logos.',
    why_it_works:
      'Specifying clear text-overlay zones while keeping the image text-free gives the user flexibility to add their own captions. The fill-in-the-blank structure makes this a reusable template for any meme concept.',
    source: 'curated',
    tags: ['social', 'meme', 'template'],
  },
  {
    id: 'curated-twitter-thread-hook',
    title: 'Twitter/X Thread Hook Image',
    category: 'Social Posts',
    prompt:
      'Twitter/X thread header image. Bold claim text in large white sans-serif font centered on a dark contrasting background (deep navy or charcoal). Text reads: "[Your hook statement here]" — maximum 8-10 words, punchy and direct. A relevant topic icon or simple illustration to the left of the text, rendered in a single accent color (electric blue, coral, or emerald). Subtle grid or dot pattern in the background at low opacity. Clean, high-contrast, no photos, no gradients, no clutter. Aspect ratio 16:9 landscape. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'High-contrast text on dark backgrounds stops the scroll in Twitter feeds. The single accent color icon adds visual interest without competing with the text. Word count constraint (8-10 words) forces punchy copy.',
    source: 'curated',
    tags: ['social', 'twitter', 'thread'],
  },
  {
    id: 'curated-linkedin-carousel-slide',
    title: 'LinkedIn Carousel Slide',
    category: 'Social Posts',
    prompt:
      'LinkedIn knowledge carousel slide. Clean white background. Left edge: vertical accent sidebar in a professional brand color (navy, teal, or burgundy), 15% of width. Top-right: slide number in a circle badge ("03"). Below: bold sans-serif header text in dark charcoal, one line. Below: exactly 3 bullet points with small circle icons, each bullet is one concise sentence in regular weight. Bottom-right: small author name and title in light gray. No photos, no stock images, no decorative elements beyond the sidebar. Professional, authoritative, minimal. Aspect ratio 4:5 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The vertical sidebar creates brand consistency across carousel slides. Locking to exactly 3 bullets prevents information overload. The "no photos, no stock images" constraint keeps it text-focused, matching LinkedIn carousel best practices.',
    source: 'curated',
    tags: ['social', 'linkedin', 'carousel'],
  },
];
