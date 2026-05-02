/**
 * 200 curated GPT Image 2 prompts. Original 97 sourced from
 * cyberbara/awesome-gpt-image (X creators, community testing). 23 added to
 * cover missing categories: action figures, isometric 3D, claymation,
 * miniature dioramas, cross-sections, product photography, packaging mockups,
 * illustrated maps, data visualization, motion blur portraits, vintage
 * photography emulation, logo design, trading cards, double exposure, aerial
 * drone, food photography, interior design, knolling, anime illustration,
 * seamless patterns, children's book illustration, emoji sticker packs, and
 * concert posters. 80 added from YouMind-OpenLab/awesome-gpt-image-2
 * (CC BY 4.0) and original prompts to fill category gaps in Visual Summaries,
 * Image Edits, Storyboards, UI Mockups, Interior/Food/Fashion, Social Posts,
 * Open-Ended Creative, Cinematic, Infographics, and Posters.
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

  // ============================================================
  // NEW ADDITIONS — Visual Summaries
  // ============================================================
  {
    id: 'curated-workflow-process-diagram',
    title: 'Workflow Process Diagram',
    category: 'Visual Summaries',
    prompt:
      'A clean workflow process diagram for a software deployment pipeline. Horizontal left-to-right flow with exactly 6 stages: "Code Commit," "Build," "Test," "Review," "Staging," "Production." Each stage is a rounded rectangle with a simple icon inside (git branch, hammer, checkmark, magnifying glass, server, rocket). Stages connected by directional arrows. Under each stage: 2-3 bullet points of sub-steps in small sans-serif. Color-coded status: first 4 stages green (completed), 5th stage amber (in progress with a spinner icon), 6th stage gray (pending). Clean white background, subtle grid. Professional technical-documentation style. Aspect ratio 16:9 landscape. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Locking exactly 6 stages with specific icons prevents over-generation. The color-coded status (green, amber, gray) adds information hierarchy. The horizontal flow direction instruction prevents vertical or circular layouts.',
    source: 'curated',
    tags: ['summary', 'workflow', 'diagram', 'technical'],
  },
  {
    id: 'curated-developer-cheat-sheet',
    title: 'Developer Cheat Sheet',
    category: 'Visual Summaries',
    prompt:
      'A single-page developer cheat sheet for Git commands. Dark charcoal background with monospaced text in soft green (terminal aesthetic). Title: "Git Cheat Sheet" in large condensed sans-serif at top. Layout: exactly 4 columns, each with a category header (Setup, Branching, Merging, Undoing) in accent orange. Under each header: 6-8 command entries formatted as `command` → description pairs. Bottom strip: "Pro Tips" section with 3 highlighted boxes. Subtle scan-line texture overlay. Aspect ratio 3:2 landscape. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The terminal aesthetic (dark background, green monospace) is instantly recognizable to developers. Four-column layout with category headers organizes dense information. The command → description pair format mirrors real documentation.',
    source: 'curated',
    tags: ['summary', 'cheat-sheet', 'developer', 'terminal'],
  },
  {
    id: 'curated-historical-timeline',
    title: 'Historical Timeline Visualization',
    category: 'Visual Summaries',
    prompt:
      'A horizontal illustrated timeline of the Space Race from 1957 to 1969. Central horizontal line with exactly 8 milestone markers. Each marker has a date, event name, and a small circular illustration above or below (alternating). Events: Sputnik 1957, Explorer 1 1958, Gagarin 1961, Glenn 1962, Voskhod 2 1965, Gemini 8 1966, Apollo 8 1968, Apollo 11 1969. US events above the line in blue, Soviet events below in red. Small flag icons next to country attribution. Warm parchment background with subtle aged texture. Vintage scientific illustration style with fine line work. Aspect ratio 16:9 landscape. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Alternating above/below placement prevents crowding on a horizontal timeline. Country color-coding (blue US, red Soviet) adds instant visual grouping. Exactly 8 events with specific dates prevents hallucinated history.',
    source: 'curated',
    tags: ['summary', 'timeline', 'historical', 'space'],
  },
  {
    id: 'curated-feature-comparison-matrix',
    title: 'Feature Comparison Matrix',
    category: 'Visual Summaries',
    prompt:
      'A clean SaaS feature comparison matrix. Header row with exactly 3 plan tiers: "Starter" (gray badge), "Pro" (blue badge with "POPULAR" ribbon), "Enterprise" (purple badge). Left column: exactly 10 feature rows grouped into 3 sections with section headers (Core, Advanced, Support). Each cell: green checkmark, red X, or specific value text. Price row at bottom with monthly pricing in large bold numbers. "Start Free Trial" button mockup under each column in the tier\'s accent color. White background, subtle alternating row shading. Clean SaaS marketing style. Aspect ratio 4:5 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The "POPULAR" ribbon on the middle tier is a proven conversion design pattern. Grouping features into sections prevents a wall of checkmarks. Specific cell counts (3 tiers, 10 features, 3 sections) keep the layout predictable.',
    source: 'curated',
    tags: ['summary', 'comparison', 'saas', 'pricing'],
  },
  {
    id: 'curated-anatomy-of-x',
    title: 'Anatomy Of A Perfect Landing Page',
    category: 'Visual Summaries',
    prompt:
      'An annotated "Anatomy of a Perfect Landing Page" visual guide. A simplified wireframe mockup of a landing page in the center with exactly 8 numbered callout annotations pointing to different sections. Annotations: 1. Hero headline, 2. Value proposition subtext, 3. Hero image/video, 4. Social proof bar, 5. Feature grid, 6. Testimonial cards, 7. CTA button, 8. FAQ section. Each callout has a short 1-sentence tip in a rounded tooltip box. Wireframe rendered in light gray with accent highlights on the annotated elements. Color scheme: white background, charcoal wireframe, coral accent for callout lines and numbers. Clean, editorial, educational. Aspect ratio 4:5 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The wireframe-with-annotations format is a proven educational visual. Exactly 8 callouts prevent overcrowding while covering all essential landing page elements. Coral accent lines draw the eye to annotation points.',
    source: 'curated',
    tags: ['summary', 'anatomy', 'web-design', 'educational'],
  },
  {
    id: 'curated-decision-flowchart',
    title: 'Decision Flowchart Guide',
    category: 'Visual Summaries',
    prompt:
      'A visual decision flowchart titled "Should You Start a Side Project?" Top: title in bold sans-serif. Flow starts with a single diamond decision node. Exactly 5 decision diamonds connected by yes/no branches. Terminal nodes are rounded rectangles with verdicts: "Go for it!" (green), "Wait and learn first" (amber), "Focus on your main job" (red), "Find a co-founder" (blue). Each decision diamond contains a short question (e.g., "Do you have 5+ hours/week free?"). Arrows labeled "YES" and "NO" in small caps. Clean white background, thin connecting lines, pastel-colored nodes. Infographic style — playful but clear. Aspect ratio 4:5 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Flowcharts with locked node counts (exactly 5 diamonds, 4 terminal outcomes) prevent the model from generating tangled spaghetti diagrams. Short questions in decision nodes keep readability high. Color-coded verdicts add emotional weight to each outcome.',
    source: 'curated',
    tags: ['summary', 'flowchart', 'decision', 'guide'],
  },
  {
    id: 'curated-morning-routine-visual',
    title: 'Morning Routine Visual Schedule',
    category: 'Visual Summaries',
    prompt:
      'A visual morning routine schedule card. Vertical timeline from 6:00 AM to 9:00 AM with exactly 8 activity blocks. Each block has a time label, activity name in bold, duration in a small badge, and a simple flat illustration icon. Activities: Wake up (5 min), Hydrate (5 min), Stretch (10 min), Meditate (15 min), Shower (15 min), Breakfast (20 min), Journal (10 min), Commute (30 min). Alternating soft pastel block colors (lavender, mint, peach, sky blue). Left edge: continuous vertical time ruler. Clean, modern wellness-app aesthetic. Aspect ratio 9:16 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Locked time values and durations prevent the model from inventing schedules. Alternating pastel colors create visual rhythm. The wellness-app aesthetic instruction steers away from clinical or corporate calendar looks.',
    source: 'curated',
    tags: ['summary', 'routine', 'schedule', 'wellness'],
  },
  {
    id: 'curated-how-it-works-explainer',
    title: 'How It Works Product Explainer',
    category: 'Visual Summaries',
    prompt:
      'A "How It Works" product explainer graphic with exactly 4 steps arranged horizontally. Each step: a large circled number (1-4) at top, a simple line illustration below depicting the action, a bold heading, and a 1-sentence description underneath. Steps: 1. "Upload your photo" (upload icon with photo frame), 2. "AI analyzes your style" (sparkle/brain icon), 3. "Get personalized suggestions" (checklist with stars), 4. "Shop your look" (shopping bag with heart). Subtle curved dotted line connecting all 4 steps from left to right. Clean white background with one accent color throughout (coral or teal). Minimal, modern, startup marketing style. Aspect ratio 16:9 landscape. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Exactly 4 steps is the sweet spot for process explainers — enough to tell a story, few enough to scan instantly. The connecting dotted line creates visual flow. Consistent accent color reinforces brand cohesion.',
    source: 'curated',
    tags: ['summary', 'how-it-works', 'product', 'explainer'],
  },
  {
    id: 'curated-tech-stack-architecture',
    title: 'Tech Stack Architecture Diagram',
    category: 'Visual Summaries',
    prompt:
      'A layered tech stack architecture diagram. Horizontal layers stacked vertically with exactly 4 tiers, separated by thin lines. Top layer (Frontend): React logo, Next.js, and Tailwind CSS icons with labels. Second layer (API): Node.js and GraphQL icons. Third layer (Services): three service boxes labeled "Auth," "Payments," "Notifications" with small lock, dollar, and bell icons. Bottom layer (Data): PostgreSQL and Redis icons with a cloud/CDN icon. Left side: a vertical label reading "CLIENT" at top and "SERVER" at bottom with a directional arrow. Right side: deployment labels ("Vercel," "AWS"). Clean lines connecting layers showing data flow with small directional arrows. Dark mode aesthetic: dark charcoal background, neon-accent colored icons and lines. Aspect ratio 4:5 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Named technologies with their actual logos trigger accurate icon rendering. The 4-tier architecture (Frontend, API, Services, Data) follows real system design conventions. Directional arrows showing data flow add information beyond static labeling.',
    source: 'curated',
    tags: ['summary', 'architecture', 'tech-stack', 'diagram'],
  },

  // ============================================================
  // NEW ADDITIONS — Image Edits
  // ============================================================
  {
    id: 'curated-ms-paint-transformation',
    title: 'MS Paint Scribbly Transformation',
    category: 'Image Edits',
    prompt:
      'Redraw the attached image in the most clumsy, scribbly way possible. Use a white background, and make it look like it was drawn in MS Paint with a mouse. It should be vaguely similar but also not really, kind of matching but also off in a confusing way. Make it look like you tried your best but your best just isn\'t very good.',
    why_it_works:
      'The self-deprecating tone ("tried your best but your best isn\'t very good") gives the model permission to be intentionally bad, which paradoxically produces charming results. The MS Paint constraint triggers specific low-fi aesthetic priors.',
    source: 'curated',
    source_creator: 'yellowdoodle',
    source_url: 'https://x.com/yellowdoodle',
    tags: ['edit', 'ms-paint', 'transformation', 'humor'],
  },
  {
    id: 'curated-mixed-reality-comic-overlay',
    title: 'Mixed Reality Comic Overlay',
    category: 'Image Edits',
    prompt:
      'Convert the subject in this image into a mixed-reality transformation with a fully realistic background and a realistically rendered face, combined with bold cartoon apparel, hand-drawn comic fire effects, and playful cartoon companions. Preserve the subject\'s recognizable facial identity, hair, and expression. Replace real clothing with a hand-drawn cartoon outfit in a contrasting bright color. Add 1-2 small cartoon companion characters floating nearby. Apply comic-style motion lines and energy effects around the subject. The cartoon elements should look deliberately illustrated on top of the photorealistic scene — as if someone drew on the photograph with markers.',
    why_it_works:
      'Explicit separation of realistic (face, background) and illustrated (clothing, effects) layers gives the model clear rendering targets. The "as if drawn on the photograph" instruction prevents full style transfer and maintains the mixed-media look.',
    source: 'curated',
    source_creator: 'Saul Goodman',
    source_url: 'https://x.com/Goodmanprotocol/status/2049871730639098172',
    tags: ['edit', 'mixed-reality', 'comic', 'overlay'],
  },
  {
    id: 'curated-iron-filings-logo',
    title: 'Magnetic Iron Filings Logo Scene',
    category: 'Image Edits',
    prompt:
      'Transform the uploaded logo into a hyper-realistic scene where the logo silhouette is formed by iron filings reacting to a magnetic field. The logo must keep its exact shape and proportions, appearing as if a magnet shaped like the logo is influencing the filings to align naturally into that recognizable formation. Fine iron filings with sharp, spiky, needle-like structures. Dense clustering along magnetic field lines forming the logo silhouette. Scattered loose particles radiating outward from the edges, diminishing in density. Surface: smooth concrete or stone slab with realistic micro-texture. Shallow depth of field, macro-lens perspective. Single warm directional light from upper-left casting subtle shadows behind each filing cluster.',
    why_it_works:
      'Specific material physics (iron filings, magnetic field lines, radiating particles) gives the model concrete rendering targets instead of a generic "logo effect." The macro-lens perspective and single directional light create the product-photography look.',
    source: 'curated',
    source_creator: 'simeon-sanai',
    source_url: 'https://x.com/Naiknelofar788/status/2049835482331357460',
    tags: ['edit', 'logo', 'iron-filings', 'macro'],
  },
  {
    id: 'curated-age-progression-portrait',
    title: 'Age Progression Portrait Strip',
    category: 'Image Edits',
    prompt:
      'CHANGE: Create a horizontal strip of exactly 5 versions of this person at different life stages: childhood (~8 years), teenager (~16 years), young adult (current age), middle age (~50 years), and elderly (~75 years). Each version in its own panel with the age label below. Maintain consistent facial bone structure, eye shape, and distinguishing features across all ages. Adjust: skin texture, hair color/thickness, facial fat distribution, wrinkle patterns appropriate to each age.\nPRESERVE: Core facial identity — eye color, nose shape, ear shape, face proportions, distinctive features (moles, dimples). Camera angle, lighting direction, background (simple neutral gray).\nMATCH: Consistent photographic style across all panels — same focal length, same lighting setup, same background. Professional portrait studio quality.',
    why_it_works:
      'The 3-block CHANGE/PRESERVE/MATCH structure explicitly locks identity across transformations. Specifying exact ages (8, 16, current, 50, 75) prevents vague age progression. Naming specific aging markers (facial fat distribution, wrinkle patterns) gives concrete rendering targets.',
    source: 'curated',
    tags: ['edit', 'age-progression', 'portrait', 'transformation'],
  },
  {
    id: 'curated-miniature-tilt-shift',
    title: 'Miniature Tilt-Shift Effect',
    category: 'Image Edits',
    prompt:
      'CHANGE: Transform this photo into a miniature tilt-shift diorama look. Apply strong selective blur: sharp focus in a narrow horizontal band across the main subject area, increasing Gaussian blur above and below. Boost color saturation by 30%, increase contrast, and shift toward slightly warmer tones. Make all objects appear toy-like through the depth-of-field manipulation.\nPRESERVE: All scene content — buildings, vehicles, people, landscape features in their exact positions. Composition and framing unchanged.\nMATCH: The blur gradient should be smooth and symmetrical (strongest at top and bottom edges, sharp in the middle third). Consistent color boost across the entire frame.',
    why_it_works:
      'Specific blur parameters (narrow horizontal band, symmetrical gradient) produce authentic tilt-shift rather than random blur. The saturation and contrast boost instructions mimic real miniature-photography processing. Preserving all scene content prevents the model from simplifying the image.',
    source: 'curated',
    tags: ['edit', 'tilt-shift', 'miniature', 'diorama'],
  },
  {
    id: 'curated-sketch-to-render',
    title: 'Sketch To Polished Render',
    category: 'Image Edits',
    prompt:
      'CHANGE: Convert this rough hand-drawn sketch into a polished, production-ready digital illustration. Interpret the sketch lines as the structural guide for clean vector-like shapes with smooth curves. Add: professional shading with consistent light from upper-left, subtle ambient occlusion at object intersections, and a cohesive color palette derived from any color notes in the sketch. Clean up wobbly lines into precise curves. Fill regions with flat colors plus one level of gradient shading.\nPRESERVE: The exact composition, proportions, and spatial relationships from the sketch. Every element present in the sketch must appear in the render. Do not add elements not present in the original.\nMATCH: If the sketch has annotations or color notes, follow them. Maintain the creative intent and character of the original while upgrading the execution quality.',
    why_it_works:
      'The "structural guide" framing tells the model to respect the sketch geometry while upgrading rendering quality. The strict "do not add elements" constraint prevents the model from embellishing beyond the original vision. Upper-left light direction is the industry standard for illustration shading.',
    source: 'curated',
    tags: ['edit', 'sketch', 'render', 'upgrade'],
  },
  {
    id: 'curated-add-text-overlay',
    title: 'Professional Text Overlay',
    category: 'Image Edits',
    prompt:
      'CHANGE: Add professional typographic overlay to this photo without obscuring the main subject. Place a large bold sans-serif headline reading "[YOUR HEADLINE]" positioned in the area with the least visual complexity (negative space). Add a smaller subheading below in light weight. Apply a semi-transparent dark gradient behind the text area to ensure readability. Add a thin accent line between headline and subheading.\nPRESERVE: The entire photograph underneath — no cropping, no color changes, no subject modifications. The photo must remain fully intact.\nMATCH: Text color: white with subtle drop shadow. Gradient: only in the text area, transitioning from 60% black to transparent. Font rendering must be crisp and anti-aliased.',
    why_it_works:
      'Placing text in "the area with least visual complexity" solves the common problem of text competing with image subjects. The semi-transparent gradient ensures readability on any photo without ruining the composition.',
    source: 'curated',
    tags: ['edit', 'text', 'overlay', 'typography'],
  },
  {
    id: 'curated-portrait-relight',
    title: 'Portrait Relighting: Golden Hour',
    category: 'Image Edits',
    prompt:
      'CHANGE: Relight this indoor portrait to look like it was shot during golden hour outdoors. Replace flat indoor lighting with warm directional sunlight from camera-right at approximately 30 degrees above horizon. Add: warm amber rim light on the hair and shoulder edge, soft orange fill in shadow areas, subtle lens flare or haze. Adjust color temperature to 4500K warm. Add soft background blur suggesting outdoor foliage with dappled light.\nPRESERVE: Subject\'s face — skin texture, expression, pose, and all facial features. Clothing details and accessories unchanged.\nMATCH: Shadow direction must be consistent with the new light source position. Catchlights in eyes should reflect the new light angle. Skin tones should read as naturally warm, not orange-cast.',
    why_it_works:
      'Specifying the exact light angle (30 degrees, camera-right) gives the model precise geometric rendering direction. The distinction between "naturally warm" and "orange-cast" prevents the common over-warming artifact. New catchlights in eyes add crucial realism detail.',
    source: 'curated',
    tags: ['edit', 'relight', 'golden-hour', 'portrait'],
  },
  {
    id: 'curated-object-removal-clean',
    title: 'Clean Object Removal',
    category: 'Image Edits',
    prompt:
      'CHANGE: Remove all distracting elements from this photo — people in the background, trash on the ground, signs, vehicles, or any objects that clutter the scene. Fill removed areas with contextually appropriate content that matches surrounding textures, lighting, and perspective. Extend any partially visible surfaces (pavement, grass, walls) naturally.\nPRESERVE: The main subject or focal point of the photo. All foreground elements. Overall composition, color grading, and lighting quality.\nMATCH: Filled areas must seamlessly blend with surrounding pixels — matching grain, noise level, shadow direction, and color temperature. The result should look like the distractions were never there, not like they were painted over.',
    why_it_works:
      'The "contextually appropriate content" instruction prevents generic blur patches over removed areas. Specifying texture, lighting, and perspective matching for fills prevents visible inpainting seams. The final constraint ("never there, not painted over") sets the quality bar.',
    source: 'curated',
    tags: ['edit', 'removal', 'cleanup', 'restoration'],
  },

  // ============================================================
  // NEW ADDITIONS — Storyboards
  // ============================================================
  {
    id: 'curated-hockey-cinematic-storyboard',
    title: 'Hockey Game Cinematic Storyboard',
    category: 'Storyboards',
    prompt:
      '4K cinematic hockey storyboard collage, 5x3 grid (15 frames), professional sports broadcast style, dramatic arena lighting, cool tones, high contrast. Scene progression from defense to goal: Frames 1-3: Intense defensive moment, aggressive stick check, ice spray flying, puck stripped cleanly, motion blur. Frames 4-6: Counterattack begins, rapid acceleration, player skating past opponents, low-angle tracking shots. Frames 7-9: Mid-ice play, passing sequence, teammates opening lanes, wide establishing shots showing full rink. Frames 10-12: Offensive zone entry, dekes and fakes, goaltender squaring up, close-ups of skate blades and puck. Frames 13-15: The shot, dramatic slow-motion release, puck flying past glove, net bulging, celebration eruption with fist pumps. Each frame has a thin white border, subtle frame counter in corner (01-15). Overall: feels like a freeze-frame breakdown of a highlight reel.',
    why_it_works:
      'The 5x3 grid specification creates a widescreen storyboard feel. Scene progression (defense → counterattack → goal) creates narrative arc across 15 frames. Technical camera language (low-angle tracking, wide establishing) triggers professional cinematography priors.',
    source: 'curated',
    source_creator: 'Aegon',
    source_url: 'https://x.com/Fujimoto_hina/status/2049849465541140631',
    tags: ['storyboard', 'sports', 'hockey', 'cinematic'],
  },
  {
    id: 'curated-fashion-storyboard-collage',
    title: 'Sequential Fashion Ad Storyboard',
    category: 'Storyboards',
    prompt:
      'A high-resolution cinematic storyboard collage composed of 20 sequential frames (4x5 grid), designed as continuous screenshots from a premium fashion advertisement video. The same young model appears consistently in all frames, wearing a clean modern t-shirt with a brand name clearly visible. The frames follow a natural motion progression: Row 1 (Intro): Wide shot model walking, medium shot closer, looking off-camera, turning toward camera. Row 2 (Reveal): Confident stride, logo close-up, slow turn, over-shoulder look. Row 3 (Detail): Fabric texture close-up, sleeve detail, full-body pose, side profile. Row 4 (Lifestyle): Casual lean against wall, hands in pockets, candid laugh, looking down. Row 5 (Finale): Hero pose, dramatic backlight, cinematic wide, fade to brand card. Consistent warm golden-hour lighting throughout. Shallow depth of field. Muted earth tones. Thin white borders between frames.',
    why_it_works:
      'The row-by-row breakdown (Intro, Reveal, Detail, Lifestyle, Finale) follows real commercial production structure. Specifying a consistent model and outfit across 20 frames tests and leverages GPT Image 2\'s character consistency. The fade-to-brand-card ending mirrors actual ad storyboards.',
    source: 'curated',
    source_creator: 'Professor',
    source_url: 'https://x.com/Professor_134/status/2049833597717324268',
    tags: ['storyboard', 'fashion', 'advertisement', 'sequential'],
  },
  {
    id: 'curated-kpop-dance-instruction',
    title: 'K-Pop Dance 16-Step Instruction Sheet',
    category: 'Storyboards',
    prompt:
      'K-Pop Dance 16-Step Instruction Sheet in a 4x4 grid. High-end K-pop choreography guide in monochrome grayscale, crisp studio-lit composition with strong contrast, modern editorial and performance aesthetic, clean white background. Each panel clearly numbered 1-16 with a short title in the top-left corner, 3-4 short instruction lines in the bottom-left, and overlay arrows plus motion guides (curved, straight, circular) showing movement direction. The dancer is a stylish young adult in minimal practice wear (fitted crop top, joggers, sneakers), consistent appearance across all panels. Each panel captures a distinct key pose in the choreography, showing the full body with clear limb positions. Style: high-contrast black and white, sharp studio lighting, dynamic poses with clean silhouettes.',
    why_it_works:
      'The 4x4 grid with numbered panels creates a scannable instruction format. Monochrome grayscale eliminates color distraction, focusing attention on pose clarity. Motion-guide arrows overlay actual choreographic notation conventions on each pose.',
    source: 'curated',
    source_creator: 'Melis',
    source_url: 'https://x.com/miilesus/status/2049914543015334243',
    tags: ['storyboard', 'dance', 'instruction', 'kpop'],
  },
  {
    id: 'curated-four-panel-daily-comic',
    title: 'Four Panel Daily Comic Strip',
    category: 'Storyboards',
    prompt:
      'A classic 4-panel horizontal comic strip on white background. Consistent character throughout: a round-headed office worker with messy hair, small dot eyes, and a simple mouth. Panel 1 (Setup): Character at desk, coffee in hand, laptop open, thought bubble: "I\'ll finish this in an hour." Panel 2 (Development): Same desk, now surrounded by snack wrappers and sticky notes, clock showing 3 hours later. Panel 3 (Escalation): Character buried under a mountain of browser tabs (shown as physical paper stacking up), coffee cup empty. Panel 4 (Punchline): Character sleeping face-down on keyboard, screen showing "Task completed 2%" notification. Clean thin panel borders, simple flat colors, minimal background details. Newspaper comic strip aesthetic.',
    why_it_works:
      'The 4-panel structure (Setup, Development, Escalation, Punchline) follows classic comic timing. Consistent character description (round head, dot eyes) ensures identity across panels. Relatable programmer humor makes it shareable content.',
    source: 'curated',
    tags: ['storyboard', 'comic', 'humor', '4-panel'],
  },
  {
    id: 'curated-product-unboxing-sequence',
    title: 'Product Unboxing Photo Sequence',
    category: 'Storyboards',
    prompt:
      'A 3x2 grid (6 panels) showing a premium product unboxing sequence. Consistent top-down perspective throughout. Panel 1: sealed box on dark surface, embossed logo visible, shrink wrap catching light. Panel 2: hands lifting the lid, revealing tissue paper wrapping. Panel 3: tissue paper pulled aside, product in foam insert visible. Panel 4: product lifted out, showing its full form for the first time. Panel 5: product placed on surface next to all included accessories laid out neatly. Panel 6: product in use context — lifestyle shot. Warm studio lighting, shallow depth of field, consistent shadow direction. Each panel feels like a frame from an ASMR unboxing video. Premium packaging photography aesthetic. Aspect ratio 4:5 vertical.',
    why_it_works:
      'The panel progression (sealed → opening → reveal → accessories → lifestyle) follows real unboxing video conventions. Consistent top-down perspective creates visual cohesion. "ASMR unboxing video" triggers the specific slow, satisfying, close-up aesthetic.',
    source: 'curated',
    tags: ['storyboard', 'unboxing', 'product', 'sequence'],
  },
  {
    id: 'curated-recipe-step-panels',
    title: 'Illustrated Recipe Step Panels',
    category: 'Storyboards',
    prompt:
      'A 4x3 grid (12 panels) illustrating a pasta recipe step-by-step. Each panel: watercolor illustration style with thin ink outlines, numbered in the top-left corner. Panel 1: Ingredients laid out (flour, eggs, olive oil, salt). Panel 2: Mound of flour with well in center. Panel 3: Eggs cracked into the well. Panel 4: Fork mixing from center outward. Panel 5: Hands kneading dough on floured surface. Panel 6: Dough ball resting under cloth. Panel 7: Rolling dough thin with pasta machine. Panel 8: Cutting into tagliatelle strips. Panel 9: Boiling water with salt. Panel 10: Pasta dropped into pot. Panel 11: Tossing in pan with sauce and herbs. Panel 12: Plated dish with garnish, steam rising. Consistent warm kitchen color palette throughout. Each panel has a short caption below in handwritten style font.',
    why_it_works:
      'Watercolor with ink outlines creates a cookbook illustration feel distinct from photography. The 12-step progression covers the complete cooking process. Handwritten captions add warmth matching the illustration style.',
    source: 'curated',
    tags: ['storyboard', 'recipe', 'cooking', 'watercolor'],
  },
  {
    id: 'curated-character-turnaround-sheet',
    title: 'Character Turnaround Sheet',
    category: 'Storyboards',
    prompt:
      'A professional character turnaround model sheet on clean white background. Exactly 5 views of the same character arranged in a horizontal row: front view, three-quarter front, side profile (left), three-quarter back, and back view. Character: a cyberpunk street runner — short asymmetric undercut hair, LED-traced jacket over a compression top, utility belt with pouches, armored boots. Each view at the same scale, same standing neutral pose, feet shoulder-width apart. Below the turnaround: a row of exactly 4 head close-ups showing different expressions (neutral, smirking, angry, surprised). Color palette strip at the bottom edge showing 6 key colors used. Clean anime-influenced digital art style with sharp line work. Aspect ratio 16:9 landscape.',
    why_it_works:
      'Exactly 5 rotation angles and 4 expressions follow industry-standard character model sheet conventions. The neutral standing pose prevents perspective distortion across views. The color palette strip is a production-ready deliverable detail.',
    source: 'curated',
    tags: ['storyboard', 'character', 'turnaround', 'model-sheet'],
  },
  {
    id: 'curated-day-in-the-life-comic',
    title: 'Day In The Life Comic Grid',
    category: 'Storyboards',
    prompt:
      'A 3x3 grid (9 panels) comic showing "A Day in the Life of a Remote Worker." Consistent character throughout: a 30-something with glasses and messy bun hair. Panel 1 (7:00 AM): alarm going off, reaching for phone from bed. Panel 2 (7:30): coffee mug in hand, staring blankly at laptop on kitchen counter. Panel 3 (9:00): video call with 4 tiny faces on screen, character still in pajamas from chest down. Panel 4 (11:00): typing furiously with multiple browser tabs illustrated as physical papers floating. Panel 5 (12:30): eating lunch over keyboard, crumbs falling. Panel 6 (2:00): falling asleep at desk, "ZZZ" text. Panel 7 (3:30): cat walking across keyboard, character panicking. Panel 8 (5:00): closing laptop with triumphant expression. Panel 9 (5:01): opening laptop again. Warm, friendly illustration style with soft colors. Time stamps in corner of each panel.',
    why_it_works:
      'Time-stamped panels create narrative pacing. The relatable remote-work humor (pajamas on calls, cat on keyboard, closing then reopening laptop) resonates broadly. Consistent character with distinctive features (glasses, messy bun) ensures identity across 9 panels.',
    source: 'curated',
    tags: ['storyboard', 'comic', 'lifestyle', 'humor'],
  },

  // ============================================================
  // NEW ADDITIONS — UI Mockups
  // ============================================================
  {
    id: 'curated-saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    category: 'UI Mockups',
    prompt:
      'High-fidelity SaaS analytics dashboard screenshot. Dark mode with deep navy background. Top bar: logo, search, notification bell with red badge, user avatar. Left sidebar: navigation with icons — Dashboard (active, highlighted), Projects, Team, Analytics, Settings. Main area: top row of 4 KPI metric cards (Revenue, Users, Conversion, MRR) with sparkline charts and green/red delta percentages. Below: large area chart showing monthly revenue trend with gradient fill. Right column: activity feed with 5 recent events and circular progress charts. Bottom: data table with 6 rows, sortable column headers. All text crisp and readable. Font: Inter or similar clean sans-serif. Color accents: electric blue for active states, emerald for positive deltas, coral for negative. Aspect ratio 16:9 landscape.',
    why_it_works:
      'Specific UI component inventory (4 KPI cards, area chart, activity feed, data table) prevents the model from generating vague dashboard concepts. Named font and color tokens mirror real design-system specifications. The component layout mirrors successful SaaS products.',
    source: 'curated',
    tags: ['ui', 'dashboard', 'saas', 'dark-mode'],
  },
  {
    id: 'curated-mobile-onboarding-flow',
    title: 'Mobile Onboarding Flow',
    category: 'UI Mockups',
    prompt:
      'A horizontal strip of exactly 4 mobile phone screens showing an app onboarding flow, arranged side-by-side with thin spacing. Each screen: status bar at top (9:41, signal, battery). Screen 1: Full-screen illustration of a person with a magnifying glass, headline "Discover what you love," subtitle text, two dot indicators (first active). Screen 2: Illustration of notification bell with sparkles, headline "Stay in the loop," subtitle, pagination dots (second active). Screen 3: Illustration of connected people, headline "Build your network," subtitle, dots. Screen 4: Large "Get Started" button in brand color (indigo), "Already have an account? Log in" link below. Consistent design language across all 4 screens — same illustration style, same type hierarchy, same spacing. Clean white backgrounds, playful but professional. Each phone has a thin device bezel frame.',
    why_it_works:
      'Exactly 4 screens is the sweet spot for onboarding flows. The pagination dot indicator progressing across screens shows continuity. Consistent design language instruction prevents style drift between screens. The device bezel framing adds presentation context.',
    source: 'curated',
    tags: ['ui', 'onboarding', 'mobile', 'flow'],
  },
  {
    id: 'curated-fitness-tracker-app',
    title: 'Fitness Tracker App',
    category: 'UI Mockups',
    prompt:
      'High-fidelity mobile fitness tracking app screenshot. Dark background with vibrant accent colors. Top: greeting "Good morning, Alex" with small avatar. Below: large circular progress ring showing daily step goal (7,432 / 10,000) with percentage in the center. Three horizontal stat cards: Calories (flame icon, 342 kcal), Distance (pin icon, 4.2 km), Active Minutes (clock icon, 28 min). Each card with a small bar chart showing the last 7 days. Below: "Today\'s Workout" card with an exercise illustration, workout name "Full Body HIIT," duration "32 min," difficulty dots. Bottom tab bar with 5 icons: Home (active), Workouts, Nutrition, Progress, Profile. Status bar: 10:24 AM. Brand accent color: electric green. iOS-style design with rounded corners and subtle glassmorphism cards.',
    why_it_works:
      'Specific data values (7,432 steps, 342 kcal, 4.2 km) anchor realism — vague placeholders produce vague UIs. Named UI patterns (glassmorphism, rounded corners) guide rendering precision. The bottom tab bar with exactly 5 items matches iOS Human Interface Guidelines.',
    source: 'curated',
    tags: ['ui', 'fitness', 'mobile', 'health'],
  },
  {
    id: 'curated-checkout-flow-screens',
    title: 'E-commerce Checkout Flow',
    category: 'UI Mockups',
    prompt:
      'Three mobile screens side-by-side showing an e-commerce checkout flow. Screen 1 (Cart): Product list with 2 items showing thumbnail, name, quantity selector, and price. Subtotal, shipping, and total at bottom. "Proceed to Checkout" button in black. Screen 2 (Shipping): Shipping address form with name, address line 1, address line 2, city, state, zip fields. Saved address card with edit button. Delivery speed selector (Standard, Express). Screen 3 (Payment): Card payment form with card number, expiry, CVV. Apple Pay and Google Pay buttons. Order summary sidebar. "Place Order" button with lock icon. All three screens share: white background, consistent header with back arrow and step indicator (1/3, 2/3, 3/3), same typography. Clean modern e-commerce aesthetic. Aspect ratio 16:9 landscape.',
    why_it_works:
      'The step indicator (1/3, 2/3, 3/3) across screens creates visual progression. Specific form fields and UI elements (quantity selector, delivery speed selector) prevent generic placeholder wireframes. Three screens side-by-side is the standard checkout-flow presentation format.',
    source: 'curated',
    tags: ['ui', 'checkout', 'ecommerce', 'flow'],
  },
  {
    id: 'curated-mobile-wallet-app',
    title: 'Mobile Digital Wallet',
    category: 'UI Mockups',
    prompt:
      'High-fidelity mobile digital wallet app screenshot. Gradient background from dark purple to deep blue. Top: "My Wallet" title with settings gear icon. Main card: a realistic credit card design floating at a slight 3D tilt with glassmorphism effect — card number partially masked (•••• 4829), cardholder name, expiry date, Visa logo. Below the card: balance display "$12,459.32" in large white bold text with "Available Balance" label. Quick action row: 4 circular icon buttons — Send, Request, Top Up, Scan. Recent transactions list: 5 items with merchant icon, name, date, and amount (green for incoming, white for outgoing). Each transaction: "Netflix -$15.99," "Salary +$4,200.00," etc. Bottom nav: Home (active), Cards, Payments, Profile. Status bar: 2:30 PM. iOS design language.',
    why_it_works:
      'The tilted 3D credit card with glassmorphism is the signature fintech UI element. Specific transaction values with merchant names prevent generic placeholder content. Color-coded amounts (green incoming, white outgoing) follow banking app conventions.',
    source: 'curated',
    tags: ['ui', 'wallet', 'fintech', 'mobile'],
  },
  {
    id: 'curated-notion-style-workspace',
    title: 'Notion-Style Workspace Page',
    category: 'UI Mockups',
    prompt:
      'A screenshot of a productivity workspace page similar to Notion or Coda. Clean white background. Left sidebar: workspace name with dropdown, section headers (Favorites, Private, Shared) with nested page items showing emoji icons. Main content area: page title "Q2 Product Roadmap" with a cover image banner (abstract gradient). Below: a breadcrumb navigation, author avatar with "Last edited 2 hours ago." Content: a toggle heading "Launch Timeline" expanded to show a Gantt-chart-style timeline view with 5 colored bars. Below: a table/database view with columns (Feature, Status, Owner, Priority, Due Date) and 6 rows of data with colored status tags (In Progress, Done, Blocked). Floating "+" button for new blocks. Minimal, clean, professional. Light mode. Aspect ratio 16:9 landscape.',
    why_it_works:
      'Naming specific UI patterns (toggle heading, database view, Gantt chart, breadcrumbs) triggers recognition of the block-based editor paradigm. Specific column names and status tags prevent empty wireframes. The "Last edited 2 hours ago" timestamp adds lived-in authenticity.',
    source: 'curated',
    tags: ['ui', 'productivity', 'workspace', 'notion'],
  },
  {
    id: 'curated-messaging-app-chat',
    title: 'Messaging App Chat Screen',
    category: 'UI Mockups',
    prompt:
      'A high-fidelity mobile messaging app chat screen. Top bar: back arrow, contact avatar (small circle), contact name "Sarah Chen," online status green dot, video call and voice call icons. Message area: a natural conversation with exactly 8 message bubbles alternating between sent (right, blue) and received (left, light gray). Include a mix of: text messages, one photo message (food photo thumbnail with rounded corners), one voice message (waveform bar with play button and duration "0:23"), and one link preview card with thumbnail and title. Messages have timestamps and read receipts (double blue checkmarks). Bottom: text input field with placeholder "Message," attachment (+) button, camera button, and send arrow button. Keyboard not visible. Clean white background, iOS-style design. Aspect ratio 9:16 vertical.',
    why_it_works:
      'Mixing message types (text, photo, voice, link preview) demonstrates realistic chat variety. Exactly 8 bubbles prevents overcrowding while showing enough conversation. Read receipts and online status are the details that separate realistic from wireframe UIs.',
    source: 'curated',
    tags: ['ui', 'messaging', 'chat', 'mobile'],
  },
  {
    id: 'curated-settings-preferences-page',
    title: 'Settings Preferences Page',
    category: 'UI Mockups',
    prompt:
      'A mobile app settings/preferences screen. Clean white background. Top: "Settings" title with back arrow. Sections organized with gray headers: "Account" section with profile photo, name, email in a card. "Preferences" section with toggle switches: Dark Mode (on, blue), Push Notifications (on, blue), Location Services (off, gray). "Appearance" section with a theme selector showing 3 circular color swatches (light, dark, auto) with "Auto" selected with a checkmark. "Privacy" section with disclosure arrows: Data Sharing, Blocked Users, Account Privacy. "About" section: Version 2.4.1, Terms of Service, Privacy Policy. Bottom: "Sign Out" button in red text, "Delete Account" in smaller gray text. Standard iOS settings page aesthetic with grouped rounded-corner sections. Aspect ratio 9:16 vertical.',
    why_it_works:
      'Real settings pages have specific UI patterns (toggle switches, disclosure arrows, grouped sections) that distinguish them from generic wireframes. Mixing "on" and "off" toggle states adds realism. The "Sign Out" in red and "Delete Account" in gray follow actual iOS destructive-action conventions.',
    source: 'curated',
    tags: ['ui', 'settings', 'mobile', 'preferences'],
  },

  // ============================================================
  // NEW ADDITIONS — Interior/Food/Fashion
  // ============================================================
  {
    id: 'curated-vitamin-c-serum-shot',
    title: 'Luxury Vitamin C Serum Product Shot',
    category: 'Interior/Food/Fashion',
    prompt:
      'A high-end commercial skincare product photo on a light marble bathroom counter, centered on a clear glass dropper bottle filled with warm amber-orange serum. The bottle is covered in realistic condensation droplets and has a white rubber pipette top with a shiny metallic gold collar. The front label is elegant and minimal, reading "HydraGlow" with smaller lines "Vitamin C Serum - 30ml" and "Brightening & Anti-Aging Formula," plus a simple gold botanical lotus-style logo above the brand name. Soft directional window light from the left. Background: blurred bathroom vanity mirror, soft white towel. Fresh orange slices and green leaves arranged as props. Shallow depth of field, shot on 85mm f/2.8. Clean luxury cosmetics aesthetic.',
    why_it_works:
      'Condensation droplets on the bottle surface signal freshness and temperature — a specific product-photography technique. Exact label text prevents the model from generating illegible placeholder text. Orange slices as props visually reinforce the "Vitamin C" claim.',
    source: 'curated',
    source_creator: 'Matias Schrank',
    source_url: 'https://x.com/MatiasSchrank/status/2048891860999983249',
    tags: ['product', 'skincare', 'photography', 'luxury'],
  },
  {
    id: 'curated-strawberry-cream-splash',
    title: 'Strawberry Cream Product Splash',
    category: 'Interior/Food/Fashion',
    prompt:
      'A sleek jade-pink tube labeled "Strawberry Repair Cream" upright on glossy marble, surrounded by creamy strawberry splashes and flying strawberry slices mid-air. Warm natural lighting, minimal light-beige background, ultra-realistic textures. The cream is squeezing out of the tube tip in a dynamic swirl. Tiny water droplets and cream particles frozen in mid-air. Shallow depth of field with the tube in sharp focus. Product photography with CGI-enhanced splash elements. Aspect ratio 4:5 vertical.',
    why_it_works:
      'Dynamic splash and mid-air elements create energy in an otherwise static product shot. The frozen-motion technique (water droplets, flying slices) is a staple of premium cosmetics advertising. Specific material callout (jade-pink tube, glossy marble) anchors texture rendering.',
    source: 'curated',
    source_creator: 'M',
    tags: ['product', 'cosmetics', 'splash', 'dynamic'],
  },
  {
    id: 'curated-minimalist-fashion-split',
    title: 'Minimalist Fashion Editorial Split Panel',
    category: 'Interior/Food/Fashion',
    prompt:
      'Left panel: A young man from the back standing inside a clean, minimal cafe interior. He is wearing an off-white oversized t-shirt with a brand logo printed large across the back, and a matching light beige cap. The environment has light wooden counters and shelves, warm natural lighting, and minimal branded packaging displayed on shelves in the background. Clean, airy, and contemporary. Right panel: The same t-shirt shown flat-lay on a cream linen surface, neatly folded with the logo visible, alongside the cap and a small branded tote bag. Both panels have consistent warm lighting and a muted earth-tone palette. Editorial split-panel format. Aspect ratio 4:5 vertical.',
    why_it_works:
      'The split-panel format (lifestyle + flat-lay) is the standard e-commerce editorial technique. Showing the same product in context and in isolation covers two photography needs in one image. Consistent warm lighting across panels creates visual cohesion.',
    source: 'curated',
    source_creator: 'Al-Shamus',
    source_url: 'https://x.com/im_shahid7/status/2048976229626499285',
    tags: ['fashion', 'editorial', 'split-panel', 'minimal'],
  },
  {
    id: 'curated-wine-pairing-tableau',
    title: 'Wine And Cheese Pairing Tableau',
    category: 'Interior/Food/Fashion',
    prompt:
      'Overhead food photography of a wine and cheese pairing board on a dark walnut table. Centered: a large rustic wooden board with exactly 4 cheese wedges arranged in a clock pattern — aged cheddar (amber), brie (white with rind), blue cheese (blue-veined), gouda (pale yellow). Between cheeses: clusters of red grapes, dried apricots, honeycomb with drizzle, and marcona almonds. Two wine glasses flanking the board — one red (Cabernet, deep ruby), one white (Chardonnay, pale gold) — shot from above showing the wine surface and reflections. Small handwritten label cards identifying each cheese. Warm candlelight glow from out of frame. Rich, moody editorial food photography. Shot at 35mm overhead, f/4. Aspect ratio 1:1 square.',
    why_it_works:
      'Exactly 4 cheeses in a clock pattern prevents chaotic board arrangements. Named wine varietals with specific colors (deep ruby, pale gold) guide accurate glass rendering. Handwritten label cards add editorial polish and practical usability.',
    source: 'curated',
    tags: ['food', 'wine', 'cheese', 'pairing', 'editorial'],
  },
  {
    id: 'curated-scandinavian-bathroom',
    title: 'Scandinavian Bathroom Interior',
    category: 'Interior/Food/Fashion',
    prompt:
      'Architectural interior photography of a Scandinavian-minimal bathroom. Materials: white micro-cement walls with subtle texture, light oak floating vanity with integrated concrete basin, matte black fixtures (rain showerhead, wall-mounted faucet, towel hooks). A frameless floor-to-ceiling glass shower partition with matte black hardware. Floor: large-format light gray stone tiles with minimal grout lines. Accessories: a single eucalyptus branch in a ceramic vase on the vanity, neatly folded white linen towels, one amber glass soap dispenser. Natural daylight from a frosted glass window creating soft even illumination with no harsh shadows. Shot at 18mm wide-angle from doorway perspective, f/8, straight-on. Muted palette: white, light oak, gray, matte black accents. Architectural Digest editorial style. Aspect ratio 4:5 vertical.',
    why_it_works:
      'Specific material names (micro-cement, concrete basin, matte black fixtures) trigger accurate texture rendering. The restricted accessory count (eucalyptus, towels, soap) prevents bathroom clutter. Wide-angle from doorway is the standard real-estate interior photography perspective.',
    source: 'curated',
    tags: ['interior', 'bathroom', 'scandinavian', 'minimal'],
  },
  {
    id: 'curated-cocktail-dark-bar',
    title: 'Cocktail Bar Moody Photography',
    category: 'Interior/Food/Fashion',
    prompt:
      'Moody cocktail photography. A single craft cocktail in a crystal coupe glass on a dark zinc bar top. The drink is a deep amber old-fashioned with a single large sphere ice cube and an orange peel twist garnish. Behind the glass: backlit bottles on shelves creating warm bokeh orbs in amber and gold. Bar surface has subtle condensation rings and a small cocktail napkin with embossed logo. One warm Edison bulb in soft focus upper left. Smoke or mist wisps catching the backlight. Shot at 50mm f/1.8, very shallow depth of field — only the garnish and glass rim in sharp focus. Dark, intimate atmosphere with rich warm tones. NOT bright, NOT airy. Aspect ratio 4:5 vertical.',
    why_it_works:
      'The sphere ice cube and orange peel twist are specific craft-cocktail details that signal quality. Backlit bottle bokeh is the signature bar-photography effect. Negative constraints ("NOT bright, NOT airy") prevent the Instagram-bright default that doesn\'t match bar ambiance.',
    source: 'curated',
    tags: ['food', 'cocktail', 'bar', 'moody', 'photography'],
  },
  {
    id: 'curated-capsule-wardrobe-grid',
    title: 'Capsule Wardrobe Grid',
    category: 'Interior/Food/Fashion',
    prompt:
      'Top-down flat-lay of a minimalist capsule wardrobe arranged in a neat 4x4 grid on a clean white surface. Exactly 16 garments, each folded or laid flat in its own invisible grid cell with equal spacing. Row 1 (Tops): white t-shirt, navy breton stripe, cream button-down, black turtleneck. Row 2 (Bottoms): dark indigo jeans, tan chinos, black tailored trousers, olive cargo pants. Row 3 (Layers): camel overcoat, charcoal blazer, denim jacket, navy cardigan. Row 4 (Accessories): white sneakers, brown leather boots, black belt, watch. Each item casting a minimal shadow. Neutral palette with pops of navy and camel. Marie Kondo organization aesthetic. Shot at 90-degree overhead, even lighting. Aspect ratio 1:1 square.',
    why_it_works:
      'Specifying exact garments per row creates an organized, scannable grid. The 4x4 structure with category rows (Tops, Bottoms, Layers, Accessories) follows real capsule wardrobe methodology. Named colors and styles prevent generic clothing generation.',
    source: 'curated',
    tags: ['fashion', 'capsule-wardrobe', 'flat-lay', 'organization'],
  },
  {
    id: 'curated-bakery-window-display',
    title: 'French Bakery Window Display',
    category: 'Interior/Food/Fashion',
    prompt:
      'Street-level food photography through a French bakery window. Shot from outside looking in through the glass, slight window reflections of the street visible. Inside the window display: three tiers of a curved glass patisserie case with warm internal lighting. Top shelf: row of perfect croissants with flaky golden layers. Middle shelf: fruit tarts with glazed berries, eclairs with chocolate ganache. Bottom shelf: macarons in pastel colors arranged in neat rows. Gold script lettering on the glass reading "Boulangerie." Warm golden interior light contrasting with cool blue street light. Early morning, no people. Shot at 35mm, slight condensation on the glass. Parisian neighborhood aesthetic. Aspect ratio 3:2 landscape.',
    why_it_works:
      'Shooting through glass with reflections creates a voyeuristic, atmospheric quality. Specifying three distinct shelf contents prevents repetitive displays. The warm interior vs. cool exterior light contrast is the classic bakery window photography technique.',
    source: 'curated',
    tags: ['food', 'bakery', 'paris', 'window', 'photography'],
  },
  {
    id: 'curated-floor-plan-3d-render',
    title: '2D Floor Plan To 3D Render',
    category: 'Interior/Food/Fashion',
    prompt:
      'Using the provided floor plan reference image, convert the 2D black-and-white architectural plan into a clean photorealistic 3D isometric real-estate floor plan render while preserving the original layout, room sizes, and labels. Add realistic wall thickness, light wood flooring, soft neutral wall colors, doors and windows with depth, and fully furnished interiors appropriate to each room. Keep all room labels in place. Include realistic indoor lighting with warm tones for living areas and cool white for kitchens and bathrooms. Add small lifestyle details: potted plants, books on shelves, folded towels, kitchen utensils. The render should look like a premium real-estate marketing visualization, not a video game or cartoon. Isometric 30-degree angle, consistent scale throughout. Aspect ratio 16:9 landscape.',
    why_it_works:
      'The instruction to preserve original layout and labels ensures fidelity to the source floor plan. "Premium real-estate marketing" sets the quality bar while "not a video game or cartoon" prevents stylistic drift. Small lifestyle details add the lived-in warmth real estate renderings need.',
    source: 'curated',
    source_creator: 'Tsukishima-kun',
    source_url: 'https://x.com/wancoro_xx/status/2049760825431511352',
    tags: ['interior', 'floor-plan', '3d-render', 'real-estate'],
  },
  {
    id: 'curated-streetwear-lookbook',
    title: 'Streetwear Lookbook Contact Sheet',
    category: 'Interior/Food/Fashion',
    prompt:
      'A streetwear fashion lookbook contact sheet. 4x3 grid (12 frames) on dark background. Each frame shows the same model in a different outfit pose and urban location, shot on 35mm film with authentic sprocket holes visible at top and bottom edges. Frame numbers printed between shots (01A, 02A, etc.). Outfits range across streetwear staples: oversized hoodie with cargo pants, cropped puffer jacket with wide-leg jeans, graphic tee with track pants, bomber jacket with pleated trousers. Locations alternate: graffiti wall, rooftop, parking garage, convenience store entrance. Consistent warm-toned film color grade (Kodak Gold 200). Some frames deliberately overexposed, one slightly out of focus. Authentic contact-sheet aesthetic with light-table glow underneath. Aspect ratio 4:5 vertical.',
    why_it_works:
      'Sprocket holes and frame numbers create authentic contact-sheet formatting. Named film stock (Kodak Gold 200) triggers specific color science. Deliberate imperfections (overexposed, out-of-focus frames) add the "shot selection" authenticity of a real contact sheet.',
    source: 'curated',
    tags: ['fashion', 'streetwear', 'lookbook', 'film', 'contact-sheet'],
  },

  // ============================================================
  // NEW ADDITIONS — Social Posts
  // ============================================================
  {
    id: 'curated-mixed-reality-cafe',
    title: 'Mixed Reality Cafe Illustration',
    category: 'Social Posts',
    prompt:
      'A trendy young woman sitting at an outdoor cafe table, holding a hot coffee cup near her lips. She has short curly black hair and wears oversized tinted sunglasses, a cropped beige sweater, loose brown high-waisted pants, and chunky white sneakers. A tote bag with minimal coffee-themed illustrations hangs on her shoulder. The scene blends realistic photography with playful 2D cartoon overlays. Floating around her are animated coffee elements: a smiling cappuccino cup with heart-shaped latte art eyes, swirling steam trails forming doodle clouds, tiny illustrated coffee beans bouncing mid-air, and a cartoon croissant character peeking from behind her bag. The background is a real cafe with warm outdoor lighting, but whimsical hand-drawn arrows, stars, and sparkle effects are scattered throughout. Aspect ratio 4:5 vertical.',
    why_it_works:
      'The explicit separation of photorealistic elements (person, cafe) and cartoon overlays (floating doodles, animated food) gives the model clear mixed-media instructions. Named cartoon characters (smiling cup, bouncing beans) prevent vague "playful elements." The trendy outfit details anchor the lifestyle-content aesthetic.',
    source: 'curated',
    source_creator: 'Jawad Rahman',
    source_url: 'https://x.com/Jawad_Rahman_/status/2049796647237066971',
    tags: ['social', 'mixed-media', 'cafe', 'lifestyle'],
  },
  {
    id: 'curated-instagram-reel-cover',
    title: 'Instagram Reel Cover Grid',
    category: 'Social Posts',
    prompt:
      'A 3x3 grid of 9 Instagram Reel cover thumbnails for a cooking content creator. Each cover: vertical 9:16 proportions, consistent brand colors (warm terracotta and cream). Every cover has a different recipe photo as the background with a semi-transparent dark overlay. Large bold text overlay in white condensed sans-serif showing the recipe name (e.g., "PASTA AGLIO E OLIO," "10-MIN SHAKSHUKA," "CRISPY TOFU BOWL"). Small creator handle in the bottom corner. Each cover uses the same text layout but different recipe imagery. The 9 covers together should look cohesive as a profile grid. Aspect ratio 1:1 square (the whole grid).',
    why_it_works:
      'The grid-of-9 format mimics the actual Instagram profile view. Consistent brand colors and text layout across 9 variations creates the "aesthetic feed" look creators aim for. Named recipes prevent placeholder text.',
    source: 'curated',
    tags: ['social', 'instagram', 'reel', 'food-content'],
  },
  {
    id: 'curated-poll-results-graphic',
    title: 'Poll Results Social Graphic',
    category: 'Social Posts',
    prompt:
      'A bold social media poll results graphic. Title: "We Asked, You Answered" in bold sans-serif at top. Subtitle: "What\'s your go-to morning drink?" Below: exactly 4 horizontal bars showing results. "Coffee 47%" (longest bar, dark brown fill), "Tea 28%" (medium bar, green fill), "Smoothie 15%" (shorter bar, pink fill), "Water 10%" (shortest bar, blue fill). Each bar has the drink name left-aligned and percentage right-aligned. A small emoji icon before each drink name. Total vote count "2,847 votes" in small gray text at bottom. Background: clean white with subtle confetti dots. Color palette matches the drink colors. Playful but data-clear. Aspect ratio 1:1 square. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Specific percentages that sum to 100% prevent hallucinated data. Horizontal bars sorted by length (longest to shortest) follow data-visualization best practices. Emoji icons add social-media personality without cluttering the data.',
    source: 'curated',
    tags: ['social', 'poll', 'data', 'engagement'],
  },
  {
    id: 'curated-anniversary-milestone-post',
    title: 'Anniversary Milestone Post',
    category: 'Social Posts',
    prompt:
      'Instagram celebration post for a brand anniversary. Large "5" rendered in 3D metallic gold with reflective highlights, centered on a deep navy background. Confetti and streamlined ribbon elements in gold and cream floating around the number. Below: "YEARS" in tracked-out thin caps. Below that: "Thank You" in elegant script font. Bottom: exactly 4 small stat cards in a row — "50K+ Customers," "12 Countries," "1M+ Orders," "4.9 Rating" — each in a semi-transparent glass card with rounded corners. Subtle radial gradient behind the number creating a spotlight effect. Premium, celebratory, but not gaudy. Aspect ratio 1:1 square. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The 3D metallic number is the visual anchor — GPT Image 2 renders metallic textures well with specific material instructions. Exactly 4 stat cards balance information density. "Premium but not gaudy" prevents the common AI tendency to over-embellish celebrations.',
    source: 'curated',
    tags: ['social', 'anniversary', 'celebration', 'brand'],
  },
  {
    id: 'curated-tiktok-screenshot-mockup',
    title: 'TikTok Video Screenshot Mockup',
    category: 'Social Posts',
    prompt:
      'A realistic TikTok video screenshot. 9:16 vertical aspect ratio. The video shows a person in a modern kitchen mid-action, gesturing at a cutting board with colorful vegetables. TikTok UI overlays: right sidebar with heart icon (24.5K), comment icon (892), bookmark (3,210), share arrow, and spinning music disc. Bottom left: username "@chef.marcus" with verified badge, caption text "Wait for it... the secret ingredient changes EVERYTHING" with hashtags "#cookinghack #foodtok #viral." Bottom: scrolling music credit bar "Original Sound - Chef Marcus." Top left: "Following | For You" tabs with "For You" underlined. Progress bar at very bottom. All UI elements authentic to current TikTok layout.',
    why_it_works:
      'Specific engagement numbers (24.5K hearts, 892 comments) make the mockup feel like a real viral video. Authentic UI elements (spinning music disc, progress bar, Following/For You tabs) are what separate a realistic mockup from a generic phone screenshot.',
    source: 'curated',
    tags: ['social', 'tiktok', 'mockup', 'video'],
  },
  {
    id: 'curated-spotify-wrapped-style',
    title: 'Spotify Wrapped Style Stats Card',
    category: 'Social Posts',
    prompt:
      'A Spotify Wrapped-style personal stats card. Bold gradient background shifting from electric purple to hot pink to warm coral. Large display number "2,847" in heavy white sans-serif with a subtitle "hours of music." Below: "Your Top Genre" with "Indie Rock" in a frosted glass pill badge. "Most Played" card: album art placeholder (abstract geometric pattern), song title "Midnight Drive," artist "The Velvet Waves," play count "347 times." Fun stat callouts: "You listened more than 94% of users" with a progress bar. Small animated-style musical notes and equalizer bar icons scattered decoratively. Bottom: "Your 2026 Wrapped" branding. Glossy, vibrant, shareable. Aspect ratio 9:16 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The bold gradient background and heavy typography are signature Spotify Wrapped visual DNA. Specific numbers and percentages (2,847 hours, 94%, 347 plays) prevent vague placeholder content. The "frosted glass pill badge" mirrors Spotify\'s actual glassmorphism UI elements.',
    source: 'curated',
    tags: ['social', 'spotify', 'stats', 'wrapped'],
  },

  // ============================================================
  // NEW ADDITIONS — Open-Ended Creative
  // ============================================================
  {
    id: 'curated-cyberpunk-angel-megacity',
    title: 'Cyberpunk Machine Angel Over Megacity',
    category: 'Open-Ended Creative',
    prompt:
      'A colossal machine angel hovering above a dense futuristic megacity at night, viewed from a dramatic low angle so she dominates the skyline like a divine apparition. She has a sleek feminine humanoid body made of white, silver, and graphite biomechanical armor with exposed segmented joints, intricate filigree machinery, and glowing cyan energy lines embedded through the torso and limbs. Her face is smooth and featureless like a blank mask, partially shadowed, with faint cyan light leaking from narrow eye slits. Six massive mechanical wings extend outward in a radial fan behind her body, each wing built from layered bladed panels, glowing filaments, and articulated joints, with the tips fading into trails of blue-white light and digital particles dissolving into the night. The city below is a dense tangle of neon-lit towers, holographic signage, flying vehicles, and layered highways stretching to the horizon. Volumetric fog, rain, lens flare.',
    why_it_works:
      'The contrast between divine imagery (angel, radial wings) and mechanical detail (segmented joints, bladed panels) creates visual tension. Low-angle perspective emphasizes the colossal scale. Specific material callouts (graphite armor, glowing filaments) give the model concrete rendering targets.',
    source: 'curated',
    source_creator: 'Eccentrica',
    source_url: 'https://x.com/8484ff_42/status/2049999502388654417',
    tags: ['cyberpunk', 'sci-fi', 'angel', 'megacity'],
  },
  {
    id: 'curated-watercolor-fantasy-cafe',
    title: 'Watercolor Fantasy Heroine At Cafe',
    category: 'Open-Ended Creative',
    prompt:
      'A soft watercolor shoujo manga-style illustration of a female fantasy adventurer dining alone in a cozy rustic Italian restaurant. She is shown from the waist up at a wooden table, centered in the frame, with long flowing golden blonde hair, delicate features, and a dreamy romantic expression, resting her cheek against one gloved hand while holding a fork in the other. She wears blue fantasy clothing with brown leather armor on the shoulders and chest, fitted long sleeves, and a leather utility belt. On the table: a plate of steaming pasta with basil leaves and a glass of red wine. The background is a warm interior with terracotta walls, hanging dried herbs, a window showing a sunset-lit medieval town. Soft watercolor washes with visible paper texture, warm golden-hour palette. Aspect ratio 3:4 vertical.',
    why_it_works:
      'The genre mashup (fantasy adventurer in mundane setting) creates narrative charm. Watercolor medium instruction with visible paper texture prevents digital-clean rendering. Specific food items (pasta with basil, red wine) anchor the Italian setting without relying on cliches.',
    source: 'curated',
    source_creator: 'Taro',
    source_url: 'https://x.com/supedora5963/status/2049868720970088476',
    tags: ['watercolor', 'fantasy', 'anime', 'illustration'],
  },
  {
    id: 'curated-retro-japanese-diorama',
    title: 'Retro Japanese Canal Diorama',
    category: 'Open-Ended Creative',
    prompt:
      'A highly detailed cinematic isometric street-scene illustration of a dense retro Japanese canal-side neighborhood at blue hour, rendered like an ultra-real handcrafted miniature diorama with realistic textures and tiny lived-in details. The composition shows a tightly packed cluster of about 18 small multi-story buildings stacked irregularly along a curved waterfront embankment, viewed from a slightly elevated angle. In the center, a teal-blue house with a dark tiled roof acts as the visual anchor. Buildings include: a tiny ramen shop with a glowing red lantern and steam rising from the entrance, a laundromat with visible washing machines through frosted glass, a second-floor balcony cluttered with potted plants and a drying rack, a narrow bar with a neon sign. The canal reflects the warm lights. Miniature power lines, bicycles, and vending machines line the cramped alleys. Rich warm-to-cool color gradient from lamplight interiors to blue-hour sky.',
    why_it_works:
      'The "miniature diorama" framing triggers specific tilt-shift-like rendering with exaggerated depth and texture. Naming exactly 18 buildings with specific details (ramen shop, laundromat, bar) prevents generic block repetition. The blue-hour timing creates the warm-interior vs. cool-exterior contrast that makes diorama scenes glow.',
    source: 'curated',
    source_creator: 'SEIIIRU',
    source_url: 'https://x.com/seiiiiiiiiiiru/status/2050123082069930009',
    tags: ['diorama', 'japanese', 'isometric', 'retro', 'miniature'],
  },
  {
    id: 'curated-papercraft-scene',
    title: 'Papercraft Layered Diorama',
    category: 'Open-Ended Creative',
    prompt:
      'A papercraft diorama scene of a mountain village at sunset, constructed entirely from cut paper layers. Foreground layer: dark green pine tree silhouettes cut from thick cardstock with visible paper edges. Middle layer: small wooden cabins and a church steeple cut from textured kraft paper, windows glowing warm yellow (backlit translucent paper). Background layers: 3-4 mountain ridges in progressively lighter shades of blue-gray, each layer visibly separated by shadow gaps. Sky layer: gradient from warm peach to deep purple, with a paper-cut sun and small cloud shapes. All layers showing physical paper characteristics: fiber texture, slight curl at edges, cut marks, shadow depth between layers. Shot straight-on as a shadowbox with soft lighting from behind. Real craft materials, NOT digital illustration. Aspect ratio 16:9 landscape.',
    why_it_works:
      'The layered shadowbox structure with shadow gaps between layers is a specific papercraft technique the model renders well. Physical material cues (fiber texture, slight curl, cut marks) prevent clean digital illustration. Backlit translucent paper for windows adds a craft-specific lighting effect.',
    source: 'curated',
    tags: ['papercraft', 'diorama', 'craft', 'layered'],
  },
  {
    id: 'curated-glitch-art-portrait',
    title: 'Glitch Art Digital Portrait',
    category: 'Open-Ended Creative',
    prompt:
      'A glitch art portrait where a human face is fragmenting into digital noise. The face is recognizable in the center — calm expression, eyes looking directly at camera — but horizontal bands of pixel displacement slice across the image at irregular intervals. RGB channel separation visible at the edges of displaced sections (red shifts left, blue shifts right). Vertical data-corruption bars of static noise overwrite portions of the image. Some sections repeat/echo downward like a broken screen buffer. The skin tones degrade into pixelated blocks at the periphery. Background: pure black with scattered white noise dots. One section of the face rendered in wireframe mesh. Overall: the image looks like a photograph being consumed by its own file corruption. NOT a filter on a photo — this should look like a deliberate art piece. Aspect ratio 3:4 vertical.',
    why_it_works:
      'Naming specific glitch artifacts (RGB channel separation, pixel displacement, buffer echo) gives the model concrete visual targets. The calm face provides contrast with the chaos around it. Distinguishing "deliberate art piece" from "filter on a photo" elevates the aesthetic intent.',
    source: 'curated',
    tags: ['glitch', 'digital', 'portrait', 'experimental'],
  },
  {
    id: 'curated-art-deco-poster',
    title: 'Art Deco Travel Poster',
    category: 'Open-Ended Creative',
    prompt:
      'Art Deco travel poster for a luxury ocean liner. Flat geometric shapes and bold lines, exactly 4 colors: navy blue, metallic gold, cream, and black. The ship rendered as simplified angular geometric forms — long horizontal hull, three streamlined funnels with parallel speed lines trailing behind. Dramatic perspective from slightly below, making the ship look monumental. Sun rendered as concentric semicircle bands behind the ship in gold gradients. Ocean as stylized parallel wave lines in navy and cream. Bottom text panel: "TRANSATLANTIC" in condensed geometric Art Deco typeface, "NEW YORK — SOUTHAMPTON" below in smaller tracked caps. Grain texture overlay for vintage print feel. NOT photorealistic, NOT illustrated — pure geometric Art Deco graphic design. Aspect ratio 2:3 vertical.',
    why_it_works:
      'Locking to exactly 4 colors enforces the Art Deco limited-palette discipline. Geometric shape language (angular forms, concentric semicircles, parallel lines) is the defining vocabulary of the style. The dramatic below-angle perspective is a signature Art Deco composition technique.',
    source: 'curated',
    tags: ['art-deco', 'poster', 'travel', 'geometric'],
  },
  {
    id: 'curated-risograph-print',
    title: 'Risograph Print Botanical',
    category: 'Open-Ended Creative',
    prompt:
      'Risograph print of a botanical study. Exactly 3 ink layers: fluorescent pink, teal, and bright yellow, with visible halftone dot patterns where inks overlap to create secondary colors. Subject: a single wild poppy flower with stem and leaves, filling most of the frame. The flower head printed in pink ink with yellow center. Stem and leaves in teal with visible halftone gradients. Where pink and teal overlap: rich dark plum tones. Where yellow and teal overlap: olive green. Slight misregistration between color layers — the teal layer shifts 2-3mm to the right, creating a deliberate offset effect. Paper: off-white with visible recycled-paper fiber texture. Edges of the print area show uneven ink coverage, heavier at center, fading at margins. No digital effects — this should look like an actual 3-color risograph print pulled from a drum printer. Aspect ratio 4:5 vertical.',
    why_it_works:
      'Naming exactly 3 ink colors with specific overlap combinations (pink+teal=plum, yellow+teal=olive) gives the model precise color-mixing instructions. The deliberate misregistration (2-3mm shift) is the signature risograph aesthetic. Halftone dot patterns and uneven coverage trigger print-process authenticity.',
    source: 'curated',
    tags: ['risograph', 'print', 'botanical', 'halftone'],
  },
  {
    id: 'curated-woodcut-landscape',
    title: 'Japanese Woodcut Landscape',
    category: 'Open-Ended Creative',
    prompt:
      'Traditional Japanese woodblock print (ukiyo-e style) of a mountain landscape. Mount Fuji in the background with snow cap, rendered in flat graduated indigo bands. Middle ground: a winding river through terraced rice paddies in spring green, a small red torii gate on the riverbank. Foreground: a gnarled pine tree branch extending from the left edge, framing the scene (the classic compositional device). Cherry blossom petals scattered across the composition. Water rendered with the characteristic ukiyo-e parallel curved lines. Sky: flat gradient wash from pale peach at horizon to deep indigo at top. Visible wood-grain texture throughout from the printing block. Traditional Japanese seal stamp in red in the bottom corner. Color palette limited to indigo, green, peach, red, cream, and black. Aspect ratio 3:2 landscape.',
    why_it_works:
      'Naming the specific compositional device (pine branch framing from left edge) triggers the classic ukiyo-e format. Visible wood-grain texture is the defining physical artifact of woodblock printing. Limited palette matches historical printing constraints.',
    source: 'curated',
    tags: ['woodcut', 'ukiyo-e', 'japanese', 'landscape', 'traditional'],
  },
  {
    id: 'curated-retro-scifi-pulp-cover',
    title: 'Retro Sci-Fi Pulp Magazine Cover',
    category: 'Open-Ended Creative',
    prompt:
      'A 1950s pulp science fiction magazine cover. Bold title banner at top: "ASTOUNDING FUTURES" in chrome-metallic 3D block letters with speed lines. Main illustration: a ray-gun-wielding astronaut in a bubble helmet and silver space suit standing on an alien planet surface, defending against a towering green tentacled creature. The planet has two moons in a lavender sky. A sleek Art Deco rocket ship in the background. Color palette: vibrant but slightly faded — chrome silver, emerald green, deep purple, cadmium red, warm cream. Small text boxes: "THE VOID BEYOND" by R.J. Sterling, "PLUS: ROBOTS OF MERCURY." Price badge: "25 CENTS." Visible print halftone dots and slight paper yellowing. Newsstand pulp aesthetic, NOT modern digital art. Aspect ratio 2:3 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Naming the specific era (1950s pulp) and magazine format triggers strong visual priors. Period details (25 cents price, halftone dots, paper yellowing) age the image authentically. The classic astronaut-vs-alien composition is the defining pulp cover trope.',
    source: 'curated',
    tags: ['retro', 'sci-fi', 'pulp', 'magazine', 'vintage'],
  },
  {
    id: 'curated-impasto-paris-boulevard',
    title: 'Impasto Spring Paris Boulevard',
    category: 'Open-Ended Creative',
    prompt:
      'A joyful springtime Paris street scene in a richly textured impasto oil painting style, viewed at street level along a sunlit boulevard lined with blooming cherry blossom trees on the left and elegant cream-colored Haussmann buildings on the right. The sky is a vivid saturated blue with large soft white clouds, and pink petals drift through the air and scatter across the pavement. Include a black iron riverside railing and a tall vintage streetlamp on the left, bustling outdoor cafe terraces on the right with red awnings and colorful chairs. Cobblestone pavement reflecting warm afternoon light. Thick paint texture throughout with visible palette knife marks, paint ridges catching light, and bold confident brushstrokes. Colors: sky blue, cherry blossom pink, warm cream stone, cobalt shadows, pops of red and yellow. NOT photorealistic — thick impasto oil painting with sculptural paint surface. Aspect ratio 3:4 vertical.',
    why_it_works:
      'Naming the specific technique (impasto with palette knife marks and paint ridges) triggers physical paint-surface rendering rather than flat digital illustration. Specific Paris details (Haussmann buildings, black iron railings, red cafe awnings) anchor the location without relying on cliches.',
    source: 'curated',
    source_creator: 'Viki',
    source_url: 'https://x.com/churvikv/status/2049862406260523368',
    tags: ['impasto', 'oil-painting', 'paris', 'spring'],
  },
  {
    id: 'curated-chibi-anime-scene',
    title: 'Chibi Anime Indoor Scene',
    category: 'Open-Ended Creative',
    prompt:
      'A cute chibi anime illustration of 3 small children playing indoors on large exercise balls in a cozy living room on a rainy day. Center the composition on 1 child in the foreground hugging a blue yoga ball, with messy medium-length black hair, large purple eyes, a slightly pouty sleepy expression, a black t-shirt, olive cargo pants, and bare feet. Place 1 child on the left sitting on a pink exercise ball with short black hair, cheerful grin, yellow hoodie and blue shorts. Place 1 child on the right bouncing on a green exercise ball mid-air, arms wide with delight. Rainy window background with gray sky and water droplets. Warm indoor lighting, scattered toys and cushions. Clean background, soft pastel shadows. Japanese children\'s illustration style with rounded proportions and oversized heads. Aspect ratio 4:3 landscape.',
    why_it_works:
      'Individual character descriptions (specific hair, eyes, clothing, expression per child) prevent the model from generating identical clones. The rainy-window background creates cozy atmosphere through environmental storytelling. Chibi proportions (oversized heads) are explicitly specified rather than left to interpretation.',
    source: 'curated',
    source_creator: 'Kazuch2ND',
    source_url: 'https://x.com/Kazuch75240438/status/2050123062096588884',
    tags: ['anime', 'chibi', 'illustration', 'children'],
  },
  {
    id: 'curated-linocut-animal-portrait',
    title: 'Linocut Animal Portrait',
    category: 'Open-Ended Creative',
    prompt:
      'A linocut print of a barn owl portrait. Exactly 2 colors: black ink on cream paper. The owl facing directly at the viewer with characteristic heart-shaped facial disc rendered in bold carved lines. Feather texture created through parallel gouged lines of varying width and spacing — tighter lines for dark areas, wider spacing for light areas. Eyes: two intense dark circles with small bright catchlight spots (unprinted paper showing through). Visible lino-cutting artifacts: slight unevenness in ink coverage, occasional skip marks where the roller missed, crisp carved edges on major contours, softer edges on fine detail lines. Background: simple concentric arc lines suggesting a night sky or moonlight halo. Signed and numbered in pencil below the print ("3/25"). Visible paper deckle edge. NOT a photograph, NOT digital illustration — authentic relief print aesthetic. Aspect ratio 4:5 vertical.',
    why_it_works:
      'Locking to exactly 2 colors (black ink on cream) enforces the linocut constraint. Named carving techniques (parallel gouged lines, varying width) trigger physical print-process rendering. The edition number ("3/25") in pencil adds fine-art print authenticity.',
    source: 'curated',
    tags: ['linocut', 'print', 'animal', 'owl', 'traditional'],
  },

  // ============================================================
  // NEW ADDITIONS — Cinematic
  // ============================================================
  {
    id: 'curated-astronaut-mars-landscape',
    title: 'Astronaut On Mars-Like Planet',
    category: 'Cinematic',
    prompt:
      'A cinematic wide shot of a lone astronaut standing on a rocky ledge facing away from the camera, looking out across an immense red desert plain on a Mars-like planet. The astronaut is centered in the lower middle of the frame, wearing a realistic white EVA spacesuit with subtle gray panels, a life-support backpack, and heavy boots. The landscape is vast and barren, covered in rust-red dust, scattered with dark volcanic rocks and distant mesa formations. The horizon is low and wide, emphasizing the alien emptiness. A pale pinkish sky with wispy high-altitude clouds and a small cold sun near the horizon. Foreground rocks in sharp focus with fine dust details. The astronaut\'s visor reflects a faint glint of the landscape. Shot on anamorphic lens with subtle horizontal lens flare. Color palette: rust red, pale pink, white, charcoal. Aspect ratio 2.39:1 cinemascope.',
    why_it_works:
      'The figure-facing-away composition creates narrative mystery and emphasizes landscape scale. Anamorphic lens specification triggers the characteristic horizontal lens flare and wide format. Specific suit details (gray panels, life-support backpack) prevent generic spacesuit rendering.',
    source: 'curated',
    source_creator: 'TikFilmer',
    source_url: 'https://x.com/TikFilmer/status/2048788047521829143',
    tags: ['cinematic', 'sci-fi', 'astronaut', 'landscape'],
  },
  {
    id: 'curated-underwater-coral-reef',
    title: 'Underwater Coral Reef Documentary',
    category: 'Cinematic',
    prompt:
      'Underwater documentary photography of a vibrant coral reef ecosystem. Wide-angle shot at approximately 10 meters depth. Foreground: brain coral and staghorn coral in sharp focus with a clownfish pair in an anemone. Middle ground: a sea turtle gliding through a school of yellow tangs, sunbeams piercing through the water creating volumetric light shafts. Background: the reef wall dropping off into deep blue, with a distant diver silhouette for scale. Water color: clear tropical blue-green with visible particulate (not artificially clean). Natural underwater color absorption — warm reds in the foreground fading to blue-green tones at distance. Shot on wide-angle dome port, strobes matching natural light temperature. National Geographic documentary quality. Aspect ratio 3:2 landscape.',
    why_it_works:
      'Specifying depth (10m) and natural color absorption (reds fading to blue) demonstrates real underwater photography physics. Named coral species and fish prevent generic "colorful reef" output. The distant diver silhouette provides essential scale reference.',
    source: 'curated',
    tags: ['underwater', 'documentary', 'coral', 'nature'],
  },
  {
    id: 'curated-architectural-brutalism',
    title: 'Brutalist Architecture Dramatic Light',
    category: 'Cinematic',
    prompt:
      'Architectural photography of a brutalist concrete building shot from below at a dramatic converging-verticals angle. Raw board-formed concrete surfaces with visible wood-grain texture imprints, geometric shadow patterns from deep-set rectangular window recesses. Late afternoon sunlight hitting the facade at a sharp angle, creating long diagonal shadows across the concrete planes. One section of the building in warm golden light, the rest in cool blue shadow. A single person walking at the base for scale, tiny against the monumental facade. Clear sky with one contrail. Shot on 24mm tilt-shift lens to partially correct the converging verticals while maintaining drama. Color palette: warm concrete gray, cold blue shadows, golden highlights. Aspect ratio 4:5 vertical.',
    why_it_works:
      'Board-formed concrete with wood-grain texture is the defining brutalist surface treatment. The tilt-shift lens mention (partially correcting verticals) triggers architectural photography conventions. Warm/cool light split across the facade creates the dramatic contrast these buildings demand.',
    source: 'curated',
    tags: ['architecture', 'brutalist', 'concrete', 'dramatic'],
  },
  {
    id: 'curated-wildlife-predator-chase',
    title: 'Wildlife Predator Chase Moment',
    category: 'Cinematic',
    prompt:
      'Wildlife photography of a cheetah in full sprint pursuing a gazelle across the African savanna. Peak action moment — the cheetah is airborne mid-stride, all four legs off the ground, body fully extended. The gazelle is making a sharp evasive turn, kicking up dust. Shallow depth of field: both animals in sharp focus, background dissolving into warm golden-hour savanna bokeh. Panning motion blur on the grass beneath the animals suggesting extreme speed. Dust cloud trailing behind both animals, catching golden backlight. Shot on 600mm telephoto, f/4, 1/2000s freeze. Warm late-afternoon Kenyan savanna light — golden grass, acacia tree silhouettes in distant background. National Geographic cover quality. Aspect ratio 3:2 landscape.',
    why_it_works:
      'The "all four legs off the ground" specification targets the precise peak-action moment. Panning motion blur technique (sharp subject, blurred background) is the signature wildlife photography method. Extreme telephoto (600mm) triggers the compression and shallow depth characteristic of professional wildlife shots.',
    source: 'curated',
    tags: ['wildlife', 'photography', 'action', 'safari'],
  },
  {
    id: 'curated-astrophotography-milky-way',
    title: 'Astrophotography Milky Way Composite',
    category: 'Cinematic',
    prompt:
      'Astrophotography landscape composite. The Milky Way galaxy core arching across the sky from lower-left to upper-right, rendered with visible nebula colors (warm magenta and amber in the galactic center, cool blue in the surrounding star field). Foreground: a lone ancient Joshua tree in silhouette on a desert ridge, illuminated faintly by ambient starlight showing subtle texture. Ground: desert terrain with scattered rocks and sparse vegetation, faintly visible. Horizon: distant mountain range as a dark jagged line. No light pollution — pure dark sky with thousands of individually resolved stars of varying brightness. A single bright meteor streak in the upper portion. Shot on full-frame mirrorless with 14mm f/1.8, 20-second exposure for stars, separate longer exposure blended for foreground detail. Rich but not oversaturated — natural astronomical colors. Aspect ratio 3:2 landscape.',
    why_it_works:
      'Naming specific nebula colors (magenta, amber) in the galactic center demonstrates real Milky Way appearance. The exposure specification (14mm, f/1.8, 20s) matches real astrophotography settings. The Joshua tree silhouette provides a recognizable anchor against the cosmic scale.',
    source: 'curated',
    tags: ['astrophotography', 'milky-way', 'landscape', 'night'],
  },
  {
    id: 'curated-street-documentary-rain',
    title: 'Street Documentary In Rain',
    category: 'Cinematic',
    prompt:
      'Street documentary photography of a rainy evening in Tokyo. A lone salaryman walking under a transparent umbrella on a narrow alley, viewed from behind. Neon signs in Japanese kanji reflecting in wet asphalt puddles creating mirror pools of color. Steam rising from a ramen stall on the left, warm yellow light spilling out. The salaryman is slightly hunched, briefcase in one hand, umbrella in the other. Shot on 35mm film, Fuji Pro 400H color profile — muted greens, lifted shadows, slight grain. Shallow depth of field with foreground rain droplets caught by a nearby streetlight, soft focus. The mood is contemplative urban solitude. Aspect ratio 2:3 vertical.',
    why_it_works:
      'The figure-from-behind framing creates empathetic narrative distance. Named film stock (Fuji Pro 400H) triggers a specific color science — muted greens and lifted shadows. Rain reflections doubling the neon creates the visual density Tokyo street photography is known for.',
    source: 'curated',
    tags: ['street', 'documentary', 'rain', 'tokyo', 'film'],
  },
  {
    id: 'curated-dramatic-soccer-action',
    title: 'Dramatic Soccer Action Shot',
    category: 'Cinematic',
    prompt:
      'A dramatic cinematic action shot of a young boy with messy dark hair powerfully kicking a soccer ball on a green grass stadium field at golden hour sunset. The soccer ball is massively oversized and zoomed-in in the foreground, dominating the lower part of the frame, extremely detailed texture, black and white panels, sharp focus. The boy is captured mid-kick with his right leg extended, dirt and grass particles flying dramatically. He wears a crisp white jersey with number 10 on the back. Background: blurred stadium stands with warm golden sunset light streaming in, creating dramatic backlit rim light on the player. Shallow depth of field. Low camera angle shooting upward. Motion blur on the kicking leg for speed effect. Sports photography meets cinematic lighting. Aspect ratio 16:9 landscape.',
    why_it_works:
      'The oversized ball in the foreground creates forced perspective drama. Low upward camera angle makes the subject heroic. Golden-hour backlighting with rim light is the premium sports photography technique. Motion blur on the kicking leg conveys power while the ball stays sharp.',
    source: 'curated',
    source_creator: 'Shami',
    source_url: 'https://x.com/ShamiWeb3/status/2048287581868302683',
    tags: ['cinematic', 'sports', 'soccer', 'action'],
  },

  // ============================================================
  // NEW ADDITIONS — Infographics
  // ============================================================
  {
    id: 'curated-locomotive-espresso-design',
    title: 'Locomotive-Inspired Product Blueprint',
    category: 'Infographics',
    prompt:
      'Industrial retrospection design sheet: 1920s steam locomotive engine schematics shaping a high-end commercial espresso machine. Split-screen layout: technical blueprints on top in sepia-toned engineering drawing style showing cross-sections, pressure diagrams, and mechanical components. Below: glossy product render of the final espresso machine incorporating locomotive design elements — cylindrical chrome boilers, tactile brass lever mechanisms, polished nickel fittings, and rich walnut wood detailing. Warm glowing Edison bulb lighting on the product render. Retro-futuristic cafe aesthetic. Annotation lines connecting blueprint details to the final product features. Aspect ratio 4:5 vertical.',
    why_it_works:
      'The split-screen format (blueprint above, render below) shows the design evolution concept clearly. Specific material callouts (chrome, brass, nickel, walnut) trigger accurate texture rendering. The locomotive-to-espresso-machine concept is inherently visual and narrative.',
    source: 'curated',
    source_creator: 'Gadgetify',
    source_url: 'https://x.com/Gdgtify/status/2049964761715278203',
    tags: ['infographic', 'product-design', 'blueprint', 'retro'],
  },
  {
    id: 'curated-periodic-table-style',
    title: 'Periodic Table Style Classification',
    category: 'Infographics',
    prompt:
      'A "Periodic Table of Design Principles" infographic. Grid layout mimicking the real periodic table structure with exactly 18 element cards arranged in characteristic periodic-table shape (not a simple rectangle). Each card: colored background based on category, a 1-2 letter abbreviation in large bold font (e.g., "Ct" for Contrast, "Hy" for Hierarchy, "Bl" for Balance), full principle name in small text below, and a tiny icon. Cards grouped by color into 4 categories: Layout (blue), Typography (orange), Color (green), Interaction (purple). Title: "The Periodic Table of Design" in bold at top. Legend showing the 4 category colors at bottom. Clean white background, modern flat design. Aspect ratio 16:9 landscape. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The periodic table format is instantly recognizable and implies systematic classification. Category-based coloring mirrors the real periodic table\'s color grouping. The 2-letter abbreviation format is both a design nod and a readability solution for small cards.',
    source: 'curated',
    tags: ['infographic', 'periodic-table', 'design', 'classification'],
  },
  {
    id: 'curated-org-chart-modern',
    title: 'Modern Organizational Chart',
    category: 'Infographics',
    prompt:
      'A modern organizational chart for a tech startup. Top: CEO node as a large circle with photo placeholder, name, and title. Below: exactly 3 C-level nodes (CTO, CPO, CMO) connected by clean lines. Under CTO: 2 team nodes (Engineering, Infrastructure). Under CPO: 2 team nodes (Design, Product). Under CMO: 2 team nodes (Growth, Content). Each team node shows team size in a small badge (e.g., "12 people"). Nodes are rounded rectangles with subtle gradient fills — blue for tech, purple for product, coral for marketing. Connection lines: subtle gray with small dots at junctions. Background: clean white with a very faint dot grid. Modern, professional, startup-aesthetic. Aspect ratio 16:9 landscape. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Specific node counts at each level (1 CEO, 3 C-levels, 6 teams) prevent sprawling or incomplete charts. Color-coding by department (blue tech, purple product, coral marketing) adds information hierarchy. Team-size badges add practical data.',
    source: 'curated',
    tags: ['infographic', 'org-chart', 'business', 'startup'],
  },
  {
    id: 'curated-process-cycle-diagram',
    title: 'Circular Process Cycle Diagram',
    category: 'Infographics',
    prompt:
      'A circular process diagram showing the Design Thinking methodology. Exactly 5 stages arranged in a circle connected by curved directional arrows: "Empathize" (pink), "Define" (orange), "Ideate" (yellow), "Prototype" (green), "Test" (blue). Each stage: a colored circle with a simple line icon inside and the stage name below. Between consecutive stages: a curved arrow showing clockwise flow. Center of the circle: "Design Thinking" in bold with a lightbulb icon. A dotted arrow from "Test" back to "Empathize" showing the iterative nature (labeled "Iterate"). Each stage has 2-3 keyword bullets radiating outward. Clean white background, flat modern design, no shadows. Aspect ratio 1:1 square. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The circular layout with exactly 5 stages matches the canonical Design Thinking diagram. The dotted "Iterate" arrow from Test back to Empathize captures the methodology\'s key concept. Keyword bullets radiating outward add information depth without cluttering the core diagram.',
    source: 'curated',
    tags: ['infographic', 'process', 'design-thinking', 'cycle'],
  },
  {
    id: 'curated-ecommerce-tech-infographic',
    title: 'E-commerce Tech Product Infographic',
    category: 'Infographics',
    prompt:
      'High-impact e-commerce infographic for a laptop. Aspect ratio 1:1 square. Foreground: an extreme close-up of a hand holding an open ultra-slim silver laptop toward the camera, screen angled showing a vibrant gradient wallpaper. Central subject: a smiling young woman with wavy auburn hair wearing a cream knit sweater, seated at a minimalist wooden desk in a bright Scandinavian-style room. She is looking at the laptop with natural joy. Around the laptop: exactly 6 floating callout bubbles arranged in a circular pattern, each containing a product feature with an icon and short text (e.g., "M3 Chip — 18hr Battery," "15.3\\" Liquid Retina," "8GB Unified Memory"). Clean sans-serif typography. Subtle depth-of-field blur on the background. Warm natural lighting from a large window. Editorial product marketing style.',
    why_it_works:
      'The floating callout bubbles around the product are the standard e-commerce infographic pattern. Placing the product in a lifestyle context (person at desk) adds relatability. Exactly 6 callouts prevent overcrowding while covering key specs.',
    source: 'curated',
    source_creator: 'Johnn',
    source_url: 'https://x.com/john_my07/status/2049374896053211469',
    tags: ['infographic', 'ecommerce', 'tech', 'product'],
  },
  {
    id: 'curated-comparison-infographic-horizontal',
    title: 'Side-By-Side Comparison Infographic',
    category: 'Infographics',
    prompt:
      'A "Then vs Now" side-by-side comparison infographic about web development. Split vertically down the center with a decorative divider. Left side labeled "2010" in retro styling, right side labeled "2026" in modern styling. Exactly 5 comparison rows: 1. Deployment (FTP upload vs CI/CD pipeline), 2. Frontend (jQuery spaghetti vs React components), 3. Hosting ($200/mo dedicated server vs $0 serverless), 4. Design (Photoshop mockup vs Figma collaboration), 5. Testing (manual clicking vs automated CI). Each row has a small illustration on both sides showing the contrast. Left side: slightly desaturated, skeuomorphic icons. Right side: vibrant, flat modern icons. Header at top: "Web Development: Then vs Now" in bold. Clean white background with subtle grid lines. Aspect ratio 4:5 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The split-screen format with visual style differences (skeuomorphic left vs flat right) reinforces the temporal contrast. Exactly 5 comparison rows prevent overcrowding. Specific technology names (jQuery, React, Figma) anchor each comparison in reality.',
    source: 'curated',
    tags: ['infographic', 'comparison', 'web-dev', 'timeline'],
  },

  // ============================================================
  // NEW ADDITIONS — Posters
  // ============================================================
  {
    id: 'curated-football-signing-poster',
    title: 'Football Transfer Announcement Poster',
    category: 'Posters',
    prompt:
      'A dramatic vertical football transfer announcement poster in a high-end sports graphic design style. Centered: a faceless male footballer from the chest up, athletic build, standing straight and facing forward. He wears a half-red, half-green soccer jersey with a gold manufacturer logo. Intense deep crimson-to-black gradient background with particle effects and geometric light rays. Top: club crest emblem. Below the player: "OFFICIAL ANNOUNCEMENT" in bold condensed metallic chrome font. "WELCOME TO THE FAMILY" in smaller tracked caps below. Bottom section: player stats in a sleek horizontal bar (Age, Position, Nationality, Previous Club) with thin gold divider lines. Subtle smoke and light-leak effects. Premium sports graphics aesthetic — bold, dramatic, broadcast-quality. Aspect ratio 9:16 vertical.',
    why_it_works:
      'The faceless/obscured player allows this to be a reusable template for any announcement. Metallic chrome typography on dark gradient is the signature style of real football transfer graphics. Stats bar at the bottom mirrors actual club social media announcements.',
    source: 'curated',
    source_creator: 'Franck Ghislain ONGUENE',
    source_url: 'https://x.com/fgo_pro/status/2049895166157127763',
    tags: ['poster', 'sports', 'football', 'announcement'],
  },
  {
    id: 'curated-movie-poster-noir',
    title: 'Film Noir Movie Poster',
    category: 'Posters',
    prompt:
      'A film noir movie poster. High-contrast black and white with exactly one accent color: deep crimson red. Composition: a trench-coated detective silhouette in the lower third, standing under a streetlamp casting a long diagonal shadow. Above: a femme fatale face in dramatic chiaroscuro lighting — half the face illuminated, half in shadow, red lipstick the only color. Venetian blind shadow stripes across the upper portion. Title: "THE LAST CONFESSION" in condensed Art Deco typeface, chrome/silver metallic finish. Tagline below in small italic: "Every shadow hides a secret." Credits block at bottom in standard movie-poster format. Rain streaks catching the streetlamp light. Heavy film grain throughout. Aspect ratio 2:3 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Single accent color (crimson) on black-and-white is a proven noir poster technique that GPT Image 2 handles precisely. Venetian blind shadows are the iconic noir visual motif. The Art Deco metallic typeface matches the genre\'s golden-age aesthetic.',
    source: 'curated',
    tags: ['poster', 'movie', 'noir', 'film'],
  },
  {
    id: 'curated-travel-poster-retro',
    title: 'Retro Travel Poster',
    category: 'Posters',
    prompt:
      'Vintage mid-century travel poster for Santorini, Greece. Flat illustration style with limited color palette: cobalt blue, white, warm terracotta, pale sky blue, and cream. Composition: white-washed buildings with blue domes cascading down a hillside in simplified geometric shapes. A bougainvillea cascade in terracotta-pink. Deep blue Aegean sea with a simple sailboat. Warm golden sun as a geometric circle. Text: "SANTORINI" in large condensed sans-serif at bottom, "GREECE" in smaller tracked caps below, "BY AIR — FLY OLYMPIC" in small vintage airline text at bottom. Subtle canvas texture and slight color misregistration as if screen-printed. Borders slightly worn. NOT photorealistic — flat, graphic, poster-art style. Aspect ratio 2:3 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'Limited palette (5 colors) enforces the mid-century poster discipline. Simplified geometric shapes for architecture match the vintage illustration style. Fake airline text ("FLY OLYMPIC") adds period-authentic detail. Canvas texture and color misregistration simulate physical printing.',
    source: 'curated',
    tags: ['poster', 'travel', 'retro', 'vintage', 'greece'],
  },
  {
    id: 'curated-book-cover-design',
    title: 'Literary Fiction Book Cover',
    category: 'Posters',
    prompt:
      'A literary fiction book cover design. Minimal, striking, bookshop-worthy. Center: a single visual metaphor — a lighthouse with its beam replaced by an unfurling ribbon of handwritten text, dissolving into scattered letters at the edges. Color palette: deep midnight navy background, warm amber for the lighthouse glow and text ribbon, white for the lighthouse structure. Author name at top in small elegant serif caps: "ELENA WATERS." Title across the middle in large display serif: "THE DISTANCE BETWEEN TIDES" (each word on its own line for vertical stacking). Small publisher logo at bottom center. No photographs, no busy illustrations — conceptual and restrained. The cover should look like it belongs on a Waterstones recommended table. Aspect ratio 2:3 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The visual metaphor (lighthouse beam as text ribbon) is specific enough to generate but conceptual enough to feel literary. Vertical word stacking is a proven book-cover typography technique. The "Waterstones recommended table" reference anchors the quality target in a specific real-world context.',
    source: 'curated',
    tags: ['poster', 'book-cover', 'literary', 'minimal'],
  },
  {
    id: 'curated-sports-event-poster',
    title: 'Championship Sports Event Poster',
    category: 'Posters',
    prompt:
      'A championship boxing event poster. Dark black background with dramatic red and gold accents. Two fighters facing each other in profile view from the shoulders up, separated by a large "VS" in metallic gold 3D text at center. Left fighter lit in red, right fighter lit in blue. Their profiles are backlit with dramatic rim lighting and slight smoke/haze. Top: event title "CHAMPIONS COLLIDE" in bold condensed sans-serif with metallic texture. Below VS: weight class, round count, and date "DECEMBER 14, 2026" in gold. Bottom: venue name, broadcast network logos, undercard fight listings in smaller text. Subtle geometric pattern overlay in the background. Premium pay-per-view broadcast graphics aesthetic. Aspect ratio 2:3 vertical. "Verbatim text — no extra characters, no substitutions, no duplicate text, no text artifacts."',
    why_it_works:
      'The face-off composition (two profiles with VS center) is the universal combat-sports poster format. Opposing colored lighting (red vs blue) creates visual rivalry. Metallic 3D text and smoke effects match real PPV broadcast graphics quality.',
    source: 'curated',
    tags: ['poster', 'sports', 'boxing', 'event'],
  },
];
