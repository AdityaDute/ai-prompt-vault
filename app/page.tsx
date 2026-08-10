import { Metadata } from 'next';
import { SAMPLE_PROMPTS } from '@/lib/data';
import PromptGrid from '@/app/components/PromptGrid';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Curated AI Prompts',
  description: 'Discover, copy, and share high-quality AI prompts to supercharge your workflow. Built for creators, developers, and strategists.',
};

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const totalPrompts = SAMPLE_PROMPTS.length;
  const totalCategories = new Set(SAMPLE_PROMPTS.map(p => p.category)).size;
  const totalCopies = SAMPLE_PROMPTS.reduce((sum, prompt) => sum + prompt.copyCount, 0);
  const mostCopiedPrompt = Math.max(...SAMPLE_PROMPTS.map(prompt => prompt.copyCount));

  return (
    <main className="container mx-auto px-4 py-16 animate-fade-in-up">
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Curated <span className="text-blue-500">AI Prompts</span> <br /> for Every Need
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Discover and copy high-quality prompts to supercharge your workflow. Built for creators,
          developers, and strategists.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="#prompts" className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
            Browse Prompts
          </Link>
          <Link href="/create" className="px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition">
            Add Your Own
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">
          <div className="text-3xl font-bold text-white">{totalPrompts}</div>
          <div className="text-sm text-gray-500">Total Prompts</div>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">
          <div className="text-3xl font-bold text-white">{totalCategories}</div>
          <div className="text-sm text-gray-500">Categories</div>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">
          <div className="text-3xl font-bold text-white">{totalCopies.toLocaleString()}</div>
          <div className="text-sm text-gray-500">Copies tracked</div>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">
          <div className="text-3xl font-bold text-white">{mostCopiedPrompt}</div>
          <div className="text-sm text-gray-500">Most copied prompt</div>
        </div>
      </section>

      <section id="prompts">
        <h2 className="text-2xl font-bold text-white mb-6">Latest Prompts</h2>
        <PromptGrid prompts={SAMPLE_PROMPTS} />
      </section>
    </main>
  );
}
