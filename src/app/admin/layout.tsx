import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r bg-muted/30 p-6">
        <Link href="/" className="text-xl font-bold">
          Admin Panel
        </Link>
        <nav className="mt-8 space-y-2">
          <Link
            href="/admin"
            className="block px-4 py-2 rounded-md hover:bg-accent transition-colors"
          >
            Overview
          </Link>
          <Link
            href="/admin/entries"
            className="block px-4 py-2 rounded-md hover:bg-accent transition-colors"
          >
            Entries
          </Link>
          <Link
            href="/admin/users"
            className="block px-4 py-2 rounded-md hover:bg-accent transition-colors"
          >
            Users
          </Link>
        </nav>
        <div className="mt-8 pt-8 border-t">
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
