# Deploying to Vercel - Troubleshooting Guide

## The Problem

If Vercel shows: "Could not access the repository. Please ensure you have access to it."

This usually means:
1. The repository is private and Vercel doesn't have permission
2. Vercel isn't properly connected to your GitHub account
3. You're trying to use SSH URL instead of GitHub integration

## Solution: Use Vercel's GitHub Integration

**DO NOT** paste the SSH URL (`git@github.com:simple-sifu/HouseOfHealing.git`) directly.

Instead, follow these steps:

### Step 1: Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account (or create an account)
3. If you haven't connected GitHub yet:
   - Click your profile icon → **Settings**
   - Go to **Git** → **GitHub**
   - Click **"Connect GitHub"** or **"Install Vercel for GitHub"**
   - Authorize Vercel to access your repositories
   - If your repo is private, make sure to grant access to private repos

### Step 2: Import Repository (Correct Way)

1. In Vercel dashboard, click **"Add New Project"**
2. You should see a list of your GitHub repositories
3. **Search for "HouseOfHealing"** in the list
4. Click **"Import"** next to your repository
5. **DO NOT** paste the SSH URL manually

### Step 3: Configure Build Settings

Vercel should auto-detect Vite, but verify:

- **Framework Preset:** Vite (should be auto-detected)
- **Root Directory:** `./` (leave as default)
- **Build Command:** `npm run build` (should be auto-filled)
- **Output Directory:** `dist` (should be auto-filled)
- **Install Command:** `npm install` (should be auto-filled)

### Step 4: Deploy

Click **"Deploy"** and wait for the build to complete.

## If Repository Doesn't Appear in Vercel

### Option A: Repository is Private

1. Go to GitHub → Your repository → **Settings** → **Collaborators**
2. Make sure Vercel has access, OR
3. Go to Vercel → **Settings** → **Git** → **GitHub**
4. Click **"Configure"** or **"Edit"**
5. Make sure **"Private Repositories"** access is enabled
6. Re-authorize if needed

### Option B: Reconnect GitHub

1. Go to Vercel → **Settings** → **Git**
2. Disconnect GitHub
3. Reconnect and authorize again
4. Make sure to grant access to all repositories (or at least this one)

### Option C: Check Repository Visibility

1. Go to your GitHub repository: `https://github.com/simple-sifu/HouseOfHealing`
2. Click **Settings** → Scroll to **Danger Zone**
3. Check if it's **Private** or **Public**
4. If private, make sure Vercel has access to private repos

## Alternative: Make Repository Public (Temporary)

If you want to test quickly:

1. Go to GitHub → Repository → **Settings**
2. Scroll to **Danger Zone**
3. Click **"Change visibility"** → **"Make public"**
4. Try importing in Vercel again
5. You can make it private again after deployment

## Alternative: Deploy via Vercel CLI

If the web interface doesn't work:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory:**
   ```bash
   cd /Users/tommy.han/projects/HouseOfHealing
   vercel
   ```

4. Follow the prompts:
   - Link to existing project? **Yes**
   - Which scope? (select your account)
   - Link to existing project? **Yes**
   - What's the name of your project? **HouseOfHealing**

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## Quick Checklist

- [ ] Signed in to Vercel with GitHub account
- [ ] GitHub is connected in Vercel Settings → Git
- [ ] Private repository access is enabled (if repo is private)
- [ ] Using "Import" from repository list, not pasting SSH URL
- [ ] Repository exists and is accessible on GitHub

## After Successful Deployment

Your site will be live at: `https://house-of-healing.vercel.app` (or similar)

You can:
- Set up a custom domain in Vercel project settings
- Enable automatic deployments (every push to main branch)
- Configure environment variables if needed

## Still Having Issues?

1. **Check Vercel Status:** https://www.vercel-status.com
2. **Check GitHub Status:** https://www.githubstatus.com
3. **Try the CLI method** (Option above)
4. **Contact Vercel Support** through their dashboard

