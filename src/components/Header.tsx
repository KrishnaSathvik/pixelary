import { Link } from "@tanstack/react-router";
import { Clock, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HistorySheet, useHistoryCount } from "@/components/HistorySheet";
import logo from "@/assets/logo.png";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);
  const historyCount = useHistoryCount();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[color:var(--border-subtle)] bg-[color:var(--bg)]/85 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Depikt" width={28} height={28} className="h-7 w-7 dark:invert" />
          <span className="text-[15px] font-semibold tracking-tight text-[color:var(--text-primary)]">
            Depikt
          </span>
        </Link>

        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1">
          <Link
            to="/"
            className={NAV_CLS}
            activeProps={{ className: NAV_CLS_ACTIVE }}
            activeOptions={{ exact: true }}
          >
            Library
          </Link>
          <Link to="/app" className={NAV_CLS} activeProps={{ className: NAV_CLS_ACTIVE }}>
            Generate
          </Link>
          <Link to="/critique" className={NAV_CLS} activeProps={{ className: NAV_CLS_ACTIVE }}>
            Critique
          </Link>
          <Link to="/blog" className={NAV_CLS} activeProps={{ className: NAV_CLS_ACTIVE }}>
            Blog
          </Link>
          {historyCount > 0 && (
            <HistorySheet
              trigger={
                <button type="button" className={`${NAV_CLS} inline-flex items-center gap-1.5`}>
                  <Clock className="h-3.5 w-3.5" />
                  History
                  <span className="font-mono text-[10px] text-[color:var(--text-tertiary)]">
                    {historyCount}
                  </span>
                </button>
              }
            />
          )}
        </nav>

        <div className="flex items-center gap-1">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] bg-[color:var(--bg)] border-l border-[color:var(--border-subtle)]"
            >
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                <Link
                  to="/"
                  onClick={closeMobile}
                  className={MOBILE_NAV_CLS}
                  activeProps={{ className: MOBILE_NAV_CLS_ACTIVE }}
                  activeOptions={{ exact: true }}
                >
                  Library
                </Link>
                <Link
                  to="/app"
                  onClick={closeMobile}
                  className={MOBILE_NAV_CLS}
                  activeProps={{ className: MOBILE_NAV_CLS_ACTIVE }}
                >
                  Generate
                </Link>
                <Link
                  to="/critique"
                  onClick={closeMobile}
                  className={MOBILE_NAV_CLS}
                  activeProps={{ className: MOBILE_NAV_CLS_ACTIVE }}
                >
                  Critique
                </Link>
                <Link
                  to="/blog"
                  onClick={closeMobile}
                  className={MOBILE_NAV_CLS}
                  activeProps={{ className: MOBILE_NAV_CLS_ACTIVE }}
                >
                  Blog
                </Link>
                {historyCount > 0 && (
                  <div className="mt-2 pt-2 border-t border-[color:var(--border-subtle)]">
                    <HistorySheet
                      trigger={
                        <button
                          type="button"
                          onClick={closeMobile}
                          className={`${MOBILE_NAV_CLS} w-full inline-flex items-center gap-2`}
                        >
                          <Clock className="h-4 w-4" />
                          History
                          <span className="ml-auto font-mono text-[11px] text-[color:var(--text-tertiary)]">
                            {historyCount}
                          </span>
                        </button>
                      }
                    />
                  </div>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const NAV_CLS =
  "px-3 py-2 text-sm font-medium text-[color:var(--text-secondary)] transition-colors duration-150 hover:text-[color:var(--text-primary)]";
const NAV_CLS_ACTIVE = "px-3 py-2 text-sm font-medium text-[color:var(--text-primary)]";

const MOBILE_NAV_CLS =
  "px-3 py-2.5 rounded-md text-base font-medium text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-subtle)] hover:text-[color:var(--text-primary)] transition-colors";
const MOBILE_NAV_CLS_ACTIVE =
  "px-3 py-2.5 rounded-md text-base font-medium bg-[color:var(--bg-subtle)] text-[color:var(--text-primary)]";
