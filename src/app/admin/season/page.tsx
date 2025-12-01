import { supabaseAdmin } from "@/lib/supabase";
import { Trophy } from "lucide-react";

export default async function SeasonSettings() {
  const { data: seasons } = await supabaseAdmin!
    .from('seasons')
    .select('*')
    .order('start_date', { ascending: false });

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">Season Management</h2>
        <button className="bg-vibe-purple px-6 py-3 rounded-lg hover:bg-vibe-pink transition">
          + Create Season
        </button>
      </div>
      <div className="space-y-6">
        {seasons?.map((season: any) => (
          <div key={season.id} className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-vibe-purple">{season.name}</h3>
                <p className="text-gray-400 mt-2">{season.theme}</p>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">Start Date</p>
                    <p className="text-xl font-bold mt-1">
                      {new Date(season.start_date).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">End Date</p>
                    <p className="text-xl font-bold mt-1">
                      {new Date(season.end_date).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">Prize Pool</p>
                    <p className="text-xl font-bold mt-1 text-green-400">
                      ${season.prize_pool?.toLocaleString() || '0'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">Status</p>
                    <p className="text-xl font-bold mt-1">
                      {season.is_active ? (
                        <span className="text-green-400">● Active</span>
                      ) : (
                        <span className="text-gray-500">○ Inactive</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <Trophy className="w-12 h-12 text-vibe-pink" />
            </div>
          </div>
        ))}
        {(!seasons || seasons.length === 0) && (
          <div className="text-center py-20 text-gray-500">
            <Trophy className="w-20 h-20 mx-auto mb-4 opacity-20" />
            <p className="text-xl">No seasons configured</p>
          </div>
        )}
      </div>
    </div>
  );
}
