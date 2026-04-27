# Quick Start: Deploy to Vercel in 5 Minutes

## 🚀 Fast Track Deployment

### Step 1: Push to Git (30 seconds)

```bash
git add .
git commit -m "Ready for Vercel deployment with Neon Postgres"
git push
```

### Step 2: Deploy to Vercel (2 minutes)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import" next to your repository
3. Click "Deploy" (use all defaults)
4. Wait for deployment to complete ✅

### Step 3: Add Database (2 minutes)

1. In your Vercel project dashboard, click **"Storage"** tab
2. Click **"Create Database"**
3. Select **"Neon Postgres"**
4. Click **"Continue"** and **"Connect"**
5. Done! ✅ (DATABASE_URL is automatically added)

### Step 4: Test Admin Panel (30 seconds)

1. Visit: `https://your-project.vercel.app/admin`
2. Enter password: `codesquad2025`
3. Try adding an article
4. Success! 🎉

---

## That's It!

Your website is now live with a fully functional admin panel!

### What You Can Do Now:

✅ Add articles, white papers, and podcasts via `/admin`
✅ Delete content instantly
✅ All changes are saved to the cloud database
✅ No git commits needed for content updates

### Optional: Change Admin Password

1. In Vercel project → **Settings** → **Environment Variables**
2. Add: `NEXT_PUBLIC_ADMIN_PASSWORD` = `your-secure-password`
3. Redeploy (or wait for next deployment)

---

## Need Help?

- **Full Guide**: See `VERCEL_DEPLOYMENT_GUIDE.md`
- **Migration Details**: See `MIGRATION_SUMMARY.md`
- **Troubleshooting**: Check Vercel function logs

---

## Local Development

Want to test locally?

```bash
# Install Vercel CLI
npm i -g vercel

# Link project and pull environment variables
vercel link
vercel env pull .env.local

# Run locally
npm run dev
```

Now visit `http://localhost:3000/admin` to test!

---

**Total Time: ~5 minutes**
**Total Cost: $0**
**Admin Panel: Fully Functional** ✅

Happy deploying! 🚀
