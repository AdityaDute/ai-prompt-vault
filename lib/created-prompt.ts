import { cookies } from 'next/headers';
import type { Prompt } from './types';

const CREATED_PROMPT_COOKIE = 'created-prompt';

function isPrompt(value: unknown): value is Prompt {
  if (!value || typeof value !== 'object') return false;

  const prompt = value as Partial<Prompt>;
  return (
    typeof prompt.id === 'string' &&
    typeof prompt.title === 'string' &&
    typeof prompt.description === 'string' &&
    typeof prompt.prompt === 'string' &&
    typeof prompt.category === 'string' &&
    Array.isArray(prompt.tags) &&
    typeof prompt.author === 'string' &&
    typeof prompt.copyCount === 'number' &&
    typeof prompt.createdAt === 'string'
  );
}

export async function getCreatedPrompt(id: string): Promise<Prompt | undefined> {
  const value = (await cookies()).get(CREATED_PROMPT_COOKIE)?.value;
  if (!value) return undefined;

  try {
    const prompt: unknown = JSON.parse(decodeURIComponent(value));
    return isPrompt(prompt) && prompt.id === id ? prompt : undefined;
  } catch {
    return undefined;
  }
}

export async function saveCreatedPrompt(prompt: Prompt) {
  const value = encodeURIComponent(JSON.stringify(prompt));

  // Cookies are limited to roughly 4 KB. The form's server-side limits keep
  // the redirect state safely within that browser limit.
  if (value.length > 3_500) {
    throw new Error('The prompt is too long to save. Please keep it under 1,200 characters.');
  }

  (await cookies()).set(CREATED_PROMPT_COOKIE, value, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
}
