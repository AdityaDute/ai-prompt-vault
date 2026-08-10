import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-9xl font-extrabold text-blue-500 mb-4">404</h1>
      <h2 className="text-4xl font-bold text-white mb-4">Page not found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
      >
        Back to Home
      </Link>
    </main>
  );
}
