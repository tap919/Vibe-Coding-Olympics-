import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package, Users, Trophy, DollarSign, Settings } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-5xl font-bold mb-16 text-center">Control Center</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Link href="/admin/submissions">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-vibe-purple transition-all group">
            <Package className="w-16 h-16 text-vibe-purple mb-4 group-hover:scale-110 transition" />
            <h3 className="text-2xl font-bold">Submissions</h3>
            <p className="text-gray-400 mt-2">Review • Approve • Reject</p>
          </div>
        </Link>

        <Link href="/admin/sponsors">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-vibe-pink transition-all group">
            <DollarSign className="w-16 h-16 text-vibe-pink mb-4 group-hover:scale-110 transition" />
            <h3 className="text-2xl font-bold">Sponsors</h3>
            <p className="text-gray-400 mt-2">Manage tiers & logos</p>
          </div>
        </Link>

        <Link href="/admin/season">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-cyan-500 transition-all group">
            <Trophy className="w-16 h-16 text-cyan-500 mb-4 group-hover:scale-110 transition" />
            <h3 className="text-2xl font-bold">Season Settings</h3>
            <p className="text-gray-400 mt-2">Dates • Prize pool • Theme</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
