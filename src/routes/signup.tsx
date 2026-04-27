import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/lib/auth-context";
import { toast } from "sonner";
import { AuthShell, Divider, GoogleIcon } from "./login";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — Promptcraft" }] }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  useEffect(() => {
    if (user) navigate({ to: "/app" });
  }, [user, navigate]);

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/app` },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Check your email to confirm your account");
    }
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/app",
    });
    if (result.error) {
      setGoogleLoading(false);
      toast.error("Google sign-in failed");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/app" });
  };

  return (
    <AuthShell title="Create your account" subtitle="Save your prompts and build a personal library.">
      <Button
        onClick={handleGoogle}
        disabled={googleLoading}
        variant="outline"
        className="w-full gap-2 h-11 bg-card border-border/60"
      >
        {googleLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <GoogleIcon />}
        Continue with Google
      </Button>

      <Divider />

      <form onSubmit={handleEmail} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="bg-card border-border/60 mt-1.5" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="bg-card border-border/60 mt-1.5" />
          <p className="text-xs text-muted-foreground mt-1">At least 6 characters</p>
        </div>
        <Button type="submit" disabled={loading} className="w-full h-11 bg-amber-gradient text-primary-foreground hover:opacity-90 shadow-amber-glow">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create account"}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline font-medium">Log in</Link>
      </p>
    </AuthShell>
  );
}
