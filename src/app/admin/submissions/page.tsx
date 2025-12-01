import { supabaseAdmin } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { revalidatePath } from "next/cache";

export default async function AdminSubmissions() {
  const { data: submissions } = await supabaseAdmin!
    .from('submissions')
    .select('*, season:season_id(name)')
    .order('submitted_at', { ascending: false });

  async function updateStatus(formData: FormData) {
    "use server";
    const id = formData.get('id') as string;
    const status = formData.get('status') as string;
    await supabaseAdmin!.from('submissions').update({ status }).eq('id', id);
    revalidatePath('/admin/submissions');
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-8">Submission Review ({submissions?.length || 0})</h2>
      <div className="space-y-6">
        {submissions?.map((s: any) => (
          <div key={s.id} className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-vibe-purple">{s.title}</h3>
              {/* TODO: Consider using user profile display name instead of truncated user_id */}
              <p className="text-gray-400">by {s.user_id?.slice(0,8) || 'Unknown'} • Season: {s.season?.name || 'N/A'}</p>
              <div className="mt-3 flex gap-4">
                {s.video_url && <a href={s.video_url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Video</a>}
                {s.github_url && <a href={s.github_url} target="_blank" rel="noopener noreferrer" className="text-pink-400 underline">GitHub</a>}
              </div>
            </div>
            <div className="flex gap-3">
              {s.status === 'pending' && (
                <>
                  <form action={updateStatus}>
                    <input type="hidden" name="id" value={s.id} />
                    <input type="hidden" name="status" value="approved" />
                    <Button className="bg-green-600 hover:bg-green-500">Approve</Button>
                  </form>
                  <form action={updateStatus}>
                    <input type="hidden" name="id" value={s.id} />
                    <input type="hidden" name="status" value="rejected" />
                    <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/20">Reject</Button>
                  </form>
                </>
              )}
              {s.status === 'approved' && <span className="text-green-500 font-bold">✓ Approved</span>}
              {s.status === 'rejected' && <span className="text-red-500 font-bold">✗ Rejected</span>}
            </div>
          </div>
        ))}
        {(!submissions || submissions.length === 0) && (
          <div className="text-center py-20 text-gray-500">
            <Package className="w-20 h-20 mx-auto mb-4 opacity-20" />
            <p className="text-xl">No submissions yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
