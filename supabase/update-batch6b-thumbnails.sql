-- Batch 6b: Update thumbnail_url for 2 additional prompts
-- Run in Supabase SQL Editor (anon key cannot UPDATE due to RLS)

UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-mirror-selfie-evening-gown.webp' WHERE id = 'curated-mirror-selfie-evening-gown';
UPDATE public.curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-luxury-bathroom-fashion.webp' WHERE id = 'curated-luxury-bathroom-fashion';
