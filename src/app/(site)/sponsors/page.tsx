import { SponsorGrid } from "@/components/sponsors/SponsorGrid";
import type { Sponsor } from "@/types";

const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "TechCorp",
    logoUrl: "https://placehold.co/200x100?text=TechCorp",
    websiteUrl: "https://example.com/techcorp",
    tier: "platinum",
  },
  {
    id: "2",
    name: "DevTools Inc",
    logoUrl: "https://placehold.co/200x100?text=DevTools",
    websiteUrl: "https://example.com/devtools",
    tier: "gold",
  },
  {
    id: "3",
    name: "CloudHost",
    logoUrl: "https://placehold.co/200x100?text=CloudHost",
    websiteUrl: "https://example.com/cloudhost",
    tier: "gold",
  },
  {
    id: "4",
    name: "CodeEditor Pro",
    logoUrl: "https://placehold.co/200x100?text=CodeEditor",
    websiteUrl: "https://example.com/codeeditor",
    tier: "silver",
  },
  {
    id: "5",
    name: "API Gateway",
    logoUrl: "https://placehold.co/200x100?text=APIGateway",
    websiteUrl: "https://example.com/apigateway",
    tier: "silver",
  },
  {
    id: "6",
    name: "Debug Tool",
    logoUrl: "https://placehold.co/200x100?text=DebugTool",
    websiteUrl: "https://example.com/debugtool",
    tier: "bronze",
  },
];

export default function SponsorsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Our Sponsors</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        The Vibe Coding Olympics is made possible by the generous support of our
        sponsors. Thank you for believing in the vibe coding community!
      </p>
      <SponsorGrid sponsors={sponsors} />
    </div>
  );
}
