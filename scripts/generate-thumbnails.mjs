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
    "Jensen Huang": "Jensen Huang",
  },
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
]);

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fillPlaceholders(id, prompt) {
  const fills = PLACEHOLDER_FILLS[id];
  if (!fills) return prompt;
  let result = prompt;
  for (const [placeholder, value] of Object.entries(fills)) {
    result = result.replace(placeholder, value);
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
