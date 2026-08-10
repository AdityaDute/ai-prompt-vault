'use client';

import { useState, useMemo, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Prompt, Category } from '@/lib/types';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import PromptGrid from './PromptGrid';
import { SearchX } from 'lucide-react';

interface PromptsPageClientProps {
  prompts: Prompt[];
}

export default function PromptsPageClient({ prompts }: PromptsPageClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initial state from URL params
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>(
    (searchParams.get('category') as Category) || 'all'
  );

  // Helper to update URL search params
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value !== 'all') {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  // Sync state changes to URL
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    const queryString = createQueryString('q', query);
    router.replace(`${pathname}?${queryString}`, { scroll: false });
  };

  const handleCategoryChange = (category: Category | 'all') => {
    setActiveCategory(category);
    const queryString = createQueryString('category', category);
    router.replace(`${pathname}?${queryString}`, { scroll: false });
  };

  const handleReset = () => {
    setSearchQuery('');
    setActiveCategory('all');
    router.replace(pathname, { scroll: false });
  };

  // Derive filtered list
  const filteredPrompts = useMemo(() => {
    return prompts.filter((prompt) => {
      const matchesCategory = activeCategory === 'all' || prompt.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        prompt.title.toLowerCase().includes(query) ||
        prompt.description.toLowerCase().includes(query) ||
        prompt.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [prompts, searchQuery, activeCategory]);

  const searchBarKey = searchQuery === '' ? 'empty' : 'active';

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 items-center max-w-4xl mx-auto">
        <SearchBar key={searchBarKey} initialValue={searchQuery} onSearch={handleSearchChange} />
        <CategoryFilter activeCategory={activeCategory} onSelect={handleCategoryChange} />
      </div>

      {/* Results Header / Stats */}
      <div className="flex justify-between items-center border-b border-gray-800/40 pb-4 max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-300">
          {activeCategory === 'all'
            ? 'All Prompts'
            : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Prompts`}
        </h2>
        <span className="text-sm text-gray-500 font-mono">
          Showing {filteredPrompts.length} of {prompts.length}
        </span>
      </div>

      {/* Main Grid or Empty State */}
      {filteredPrompts.length > 0 ? (
        <PromptGrid prompts={filteredPrompts} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto rounded-2xl border border-gray-800/40 bg-gray-900/10 backdrop-blur-sm px-6">
          <div className="p-4 bg-amber-500/10 rounded-full text-amber-500 mb-5">
            <SearchX className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No Prompts Found</h3>
          <p className="text-gray-400 text-sm mb-6">
            We couldn't find any prompts matching your search query "{searchQuery}" in{' '}
            {activeCategory === 'all' ? 'any category' : `the "${activeCategory}" category`}.
          </p>
          <button
            onClick={handleReset}
            className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-amber-500 text-black hover:bg-amber-400 active:scale-95 transition-all cursor-pointer"
            type="button"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
