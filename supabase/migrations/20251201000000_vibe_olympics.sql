-- Vibe Coding Olympics Database Schema

create table seasons (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  name text not null,
  theme text,
  submission_start timestamp with time zone,
  submission_end timestamp with time zone,
  voting_end timestamp with time zone,
  live_date timestamp with time zone,
  prize_pool numeric default 0,
  is_active boolean default false,
  created_at timestamp with time zone default now()
);

create table submissions (
  id uuid primary key default uuid_generate_v4(),
  season_id uuid references seasons(id) on delete cascade,
  user_id uuid references auth.users not null,
  title text not null,
  description text,
  github_url text,
  video_url text,
  thumbnail_url text,
  source_zip_url text,
  score_judges numeric default 0,
  score_community numeric default 0,
  total_votes int default 0,
  status text default 'pending' check (status in ('pending', 'approved', 'rejected')),
  submitted_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table votes (
  id uuid primary key default uuid_generate_v4(),
  submission_id uuid references submissions(id) on delete cascade,
  user_id uuid references auth.users not null,
  value int not null check (value >= 1 and value <= 10),
  created_at timestamp with time zone default now(),
  unique(submission_id, user_id)
);

-- RLS Policies
alter table submissions enable row level security;
alter table votes enable row level security;

create policy "Public read submissions" on submissions for select using (true);
create policy "Users can submit" on submissions for insert with check (auth.uid() = user_id);
create policy "Users can update own" on submissions for update using (auth.uid() = user_id);

create policy "One vote per user" on votes for insert with check (auth.uid() = user_id);
create policy "Users see own votes" on votes for select using (auth.uid() = user_id);

-- Real-time
alter publication supabase_realtime add table submissions, votes;

-- Indexes
create index idx_submissions_season on submissions(season_id);
create index idx_votes_submission on votes(submission_id);
