import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const prizes = [
  {
    rank: 1,
    title: "Grand Champion",
    description: "The ultimate vibe coder takes home the grand prize",
    value: "$10,000 + Custom Trophy",
    emoji: "🏆",
  },
  {
    rank: 2,
    title: "Runner Up",
    description: "Second place finisher with exceptional vibes",
    value: "$5,000 + Silver Medal",
    emoji: "🥈",
  },
  {
    rank: 3,
    title: "Third Place",
    description: "Bronze medal winner with great vibes",
    value: "$2,500 + Bronze Medal",
    emoji: "🥉",
  },
  {
    rank: 4,
    title: "Community Favorite",
    description: "Most voted submission by the community",
    value: "$1,000 + Special Badge",
    emoji: "❤️",
  },
  {
    rank: 5,
    title: "Best Design",
    description: "Most visually stunning project",
    value: "$1,000 + Design Award",
    emoji: "🎨",
  },
  {
    rank: 6,
    title: "Most Innovative",
    description: "Most creative and innovative solution",
    value: "$1,000 + Innovation Award",
    emoji: "💡",
  },
];

export default function PrizesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Prizes</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Compete for amazing prizes and recognition in the Vibe Coding Olympics.
        Here&apos;s what you could win!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prizes.map((prize) => (
          <Card key={prize.rank} className={prize.rank <= 3 ? "border-2 border-primary" : ""}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-4xl">{prize.emoji}</span>
                <div>
                  <div>{prize.title}</div>
                  <div className="text-sm text-muted-foreground font-normal">
                    {prize.value}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{prize.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
