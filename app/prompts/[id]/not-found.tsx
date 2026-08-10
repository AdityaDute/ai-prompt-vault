import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-4xl font-bold text-white mb-4">Prompt not found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        We couldn't find the prompt you're looking for. It might have been removed or the link might be broken.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
      >
        Back to Browse
      </Link>
    </main>
  );
}
