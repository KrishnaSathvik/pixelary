import { useLiveQuery } from "dexie-react-hooks";
import { db, type HistoryRecord } from "./db";

export type { HistoryRecord };

const MAX_ENTRIES = 50;

export function useHistory(): HistoryRecord[] {
  const entries = useLiveQuery(
    () => db.history.orderBy("createdAt").reverse().toArray(),
    [],
  );
  return entries ?? [];
}

export function useHistoryCount(): number {
  const count = useLiveQuery(() => db.history.count(), []);
  return count ?? 0;
}

export async function addHistoryEntry(
  entry: Omit<HistoryRecord, "id" | "createdAt">,
): Promise<HistoryRecord> {
  const full: HistoryRecord = {
    ...entry,
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `h_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: Date.now(),
  };
  await db.history.add(full);

  // Cap at MAX_ENTRIES — remove oldest beyond limit
  const count = await db.history.count();
  if (count > MAX_ENTRIES) {
    const excess = await db.history
      .orderBy("createdAt")
      .limit(count - MAX_ENTRIES)
      .toArray();
    await db.history.bulkDelete(excess.map((e) => e.id));
  }

  return full;
}

export async function removeHistoryEntry(id: string): Promise<void> {
  await db.history.delete(id);
}

export async function clearAllHistory(): Promise<void> {
  await db.history.clear();
}

export async function getHistoryById(id: string): Promise<HistoryRecord | undefined> {
  return db.history.get(id);
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
