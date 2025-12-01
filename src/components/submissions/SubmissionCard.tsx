import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Submission } from "@/types";
import { VoteButton } from "@/components/voting/VoteButton";

interface SubmissionCardProps {
  submission: Submission;
}

export function SubmissionCard({ submission }: SubmissionCardProps) {
  return (
    <Card className="overflow-hidden">
      {submission.thumbnailUrl && (
        <div className="aspect-video bg-muted">
          <img
            src={submission.thumbnailUrl}
            alt={submission.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="line-clamp-1">
          <Link href={`/entry/${submission.id}`} className="hover:underline">
            {submission.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {submission.description}
        </p>
        {submission.teamName && (
          <p className="text-xs text-muted-foreground mt-2">
            by {submission.teamName}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <VoteButton submissionId={submission.id} initialCount={submission.voteCount} />
        <Link
          href={submission.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
        >
          View Project →
        </Link>
      </CardFooter>
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
