import { SubmissionGrid } from "@/components/submissions/SubmissionGrid";
import type { Submission } from "@/types";

interface SubmissionsPageProps {
  params: Promise<{ season: string }>;
}

const mockSubmissions: Submission[] = [
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
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Vibe Chat",
    description: "Real-time chat application with amazing vibes",
    url: "https://example.com/chat",
    thumbnailUrl: "https://placehold.co/600x400",
    userId: "user2",
    seasonId: "season-3",
    teamName: "Vibe Masters",
    status: "approved",
    voteCount: 132,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "Vibe Todo",
    description: "The most vibey todo app ever created",
    url: "https://example.com/todo",
    thumbnailUrl: "https://placehold.co/600x400",
    userId: "user3",
    seasonId: "season-3",
    status: "approved",
    voteCount: 98,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default async function SeasonSubmissionsPage({ params }: SubmissionsPageProps) {
  const { season } = await params;

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {season.replace("-", " ")} Submissions
      </h1>
      <SubmissionGrid submissions={mockSubmissions} />
    </div>
  );
}
