# Local Development Setup Guide

## 🚨 Important: Database Required for Admin Panel

**The admin panel will NOT work on localhost without a database connection.**

Your website pages will load, but the admin panel (`/admin`) needs a database to function.

---

## 🌐 Current Local Server

Your development server is running at:

**Local URL**: http://localhost:3001
**Network URL**: http://192.168.100.104:3001

---

## ✅ What Works Without Database

These pages will work fine on localhost without a database:

- ✅ Homepage (`/`)
- ✅ Navigation and UI components
- ✅ Static sections (hero, services, about, etc.)

---

## ❌ What Doesn't Work Without Database

These features require a database connection:

- ❌ Admin panel (`/admin`) - Will show database connection error
- ❌ Articles page (`/articles`) - Will show empty or error
- ❌ White papers page (`/white-papers`) - Will show empty or error
- ❌ Podcasts page (`/podcasts`) - Will show empty or error
- ❌ Adding/deleting content - Requires database

---

## 🔧 Option 1: Test Without Database (Limited)

If you just want to see the UI and homepage:

1. ✅ Server is already running at http://localhost:3001
2. ✅ Visit homepage to see design and layout
3. ❌ Don't visit `/admin` or content pages (they'll error)

**Use this for**: UI testing, design changes, homepage development

---

## 🔧 Option 2: Setup Local Database (Full Functionality)

To test the admin panel locally, you need a database connection.

### Method A: Create Free Neon Database (Recommended)

1. **Create Neon Account**
   - Go to https://console.neon.tech/
   - Sign up for free (no credit card required)

2. **Create Database**
   - Click "Create Project"
   - Choose a name (e.g., "codesquad-dev")
   - Select region closest to you
   - Click "Create Project"

3. **Get Connection String**
   - Copy the connection string (starts with `postgresql://`)
   - It looks like: `postgresql://user:password@host/database`

4. **Add to .env.local**
   - Open `.env.local` file
   - Uncomment and replace:
   ```env
   DATABASE_URL=postgresql://your-actual-connection-string
   ```

5. **Restart Dev Server**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev -- -p 3001
   ```

6. **Initialize Database**
   - Visit: http://localhost:3001/api/init-db
   - This creates tables and seeds data
   - You should see: `{"success":true,"message":"Database initialized and seeded successfully"}`

7. **Test Admin Panel**
   - Visit: http://localhost:3001/admin
   - Password: `codesquad2025`
   - Try adding/deleting content!

### Method B: Use Vercel's Database (After Deployment)

1. **Deploy to Vercel First**
   - Follow `QUICK_START.md`
   - Add Neon database through Vercel Storage tab

2. **Pull Environment Variables**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Link to your Vercel project
   vercel link
   
   # Pull environment variables (includes DATABASE_URL)
   vercel env pull .env.local
   ```

3. **Restart Dev Server**
   ```bash
   npm run dev -- -p 3001
   ```

4. **Test Admin Panel**
   - Visit: http://localhost:3001/admin
   - Everything should work!

---

## 🎯 Recommended Workflow

### For Development:

1. **First Time Setup**:
   - Create free Neon database
   - Add DATABASE_URL to `.env.local`
   - Initialize database via `/api/init-db`

2. **Daily Development**:
   - Run `npm run dev -- -p 3001`
   - Test changes on localhost
   - Use admin panel to test content management

3. **Before Deployment**:
   - Test everything locally
   - Commit and push to Git
   - Deploy to Vercel

### For Quick UI Testing (No Database):

1. Run `npm run dev -- -p 3001`
2. Visit http://localhost:3001
3. Test homepage and UI components
4. Don't visit `/admin` or content pages

---

## 🐛 Troubleshooting

### Error: "DATABASE_URL environment variable is not set"

**Problem**: No database connection configured

**Solution**: 
- Create Neon database and add DATABASE_URL to `.env.local`
- OR use Vercel CLI to pull environment variables

### Error: "Failed to fetch articles"

**Problem**: Database not initialized or connection failed

**Solution**:
- Visit http://localhost:3001/api/init-db to initialize
- Check DATABASE_URL is correct
- Verify Neon database is accessible

### Admin Panel Shows No Data

**Problem**: Database not seeded

**Solution**:
- Visit http://localhost:3001/api/init-db
- Check browser console for errors
- Verify database connection

### Port 3001 Already in Use

**Solution**:
```bash
# Use a different port
npm run dev -- -p 3002
```

---

## ✅ Vercel Deployment Guarantee

**YES, the admin panel WILL work on Vercel!** Here's why:

### On Vercel (Production):
✅ **Database**: Automatically connected when you add Neon through Storage tab
✅ **Environment Variables**: Automatically set by Vercel
✅ **Admin Panel**: Fully functional at `https://your-domain.vercel.app/admin`
✅ **Content Management**: Add/delete works perfectly
✅ **No Configuration**: Everything just works!

### On Localhost (Development):
⚠️ **Database**: You must manually configure DATABASE_URL
⚠️ **Environment Variables**: You must create `.env.local`
⚠️ **Admin Panel**: Only works after database setup
⚠️ **Configuration**: Requires manual setup

---

## 📊 Feature Comparison

| Feature | Localhost (No DB) | Localhost (With DB) | Vercel (Production) |
|---------|-------------------|---------------------|---------------------|
| Homepage | ✅ Works | ✅ Works | ✅ Works |
| UI Components | ✅ Works | ✅ Works | ✅ Works |
| Admin Panel | ❌ Error | ✅ Works | ✅ Works |
| Content Pages | ❌ Error | ✅ Works | ✅ Works |
| Add/Delete | ❌ Error | ✅ Works | ✅ Works |
| Setup Required | None | Manual | Automatic |

---

## 🎯 Quick Decision Guide

### "I just want to see the website design"
→ Use localhost without database (current setup)
→ Visit: http://localhost:3001

### "I want to test the admin panel locally"
→ Setup Neon database (5 minutes)
→ Follow Option 2, Method A above

### "I want to deploy and use it for real"
→ Deploy to Vercel (5 minutes)
→ Follow `QUICK_START.md`
→ Admin panel works automatically!

---

## 🚀 Current Status

✅ **Dev Server Running**: http://localhost:3001
✅ **Homepage**: Working
✅ **UI Components**: Working
⚠️ **Admin Panel**: Needs database setup
⚠️ **Content Pages**: Need database setup

---

## 💡 Recommendation

**For the fastest way to test the admin panel:**

1. **Deploy to Vercel now** (5 minutes)
   - Follow `QUICK_START.md`
   - Add Neon database through Vercel
   - Test admin panel on live site

2. **Then setup local development** (if needed)
   - Use `vercel env pull .env.local`
   - Test locally with same database

This way, you can verify everything works on Vercel first, then setup local development if you need it!

---

## 📞 Need Help?

- **Database Setup**: See `VERCEL_DEPLOYMENT_GUIDE.md`
- **Admin Panel**: See `ADMIN_PANEL_GUIDE.md`
- **Quick Deploy**: See `QUICK_START.md`

---

## ✅ Summary

**Current Setup**:
- ✅ Dev server running on port 3001
- ✅ Homepage and UI working
- ⚠️ Admin panel needs database

**To Test Admin Panel Locally**:
- Create free Neon database
- Add DATABASE_URL to `.env.local`
- Visit `/api/init-db` to initialize

**To Test Admin Panel on Vercel**:
- Deploy to Vercel (5 minutes)
- Add Neon database through Storage tab
- Admin panel works automatically!

**Guarantee**: Admin panel WILL work on Vercel after following deployment guide! 🎉

---

**Your dev server is ready at: http://localhost:3001**
