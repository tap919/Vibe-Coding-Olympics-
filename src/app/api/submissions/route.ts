import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const season = searchParams.get('season');

  let query = supabase.from('submissions').select('*, season:season_id(*)').eq('status', 'approved').order('total_votes', { ascending: false });
  if (season) query = query.eq('season_id', season);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
