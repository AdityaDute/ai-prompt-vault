'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { SAMPLE_PROMPTS } from '@/lib/data';
import type { Category, Prompt } from '@/lib/types';

export async function createPrompt(formData: FormData) {
  const title = String(formData.get('title') ?? '').trim();
  const description = String(formData.get('description') ?? '').trim();
  const prompt = String(formData.get('prompt') ?? '').trim();
  const author = String(formData.get('author') ?? '').trim();
  const category = String(formData.get('category') ?? 'coding') as Category;
  const tags = String(formData.get('tags') ?? '')
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

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

  SAMPLE_PROMPTS.unshift(newPrompt);
  revalidatePath('/');
  revalidatePath('/prompts');
  revalidatePath(`/categories/${category}`);
  redirect(`/prompts/${newPrompt.id}`);
}
