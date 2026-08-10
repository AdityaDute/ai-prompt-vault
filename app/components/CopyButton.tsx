'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ToastProvider';

interface CopyButtonProps {
  textToCopy: string;
  onCopy?: () => void;
}

export default function CopyButton({ textToCopy, onCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      showToast('Prompt copied to clipboard!', 'success');
      if (onCopy) onCopy();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      showToast('Failed to copy', 'error');
      console.error('Failed to copy text: ', err);
    }
  };
  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide border transition-all duration-200 cursor-pointer ${
        copied
          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
          : 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border-gray-700'
      }`}
      type="button"
      aria-label={copied ? 'Copied prompt to clipboard' : 'Copy prompt to clipboard'}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}
