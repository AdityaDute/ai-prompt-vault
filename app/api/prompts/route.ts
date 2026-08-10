import { NextResponse, NextRequest } from 'next/server';
import { SAMPLE_PROMPTS } from '@/lib/data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  if (category) {
    const filtered = SAMPLE_PROMPTS.filter((p) => p.category === category);
    return NextResponse.json(filtered);
  }

  return NextResponse.json(SAMPLE_PROMPTS);
}

export async function POST() {
  return NextResponse.json(
    { error: 'This curated collection is read-only.' },
    { status: 405, headers: { Allow: 'GET' } }
  );
}
