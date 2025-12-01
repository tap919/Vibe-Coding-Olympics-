import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="container py-12 md:py-24">
      <section className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Welcome to the
          <br />
          <span className="text-primary">Vibe Coding Olympics</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The ultimate competition for vibe coders worldwide. Showcase your skills,
          compete with the best, and win amazing prizes.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/seasons">View Seasons</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/live">Watch Live</Link>
          </Button>
        </div>
      </section>

      <section className="mt-24 grid md:grid-cols-3 gap-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Compete</h3>
          <p className="text-muted-foreground">
            Submit your best vibe coding projects and compete against talented
            developers from around the world.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Connect</h3>
          <p className="text-muted-foreground">
            Join a community of passionate vibe coders and make connections that
            last a lifetime.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Win</h3>
          <p className="text-muted-foreground">
            Earn recognition, win prizes, and take your vibe coding career to the
            next level.
          </p>
        </div>
      </section>
    </div>
  );
}
