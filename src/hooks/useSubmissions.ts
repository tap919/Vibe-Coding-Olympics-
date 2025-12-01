"use client";

import { useState, useEffect, useCallback } from "react";
import type { Submission } from "@/types";

interface UseSubmissionsOptions {
  seasonId?: string;
  status?: "pending" | "approved" | "rejected";
}

interface UseSubmissionsReturn {
  submissions: Submission[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useSubmissions(options: UseSubmissionsOptions = {}): UseSubmissionsReturn {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      if (options.seasonId) params.append("seasonId", options.seasonId);
      if (options.status) params.append("status", options.status);

      const response = await fetch(`/api/submissions?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Failed to fetch submissions");
      }

      const data = await response.json();
      setSubmissions(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, [options.seasonId, options.status]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  return {
    submissions,
    isLoading,
    error,
    refetch: fetchSubmissions,
  };
}
