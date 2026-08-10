'use client';

import { Category } from '@/lib/types';

interface CategoryFilterProps {
  activeCategory: Category | 'all';
  onSelect: (category: Category | 'all') => void;
}

const CATEGORIES: (Category | 'all')[] = [
  'all',
  'coding',
  'writing',
  'marketing',
  'design',
  'business',
  'education',
  'fun',
];

export default function CategoryFilter({ activeCategory, onSelect }: CategoryFilterProps) {
  return (
    <div className="w-full flex flex-wrap justify-center gap-2 md:gap-3 py-4">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        // Capitalize category name for display
        const displayName = category.charAt(0).toUpperCase() + category.slice(1);

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20 scale-105'
                : 'bg-gray-900/40 text-gray-400 border-gray-800 hover:text-white hover:border-gray-700 hover:bg-gray-850'
            }`}
            type="button"
          >
            {displayName}
          </button>
        );
      })}
    </div>
  );
}
