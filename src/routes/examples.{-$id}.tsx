import { createFileRoute, redirect } from '@tanstack/react-router';

/**
 * /examples and /examples/:id are deprecated. The unified Library at /library
 * now contains everything that used to be on this page (plus 70+ curated
 * GPT Image 2 prompts from X). Preserves inbound links from search engines.
 */
export const Route = createFileRoute('/examples/{-$id}')({
  beforeLoad: () => {
    throw redirect({ to: '/library' });
  },
});
