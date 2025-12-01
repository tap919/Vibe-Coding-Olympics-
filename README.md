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

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Watch Fors

⚠️ **Security Considerations:**
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client
- Ensure RLS policies are properly configured
- Validate user email domain on server-side only

⚠️ **Dependencies Required:**
- `@supabase/supabase-js` - Supabase client
- `lucide-react` - Icons
- `clsx` and `tailwind-merge` - For `cn()` utility
- `next` - Next.js framework