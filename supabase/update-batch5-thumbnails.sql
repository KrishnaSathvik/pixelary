-- Batch 5: Update thumbnail_url for all 23 prompts
-- The upload script can't UPDATE due to RLS — run this in Supabase SQL Editor

UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-deconstructed-portrait-collage.webp' WHERE id = 'curated-deconstructed-portrait-collage';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-choreography-sheet-infographic.webp' WHERE id = 'curated-choreography-sheet-infographic';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-uk-citizenship-card.webp' WHERE id = 'curated-uk-citizenship-card';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-jinx-arcane-poster.webp' WHERE id = 'curated-jinx-arcane-poster';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-aot-eren-poster.webp' WHERE id = 'curated-aot-eren-poster';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-future-timeline-guide.webp' WHERE id = 'curated-future-timeline-guide';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-business-leader-ink-portrait.webp' WHERE id = 'curated-business-leader-ink-portrait';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-instagram-breakout-3d.webp' WHERE id = 'curated-instagram-breakout-3d';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-time-magazine-cover.webp' WHERE id = 'curated-time-magazine-cover';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-luxury-skincare-ad.webp' WHERE id = 'curated-luxury-skincare-ad';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-snack-brand-identity-system.webp' WHERE id = 'curated-snack-brand-identity-system';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-imperial-anime-flame-character.webp' WHERE id = 'curated-imperial-anime-flame-character';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-printmaking-pastel-poster.webp' WHERE id = 'curated-printmaking-pastel-poster';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-convenience-store-storyboard.webp' WHERE id = 'curated-convenience-store-storyboard';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-life-path-decoder.webp' WHERE id = 'curated-life-path-decoder';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-soul-purpose-discoverer.webp' WHERE id = 'curated-soul-purpose-discoverer';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-career-destiny-detector.webp' WHERE id = 'curated-career-destiny-detector';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-relationship-destiny-map.webp' WHERE id = 'curated-relationship-destiny-map';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-wealth-abundance-code.webp' WHERE id = 'curated-wealth-abundance-code';
-- 4 image-edit prompts (no thumbnails generated, but still set null explicitly)
-- curated-anime-pop-art-conversion, curated-doodle-chibi-aesthetic, curated-netflix-homepage-hero, curated-character-breakdown-knolling
