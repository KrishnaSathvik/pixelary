import { Link, useNavigate } from "@tanstack/react-router";
import { LogOut, BookMarked, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/lib/auth-context";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

export function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out");
    navigate({ to: "/" });
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[color:var(--border-subtle)] bg-[color:var(--bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Pixelary"
            width={28}
            height={28}
            className="h-7 w-7 dark:invert"
          />
          <span className="text-[15px] font-semibold tracking-tight text-[color:var(--text-primary)]">
            Pixelary
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className={NAV_CLS}
            activeProps={{ className: NAV_CLS_ACTIVE }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/examples/{-$id}"
            params={{ id: undefined }}
            className={NAV_CLS}
            activeProps={{ className: NAV_CLS_ACTIVE }}
          >
            Examples
          </Link>
          <Link to="/blog" className={NAV_CLS} activeProps={{ className: NAV_CLS_ACTIVE }}>
            Blog
          </Link>
          {user && (
            <Link to="/library" className={NAV_CLS} activeProps={{ className: NAV_CLS_ACTIVE }}>
              Library
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              <Link to="/library" className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Library">
                  <BookMarked className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/app">
                <Button size="sm">Open generator</Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-1.5 hidden sm:inline-flex">
                <LogOut className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Sign out</span>
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="hidden sm:inline-flex">
                <Button variant="ghost" size="sm">Log in</Button>
              </Link>
              <Link to="/app">
                <Button size="sm">Open generator</Button>
              </Link>
            </>
          )}

          {/* Mobile menu trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-[color:var(--bg)] border-l border-[color:var(--border-subtle)]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                <Link to="/" onClick={closeMobile} className={MOBILE_NAV_CLS} activeProps={{ className: MOBILE_NAV_CLS_ACTIVE }} activeOptions={{ exact: true }}>
                  Home
                </Link>
                <Link to="/examples/{-$id}" params={{ id: undefined }} onClick={closeMobile} className={MOBILE_NAV_CLS} activeProps={{ className: MOBILE_NAV_CLS_ACTIVE }}>
                  Examples
                </Link>
                <Link to="/blog" onClick={closeMobile} className={MOBILE_NAV_CLS} activeProps={{ className: MOBILE_NAV_CLS_ACTIVE }}>
                  Blog
                </Link>
                {user && (
                  <Link to="/library" onClick={closeMobile} className={MOBILE_NAV_CLS} activeProps={{ className: MOBILE_NAV_CLS_ACTIVE }}>
                    Library
                  </Link>
                )}
                <div className="mt-4 pt-4 border-t border-[color:var(--border-subtle)] flex flex-col gap-2">
                  {user ? (
                    <Button
                      variant="ghost"
                      onClick={() => {
                        closeMobile();
                        handleSignOut();
                      }}
                      className="justify-start gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign out
                    </Button>
                  ) : (
                    <Link to="/login" onClick={closeMobile}>
                      <Button variant="ghost" className="w-full justify-start">Log in</Button>
                    </Link>
                  )}
                </div>
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
const NAV_CLS_ACTIVE =
  "px-3 py-2 text-sm font-medium text-[color:var(--text-primary)]";

const MOBILE_NAV_CLS =
  "px-3 py-2.5 rounded-md text-base font-medium text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-subtle)] hover:text-[color:var(--text-primary)] transition-colors";
const MOBILE_NAV_CLS_ACTIVE =
  "px-3 py-2.5 rounded-md text-base font-medium bg-[color:var(--bg-subtle)] text-[color:var(--text-primary)]";
