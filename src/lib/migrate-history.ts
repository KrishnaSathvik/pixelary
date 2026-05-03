import { db } from "./db";

const MIGRATED_FLAG = "pixelary.history-migrated";
const OLD_KEY = "depikt.history";

interface OldHistoryEntry {
  id: string;
  kind: "generate" | "critique";
  rough_idea: string;
  result: Record<string, unknown>;
  created_at: number;
}

export async function migrateLocalStorageHistory(): Promise<void> {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem(MIGRATED_FLAG)) return;

  try {
    const raw = window.localStorage.getItem(OLD_KEY);
    if (!raw) {
      window.localStorage.setItem(MIGRATED_FLAG, "1");
      return;
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      window.localStorage.setItem(MIGRATED_FLAG, "1");
      return;
    }

    const records = (parsed as OldHistoryEntry[]).map((entry) => ({
      id: entry.id,
      kind: entry.kind,
      roughIdea: entry.rough_idea,
      result: entry.result,
      createdAt: entry.created_at,
    }));

    await db.history.bulkPut(records);
    window.localStorage.removeItem(OLD_KEY);
    window.localStorage.setItem(MIGRATED_FLAG, "1");
  } catch {
    // Migration is best-effort — mark as done even on failure to avoid retries.
    window.localStorage.setItem(MIGRATED_FLAG, "1");
  }
}
