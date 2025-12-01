import Link from "next/link";

interface SeasonPageProps {
  params: Promise<{ season: string }>;
}

export default async function SeasonPage({ params }: SeasonPageProps) {
  const { season } = await params;

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4 capitalize">{season.replace("-", " ")}</h1>
      <p className="text-muted-foreground mb-8">
        Welcome to {season.replace("-", " ")}! Explore submissions, check the leaderboard, or submit your own entry.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Link href={`/seasons/${season}/submissions`}>
          <div className="p-6 border rounded-lg hover:bg-accent transition-colors">
            <h3 className="text-xl font-semibold mb-2">Submissions</h3>
            <p className="text-muted-foreground">Browse all entries for this season</p>
          </div>
        </Link>
        <Link href={`/seasons/${season}/leaderboard`}>
          <div className="p-6 border rounded-lg hover:bg-accent transition-colors">
            <h3 className="text-xl font-semibold mb-2">Leaderboard</h3>
            <p className="text-muted-foreground">See who&apos;s leading the competition</p>
          </div>
        </Link>
        <Link href={`/seasons/${season}/submit`}>
          <div className="p-6 border rounded-lg hover:bg-accent transition-colors">
            <h3 className="text-xl font-semibold mb-2">Submit Entry</h3>
            <p className="text-muted-foreground">Submit your own project</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
