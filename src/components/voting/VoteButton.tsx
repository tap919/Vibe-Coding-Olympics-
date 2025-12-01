"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useVote } from "@/hooks/useVote";

interface VoteButtonProps {
  submissionId: string;
  initialCount: number;
}

export function VoteButton({ submissionId, initialCount }: VoteButtonProps) {
  const [count, setCount] = useState(initialCount);
  const { isLoading, submitVote } = useVote({ submissionId });

  const handleVote = async () => {
    await submitVote(1);
    setCount((prev) => prev + 1);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleVote}
      disabled={isLoading}
      className="gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      {count}
    </Button>
  );
}
