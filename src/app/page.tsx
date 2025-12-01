import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-pink-900/30 to-cyan-900/50" />
        <div className="container relative mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            VIBE CODING OLYMPICS
          </h1>
          <p className="mt-8 text-2xl text-gray-300">
            Where shaders meet showmanship
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/seasons/current">
              <Button size="lg" className="bg-vibe-purple hover:bg-vibe-pink text-xl px-12 py-6">
                Enter the Arena <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/live">
              <Button size="lg" variant="outline" className="text-xl px-12 py-6 border-2">
                <Zap className="mr-2" /> Watch Live
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <Trophy className="w-16 h-16 mx-auto text-yellow-500" />
            <p className="text-5xl font-bold mt-4 text-vibe-purple">$25,000+</p>
            <p className="text-gray-400">Prize Pool This Season</p>
          </div>
          <div>
            <Users className="w-16 h-16 mx-auto text-cyan-500" />
            <p className="text-5xl font-bold mt-4 text-vibe-pink">1,247</p>
            <p className="text-gray-400">Coders Competing</p>
          </div>
          <div>
            <Zap className="w-16 h-16 mx-auto text-pink-500" />
            <p className="text-5xl font-bold mt-4 text-vibe-cyan">LIVE</p>
            <p className="text-gray-400">Finale in 12 days</p>
          </div>
        </div>
      </section>
    </main>
  );
}
