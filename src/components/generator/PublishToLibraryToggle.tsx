/**
 * Drop-in component for the Generator output card.
 *
 * Behavior:
 *   - Logged-out users: hidden (they can't save or publish).
 *   - Logged-in users: a small toggle next to the existing Copy button.
 *     Flipping it on UPDATEs `prompts.is_public = true` for the row that the
 *     auto-save just inserted, making the row visible in /library to everyone.
 *
 * Drop into your existing generator output card alongside Copy and
 * "Open in Imago".
 */

import { useState } from 'react';
import { Globe, Lock } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

export function PublishToLibraryToggle({
  promptId,
  initialIsPublic = false,
  onChange,
}: {
  promptId: string;
  initialIsPublic?: boolean;
  onChange?: (next: boolean) => void;
}) {
  const [isPublic, setIsPublic] = useState(initialIsPublic);
  const [pending, setPending] = useState(false);

  const handleToggle = async () => {
    const next = !isPublic;
    setPending(true);
    // Optimistic update.
    setIsPublic(next);

    const { error } = await supabase
      .from('prompts')
      .update({ is_public: next })
      .eq('id', promptId);

    setPending(false);

    if (error) {
      // Revert.
      setIsPublic(!next);
      toast.error('Couldn\'t update publish state');
      return;
    }

    toast.success(next ? 'Published to Library' : 'Unpublished — now private');
    onChange?.(next);
  };

  return (
    <button
      onClick={handleToggle}
      disabled={pending}
      className={`pill flex items-center gap-2 font-mono uppercase tracking-wider text-mono-sm transition-colors ${
        isPublic
          ? 'bg-[color:var(--accent)] text-[color:var(--bg-elevated)]'
          : 'border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-subtle)]'
      } ${pending ? 'opacity-60' : ''}`}
      aria-pressed={isPublic}
    >
      {isPublic ? <Globe className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
      {isPublic ? 'Public' : 'Private'}
    </button>
  );
}
