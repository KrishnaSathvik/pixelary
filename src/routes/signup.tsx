import { createFileRoute, redirect } from '@tanstack/react-router';

/**
 * Auth UI removed. Plumbing (AuthProvider, supabase auth client) stays for Phase 2.
 */
export const Route = createFileRoute('/signup')({
  beforeLoad: () => {
    throw redirect({ to: '/' });
  },
});
