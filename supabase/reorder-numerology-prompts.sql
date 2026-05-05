-- Move the 6 birth date / numerology infographic prompts to the end of the library
-- by giving them the oldest created_at timestamp

UPDATE public.curated_prompts SET created_at = '2025-01-01T00:00:00+00:00' WHERE id IN (
  'curated-life-path-decoder',
  'curated-soul-purpose-discoverer',
  'curated-career-destiny-detector',
  'curated-relationship-destiny-map',
  'curated-wealth-abundance-code',
  'curated-future-timeline-guide'
);
