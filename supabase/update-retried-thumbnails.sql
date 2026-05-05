-- Update thumbnail_url for the 3 retried prompts (RLS blocked programmatic update)
-- Run in Supabase SQL Editor

UPDATE curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-tv-character-diagram.webp' WHERE id = 'curated-tv-character-diagram';
UPDATE curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-minimal-design-collection.webp' WHERE id = 'curated-minimal-design-collection';
UPDATE curated_prompts SET thumbnail_url = 'https://cexsqtqcrbvhgzkhtgqo.supabase.co/storage/v1/object/public/prompt-thumbnails/curated-superman-collage.webp' WHERE id = 'curated-superman-collage';
