# SQLite Database Setup

## Overview

This project now uses **SQLite** for content storage instead of static JSON files. This allows the admin panel to save changes permanently.

## How It Works

### Local Development (SQLite)
- ✅ Uses `better-sqlite3` package
- ✅ Database file: `content.db` (created automatically)
- ✅ Changes persist across server restarts
- ✅ Perfect for local development

### Production (Vercel) - Migration Needed
- ⚠️ SQLite won't work on Vercel (serverless, no persistent file system)
- 🚀 **Solution**: Migrate to **Turso** (SQLite in the cloud)
- Turso uses the same SQLite syntax, minimal code changes needed

---

## Database Structure

### Table: `articles`

```sql
CREATE TABLE articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  author TEXT NOT NULL,
  readTime TEXT,
  date TEXT NOT NULL,
  tag TEXT,
  type TEXT NOT NULL DEFAULT 'article',  -- 'article', 'white-paper', or 'podcast'
  youtubeId TEXT,                        -- Only for podcasts
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Indexes
- `idx_articles_type` - Fast filtering by type
- `idx_articles_date` - Fast sorting by date

---

## Initial Data Seeding

On first run, the database automatically seeds data from:
- `src/data/articles.json`
- `src/data/white-papers.json`
- `src/data/podcasts.json`

**Note**: Seeding only happens once. If the database already has data, it won't re-seed.

---

## API Endpoints

### GET `/api/admin/articles?type={type}`
Fetch articles by type.

**Parameters:**
- `type`: `article`, `white-paper`, or `podcast`

**Response:**
```json
[
  {
    "id": 1,
    "title": "Article Title",
    "description": "Description",
    "author": "Author Name",
    "readTime": "8 min read",
    "date": "Jan 15, 2025",
    "tag": "Healthcare",
    "type": "article",
    "youtubeId": null
  }
]
```

### POST `/api/admin/articles`
Create a new article.

**Body:**
```json
{
  "title": "New Article",
  "description": "Description",
  "author": "Author Name",
  "readTime": "5 min read",
  "date": "Jan 20, 2025",
  "tag": "Technology",
  "type": "article"
}
```

### DELETE `/api/admin/articles?id={id}`
Delete an article by ID.

**Parameters:**
- `id`: Article ID (number)

### PUT `/api/admin/articles`
Update an article.

**Body:**
```json
{
  "id": 1,
  "title": "Updated Title",
  "description": "Updated description"
}
```

---

## Local Development

### First Time Setup

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Database is created automatically** at `content.db`

4. **Access admin panel**:
   ```
   http://localhost:3000/admin
   ```

### Database Location

The SQLite database file is located at:
```
/content.db
```

This file is **ignored by git** (added to `.gitignore`).

### Resetting the Database

To reset the database and re-seed from JSON files:

1. Stop the development server
2. Delete `content.db` file
3. Restart the development server

The database will be recreated and seeded automatically.

---

## Production Deployment (Vercel)

### ⚠️ Important: SQLite Won't Work on Vercel

Vercel uses **serverless functions** which:
- Have no persistent file system
- Are read-only after deployment
- Reset on every deployment

### 🚀 Solution: Migrate to Turso

**Turso** is SQLite designed for serverless environments.

#### Why Turso?
- ✅ Same SQLite syntax (minimal code changes)
- ✅ Works perfectly on Vercel
- ✅ Free tier: 500 databases, 1GB storage
- ✅ Edge deployment (fast worldwide)
- ✅ Easy migration from SQLite

#### Migration Steps (When Ready)

1. **Sign up for Turso**:
   ```bash
   curl -sSfL https://get.tur.so/install.sh | bash
   turso auth signup
   ```

2. **Create a database**:
   ```bash
   turso db create codesquad-content
   ```

3. **Get connection URL**:
   ```bash
   turso db show codesquad-content --url
   ```

4. **Install Turso client**:
   ```bash
   npm install @libsql/client
   ```

5. **Update `src/lib/db.ts`** to use Turso instead of better-sqlite3

6. **Add environment variables** in Vercel:
   ```
   TURSO_DATABASE_URL=libsql://your-db.turso.io
   TURSO_AUTH_TOKEN=your-auth-token
   ```

7. **Deploy to Vercel**

**I can help you with the migration when you're ready!**

---

## Alternative: Other Databases

If you prefer not to use Turso, here are alternatives:

### 1. Vercel KV (Redis)
- **Pros**: Native Vercel integration, very easy setup
- **Cons**: Not SQL, different query syntax
- **Cost**: Free tier (256MB)

### 2. Supabase (PostgreSQL)
- **Pros**: Full SQL database, built-in auth
- **Cons**: Different SQL dialect from SQLite
- **Cost**: Free tier (500MB)

### 3. MongoDB Atlas
- **Pros**: Flexible schema, easy to use
- **Cons**: NoSQL, not SQL
- **Cost**: Free tier (512MB)

### 4. VPS Hosting (DigitalOcean, Linode)
- **Pros**: Full control, native SQLite support
- **Cons**: Need to manage server, more expensive
- **Cost**: $5-10/month

---

## Database Operations

The `src/lib/db.ts` file provides these operations:

```typescript
import { dbOperations } from '@/lib/db';

// Get all articles
const articles = dbOperations.getByType('article');

// Get single article
const article = dbOperations.getById(1);

// Create new article
const newArticle = dbOperations.create({
  title: 'New Article',
  description: 'Description',
  author: 'Author Name',
  date: 'Jan 20, 2025',
  type: 'article',
});

// Update article
const updated = dbOperations.update(1, {
  title: 'Updated Title',
});

// Delete article
const success = dbOperations.delete(1);

// Get latest items (for homepage)
const latest = dbOperations.getLatest(6);
```

---

## Troubleshooting

### Database file not created
- Make sure the development server is running
- Check file permissions in the project directory
- Look for errors in the console

### Changes not persisting
- Verify you're using the API endpoints (not local state)
- Check the browser console for errors
- Ensure the database file exists

### "Database is locked" error
- Stop all running instances of the dev server
- Delete `content.db-shm` and `content.db-wal` files
- Restart the dev server

### Seeding not working
- Delete the `content.db` file
- Restart the dev server
- Check that JSON files exist in `src/data/`

---

## Files Modified

### New Files
- `src/lib/db.ts` - Database operations
- `src/app/api/admin/articles/route.ts` - API endpoints
- `DATABASE_SETUP.md` - This file

### Modified Files
- `src/app/admin/AdminDashboard.tsx` - Now uses API instead of local state
- `src/app/articles/page.tsx` - Fetches from database
- `src/app/white-papers/page.tsx` - Fetches from database
- `src/app/podcasts/page.tsx` - Fetches from database
- `.gitignore` - Added `*.db` files
- `package.json` - Added `better-sqlite3` dependency

---

## Summary

✅ **What Works Now:**
- Admin panel saves changes permanently (locally)
- Changes persist across server restarts
- All CRUD operations work (Create, Read, Update, Delete)
- Public pages fetch from database

⚠️ **For Production:**
- Need to migrate to Turso or another cloud database
- SQLite file won't work on Vercel
- Migration is straightforward (I can help!)

🚀 **Next Steps:**
1. Test the admin panel locally
2. Add/edit/delete content
3. Verify changes persist
4. When ready for production, migrate to Turso
