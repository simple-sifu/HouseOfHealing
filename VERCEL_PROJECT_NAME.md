# Fixing Vercel Project Name Conflict

## The Problem

Vercel says: "Project 'house-of-healing' already exists, please use a new name."

This means either:
- You already have a project with this name
- Someone else has this name (unlikely but possible)

## Solutions

### Option 1: Use a Different Project Name (Recommended)

When importing your repository in Vercel:

1. Go to Vercel dashboard → **Add New Project**
2. Import your `HouseOfHealing` repository
3. When prompted for **Project Name**, change it to something unique:
   - `house-of-healing-bible-studies`
   - `house-of-healing-app`
   - `bible-studies-house-of-healing`
   - `house-of-healing-2024`
   - Or any other unique name you prefer

4. Continue with the deployment

### Option 2: Link to Existing Project

If you want to use the existing project:

1. Go to Vercel dashboard
2. Find the existing "house-of-healing" project
3. Go to **Settings** → **Git**
4. Click **"Connect Git Repository"** or **"Change Repository"**
5. Select your `HouseOfHealing` repository
6. This will link your repo to the existing project

### Option 3: Delete and Recreate

If the existing project is old/unused:

1. Go to Vercel dashboard
2. Find the existing "house-of-healing" project
3. Go to **Settings** → Scroll to **Danger Zone**
4. Click **"Delete Project"**
5. Confirm deletion
6. Create a new project with the same name

### Option 4: Use Vercel CLI

You can also set the project name via CLI:

```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Login
vercel login

# Link to existing project or create new one
vercel link

# When prompted:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No (to create new)
# - What's your project's name? house-of-healing-bible-studies (or your preferred name)
# - In which directory is your code located? ./
```

Then deploy:
```bash
vercel --prod
```

## Recommended Approach

**Use Option 1** - Just pick a slightly different name when importing. The project name doesn't affect your website URL (you can set a custom domain later anyway).

## After Deployment

Once deployed, you can:
- Set a custom domain in project settings
- The project name is just for organization in your Vercel dashboard

