import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Clock, Trash2, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  type HistoryEntry,
  clearHistory,
  formatRelativeTime,
  getHistory,
  removeHistory,
} from "@/lib/history";

export function useHistoryCount() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const update = () => setCount(getHistory().length);
    update();
    const handler = () => update();
    window.addEventListener("pixelary:history-changed", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("pixelary:history-changed", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);
  return count;
}

interface HistorySheetProps {
  trigger: React.ReactNode;
}

export function HistorySheet({ trigger }: HistorySheetProps) {
  const [open, setOpen] = useState(false);
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    setEntries(getHistory());
    const handler = () => setEntries(getHistory());
    window.addEventListener("pixelary:history-changed", handler);
    return () => window.removeEventListener("pixelary:history-changed", handler);
  }, [open]);

  const restore = (entry: HistoryEntry) => {
    setOpen(false);
    if (entry.kind === "critique") {
      navigate({ to: "/critique", search: { restore: entry.id } });
    } else {
      navigate({ to: "/app", search: { restore: entry.id } });
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-[420px] bg-[color:var(--bg)] border-l border-[color:var(--border-subtle)] p-0 flex flex-col"
      >
        <SheetHeader className="px-6 py-5 border-b border-[color:var(--border-subtle)]">
          <SheetTitle className="text-left text-heading-md flex items-center gap-2">
            <Clock className="h-4 w-4 text-[color:var(--text-tertiary)]" />
            History
          </SheetTitle>
          <p className="text-body-sm text-[color:var(--text-tertiary)] text-left">
            Last {entries.length} {entries.length === 1 ? "entry" : "entries"} · stored on this
            device
          </p>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {entries.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--bg-subtle)] border border-[color:var(--border-subtle)]">
                <Clock className="h-4 w-4 text-[color:var(--text-tertiary)]" />
              </div>
              <p className="text-body-sm text-[color:var(--text-tertiary)]">
                No history yet. Generate a prompt to get started.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-[color:var(--border-subtle)]">
              {entries.map((entry) => (
                <li key={entry.id} className="group relative">
                  <button
                    type="button"
                    onClick={() => restore(entry)}
                    className="w-full text-left px-6 py-4 hover:bg-[color:var(--bg-subtle)] transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-[10px] tracking-[0.08em] uppercase font-semibold text-[color:var(--text-tertiary)]">
                        {entry.kind === "critique" ? "CRITIQUE" : "GENERATE"}
                      </span>
                      {typeof entry.result.category === "string" && (
                        <>
                          <span className="text-[color:var(--text-tertiary)]">·</span>
                          <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-[color:var(--text-secondary)] truncate">
                            {entry.result.category}
                          </span>
                        </>
                      )}
                      <span className="ml-auto font-mono text-[10px] text-[color:var(--text-tertiary)]">
                        {formatRelativeTime(entry.created_at)}
                      </span>
                    </div>
                    <p className="text-body-sm text-[color:var(--text-primary)] line-clamp-2 pr-7">
                      {entry.rough_idea}
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeHistory(entry.id);
                    }}
                    className="absolute top-4 right-4 inline-flex h-6 w-6 items-center justify-center rounded text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--bg-elevated)] opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
                    aria-label="Remove from history"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {entries.length > 0 && (
          <div className="border-t border-[color:var(--border-subtle)] px-6 py-3">
            <button
              type="button"
              onClick={() => {
                if (confirm("Clear all history? This can't be undone.")) clearHistory();
              }}
              className="inline-flex items-center gap-1.5 text-body-sm text-[color:var(--text-tertiary)] hover:text-[color:var(--error)] transition-colors"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Clear all
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
