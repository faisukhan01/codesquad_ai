# Deployment Guide - Vercel

## Quick Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### 3. Add Environment Variables

After deployment:

1. Go to your project dashboard on Vercel
2. Navigate to: **Settings → Environment Variables**
3. Add the following variable:
   - **Key**: `NEXT_PUBLIC_ADMIN_PASSWORD`
   - **Value**: `your_secure_password_here` (change from default!)
   - **Environment**: Select all (Production, Preview, Development)
4. Click "Save"
5. Go to **Deployments** tab
6. Click the three dots on the latest deployment
7. Click "Redeploy" to apply the environment variable

### 4. Access Your Admin Panel

Your admin panel will be available at:
- `https://codesquad.ai/admin`
- `https://www.codesquad.ai/admin`

**Login with the password you set in step 3.**

---

## ⚠️ Important: Current Admin Panel Limitations

### What Works:
✅ Access admin panel at `/admin`
✅ View all articles, white papers, and podcasts
✅ Add new content (temporarily)
✅ Delete content (temporarily)
✅ Filter by content type

### What Doesn't Work:
❌ **Changes are NOT saved permanently**
❌ **Changes are lost on page refresh**
❌ **Changes are NOT deployed to production**

### Why?
The admin panel currently uses **in-memory state only** (no database connection).

---

## Making Admin Changes Permanent (Current Method)

### Option 1: Manual JSON Editing (Current Setup)

To add/edit/delete content permanently:

1. Edit the JSON files locally:
   - `src/data/articles.json`
   - `src/data/white-papers.json`
   - `src/data/podcasts.json`

2. Commit and push:
   ```bash
   git add src/data/
   git commit -m "Update content"
   git push
   ```

3. Vercel will automatically redeploy with your changes

### Option 2: Add Database Integration (Recommended for Live Admin)

To make the admin panel fully functional with persistent changes, you need to integrate a database.

#### Recommended Solutions:

**🚀 Easiest: Vercel KV (Redis)**
- Free tier: 256MB storage
- Zero configuration on Vercel
- Perfect for this use case
- Setup time: ~5 minutes

**🐘 Best for Complex Data: Supabase (PostgreSQL)**
- Free tier: 500MB database
- Built-in authentication
- Real-time capabilities
- Setup time: ~15 minutes

**🍃 Most Flexible: MongoDB Atlas**
- Free tier: 512MB storage
- Flexible schema
- Easy to use
- Setup time: ~10 minutes

---

## Quick Setup: Vercel KV (Recommended)

If you want to enable persistent admin changes:

### 1. Enable Vercel KV

1. Go to your Vercel project dashboard
2. Click on the **Storage** tab
3. Click **Create Database**
4. Select **KV (Redis)**
5. Name it: `codesquad-content`
6. Click **Create**

Vercel will automatically add these environment variables:
- `KV_URL`
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`
- `KV_REST_API_READ_ONLY_TOKEN`

### 2. Install Vercel KV Package

```bash
npm install @vercel/kv
```

### 3. Update Admin API Routes

I can help you create API routes that save to Vercel KV instead of memory.

**Would you like me to implement database integration now?**

---

## Domain Configuration

### Custom Domain Setup

1. Go to Vercel project dashboard
2. Navigate to: **Settings → Domains**
3. Add your domain: `codesquad.ai`
4. Follow Vercel's DNS configuration instructions
5. Add `www.codesquad.ai` as an alias (optional)

### DNS Records (Example)

Add these records to your domain registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

*Note: Vercel will provide exact DNS values when you add your domain*

---

## Post-Deployment Checklist

- [ ] Site is live and accessible
- [ ] Admin panel accessible at `/admin`
- [ ] Admin password is set and working
- [ ] All pages load correctly
- [ ] Images are displaying
- [ ] Contact form works
- [ ] Mobile responsive design works
- [ ] SSL certificate is active (HTTPS)
- [ ] Custom domain configured (if applicable)

---

## Troubleshooting

### Admin Panel Not Accessible
- Check if `NEXT_PUBLIC_ADMIN_PASSWORD` is set in Vercel
- Redeploy after adding environment variables
- Clear browser cache

### Changes Not Persisting
- This is expected without database integration
- Use manual JSON editing method (see above)
- Or implement database integration

### Build Errors
- Check Vercel deployment logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

---

## Security Recommendations

### For Production:

1. **Change Default Password**
   - Use a strong, unique password
   - Minimum 16 characters
   - Mix of letters, numbers, symbols

2. **Consider Additional Security**
   - Add IP whitelisting
   - Implement rate limiting
   - Use OAuth/JWT authentication
   - Add two-factor authentication

3. **Monitor Access**
   - Check Vercel analytics
   - Set up error monitoring (Sentry)
   - Review access logs regularly

---

## Need Help?

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Vercel KV Documentation**: https://vercel.com/docs/storage/vercel-kv

---

## Summary

**For now (without database):**
- ✅ You can deploy to Vercel
- ✅ You can access admin panel at `/admin`
- ✅ You can view and temporarily manage content
- ❌ Changes won't persist (need to edit JSON files manually)

**To make admin fully functional:**
- Add database integration (Vercel KV recommended)
- I can help you implement this if needed!
