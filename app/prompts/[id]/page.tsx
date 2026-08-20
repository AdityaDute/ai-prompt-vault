import { notFound } from 'next/navigation';
import { SAMPLE_PROMPTS } from '@/lib/data';
import { getCreatedPrompt } from '@/lib/created-prompt';
import CopyButton from '@/app/components/CopyButton';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const prompt = SAMPLE_PROMPTS.find((p) => p.id === id) ?? await getCreatedPrompt(id);
  if (!prompt) {
    return { title: 'Prompt Not Found' };
  }
  return {
    title: prompt.title,
    description: prompt.description,
  };
}

export default async function PromptDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const prompt = SAMPLE_PROMPTS.find((p) => p.id === id) ?? await getCreatedPrompt(id);

  if (!prompt) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <Link href="/prompts" className="text-gray-400 hover:text-white mb-6 block text-sm">
        ← Back to Browse
      </Link>
      
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            {prompt.category}
          </span>
          <div className="flex gap-2">
            <CopyButton textToCopy={prompt.prompt} />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-2">{prompt.title}</h1>
        <p className="text-gray-400 mb-6 text-lg">{prompt.description}</p>
        
        <div className="bg-black border border-gray-800 rounded-xl p-6 mb-6 font-mono text-sm text-gray-300 whitespace-pre-wrap">
          {prompt.prompt}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {prompt.tags.map((tag) => (
            <span key={tag} className="text-gray-500 text-sm">#{tag}</span>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-4 text-sm text-gray-500">
          <span>{prompt.copyCount} copies · </span>
          <span>{new Date(prompt.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </main>
  );
}
