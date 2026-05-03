import Dexie, { type Table } from "dexie";

export interface FavoriteRecord {
  promptId: string;
  promptSource: string;
  createdAt: number;
}

export interface HistoryRecord {
  id: string;
  kind: "generate" | "critique";
  roughIdea: string;
  result: Record<string, unknown>;
  createdAt: number;
}

class PixelaryDB extends Dexie {
  favorites!: Table<FavoriteRecord, string>;
  history!: Table<HistoryRecord, string>;

  constructor() {
    super("pixelary");
    this.version(1).stores({
      favorites: "promptId, createdAt",
      history: "id, createdAt",
    });
  }
}

export const db = new PixelaryDB();
