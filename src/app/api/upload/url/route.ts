import { NextResponse } from 'next/server';

export async function POST() {
  const url = `https://upload.vibeolympics.com/${crypto.randomUUID()}.mp4`;
  // In production: generate signed R2 URL here
  return NextResponse.json({ uploadUrl: url, publicUrl: url.replace('upload.', 'pub-') });
}
