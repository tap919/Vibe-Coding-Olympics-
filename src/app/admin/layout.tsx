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
