import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import type { LibraryPrompt, PromptSource } from '@/types/library';

const IMAGO_URL =
  'https://chatgpt.com/g/g-69e7de729cb48191a6aa83ec3af8a6cb-imago' +
  '?utm_source=pixelary&utm_medium=library';

/**
 * Read curated content (examples + X-sourced) from `curated_prompts`.
 * Public read — no auth required.
 */
async function fetchCurated(): Promise<LibraryPrompt[]> {
  const { data, error } = await supabase
    .from('curated_prompts')
    .select(
      'id, title, category, user_input, prompt, why_it_works, variants, source, source_creator, source_url, tags, created_at'
    )
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data ?? []) as LibraryPrompt[];
}

/**
 * Read user prompts that are either (a) public, or (b) owned by the current user.
 * RLS handles the filter; we just select everything we're allowed to see.
 *
 * The `prompts` table uses different column names than the unified shape:
 *   - input_text  -> user_input
 *   - output_prompt -> prompt
 *   - category    -> category
 *   - variants    -> variants
 * We normalize on read.
 */
async function fetchUserPrompts(): Promise<LibraryPrompt[]> {
  const { data, error } = await supabase
    .from('prompts')
    .select(
      'id, title, category, input_text, output_prompt, why_it_works, variants, is_public, user_id, tags, created_at'
    )
    .order('created_at', { ascending: false });

  if (error) {
    // 401/403 just means logged-out user with no public rows visible — not fatal.
    if (error.code === 'PGRST301' || error.message?.includes('JWT')) {
      return [];
    }
    throw error;
  }

  return (data ?? []).map(
    (r: any): LibraryPrompt => ({
      id: r.id,
      title: r.title ?? deriveTitle(r.input_text, r.id),
      category: r.category ?? 'Open-Ended Creative',
      prompt: r.output_prompt,
      user_input: r.input_text,
      why_it_works: r.why_it_works,
      variants: r.variants ?? [],
      source: 'user',
      source_creator: null,
      source_url: null,
      tags: r.tags ?? [],
      created_at: r.created_at,
      user_id: r.user_id,
    })
  );
}

function deriveTitle(input: string | null | undefined, id: string): string {
  if (!input) return id.slice(0, 8);
  return input.slice(0, 60) + (input.length > 60 ? '…' : '');
}

/**
 * Single read for the Library page. Merges curated + user prompts into one list.
 * Newest first overall.
 */
export async function fetchLibrary(): Promise<LibraryPrompt[]> {
  const [curated, user] = await Promise.all([fetchCurated(), fetchUserPrompts()]);
  return [...curated, ...user].sort((a, b) => {
    const at = a.created_at ?? '';
    const bt = b.created_at ?? '';
    return bt.localeCompare(at);
  });
}

/**
 * Copy prompt + open Imago in a new tab.
 * Custom GPTs don't accept ?q= URL params, so we copy and instruct the user to paste.
 */
export async function openInImago(prompt: string) {
  try {
    await navigator.clipboard.writeText(prompt);
    toast.success('Prompt copied — paste with ⌘V in Imago', { duration: 4000 });
  } catch {
    toast.error('Couldn\'t copy. Use the Copy button first, then open Imago.');
  }
  window.open(IMAGO_URL, '_blank', 'noopener,noreferrer');
}

/**
 * Just copy. Used by the standalone Copy button on each card.
 */
export async function copyPrompt(prompt: string) {
  try {
    await navigator.clipboard.writeText(prompt);
    toast.success('Prompt copied');
  } catch {
    toast.error('Couldn\'t copy');
  }
}

/**
 * Favorites: thin wrappers around the favorites table. Auth-required;
 * caller checks user state before invoking.
 */
export async function toggleFavorite(
  userId: string,
  promptId: string,
  promptSource: PromptSource,
  currentlyFavorited: boolean
) {
  // The favorites table only stores 'curated' or 'user' as source.
  // Examples are still stored in curated_prompts so they map to 'curated' here.
  const dbSource = promptSource === 'user' ? 'user' : 'curated';

  if (currentlyFavorited) {
    const { error } = await supabase
      .from('favorites')
      .delete()
      .match({ user_id: userId, prompt_id: promptId, prompt_source: dbSource });
    if (error) {
      toast.error('Couldn\'t unfavorite');
      throw error;
    }
  } else {
    const { error } = await supabase
      .from('favorites')
      .insert({ user_id: userId, prompt_id: promptId, prompt_source: dbSource });
    if (error) {
      toast.error('Couldn\'t favorite');
      throw error;
    }
  }
}

export async function fetchFavoriteIds(userId: string): Promise<Set<string>> {
  const { data, error } = await supabase
    .from('favorites')
    .select('prompt_id')
    .eq('user_id', userId);
  if (error) return new Set();
  return new Set((data ?? []).map((r: any) => r.prompt_id));
}
