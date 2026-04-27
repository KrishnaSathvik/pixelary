import { Link, useNavigate } from "@tanstack/react-router";
import { LogOut, BookMarked } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { toast } from "sonner";

export function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out");
    navigate({ to: "/" });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[color:var(--border-subtle)] bg-[color:var(--bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-[color:var(--accent)] text-[color:var(--accent-text)] font-mono text-[13px] font-semibold leading-none">
            P
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-[color:var(--text-primary)]">
            Promptcraft
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" exact label="Home" />
          <NavLink to="/examples/{-$id}" params={{ id: undefined }} label="Examples" />
          <NavLink to="/blog" label="Blog" />
          {user && <NavLink to="/library" label="Library" />}
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
              <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-1.5">
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
        </div>
      </div>
    </header>
  );
}

function NavLink({
  to,
  label,
  exact,
  params,
}: {
  to: string;
  label: string;
  exact?: boolean;
  params?: Record<string, string | undefined>;
}) {
  const linkProps = { to, params } as unknown as Record<string, unknown>;
  return (
    <Link
      {...linkProps}
      className="px-3 py-2 text-sm font-medium text-[color:var(--text-secondary)] transition-colors duration-150 hover:text-[color:var(--text-primary)]"
      activeProps={{
        className:
          "px-3 py-2 text-sm font-medium text-[color:var(--text-primary)]",
      }}
      activeOptions={exact ? { exact: true } : undefined}
    >
      {label}
    </Link>
  );
}
