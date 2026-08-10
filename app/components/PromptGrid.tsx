'use client';

import { Prompt } from '@/lib/types';
import PromptCard from './PromptCard';

interface PromptGridProps {
  prompts: Prompt[];
}

export default function PromptGrid({ prompts }: PromptGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto py-6 animate-fade-in-up">
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
}
