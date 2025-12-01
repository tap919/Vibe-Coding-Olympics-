import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const seasons = [
  {
    id: "1",
    name: "Season 1",
    slug: "season-1",
    description: "The inaugural Vibe Coding Olympics",
    startDate: "2024-01-01",
    endDate: "2024-03-31",
    isActive: false,
  },
  {
    id: "2",
    name: "Season 2",
    slug: "season-2",
    description: "Summer of Vibe",
    startDate: "2024-06-01",
    endDate: "2024-08-31",
    isActive: false,
  },
  {
    id: "3",
    name: "Season 3",
    slug: "season-3",
    description: "The current season - compete now!",
    startDate: "2024-10-01",
    endDate: "2025-01-31",
    isActive: true,
  },
];

export default function SeasonsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Seasons</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {seasons.map((season) => (
          <Link key={season.id} href={`/seasons/${season.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {season.name}
                  {season.isActive && (
                    <span className="px-2 py-1 text-xs bg-green-500 text-white rounded-full">
                      Active
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{season.description}</p>
                <p className="text-sm text-muted-foreground">
                  {season.startDate} - {season.endDate}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
