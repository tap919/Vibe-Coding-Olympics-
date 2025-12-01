import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Submission } from "@/types";
import { VoteButton } from "@/components/voting/VoteButton";

interface SubmissionCardProps {
  submission: Submission;
}

export function SubmissionCard({ submission }: SubmissionCardProps) {
  return (
    <Card className="overflow-hidden">
      {submission.thumbnailUrl && (
        <div className="aspect-video bg-muted">
          <img
            src={submission.thumbnailUrl}
            alt={submission.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="line-clamp-1">
          <Link href={`/entry/${submission.id}`} className="hover:underline">
            {submission.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {submission.description}
        </p>
        {submission.teamName && (
          <p className="text-xs text-muted-foreground mt-2">
            by {submission.teamName}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <VoteButton submissionId={submission.id} initialCount={submission.voteCount} />
        <Link
          href={submission.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
        >
          View Project →
        </Link>
      </CardFooter>
    </Card>
  );
}
