# Admin Panel Guide

## Accessing the Admin Panel

The admin panel is accessible at:
- **Local**: `http://localhost:3000/admin`
- **Production**: `https://codesquad.ai/admin` (or `https://www.codesquad.ai/admin`)

**Important**: This page is not publicly linked anywhere on the website. You must type the URL directly.

### After Deployment
Yes, you can access the admin page at `codesquad.ai/admin` after deployment. Just make sure to:
1. Set the `NEXT_PUBLIC_ADMIN_PASSWORD` environment variable in your deployment platform
2. Access the URL directly (it's not linked from the main site for security)

## Default Password

The default admin password is: `codesquad2025`

To change it, create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password_here
```

## Features

### Content Management
The admin panel allows you to manage three types of content:

1. **Articles** - Blog posts and technical articles
2. **White Papers** - In-depth research documents
3. **Podcasts** - Video podcasts with YouTube embeds

### Adding Content

1. Log in to the admin panel
2. Select the content type tab (Articles, White Papers, or Podcasts)
3. Click "Add [Content Type]"
4. Fill in the form:
   - **Title** * (required)
   - **Description** * (required)
   - **Author** * (required)
   - **Date** * (required) - Format: "Jan 15, 2025"
   - **Read Time / Duration** - Format: "8 min read" or "32 min listen"
   - **Tag** - Category tag (e.g., "Healthcare", "IoT")
   - **YouTube Video ID** (Podcasts only) - The ID from the YouTube URL
     - Example: For `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, use `dQw4w9WgXcQ`
5. Click "Save"

### Deleting Content

Click the trash icon next to any item to delete it.

## Important Notes

### Current Limitation
**The current implementation uses in-memory state only.** This means:
- Changes are NOT saved to disk
- Changes are lost when you refresh the page
- Changes are NOT deployed to production

### Making Changes Permanent

To make changes permanent with the current setup:

1. Edit the JSON files directly in `src/data/`:
   - `src/data/articles.json`
   - `src/data/white-papers.json`
   - `src/data/podcasts.json`
2. Commit and push changes to your repository
3. Redeploy the site

### Future Enhancement: Database Integration

For live content management without redeployment, you'll need to integrate a database:

**Recommended options:**
- **Supabase** (PostgreSQL) - Free tier, easy setup
- **Vercel KV** (Redis) - Free tier, instant setup on Vercel
- **MongoDB Atlas** - Free tier, flexible schema

With a database, the admin panel can save changes that persist across sessions and deployments.

## Public Pages

The content you manage appears on these pages:

- **Articles**: `/articles`
- **White Papers**: `/white-papers`
- **Podcasts**: `/podcasts`

The homepage "Latest Insights" section also displays content from these sources.

## Security

- The admin panel is password-protected
- The password is stored in environment variables
- The page is not linked anywhere on the public site
- Access is only possible by typing the URL directly

**For production**, consider:
- Using a strong, unique password
- Implementing proper authentication (OAuth, JWT)
- Adding rate limiting to prevent brute force attacks
- Using HTTPS (automatic on Vercel)
