create table sponsors (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  tier text check (tier in ('platinum', 'gold', 'silver', 'bronze')),
  logo_url text,
  website_url text,
  amount numeric,
  is_active boolean default true,
  created_at timestamp with time zone default now()
);

alter table sponsors enable row level security;
create policy "Admin only" on sponsors for all using (auth.email() like '%@vibeolympics.com');
