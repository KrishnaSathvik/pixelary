// Legacy types — kept for backward compatibility with any remaining imports.
// All runtime logic has moved to history-db.ts (Dexie/IndexedDB).

export type HistoryKind = "generate" | "critique";

export interface HistoryEntry {
  id: string;
  kind: HistoryKind;
  rough_idea: string;
  result: Record<string, unknown>;
  created_at: number;
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
