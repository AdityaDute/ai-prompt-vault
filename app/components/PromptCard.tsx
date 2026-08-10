'use client';

import { Prompt } from '@/lib/types';
import CopyButton from './CopyButton';
import { useState } from 'react';
import { Tag, Calendar, User, Copy as CopyIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getCategoryConfig } from '@/lib/utils';

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const [copies, setCopies] = useState(prompt.copyCount);
  const config = getCategoryConfig(prompt.category);

  const handleCopySuccess = () => {
    setCopies((prev) => prev + 1);
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(prompt.createdAt));

  return (
    <article className={`flex flex-col h-full rounded-2xl border bg-gray-900/40 transition-all duration-300 hover:border-transparent hover:shadow-lg hover:-translate-y-1 overflow-hidden backdrop-blur-md group`} style={{ borderColor: config.color + '20' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 10px 15px -3px ${config.color}20` } onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none' }>
      {/* Header section with Category & Copy Button */}
      <div className="flex items-center justify-between p-5 pb-3">
        <span
          className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border ${config.bg} ${config.text} ${config.border}`}
        >
          {config.emoji} {prompt.category}
        </span>
        <div className="flex items-center gap-2">
          <Link 
            href={`/prompts/${prompt.id}`}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            title="View Details"
          >
            <ArrowRight className="h-4 w-4" />
          </Link>
          <CopyButton textToCopy={prompt.prompt} onCopy={handleCopySuccess} />
        </div>
      </div>

      {/* Main content body */}
      <div className="flex-grow px-5 pb-4">
        <Link href={`/prompts/${prompt.id}`} className="hover:text-amber-400 transition-colors duration-200">
          <h3 className="text-xl font-bold text-white mb-2">
            {prompt.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-400 mb-4 line-clamp-3">
          {prompt.description}
        </p>

        {/* Prompt content block */}
        <div className="relative rounded-xl border border-gray-800 bg-black/40 p-4 font-mono text-xs text-gray-300 max-h-32 overflow-y-auto whitespace-pre-wrap select-all">
          {prompt.prompt}
        </div>
      </div>

      {/* Footer section (Tags, metadata) */}
      <div className="mt-auto border-t border-gray-800/60 p-5 pt-4 bg-gray-950/20">
        {/* Tags */}
        {prompt.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {prompt.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                <Tag className="h-3 w-3" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        )}

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-800/40 pt-3">
          <div className="flex items-center gap-1.5" title={`Created by ${prompt.author}`}>
            <User className="h-3.5 w-3.5 text-gray-600" />
            <span className="truncate max-w-[100px]">{prompt.author}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1" title="Times copied">
              <CopyIcon className="h-3.5 w-3.5 text-gray-600" />
              <span>{copies}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-gray-600" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
