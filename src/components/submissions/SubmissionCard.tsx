"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

type Submission = { id: string; title: string; video_url: string; total_votes: number; thumbnail_url?: string };

export function SubmissionCard({ submission }: { submission: Submission }) {
  const handleVote = async () => {
    await fetch('/api/vote', { method: 'POST', body: JSON.stringify({ submission_id: submission.id, value: 10 }) });
  };

  return (
    <Card className="bg-white/5 border-white/10 overflow-hidden group hover:border-vibe-purple transition-all">
      <div className="aspect-video relative overflow-hidden">
        <img src={submission.thumbnail_url || submission.video_url + '?thumb'} className="w-full h-full object-cover group-hover:scale-110 transition" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <Button onClick={handleVote} className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
          Vote Fire
        </Button>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-vibe-purple">{submission.title}</h3>
        <p className="text-3xl mt-2">{submission.total_votes} votes</p>
      </div>
    </Card>
  );
}
