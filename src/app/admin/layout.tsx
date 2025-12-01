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
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase";

export const metadata = { title: "Admin • Vibe Coding Olympics" };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: { user } } = await supabaseAdmin!.auth.getUser();
  if (!user || !user.email?.endsWith("@vibeolympics.com")) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-vibe-purple to-vibe-pink bg-clip-text text-transparent">
            ADMIN PANEL
          </h1>
          <form action="/auth/signout" method="post">
            <button className="text-sm opacity-70 hover:opacity-100">Logout</button>
          </form>
        </div>
      </div>
      {children}
    </div>
  );
}
