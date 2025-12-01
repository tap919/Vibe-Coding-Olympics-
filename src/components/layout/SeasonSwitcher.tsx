"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const seasons = [
  { id: "1", name: "Season 1", slug: "season-1" },
  { id: "2", name: "Season 2", slug: "season-2" },
  { id: "3", name: "Season 3", slug: "season-3" },
];

export function SeasonSwitcher() {
  const [currentSeason, setCurrentSeason] = useState(seasons[2]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        {currentSeason.name}
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
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-40 rounded-md border bg-background shadow-lg">
          {seasons.map((season) => (
            <button
              key={season.id}
              onClick={() => {
                setCurrentSeason(season);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors"
            >
              {season.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
