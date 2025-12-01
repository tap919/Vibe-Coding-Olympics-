import { SubmissionCard } from "@/components/submissions/SubmissionCard";

export default async function CurrentSeason() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/submissions?season=current`, { next: { revalidate: 10 } });
  const submissions = await res.json();

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-vibe-purple to-vibe-pink bg-clip-text text-transparent">
        Season 1: NEON DREAMS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {submissions.map((s: any) => <SubmissionCard key={s.id} submission={s} />)}
      </div>
    </div>
  );
}
