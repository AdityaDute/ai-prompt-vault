import { NextResponse } from 'next/server';
import { SAMPLE_PROMPTS } from '@/lib/data';

export async function GET() {
  const counts: Record<string, number> = {};

  SAMPLE_PROMPTS.forEach((prompt) => {
    counts[prompt.category] = (counts[prompt.category] || 0) + 1;
  });

  return NextResponse.json(counts);
}
