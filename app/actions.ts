'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { saveCreatedPrompt } from '@/lib/created-prompt';
import type { Category, Prompt } from '@/lib/types';

const CATEGORIES: Category[] = ['coding', 'writing', 'marketing', 'design', 'business', 'education', 'fun'];

export async function createPrompt(formData: FormData) {
  const title = String(formData.get('title') ?? '').trim();
  const description = String(formData.get('description') ?? '').trim();
  const prompt = String(formData.get('prompt') ?? '').trim();
  const author = String(formData.get('author') ?? '').trim();
  const category = String(formData.get('category') ?? 'coding') as Category;
  const tags = String(formData.get('tags') ?? '')
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 8);

  if (
    title.length < 3 || title.length > 100 ||
    description.length < 10 || description.length > 200 ||
    prompt.length < 20 || prompt.length > 1_200 ||
    !author || author.length > 100 ||
    !CATEGORIES.includes(category)
  ) {
    throw new Error('Invalid prompt details. Please review the form and try again.');
  }

  const newPrompt: Prompt = {
    id: crypto.randomUUID(),
    title,
    description,
    prompt,
    category,
    tags,
    author,
    copyCount: 0,
    createdAt: new Date().toISOString(),
  };

  await saveCreatedPrompt(newPrompt);
  revalidatePath('/');
  revalidatePath('/prompts');
  revalidatePath(`/categories/${category}`);
  redirect(`/prompts/${newPrompt.id}`);
}
