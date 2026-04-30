-- 1. curated_prompts
CREATE TABLE IF NOT EXISTS public.curated_prompts (
  id text PRIMARY KEY,
  title text NOT NULL,
  category text NOT NULL,
  user_input text,
  prompt text NOT NULL,
  why_it_works text,
  variants jsonb NOT NULL DEFAULT '[]'::jsonb,
  source text NOT NULL CHECK (source IN ('example', 'curated')),
  source_creator text,
  source_url text,
  tags text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS curated_prompts_category_idx   ON public.curated_prompts (category);
CREATE INDEX IF NOT EXISTS curated_prompts_source_idx     ON public.curated_prompts (source);
CREATE INDEX IF NOT EXISTS curated_prompts_created_at_idx ON public.curated_prompts (created_at DESC);
ALTER TABLE public.curated_prompts ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "curated_prompts_public_read" ON public.curated_prompts;
CREATE POLICY "curated_prompts_public_read" ON public.curated_prompts FOR SELECT USING (true);

-- 2. extend prompts
ALTER TABLE public.prompts ADD COLUMN IF NOT EXISTS is_public boolean NOT NULL DEFAULT false;
ALTER TABLE public.prompts ADD COLUMN IF NOT EXISTS title text;
ALTER TABLE public.prompts ADD COLUMN IF NOT EXISTS tags text[] NOT NULL DEFAULT '{}';
CREATE INDEX IF NOT EXISTS prompts_is_public_idx ON public.prompts (is_public) WHERE is_public = true;
DROP POLICY IF EXISTS "prompts_public_read" ON public.prompts;
CREATE POLICY "prompts_public_read" ON public.prompts FOR SELECT USING (is_public = true);

-- 3. favorites
CREATE TABLE IF NOT EXISTS public.favorites (
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  prompt_id text NOT NULL,
  prompt_source text NOT NULL CHECK (prompt_source IN ('curated', 'user')),
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, prompt_id, prompt_source)
);
CREATE INDEX IF NOT EXISTS favorites_user_idx ON public.favorites (user_id, created_at DESC);
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "favorites_owner_all" ON public.favorites;
CREATE POLICY "favorites_owner_all" ON public.favorites
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);