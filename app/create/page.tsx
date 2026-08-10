import PromptForm from '@/components/PromptForm';

export const metadata = {
  title: 'Add a Prompt',
  description: 'Add a useful AI prompt to the vault.',
};

export default function CreatePromptPage() {
  return (
    <main className="container mx-auto max-w-2xl px-4 py-12 md:py-16">
      <div className="mb-8 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Contribute</p>
        <h1 className="text-3xl font-bold text-white">Add a new prompt</h1>
        <p className="mt-3 text-gray-400">Share a clear, useful prompt with the vault.</p>
      </div>
      <PromptForm />
    </main>
  );
}





