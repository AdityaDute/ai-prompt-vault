import { NextResponse, NextRequest } from 'next/server';
import { SAMPLE_PROMPTS } from '@/lib/data';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const prompt = SAMPLE_PROMPTS.find((p) => p.id === id);

  if (!prompt) {
    return NextResponse.json({ error: 'Prompt not found' }, { status: 404 });
  }

  return NextResponse.json(prompt);
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'This curated collection is read-only.' },
    { status: 405, headers: { Allow: 'GET' } }
  );
}
