import { SAMPLE_PROMPTS } from '@/lib/data';
import PromptsPageClient from '@/app/components/PromptsPageClient';
import { Suspense } from 'react';

export const metadata = {
  title: 'Browse Prompts',
  description: 'Explore, search, and copy the best curated AI prompts for coding, design, copywriting, business, and more.',
};

export const dynamic = 'force-dynamic';

export default function PromptsPage() {
  const prompts = SAMPLE_PROMPTS;

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:py-16 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Explore Curated <span className="text-amber-500">AI Prompts</span>
        </h1>
        <p className="text-base md:text-lg text-gray-400">
          Discover, search, and instantly copy high-performing prompts designed to unlock the maximum potential of LLMs.
        </p>
      </div>

      <Suspense fallback={<div className="text-center text-gray-500">Loading prompts...</div>}>
        <PromptsPageClient prompts={prompts} />
      </Suspense>
    </main>
  );
}
