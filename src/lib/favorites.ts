import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db";

export function useFavoriteIds(): Set<string> {
  const ids = useLiveQuery(async () => {
    const all = await db.favorites.toArray();
    return all.map((f) => f.promptId);
  }, []);
  return new Set(ids ?? []);
}

export async function toggleFavoriteLocal(
  promptId: string,
  promptSource: string,
): Promise<boolean> {
  const existing = await db.favorites.get(promptId);
  if (existing) {
    await db.favorites.delete(promptId);
    return false;
  }
  await db.favorites.add({ promptId, promptSource, createdAt: Date.now() });
  return true;
}
