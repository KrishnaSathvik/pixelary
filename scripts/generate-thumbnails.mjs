/**
 * generate-thumbnails.mjs
 *
 * One-time script to generate thumbnail images for curated prompts using GPT Image 2.
 * Outputs 400px-wide WebP files to scripts/thumbnails/{id}.webp
 *
 * Usage:
 *   node scripts/generate-thumbnails.mjs                   # Generate all missing
 *   node scripts/generate-thumbnails.mjs --dry-run         # Show what would be generated
 *   node scripts/generate-thumbnails.mjs --id curated-xyz  # Generate one specific prompt
 *   node scripts/generate-thumbnails.mjs --upload          # Upload to Supabase Storage after generating
 *
 * Requires: OPENAI_API_KEY, SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY in .env
 */

import { readFileSync, existsSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(__dirname, "thumbnails");

// Load .env manually (no dotenv dependency needed)
const envFile = readFileSync(resolve(ROOT, ".env"), "utf8");
const env = Object.fromEntries(
  envFile
    .split("\n")
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const eq = l.indexOf("=");
      return [l.slice(0, eq), l.slice(eq + 1).replace(/^["']|["']$/g, "")];
    })
);

const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });
const supabase = createClient(env.SUPABASE_URL || env.VITE_SUPABASE_URL, env.SUPABASE_PUBLISHABLE_KEY || env.VITE_SUPABASE_PUBLISHABLE_KEY);

// ─── Placeholder substitutions for the 9 prompts that need them ─────────────
const PLACEHOLDER_FILLS = {
  "curated-quote-card": {
    "[Your quote here]": "The only way to do great work is to love what you do",
    "[Author Name]": "Steve Jobs",
  },
  "curated-meme-template": {
    "[describe the scene or character reaction — e.g., \"golden retriever sitting at a desk wearing reading glasses looking confused at a laptop screen\"]":
      "golden retriever sitting at a desk wearing reading glasses looking confused at a laptop screen",
    "[target emotion — e.g., \"bewildered confusion\"]": "bewildered confusion",
  },
  "curated-twitter-thread-hook": {
    "[Your hook statement here]": "Most people use AI wrong",
  },
  "curated-fitness-infographic": {
    "[topic]": "upper body push day",
  },
  "curated-encyclopedia-card": {
    "[topic]": "Honeybees",
  },
  "curated-character-relationship-poster": {
    "[theme]": "Lord of the Rings",
  },
  "curated-silhouette-narrative-poster": {
    "[theme: xxx]": "theme: deep ocean exploration",
  },
  "curated-where-is-poster": {
    "[Your Name]": "Waldo",
  },
  "curated-low-quality-shot": {
    "[your scene description]":
      "a cat sitting on a kitchen counter staring at a microwave",
  },
  // ─── Batch 2 placeholder fills ──────────────────────────────────────────────
  "curated-prompt-anatomy-generic": {
    "[PROMPT NAME / USE CASE / SYSTEM NAME]": "AI Customer Support Chatbot",
    "[PROMPT NAME / USE CASE]": "AI Customer Support Chatbot",
  },
  "curated-isometric-vehicle-diorama": {
    "DeLorean DMC-12 (Back to the Future)": "DeLorean DMC-12",
    "(road with fire trails)": "(road with fire trails)",
    '"DELOREAN DMC-12"': '"DELOREAN DMC-12"',
  },
  "curated-scientific-creature-infographic": {
    "a Red Dragon": "a Red Dragon",
  },
  "curated-minimalist-sticker-collection": {
    "Japan": "Japan",
    '"JAPAN"': '"JAPAN"',
  },
  "curated-technical-annotation-photo": {
    "the human heart": "the human heart",
    '"HUMAN HEART"': '"HUMAN HEART"',
  },
  "curated-isometric-tech-infographic": {
    "iPhone 16 Pro": "iPhone 16 Pro",
    '"iPHONE 16 PRO"': '"iPHONE 16 PRO"',
  },
  "curated-tv-character-diagram": {
    "Breaking Bad": "Breaking Bad",
  },
  "curated-cutaway-educational": {
    "Submarine": "Submarine",
  },
  "curated-sketchnote-infographic": {
    '"AI STRATEGY 2026"': '"AI STRATEGY 2026"',
  },
  "curated-founder-infographic": {
    "[founder name]": "Jensen Huang",
    "[HEADLINE TEXT]": "THIS MAN BUILT THE AI ERA",
    "[brand color]": "NVIDIA green",
    "[title]": "Founder & CEO",
    "[company]": "NVIDIA",
    "[one-line description]": "Built the backbone of the AI revolution",
    "[famous quote]": "The more you buy, the more you save.",
  },
  // ─── Batch 3 placeholder fills ──────────────────────────────────────────────
  "curated-travel-infographic-guide": {
    "[COUNTRY]": "Japan",
  },
  "curated-isometric-movie-diorama": {
    "[SCENE NAME]": "The Space Station",
    "[MOVIE/SHOW]": "Interstellar",
    "[BACKGROUND COLOR]": "dark charcoal",
    '"MOVIE/SHOW"': '"INTERSTELLAR"',
  },
  "curated-mecha-techwear-poster": {
    "[COLOR]": "neon cyan",
  },
  // ─── Batch 4 placeholder fills ──────────────────────────────────────────────
  "curated-museum-creature-infographic": {
    "[CREATURE]": "Smilodon (Saber-Toothed Tiger)",
  },
  "curated-luxury-brand-identity-board": {
    "[BRAND NAME]": "Lumière",
  },
  "curated-luxury-product-hero-shot": {
    "[BRAND NAME]": "Lumière",
  },
  "curated-fashion-campaign-poster": {
    "[BRAND NAME]": "Lumière",
  },
  "curated-luxury-ecommerce-app": {
    "[BRAND NAME]": "Lumière",
  },
  "curated-luxury-packaging-design": {
    "[BRAND NAME]": "Lumière",
  },
  "curated-luxury-website-hero": {
    "[BRAND NAME]": "Lumière",
  },
  "curated-luxury-ad-editorial": {
    "[BRAND NAME]": "Lumière",
  },
  "curated-billboard-ad-concept": {
    "[BRAND NAME]": "Lumière",
  },
  "curated-social-media-campaign-set": {
    "[BRAND NAME]": "Lumière",
  },
  "curated-cinematic-ensemble-poster": {
    "[MOVIE/SHOW TITLE]": "The Heist",
    "[CITY]": "Paris",
    "[LANDMARK]": "Eiffel Tower",
  },
  // ─── Batch 5 placeholder fills ──────────────────────────────────────────────
  "curated-business-leader-ink-portrait": {
    "[TYPE HERE]": "VISIONARY",
  },
  "curated-life-path-decoder": {
    "[insert date]": "August 26",
  },
  "curated-soul-purpose-discoverer": {
    "[insert date]": "August 26",
  },
  "curated-career-destiny-detector": {
    "[insert date]": "August 26",
  },
  "curated-relationship-destiny-map": {
    "[insert date]": "August 26",
  },
  "curated-wealth-abundance-code": {
    "[insert date]": "August 26",
  },
  "curated-future-timeline-guide": {
    "[insert date]": "August 26",
  },
  "curated-celebrity-real-life": {
    "[celebrity 1]": "three famous comedians",
    "[celebrity 2]": "",
    "[celebrity 3]": "",
  },
  "curated-lol-midlane": {
    "[character A]": "a wizard",
    "[character B]": "a knight",
  },
  "curated-1980s-propaganda": {
    "[person 1]": "three tech leaders",
    "[person 2]": "the middle one",
    "[person 3]": "",
  },
};

// ─── Full prompt overrides (copyright-sensitive or brand-heavy prompts) ──────
const PROMPT_OVERRIDES = {
  "curated-luxury-perfume-ad":
    "Ultra-luxury perfume advertisement, cinematic studio lighting, deep red monochrome aesthetic. A beautiful elegant East Asian woman with smooth glowing skin and soft makeup, loose wavy brown hair, wearing a red silky satin shirt. She is holding a luxury perfume bottle close to her face. Bottle is crystal clear with soft pink liquid, reflective glass, metallic cap. Close-up portrait, chest-up framing. Background: rich deep red silk fabric waves. Dark marble table, red roses, petals scattered, glass candle with warm flame. Style: ultra realistic, 8k, fashion photography, luxury branding, glossy finish, cinematic, shallow depth of field.",
  "curated-zine-food-infographic":
    "A vibrant, colorful 3-page zine-style infographic about fried chicken. Style: mixed media collage combining realistic crispy fried chicken photography, bold graphic elements, halftone textures, retro ads, doodles, stickers, and playful handwritten typography. Red, white, and golden tones. Three vertical panels side-by-side. Left panel: bold title, hero image of golden fried chicken. Center panel: step-by-step recipe visuals with arrows. Right panel: variations and fun facts. Hand-drawn arrows, stars, flames, retro stickers, paper textures, slight grunge. Wide horizontal aspect ratio.",
  "curated-naruto-propaganda-poster":
    "An iconic propaganda-style anime poster. Top section: large silhouette of a ninja character's head with spiky hair, mask-like framing as dominant focal point. Bottom section: full-body ninja in orange outfit in stable stance. Visual style: double exposure, narrative collage, layered visual storytelling. Background: cloud textures, ink wash effects, white negative space. Collage elements: action micro-scenes, symbolic objects. Aesthetic: poetic Eastern tone, ink diffusion edges, pop vibrant striking contrast colors. A4 vertical poster. Strong visual hierarchy, narrative depth through layering.",
  "curated-gameboy-exploded-view":
    "Exploded view of a handheld retro gaming console, with a vintage, sepia-toned filter, components appearing aged and slightly worn, set against a backdrop of old blueprints, nostalgic feel, retro illustration. Show buttons, screen, circuit board, battery compartment, speaker, and case shell separated in 3D space.",
  "curated-brand-identity-system":
    "A complete brand identity system poster for a modern creative agency. Vertical 4:5 layout, multi-column grid. Sections include: brand header with commanding typography, color system with labeled swatches and hex codes, typography hierarchy examples, visual language mood board tiles, brand application mockups (business card, website, packaging, social media), design system components (buttons, cards, inputs), and iconography set. Premium Behance-style presentation, dense but clean layout, professional design portfolio aesthetic.",
  "curated-scientific-research-infographic":
    "A high-end corporate-style scientific infographic poster (portrait, A1). Warm beige background (#F4F1EC). Editorial report style with 2-3 column grid. Header with bold title and 'THE QUESTION / THE ANSWER' top-right. Sections: framework overview, core insight with large dominant stat number, mechanism diagram with connected blocks, horizontal bar charts with soft cyan highlights and direct labeling, supporting insights, footer with citation. Typography: large numbers, uppercase section headers, minimal body text. Colors: beige, soft cyan (#73C8E0), black, beige-gray. Clean, balanced density, corporate research report aesthetic.",
  "curated-isometric-movie-diorama":
    "Present a clear, 45-degree top-down isometric miniature 3D cartoon scene of a space station interior with floating astronauts, with soft refined textures, realistic PBR materials, and gentle lifelike lighting. Create a small raised diorama-style base that includes recognizable space station elements (control panels, windows with stars visible, floating objects), along with tiny stylized astronaut characters (no facial details). Use a clean solid dark charcoal background. At the top-center, display title text in large bold text. Composition: perfectly centered layout, square 1080x1080, ultra-clean, high-clarity diorama aesthetic.",
  "curated-time-magazine-cover":
    "A highly detailed realistic photograph of a TIME magazine cover, red border, white background. Top right corner text reads 'APRIL 29 / MAY 6, 2024'. Large bold text at the top: 'THE MOST INFLUENTIAL COMPANIES' above big red 'TIME' and black '100'. Main subject is a close-up portrait of an elegant young woman with sleek dark brown hair parted in the middle and pulled back into a tight low bun, flawless glowing skin, subtle makeup with glossy nude lips and defined eyebrows. She is looking slightly to the left with a confident expression. A large glossy deep red Anthurium flower is positioned near her neck and shoulder. She is wearing a white feathery fluffy garment. On the left side in bold text: 'HOW SHE BUILT HER EMPIRE'. Below it a vertical list of company names: APPLE, NVIDIA, MICROSOFT, AMAZON, TIKTOK, DISNEY, NETFLIX, UNITEDHEALTH + 90 MORE. Bottom right corner has 'http://time.com'. Professional studio lighting, clean editorial style, high resolution, sharp details, iconic TIME magazine cover composition.",
  "curated-luxury-skincare-ad":
    "Create a high-end luxury skincare advertisement. A young woman with radiant, glassy, and naturally glowing skin with soft highlights is holding a premium vitamin C face serum bottle close to her cheek. Only use the bottle, no box. Background should be elegant silky satin fabric (Dior-style) with smooth folds, in a rich champagne-olive tone, softly lit with golden highlights and gentle shadows to create depth and luxury. Outfit should be a silky satin dress matching the background tones, slightly reflective, premium fabric texture. Lighting: soft diffused front light + subtle golden rim light on hair + gentle glow on skin. DSLR quality, shallow depth of field. Add minimal premium typography on the left side: '10% Vitamin C' (large, elegant serif), 'Face Serum' (smaller), 'Triple Glow +++' (refined thin style). Add 3-4 minimal benefit points with small luxury icons. Text and icons in subtle gold/cream tone. Composition: clean, balanced, cinematic, ultra-realistic, premium skincare ad.",
};

// ─── Prompts to skip (need input image) ─────────────────────────────────────
const SKIP_IDS = new Set([
  "curated-season-swap",
  "curated-time-period-shift",
  "curated-weather-overlay-rain",
  "curated-remove-replace-background",
  "curated-color-grade-shift-portra",
  "curated-ms-paint-transformation",
  "curated-mixed-reality-comic-overlay",
  "curated-age-progression-portrait",
  "curated-miniature-tilt-shift",
  "curated-sketch-to-render",
  "curated-add-text-overlay",
  "curated-portrait-relight",
  "curated-object-removal-clean",
  "curated-floor-plan-3d-render",
  "example-edit-background",
  "example-edit-removal",
  "example-edit-outfit",
  "example-edit-restyle",
  "curated-song-dynasty-feed",
  "curated-meme-template-keep-original",
  // ─── Batch 2 skips (image-edit or text-only frameworks) ─────────────────
  "curated-chibi-clone-handaccount",
  "curated-dtc-brand-style-guide",
  "curated-scrapbook-photo-enhancement",
  "curated-forbes-magazine-cover",
  "curated-facial-aesthetics-report",
  "curated-japanese-magazine-annotations",
  "curated-logo-concept-generator",
  "curated-brand-identity-foundation",
  "curated-color-palette-framework",
  "curated-typography-framework",
  "curated-complete-brand-package",
  // ─── Batch 3 skips (image-edit — need input photo) ─────────────────────
  "curated-date-night-series",
  "curated-pinterest-doodle-aesthetic",
  "curated-food-doodle-fusion",
  "curated-designers-mind-illustration",
  "curated-botanical-painting-conversion",
  // ─── Batch 4 skips (image-edit — need input photo) ─────────────────────
  "curated-iridology-chart",
  "curated-face-feature-analysis",
  "curated-spectacles-guide",
  "curated-scrapbook-aesthetic-transform",
  "curated-rinpa-style-art",
  // ─── Batch 5 skips (image-edit or need input image) ───────────────────
  "curated-anime-pop-art-conversion",
  "curated-doodle-chibi-aesthetic",
  "curated-netflix-homepage-hero",
  "curated-character-breakdown-knolling",
]);

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fillPlaceholders(id, prompt) {
  // Full override takes priority
  if (PROMPT_OVERRIDES[id]) return PROMPT_OVERRIDES[id];
  const fills = PLACEHOLDER_FILLS[id];
  if (!fills) return prompt;
  let result = prompt;
  for (const [placeholder, value] of Object.entries(fills)) {
    result = result.replaceAll(placeholder, value);
  }
  return result;
}

async function generateImage(prompt) {
  const response = await openai.images.generate({
    model: "gpt-image-2",
    prompt,
    n: 1,
    size: "1024x1024",
    quality: "medium",
  });
  // Response contains base64 or URL depending on response_format
  const image = response.data[0];
  if (image.b64_json) {
    return Buffer.from(image.b64_json, "base64");
  }
  // If URL, fetch it
  const res = await fetch(image.url);
  return Buffer.from(await res.arrayBuffer());
}

async function resizeToWebP(buffer) {
  return sharp(buffer).resize(400).webp({ quality: 80 }).toBuffer();
}

async function uploadToSupabase(id, webpBuffer) {
  const path = `${id}.webp`;
  const { error } = await supabase.storage
    .from("prompt-thumbnails")
    .upload(path, webpBuffer, {
      contentType: "image/webp",
      upsert: true,
    });
  if (error) throw new Error(`Upload failed for ${id}: ${error.message}`);

  const { data } = supabase.storage.from("prompt-thumbnails").getPublicUrl(path);
  return data.publicUrl;
}

async function updatePromptUrl(id, url) {
  const { error } = await supabase
    .from("curated_prompts")
    .update({ thumbnail_url: url })
    .eq("id", id);
  if (error) throw new Error(`DB update failed for ${id}: ${error.message}`);
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const upload = args.includes("--upload");
  const singleIdIdx = args.indexOf("--id");
  const singleId = singleIdIdx !== -1 ? args[singleIdIdx + 1] : null;

  mkdirSync(OUT_DIR, { recursive: true });

  // Fetch all prompts
  const { data: prompts, error } = await supabase
    .from("curated_prompts")
    .select("id, title, category, prompt")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch prompts:", error.message);
    process.exit(1);
  }

  // Filter
  let toGenerate = prompts.filter((p) => !SKIP_IDS.has(p.id));
  if (singleId) {
    toGenerate = toGenerate.filter((p) => p.id === singleId);
    if (toGenerate.length === 0) {
      console.error(`Prompt "${singleId}" not found or is in skip list`);
      process.exit(1);
    }
  }

  // Skip already-generated (check local files)
  const pending = toGenerate.filter((p) => {
    const outPath = resolve(OUT_DIR, `${p.id}.webp`);
    return !existsSync(outPath);
  });

  console.log(`Total prompts: ${prompts.length}`);
  console.log(`Skipping (need input image): ${SKIP_IDS.size}`);
  console.log(`Eligible: ${toGenerate.length}`);
  console.log(`Already generated: ${toGenerate.length - pending.length}`);
  console.log(`To generate: ${pending.length}`);
  console.log();

  if (dryRun) {
    pending.forEach((p) => console.log(`  Would generate: ${p.id} — ${p.title}`));
    return;
  }

  if (pending.length === 0 && !upload) {
    console.log("Nothing to generate. All thumbnails exist locally.");
    if (!upload) console.log("Run with --upload to push to Supabase Storage.");
    return;
  }

  // Generate thumbnails
  let success = 0;
  let failed = 0;

  for (let i = 0; i < pending.length; i++) {
    const p = pending[i];
    const promptText = fillPlaceholders(p.id, p.prompt);
    const outPath = resolve(OUT_DIR, `${p.id}.webp`);

    process.stdout.write(
      `[${i + 1}/${pending.length}] ${p.title} (${p.id})... `
    );

    try {
      const raw = await generateImage(promptText);
      const webp = await resizeToWebP(raw);
      writeFileSync(outPath, webp);
      console.log(`OK (${(webp.length / 1024).toFixed(0)}KB)`);
      success++;
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
      failed++;
    }

    // Rate limit: ~5 requests/min for image generation (be conservative)
    if (i < pending.length - 1) {
      await new Promise((r) => setTimeout(r, 3000));
    }
  }

  console.log(`\nDone. Success: ${success}, Failed: ${failed}`);

  // Upload phase
  if (upload) {
    console.log("\n--- Uploading to Supabase Storage ---\n");
    const allEligible = toGenerate;
    let uploaded = 0;

    for (const p of allEligible) {
      const filePath = resolve(OUT_DIR, `${p.id}.webp`);
      if (!existsSync(filePath)) continue;

      process.stdout.write(`  Uploading ${p.id}... `);
      try {
        const buffer = readFileSync(filePath);
        const url = await uploadToSupabase(p.id, buffer);
        await updatePromptUrl(p.id, url);
        console.log("OK");
        uploaded++;
      } catch (err) {
        console.log(`FAILED: ${err.message}`);
      }
    }

    console.log(`\nUploaded: ${uploaded}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
