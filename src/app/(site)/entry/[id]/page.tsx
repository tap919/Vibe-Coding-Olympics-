import { LiveVoteCounter } from "@/components/voting/LiveVoteCounter";
import { VoteButton } from "@/components/voting/VoteButton";
import type { Submission } from "@/types";

interface EntryPageProps {
  params: Promise<{ id: string }>;
}

// Mock data - would be fetched from database
const getSubmission = async (id: string): Promise<Submission | null> => {
  return {
    id,
    title: "Amazing Vibe Project",
    description:
      "This is an incredible project that showcases the best of vibe coding. Built with passion, creativity, and a whole lot of vibes. The project features modern design patterns, responsive layouts, and an intuitive user experience.",
    url: "https://example.com/project",
    thumbnailUrl: "https://placehold.co/800x600",
    userId: "user1",
    seasonId: "season-3",
    teamName: "Team Vibe",
    status: "approved",
    voteCount: 256,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export default async function EntryPage({ params }: EntryPageProps) {
  const { id } = await params;
  const submission = await getSubmission(id);

  if (!submission) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl font-bold">Submission not found</h1>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {submission.thumbnailUrl && (
          <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
            <img
              src={submission.thumbnailUrl}
              alt={submission.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{submission.title}</h1>
            {submission.teamName && (
              <p className="text-muted-foreground">by {submission.teamName}</p>
            )}
          </div>
          <LiveVoteCounter submissionId={submission.id} initialCount={submission.voteCount} />
        </div>

        <p className="text-lg mb-8">{submission.description}</p>

        <div className="flex gap-4">
          <VoteButton submissionId={submission.id} initialCount={submission.voteCount} />
          <a
            href={submission.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
