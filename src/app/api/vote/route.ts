import { supabase, supabaseAdmin } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { submission_id, value } = await req.json();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  // Rate limit: 1 vote per submission per user
  const { data: existing } = await supabase
    .from('votes')
    .select('id')
    .eq('submission_id', submission_id)
    .eq('user_id', user.id)
    .single();

  if (existing) return NextResponse.json({ error: 'Already voted' }, { status: 400 });

  const { error } = await supabase
    .from('votes')
    .insert({ submission_id, user_id: user.id, value });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Update total votes count
  await supabaseAdmin!
    .from('submissions')
    .update({ total_votes: supabaseAdmin!.from('votes').select().eq('submission_id', submission_id) })
    .eq('id', submission_id);

  return NextResponse.json({ success: true });
}
