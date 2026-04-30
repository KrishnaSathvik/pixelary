import { createFileRoute, redirect } from '@tanstack/react-router';

/**
 * /examples and /examples/:id are deprecated. Library now lives at /.
 */
export const Route = createFileRoute('/examples/{-$id}')({
  beforeLoad: () => {
    throw redirect({ to: '/' });
  },
});
