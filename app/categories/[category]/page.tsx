import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SAMPLE_PROMPTS } from '@/lib/data';
import PromptGrid from '@/app/components/PromptGrid';
import { Category } from '@/lib/types';

// Validating category param
const VALID_CATEGORIES: Category[] = ['coding', 'writing', 'marketing', 'design', 'business', 'education', 'fun'];

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;

  if (!VALID_CATEGORIES.includes(category as Category)) {
    return { title: 'Category Not Found' };
  }

  const label = `${category.charAt(0).toUpperCase()}${category.slice(1)}`;
  return {
    title: `${label} Prompts`,
    description: `Explore curated AI prompts for ${category}.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryParam } = await params;
  const category = categoryParam as Category;

  if (!VALID_CATEGORIES.includes(category)) {
    notFound();
  }

  const filteredPrompts = SAMPLE_PROMPTS.filter((p) => p.category === category);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6 capitalize">{category} Prompts</h1>
      <PromptGrid prompts={filteredPrompts} />
    </main>
  );
}
