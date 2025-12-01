import type { Submission } from "@/types";
import { SubmissionCard } from "./SubmissionCard";

interface SubmissionGridProps {
  submissions: Submission[];
}

export function SubmissionGrid({ submissions }: SubmissionGridProps) {
  if (submissions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No submissions yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {submissions.map((submission) => (
        <SubmissionCard key={submission.id} submission={submission} />
      ))}
    </div>
  );
}
