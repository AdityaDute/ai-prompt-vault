export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto py-6 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-80 bg-gray-900 rounded-2xl border border-gray-800" />
      ))}
    </div>
  );
}
