interface LeaderboardPageProps {
  params: Promise<{ season: string }>;
}

const mockLeaderboard = [
  { rank: 1, name: "Team Alpha", score: 1250, submissions: 3 },
  { rank: 2, name: "Vibe Masters", score: 1180, submissions: 2 },
  { rank: 3, name: "Code Wizards", score: 1050, submissions: 4 },
  { rank: 4, name: "Pixel Perfect", score: 980, submissions: 2 },
  { rank: 5, name: "Byte Brigade", score: 920, submissions: 3 },
];

export default async function LeaderboardPage({ params }: LeaderboardPageProps) {
  const { season } = await params;

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {season.replace("-", " ")} Leaderboard
      </h1>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Rank</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Team</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Score</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Submissions</th>
            </tr>
          </thead>
          <tbody>
            {mockLeaderboard.map((entry) => (
              <tr key={entry.rank} className="border-t">
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      entry.rank === 1
                        ? "bg-yellow-500"
                        : entry.rank === 2
                        ? "bg-gray-400"
                        : entry.rank === 3
                        ? "bg-amber-600"
                        : "bg-muted"
                    } text-white font-bold`}
                  >
                    {entry.rank}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium">{entry.name}</td>
                <td className="px-6 py-4">{entry.score.toLocaleString()}</td>
                <td className="px-6 py-4">{entry.submissions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
