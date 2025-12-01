import { NextResponse } from "next/server";
import { submissionSchema } from "@/lib/validations";

// Mock data - would come from database
const mockSubmissions = [
  {
    id: "1",
    title: "Vibe Weather App",
    description: "A beautiful weather application with vibes",
    url: "https://example.com/weather",
    thumbnailUrl: "https://placehold.co/600x400",
    userId: "user1",
    seasonId: "season-3",
    teamName: "Team Alpha",
    status: "approved",
    voteCount: 156,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const seasonId = searchParams.get("seasonId");
  const status = searchParams.get("status");

  let submissions = [...mockSubmissions];

  if (seasonId) {
    submissions = submissions.filter((s) => s.seasonId === seasonId);
  }

  if (status) {
    submissions = submissions.filter((s) => s.status === status);
  }

  return NextResponse.json(submissions);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = submissionSchema.parse(body);

    // In production, save to database
    // const result = await supabase.from('submissions').insert(validatedData);

    const newSubmission = {
      id: Date.now().toString(),
      ...validatedData,
      status: "pending",
      voteCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: newSubmission,
    });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { error: "Failed to create submission" },
      { status: 400 }
    );
  }
}
