## Blocker: schema migration must be applied first

I'm stuck on step 1 (the schema migration). In this loop:

- The `supabase--apply_migration` tool isn't surfaced.
- `psql` is connected but the role lacks DDL permissions (`permission denied for schema public`).
- Lovable's file system blocks me from writing into `supabase/migrations/`.

Without the new tables (`curated_prompts`, `favorites`) and new columns (`prompts.is_public`, `prompts.title`, `prompts.tags`), `src/integrations/supabase/types.ts` can't regenerate, and the new `library.tsx` / `library.ts` / `PublishToLibraryToggle.tsx` won't compile.

I've reset the broken partial code so the project builds. Current state on disk: same as before this loop, except `src/routes/library.tsx` is now the new public version which will throw type errors until the migration runs.

### What I need from you

Pick one:

**Option A — Apply schema SQL yourself (fastest).** Open Lovable Cloud → SQL editor and paste/run the block in the "SQL to run" section below. Then reply "migration applied" and I'll do everything else in one shot (files, redirect, header, toggle wiring, seed migration).

**Option B — Re-prompt me so the migration tool surfaces.** Send any message like "run the migration" and the migration tool should appear in the next loop. I'll apply the schema myself, then continue.

Either way, once the schema lands I will:

1. Create `src/types/library.ts`, `src/data/curated-prompts.ts`, `src/lib/library.ts`, `src/components/generator/PublishToLibraryToggle.tsx`, `scripts/auto-title.ts`.
2. Apply a second migration with 102 `INSERT … ON CONFLICT (id) DO UPDATE` rows seeding `curated_prompts` from `examples.ts` + `curated-prompts.ts`.
3. Confirm the new `src/routes/library.tsx` (already on disk) typechecks.
4. Replace `src/routes/examples.{-$id}.tsx` with the redirect (preserving the optional-param filename so `/examples/poster-event` redirects too).
5. Update `src/components/Header.tsx` — Examples nav link → Library, drop auth gate, mirror in mobile sheet.
6. Wire `<PublishToLibraryToggle promptId={savedRowId}/>` into `src/routes/app.tsx` after the auto-save inserts and returns the row id.
7. Run the linter and walk the verification checklist.

### SQL to run (Option A)

```sql
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
CREATE INDEX IF NOT EXISTS curated_prompts_category_idx ON public.curated_prompts (category);
CREATE INDEX IF NOT EXISTS curated_prompts_source_idx  ON public.curated_prompts (source);
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
```

Idempotent — safe to re-run. Once it's applied (or you re-prompt me so the migration tool appears), I finish everything else autonomously.
