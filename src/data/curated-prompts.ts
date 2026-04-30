/**
 * 70 verified GPT Image 2 prompts sourced from cyberbara/awesome-gpt-image,
 * which curates from X creators. All text verbatim. All categories mapped to
 * Pixelary's existing 10 (`EXAMPLE_CATEGORIES` minus "All"):
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
    category: 'Cinematic',
    prompt: '日本のソシャゲのガチャ画面を生成して、',
    why_it_works:
      'Authentic mobile-game gacha pull-screen UI with stars, sparkle effects, character reveal. Works in Japanese for stronger Japanese-aesthetic priors.',
    source: 'curated',
    tags: ['game', 'gacha', 'japanese'],
  },
  {
    id: 'curated-100-pixel-grid',
    title: '100 Pixel Art Items Grid',
    category: 'Cinematic',
    prompt:
      'Create a single image containing a grid of 100 completely unique pixel art items, each with a meaningful label',
    why_it_works:
      '10×10 grid of unique pixel-art items with readable labels. Tests text + visual variety simultaneously.',
    source: 'curated',
    tags: ['game', 'pixel', 'grid'],
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
    id: 'curated-dense-chinese-layout',
    title: 'Dense Chinese Layout Stress Test',
    category: 'Posters',
    prompt: 'Generate an image of [scene/content]',
    why_it_works:
      'Tests GPT Image 2\'s ability to render dense Chinese typography in newspaper/magazine layouts. The "Campus Daily" example is the canonical use.',
    source: 'curated',
    tags: ['poster', 'typography', 'chinese'],
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
  {
    id: 'curated-codex-chalkboard',
    title: 'Codex Chalkboard Article Visualization',
    category: 'Visual Summaries',
    prompt: 'A picture says a thousand words. GPT Image 2 creates them.',
    why_it_works:
      'Meta-prompt — generates an editorial visualization of the prompt itself. Conceptual showcase rather than practical tool.',
    source: 'curated',
    tags: ['summary', 'editorial', 'meta'],
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
    id: 'curated-basketball-court-flash',
    title: 'Basketball Court Direct Flash',
    category: 'Interior/Food/Fashion',
    prompt:
      '35mm color film photography with harsh direct on-camera flash, specular highlights on skin and clothing, strong catchlights in eyes, high contrast flash illumination, authentic film grain and color shift, high fashion fresh sporty editorial style, person in white tank top and white high-waisted basketball shorts, white knee-high sports socks, leaning pose against the basketball hoop pole on the outdoor court at dusk, harsh direct on-camera flash creating sharp specular highlights and strong catchlights, background with blurred basketball court and hoop under dusk sky, high contrast film color grading with natural flash look, extremely sharp yet soft skin rendering with authentic 35mm direct flash aesthetic, no plastic skin, no digital over-sharpening, no airbrushing, authentic 35mm direct flash film basketball court look --ar 9:16',
    why_it_works:
      'Direct-flash editorial look. Harsh flash + film grain combo is a specific aesthetic GPT Image 2 nails when given the explicit lighting cues.',
    source: 'curated',
    tags: ['fashion', 'editorial', 'flash'],
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
];
