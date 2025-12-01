import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r bg-muted/30 p-6">
        <Link href="/" className="text-xl font-bold">
          Vibe Olympics
        </Link>
        <nav className="mt-8 space-y-2">
          <Link
            href="/dashboard"
            className="block px-4 py-2 rounded-md hover:bg-accent transition-colors"
          >
            Overview
          </Link>
          <Link
            href="/dashboard/submissions"
            className="block px-4 py-2 rounded-md hover:bg-accent transition-colors"
          >
            My Submissions
          </Link>
          <Link
            href="/dashboard/team"
            className="block px-4 py-2 rounded-md hover:bg-accent transition-colors"
          >
            My Team
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
