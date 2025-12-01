# 🏆 Vibe Coding Olympics - Admin Dashboard

## Quick Setup

1. **Save the artifact JSON** as `vibe-admin.json`
2. **Run the extractor**:
   ```bash
   node extract.js
   ```
3. **Apply database migration**:
   ```bash
   supabase db push
   ```
4. **Start your dev server** and visit `/admin`

## Features

### 🎯 Submission Management
- Review all submissions in real-time
- Approve/reject with one click
- View videos and GitHub repos directly

### 💰 Sponsor Management  
- Track sponsor tiers (Platinum, Gold, Silver, Bronze)
- Manage logos and contribution amounts
- View total prize pool

### 🏅 Season Settings
- Configure competition dates
- Set prize pools
- Manage active/inactive seasons

## Access Control
Only users with `@vibeolympics.com` email addresses can access the admin panel.

## Tech Stack
- Next.js 14 (App Router)
- Supabase (Auth + Database)
- Tailwind CSS
- Lucide Icons