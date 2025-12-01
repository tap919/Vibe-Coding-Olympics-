"use client";

import { useEffect, useState } from "react";

interface LiveVoteCounterProps {
  submissionId: string;
  initialCount: number;
}

export function LiveVoteCounter({ submissionId, initialCount }: LiveVoteCounterProps) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // In a real implementation, this would use WebSocket or Server-Sent Events
    const interval = setInterval(async () => {
      try {
        const response = await fetch(`/api/submissions/${submissionId}/votes`);
        if (response.ok) {
          const data = await response.json();
          setCount(data.count);
        }
      } catch (error) {
        console.error("Failed to fetch vote count:", error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [submissionId]);

  return (
    <div className="flex items-center gap-2 text-lg font-semibold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      <span className="tabular-nums">{count.toLocaleString()}</span>
      <span className="text-sm font-normal text-muted-foreground">votes</span>
    </div>
  );
}
