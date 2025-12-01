"use client";

import { useState, useCallback } from "react";

interface UseVoteOptions {
  submissionId: string;
  initialVote?: number;
}

interface UseVoteReturn {
  vote: number;
  isLoading: boolean;
  error: string | null;
  submitVote: (value: number) => Promise<void>;
}

export function useVote({ submissionId, initialVote = 0 }: UseVoteOptions): UseVoteReturn {
  const [vote, setVote] = useState(initialVote);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitVote = useCallback(async (value: number) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          submissionId,
          value,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit vote");
      }

      setVote(value);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, [submissionId]);

  return {
    vote,
    isLoading,
    error,
    submitVote,
  };
}
