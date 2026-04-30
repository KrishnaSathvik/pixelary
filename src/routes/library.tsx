import { createFileRoute, redirect } from '@tanstack/react-router';

/**
 * /library is now the home page (/). 301 to canonical URL.
 */
export const Route = createFileRoute('/library')({
  beforeLoad: () => {
    throw redirect({ to: '/' });
  },
});
