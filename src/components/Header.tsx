import { Link, useNavigate } from "@tanstack/react-router";
import { Sparkles, Sun, Moon, LogOut, BookMarked } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { useTheme } from "@/lib/theme-context";
import { toast } from "sonner";

export function Header() {
  const { user, signOut } = useAuth();
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out");
    navigate({ to: "/" });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-gradient shadow-amber-glow">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="font-bold text-lg tracking-tight">Promptcraft</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/app"
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "px-3 py-2 text-sm text-foreground font-medium" }}
          >
            Generator
          </Link>
          {user && (
            <Link
              to="/library"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm text-foreground font-medium" }}
            >
              Library
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          {user ? (
            <>
              <Link to="/library" className="md:hidden">
                <Button variant="ghost" size="icon"><BookMarked className="h-4 w-4" /></Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-2">
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign out</span>
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">Log in</Button>
              </Link>
              <Link to="/app">
                <Button size="sm" className="bg-amber-gradient text-primary-foreground hover:opacity-90 shadow-amber-glow">
                  Try free
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
