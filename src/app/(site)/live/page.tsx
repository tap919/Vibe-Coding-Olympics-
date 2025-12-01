"use client";

import { CountdownTimer } from "@/components/common/CountdownTimer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LivePage() {
  const nextEventDate = new Date("2025-02-01T18:00:00Z");

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Live</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-semibold mb-2">Stream Starting Soon</p>
              <p className="text-muted-foreground">
                The next live event will begin shortly
              </p>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">
            Watch the Vibe Coding Olympics live! Join us for exciting
            competitions, live coding challenges, and amazing showcases from
            talented vibe coders around the world.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Next Event</CardTitle>
            </CardHeader>
            <CardContent>
              <CountdownTimer targetDate={nextEventDate} />
              <p className="mt-4 text-sm text-muted-foreground">
                Season 3 Finals - Live from the Vibe Arena
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Live Voting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Vote for your favorite submissions during the live event!
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-muted rounded">
                  <span>Project Alpha</span>
                  <span className="font-semibold">324 votes</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded">
                  <span>Vibe Master 3000</span>
                  <span className="font-semibold">287 votes</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded">
                  <span>CodeVibes</span>
                  <span className="font-semibold">256 votes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
