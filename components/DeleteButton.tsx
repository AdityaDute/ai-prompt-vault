'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useToast } from './ToastProvider';

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const { showToast } = useToast();

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this prompt?')) return;

    setIsDeleting(true);
    const res = await fetch(`/api/prompts/${id}`, { method: 'DELETE' });

    if (res.ok) {
      showToast('Prompt deleted successfully!', 'success');
      router.push('/');
      router.refresh();
    } else {
      showToast('Failed to delete prompt', 'error');
      setIsDeleting(false);
    }
  };
  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-red-400 hover:text-red-300 border border-red-500/30 hover:bg-red-500/10 transition-all"
    >
      <Trash2 className="h-3.5 w-3.5" />
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  );
}
