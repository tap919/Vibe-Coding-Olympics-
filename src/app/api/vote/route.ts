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
}
