import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const submissions = [
  {
    id: "1",
    title: "Vibe Weather App",
    status: "approved",
    votes: 156,
    season: "Season 3",
    createdAt: "2024-10-15",
  },
  {
    id: "2",
    title: "Chat Vibes",
    status: "approved",
    votes: 89,
    season: "Season 3",
    createdAt: "2024-10-20",
  },
  {
    id: "3",
    title: "Vibe Todo",
    status: "pending",
    votes: 0,
    season: "Season 3",
    createdAt: "2024-10-25",
  },
];

export default function DashboardSubmissionsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Submissions</h1>
        <Button asChild>
          <Link href="/seasons/season-3/submit">New Submission</Link>
        </Button>
      </div>

      <div className="space-y-4">
        {submissions.map((submission) => (
          <Card key={submission.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{submission.title}</span>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    submission.status === "approved"
                      ? "bg-green-500/10 text-green-500"
                      : submission.status === "pending"
                      ? "bg-yellow-500/10 text-yellow-500"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {submission.status}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>{submission.season}</span>
                <span>{submission.votes} votes</span>
                <span>Submitted on {submission.createdAt}</span>
                <Link
                  href={`/entry/${submission.id}`}
                  className="ml-auto text-primary hover:underline"
                >
                  View →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
