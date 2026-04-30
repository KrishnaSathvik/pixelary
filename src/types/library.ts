/**
 * Unified shape that the Library renders, regardless of whether a row came
 * from `curated_prompts` (source='example' | 'curated') or `prompts`
 * (source='user').
 *
 * Why a single shape? The Library page should not branch on source for
 * rendering. Source only matters for filtering ("My prompts" view) and for
 * the small attribution line at the bottom of the detail dialog.
 */

export type PromptSource = 'example' | 'curated' | 'user';

export interface LibraryPrompt {
  id: string;
  title: string;
  category: string;
  prompt: string;
  user_input?: string | null;
  why_it_works?: string | null;
  variants?: string[];
  source: PromptSource;
  source_creator?: string | null;
  source_url?: string | null;
  tags?: string[];
  created_at?: string;
  // Owner info, only present for source='user' rows.
  user_id?: string | null;
}
