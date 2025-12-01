import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Overview</h1>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,234</div>
            <p className="text-xs text-green-500">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">567</div>
            <p className="text-xs text-green-500">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Review
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">23</div>
            <p className="text-xs text-yellow-500">Needs attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Votes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">45.2K</div>
            <p className="text-xs text-green-500">+25% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Submission {i}</p>
                    <p className="text-sm text-muted-foreground">by User {i}</p>
                  </div>
                  <span className="px-2 py-1 text-xs bg-yellow-500/10 text-yellow-500 rounded-full">
                    Pending
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">
                    U{i}
                  </div>
                  <div>
                    <p className="font-medium">User {i}</p>
                    <p className="text-sm text-muted-foreground">user{i}@example.com</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
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
