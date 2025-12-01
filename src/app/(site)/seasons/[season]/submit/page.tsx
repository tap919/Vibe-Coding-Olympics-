import { SubmitForm } from "@/components/submissions/SubmitForm";

interface SubmitPageProps {
  params: Promise<{ season: string }>;
}

export default async function SubmitPage({ params }: SubmitPageProps) {
  const { season } = await params;

  return (
    <div className="container py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        Submit to {season.replace("-", " ")}
      </h1>
      <SubmitForm seasonId={season} />
    </div>
  );
}
