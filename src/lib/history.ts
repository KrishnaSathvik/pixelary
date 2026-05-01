// Lightweight localStorage history for generations and critiques.
// Capped at 20 entries. Migrate to DB on first login if/when auth lands.

export type HistoryKind = "generate" | "critique";

export interface HistoryEntry {
  id: string;
  kind: HistoryKind;
  rough_idea: string;
  // Snapshot of the polished output so users can restore without re-generating.
  // For generate: contains prompt/prompts/category/why_it_works/variants/prompt_version.
  // For critique: contains score/weaknesses/improvements/category/prompt_version.
  result: Record<string, unknown>;
  created_at: number;
}

const KEY = "depikt.history";
const MAX_ENTRIES = 20;

export function getHistory(): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as HistoryEntry[];
  } catch {
    return [];
  }
}

export function addHistory(entry: Omit<HistoryEntry, "id" | "created_at">): HistoryEntry {
  const full: HistoryEntry = {
    ...entry,
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `h_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    created_at: Date.now(),
  };
  if (typeof window === "undefined") return full;
  try {
    const current = getHistory();
    const next = [full, ...current].slice(0, MAX_ENTRIES);
    window.localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent("depikt:history-changed"));
  } catch {
    // Quota exceeded or storage disabled — silently drop. History is best-effort.
  }
  return full;
}

export function removeHistory(id: string) {
  if (typeof window === "undefined") return;
  try {
    const next = getHistory().filter((e) => e.id !== id);
    window.localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent("depikt:history-changed"));
  } catch {
    /* noop */
  }
}

export function clearHistory() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(KEY);
    window.dispatchEvent(new CustomEvent("depikt:history-changed"));
  } catch {
    /* noop */
  }
}

export function formatRelativeTime(ts: number): string {
  const diff = Date.now() - ts;
  const min = Math.round(diff / 60_000);
  if (min < 1) return "just now";
  if (min < 60) return `${min}m ago`;
  const hr = Math.round(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const d = Math.round(hr / 24);
  if (d < 30) return `${d}d ago`;
  return new Date(ts).toLocaleDateString();
}
