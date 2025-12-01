import { supabaseAdmin } from "@/lib/supabase";
import { DollarSign } from "lucide-react";

export default async function SponsorManagement() {
  const { data: sponsors } = await supabaseAdmin!
    .from('sponsors')
    .select('*')
    .eq('is_active', true)
    .order('amount', { ascending: false });

  const getTierColor = (tier: string) => {
    const colors = {
      platinum: 'text-cyan-400',
      gold: 'text-yellow-400',
      silver: 'text-gray-300',
      bronze: 'text-orange-400'
    };
    return colors[tier as keyof typeof colors] || 'text-gray-400';
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">Sponsors ({sponsors?.length || 0})</h2>
        <button className="bg-vibe-purple px-6 py-3 rounded-lg hover:bg-vibe-pink transition">
          + Add Sponsor
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sponsors?.map((s: any) => (
          <div key={s.id} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-vibe-purple transition-all">
            {s.logo_url ? (
              <img src={s.logo_url} alt={s.name} className="h-24 mx-auto object-contain mb-4" />
            ) : (
              <div className="h-24 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-12 h-12 opacity-20" />
              </div>
            )}
            <h3 className="text-2xl font-bold mt-6">{s.name}</h3>
            <p className="text-4xl font-bold text-vibe-purple mt-2">
              ${s.amount?.toLocaleString() || '0'}
            </p>
            <p className={`text-sm uppercase tracking-wider mt-2 font-bold ${getTierColor(s.tier)}`}>
              {s.tier}
            </p>
            {s.website_url && (
              <a 
                href={s.website_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-vibe-pink mt-2 inline-block"
              >
                Visit Website →
              </a>
            )}
          </div>
        ))}
        {(!sponsors || sponsors.length === 0) && (
          <div className="col-span-full text-center py-20 text-gray-500">
            <DollarSign className="w-20 h-20 mx-auto mb-4 opacity-20" />
            <p className="text-xl">No sponsors yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
