import { NextResponse } from "next/server";
import { voteSchema } from "@/lib/validations";

// Rate limiting map (in production, use Redis)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

const RATE_LIMIT = 10; // votes per minute
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit || now - userLimit.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT) {
    return false;
  }

  userLimit.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validatedData = voteSchema.parse(body);

    // In production, save to database
    // await supabase.from('votes').insert(validatedData);

    return NextResponse.json({
      success: true,
      message: "Vote recorded",
      data: validatedData,
    });
  } catch (error) {
    console.error("Vote error:", error);
    return NextResponse.json(
      { error: "Failed to record vote" },
      { status: 400 }
    );
  }
import { supabase, supabaseAdmin } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { submission_id, value } = await req.json();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  // Rate limit: 1 vote per submission per user
  const { data: existing } = await supabase
    .from('votes')
    .select('id')
    .eq('submission_id', submission_id)
    .eq('user_id', user.id)
    .single();

  if (existing) return NextResponse.json({ error: 'Already voted' }, { status: 400 });

  const { error } = await supabase
    .from('votes')
    .insert({ submission_id, user_id: user.id, value });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Update total votes count
  await supabaseAdmin!
    .from('submissions')
    .update({ total_votes: supabaseAdmin!.from('votes').select().eq('submission_id', submission_id) })
    .eq('id', submission_id);

  return NextResponse.json({ success: true });
}
