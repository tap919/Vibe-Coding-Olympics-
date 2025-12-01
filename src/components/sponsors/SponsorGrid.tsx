import type { Sponsor } from "@/types";
import Link from "next/link";

interface SponsorGridProps {
  sponsors: Sponsor[];
}

const tierOrder = ["platinum", "gold", "silver", "bronze"] as const;

export function SponsorGrid({ sponsors }: SponsorGridProps) {
  const groupedSponsors = tierOrder.reduce((acc, tier) => {
    acc[tier] = sponsors.filter((s) => s.tier === tier);
    return acc;
  }, {} as Record<string, Sponsor[]>);

  const tierStyles = {
    platinum: "col-span-2 md:col-span-4",
    gold: "col-span-1 md:col-span-2",
    silver: "col-span-1",
    bronze: "col-span-1",
  };

  return (
    <div className="space-y-12">
      {tierOrder.map((tier) => {
        const tierSponsors = groupedSponsors[tier];
        if (tierSponsors.length === 0) return null;

        return (
          <div key={tier}>
            <h3 className="text-lg font-semibold capitalize mb-6">{tier} Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tierSponsors.map((sponsor) => (
                <Link
                  key={sponsor.id}
                  href={sponsor.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${tierStyles[tier]} flex items-center justify-center p-6 border rounded-lg hover:bg-accent transition-colors`}
                >
                  <img
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
