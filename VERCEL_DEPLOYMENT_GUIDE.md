# Vercel Deployment Guide with Neon Postgres Database

This guide will help you deploy your CodeSquad website to Vercel with a fully functional admin panel using Neon Postgres (Vercel's recommended database solution).

## Prerequisites

- A Vercel account (free tier works perfectly)
- Your project pushed to GitHub, GitLab, or Bitbucket

## Step 1: Install Dependencies

The required dependencies are already installed:

```bash
npm install @neondatabase/serverless
# or
bun install @neondatabase/serverless
```

## Step 2: Create Vercel Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your Git repository
4. Configure your project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (or leave default)
   - **Output Directory**: Leave default

## Step 3: Add Neon Postgres Database

### Option A: Through Vercel Dashboard (Recommended)

1. After creating the project, go to your project dashboard
2. Click on the "Storage" tab
3. Click "Create Database" or "Connect Store"
4. Select "Neon Postgres" (Vercel's native integration)
5. Click "Continue" and follow the prompts
6. Vercel will automatically create a Neon database and add the `DATABASE_URL` environment variable

### Option B: Create Neon Database Directly

1. Go to [Neon Console](https://console.neon.tech/)
2. Create a new project
3. Copy the connection string
4. In Vercel Dashboard → Your Project → Settings → Environment Variables
5. Add:
   - **Name**: `DATABASE_URL`
   - **Value**: Your Neon connection string (starts with `postgresql://`)
   - **Environment**: Production, Preview, Development

## Step 4: Set Admin Password (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Environment Variables"
2. Add a new environment variable:
   - **Name**: `NEXT_PUBLIC_ADMIN_PASSWORD`
   - **Value**: Your desired admin password (default is `codesquad2025`)
   - **Environment**: Production, Preview, Development

## Step 5: Deploy

1. Click "Deploy" or push to your main branch
2. Vercel will automatically build and deploy your project
3. The database tables will be created automatically on first request
4. Initial data will be seeded from your JSON files

## Step 6: Access Your Admin Panel

Once deployed, access your admin panel at:
```
https://your-domain.vercel.app/admin
```

Default password: `codesquad2025` (or the one you set in environment variables)

## How It Works

### Database Initialization
- Tables are created automatically on the first API request
- Initial data is seeded from `src/data/*.json` files
- Seeding only happens once (checks if data already exists)

### Admin Panel Features
- ✅ Add new articles, white papers, and podcasts
- ✅ Delete existing content
- ✅ Changes are instant (no git commits needed)
- ✅ Data persists across deployments
- ✅ Fully functional on Vercel

### Data Flow
1. Admin adds/deletes content via `/admin` panel
2. Changes are saved to Neon Postgres database
3. Frontend pages fetch data from database
4. All operations work seamlessly on Vercel

## Local Development

To test locally with Neon Postgres:

### Method 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Link your project:
```bash
vercel link
```

3. Pull environment variables:
```bash
vercel env pull .env.local
```

4. Run development server:
```bash
npm run dev
```

### Method 2: Manual Setup

1. Get your Neon connection string from [Neon Console](https://console.neon.tech/)
2. Create `.env.local` file in project root:
```env
DATABASE_URL=postgresql://user:password@host/database
NEXT_PUBLIC_ADMIN_PASSWORD=codesquad2025
```

3. Run development server:
```bash
npm run dev
```

## Troubleshooting

### Database Connection Issues
- Ensure `DATABASE_URL` environment variable is set in Vercel dashboard
- Check that Neon database is created and connection string is correct
- Verify connection string format: `postgresql://user:password@host/database`
- Redeploy after adding database

### Seeding Issues
- Check deployment logs in Vercel dashboard
- Database might already have data (seeding only runs once)
- Manually clear database if needed via Neon Console → SQL Editor

### Admin Panel Not Working
- Verify `NEXT_PUBLIC_ADMIN_PASSWORD` is set
- Check browser console for errors
- Ensure API routes are deployed correctly
- Check Vercel function logs for errors

### "DATABASE_URL environment variable is not set" Error
- Add `DATABASE_URL` to Vercel environment variables
- Redeploy the project
- For local development, ensure `.env.local` exists with `DATABASE_URL`

## Database Management

### View Data via Neon Console

1. Go to [Neon Console](https://console.neon.tech/)
2. Select your project
3. Click "SQL Editor"
4. Run queries:

```sql
-- View all articles
SELECT * FROM articles WHERE type = 'article';

-- View all white papers
SELECT * FROM articles WHERE type = 'white-paper';

-- View all podcasts
SELECT * FROM articles WHERE type = 'podcast';

-- Count total items
SELECT type, COUNT(*) FROM articles GROUP BY type;
```

### Clear All Data
```sql
DELETE FROM articles;
```

### Reset Database
```sql
DROP TABLE articles;
-- Then visit https://your-domain.vercel.app/api/init-db to recreate and reseed
```

### Manual Database Initialization

If automatic initialization doesn't work, you can manually initialize by visiting:
```
https://your-domain.vercel.app/api/init-db
```

This will create tables and seed initial data.

## Cost

### Neon Free Tier:
- 0.5 GB storage
- 1 project
- 10 branches
- Unlimited compute hours
- Perfect for content management with moderate traffic

### Vercel Hosting Free Tier:
- 100 GB bandwidth
- Unlimited deployments
- Serverless functions
- More than enough for most websites

## Why Neon?

- **Native Vercel Integration**: Seamless setup through Vercel dashboard
- **Serverless**: Scales automatically, pay only for what you use
- **Branching**: Create database branches for preview deployments
- **Fast**: Low latency with edge network
- **PostgreSQL**: Full PostgreSQL compatibility
- **Free Tier**: Generous free tier perfect for small to medium projects

## Migration from SQLite

The migration is complete! Your old SQLite database (`content.db`) is no longer needed. All data has been migrated to use Neon Postgres, which works perfectly on Vercel's platform.

### What Changed:
- ✅ Replaced `better-sqlite3` with `@neondatabase/serverless`
- ✅ Updated all database operations to be async
- ✅ Modified API routes to use Postgres
- ✅ Updated frontend pages to fetch data asynchronously
- ✅ Kept all existing functionality intact

## Environment Variables Summary

Required environment variables:

```env
# Required - Neon database connection string
DATABASE_URL=postgresql://user:password@host/database

# Optional - Admin panel password (default: codesquad2025)
NEXT_PUBLIC_ADMIN_PASSWORD=your-secure-password
```

## Next Steps

1. ✅ Deploy to Vercel following steps above
2. ✅ Create Neon database through Vercel Storage tab
3. ✅ Set `DATABASE_URL` environment variable (auto-set if using Vercel integration)
4. ✅ Set `NEXT_PUBLIC_ADMIN_PASSWORD` (optional)
5. ✅ Deploy and test admin panel
6. ✅ Add your content via admin panel
7. ✅ Share your live website!

## Support

If you encounter any issues:
1. Check Vercel deployment logs
2. Review Neon documentation: https://neon.tech/docs
3. Check Vercel + Neon integration guide: https://vercel.com/docs/storage/vercel-postgres
4. Ensure all environment variables are set correctly
5. Try manual initialization: visit `/api/init-db`

---

**Your admin panel is now fully functional on Vercel with Neon Postgres! 🎉**

**No database limitations, fully scalable, and completely free to start!**
