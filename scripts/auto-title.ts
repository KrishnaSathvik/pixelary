/**
 * Auto-generates a clean Title Case display title from a user_input string.
 * "poster for a tech conference" -> "Tech Conference Poster"
 * "iphone screen for a meditation app" -> "Meditation App iPhone Screen"
 *
 * Strategy:
 *  1. Drop filler words from the start ("a", "an", "the", "for", "of").
 *  2. Reorder so the noun-y subject leads (we use a small heuristic:
 *     if the input starts with a category-ish word like "poster" or "infographic"
 *     and contains "for/of", we move the post-"for" phrase to the front).
 *  3. Title-case the rest, preserving brand-y words (iPhone, MacBook, GPT).
 */

const FILLER_LEADING = new Set(['a', 'an', 'the']);
const PRESERVED_CASE = new Map<string, string>([
  ['iphone', 'iPhone'],
  ['macbook', 'MacBook'],
  ['gpt', 'GPT'],
  ['ui', 'UI'],
  ['ux', 'UX'],
  ['saas', 'SaaS'],
  ['api', 'API'],
  ['svg', 'SVG'],
  ['css', 'CSS'],
  ['html', 'HTML'],
  ['json', 'JSON'],
  ['ipl', 'IPL'],
  ['tv', 'TV'],
  ['nyc', 'NYC'],
  ['la', 'LA'],
  ['dj', 'DJ'],
]);

const SHORT_LOWERCASE = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'vs', 'with',
]);

const CATEGORY_LEADERS = [
  'poster', 'magazine cover', 'wallpaper', 'infographic', 'timeline', 'comparison',
  'dashboard', 'mockup', 'mobile', 'iphone screen', 'screen', 'social post', 'tweet',
  'thread', 'cinematic shot', 'storyboard', 'panel', 'photo', 'image',
];

function titleCaseWord(word: string, isFirst: boolean): string {
  const lower = word.toLowerCase();
  if (PRESERVED_CASE.has(lower)) return PRESERVED_CASE.get(lower)!;
  if (!isFirst && SHORT_LOWERCASE.has(lower)) return lower;
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function autoTitle(userInput: string, fallbackId?: string): string {
  if (!userInput || !userInput.trim()) {
    if (fallbackId) {
      return fallbackId
        .split('-')
        .map((w, i) => titleCaseWord(w, i === 0))
        .join(' ');
    }
    return 'Untitled';
  }

  let words = userInput
    .trim()
    .replace(/[,.!?;:]+$/g, '')
    .split(/\s+/)
    .filter(Boolean);

  // Drop leading filler ("a poster" -> "poster").
  while (words.length > 1 && FILLER_LEADING.has(words[0].toLowerCase())) {
    words = words.slice(1);
  }

  // If the input is shaped like "<thing> for/of <subject>", rewrite to "<subject> <thing>".
  const lowerJoined = words.join(' ').toLowerCase();
  const forOfMatch = lowerJoined.match(/^(.+?)\s+(?:for|of)\s+(.+)$/);
  if (forOfMatch) {
    const [, leader, rest] = forOfMatch;
    const leaderIsCategory = CATEGORY_LEADERS.some((c) => leader.includes(c));
    if (leaderIsCategory) {
      const restWords = rest.split(/\s+/).filter((w) => !FILLER_LEADING.has(w.toLowerCase()));
      words = [...restWords, ...leader.split(/\s+/)];
    }
  }

  // Title-case all words.
  const titled = words.map((w, i) => titleCaseWord(w, i === 0));

  // Cap length at ~6 words for clean cards.
  const capped = titled.slice(0, 7);
  let result = capped.join(' ');

  // Ensure first character is uppercase even after lowercase short words.
  if (result.length > 0) result = result.charAt(0).toUpperCase() + result.slice(1);

  return result;
}
