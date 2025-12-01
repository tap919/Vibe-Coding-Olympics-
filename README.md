# Vibe Coding Olympics

The ultimate competition platform for vibe coders worldwide. Built with Next.js 15, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🏆 **Seasonal Competitions** - Organize coding competitions by seasons
- 🎯 **Submissions** - Users can submit their projects with descriptions and URLs
- 🗳️ **Voting System** - Community voting with rate limiting
- 🏅 **Leaderboard** - Real-time rankings for each season
- 📺 **Live Events** - Watch live streams and vote in real-time
- 🎨 **Dark Mode** - Full dark mode support
- 👥 **Team Support** - Create and manage teams
- 🔐 **Authentication** - Secure auth with Clerk
- 💳 **Payments** - Stripe integration for memberships/sponsorships

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Clerk
- **Payments**: Stripe
- **Storage**: Supabase Storage / Cloudflare R2

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Clerk account (for auth)
- Stripe account (optional, for payments)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vibe-coding-olympics.git
   cd vibe-coding-olympics
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables in `.env.local`:
   - Clerk keys from your Clerk dashboard
   - Supabase URL and keys from your Supabase project
   - Stripe keys (optional)

4. Set up the database:
   ```bash
   # Apply migrations
   npm run db:migrate
   
   # Seed initial data
   npm run db:seed
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
vibe-coding-olympics/
├── .github/workflows/     # CI/CD workflows
├── public/                # Static assets
│   ├── logo.svg
│   └── assets/
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (auth)/        # Auth routes
│   │   ├── (site)/        # Public site routes
│   │   ├── dashboard/     # User dashboard
│   │   ├── admin/         # Admin panel
│   │   └── api/           # API routes
│   ├── components/        # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── layout/        # Layout components
│   │   ├── submissions/   # Submission components
│   │   ├── voting/        # Voting components
│   │   ├── sponsors/      # Sponsor components
│   │   └── common/        # Common components
│   ├── lib/               # Utility functions
│   ├── types/             # TypeScript types
│   └── hooks/             # Custom React hooks
├── supabase/              # Supabase config & migrations
└── drizzle/               # Drizzle ORM (optional)
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in the Vercel dashboard
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import the project in Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `.next`
5. Add environment variables
6. Deploy

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed the database

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
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
# Vibe Coding Olympics

One-command deploy. Already looks insane.

```bash
npm install
cp .env.example .env.local
# Add your Supabase + Clerk keys
npm run dev
```

Deploy → Vercel (zero config)

You're live. Go win the internet.
