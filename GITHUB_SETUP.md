# GitHub Setup & Deployment Guide

## Option 1: Push to Existing GitHub Repository

If you already have a GitHub repository connected:

1. **Check your current remote:**
   ```bash
   git remote -v
   ```

2. **Add and commit your changes:**
   ```bash
   git add .
   git commit -m "Initial House of Healing Bible study website"
   ```

3. **Push to GitHub:**
   ```bash
   git push origin main
   ```

## Option 2: Create New GitHub Repository

### Step 1: Create Repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in:
   - **Repository name:** `HouseOfHealing` (or your preferred name)
   - **Description:** "Bible study website built with Vite and React"
   - **Visibility:** Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### Step 2: Connect Local Repository to GitHub

1. **If you don't have a remote yet, add it:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/HouseOfHealing.git
   ```
   (Replace `YOUR_USERNAME` with your GitHub username)

2. **Or if you need to update the remote URL:**
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/HouseOfHealing.git
   ```

3. **Add and commit your files:**
   ```bash
   git add .
   git commit -m "Initial commit: House of Healing Bible study website"
   ```

4. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

## Option 3: Deploy to GitHub Pages

GitHub Pages can host your site, but Vite needs special configuration.

### Step 1: Install gh-pages package

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "type-check": "tsc --noEmit",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://YOUR_USERNAME.github.io/HouseOfHealing/"
}
```

(Replace `YOUR_USERNAME` with your GitHub username)

### Step 3: Update vite.config.ts

Add the `base` configuration:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/HouseOfHealing/', // Replace with your repository name
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
});
```

### Step 4: Deploy

```bash
npm run deploy
```

This will:
1. Build your site
2. Deploy the `dist` folder to the `gh-pages` branch
3. Make your site available at `https://YOUR_USERNAME.github.io/HouseOfHealing/`

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **"Deploy from a branch"**
4. Choose **"gh-pages"** branch and **"/ (root)"** folder
5. Click **Save**

Your site will be live in a few minutes!

## Option 4: Deploy to Vercel (Recommended)

Vercel is easier and better suited for Vite apps:

### Step 1: Push to GitHub

Make sure your code is on GitHub (follow Option 1 or 2 above).

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `HouseOfHealing` repository
4. Vercel will auto-detect Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**

Your site will be live at `https://house-of-healing.vercel.app` (or your custom domain)!

### Benefits of Vercel:
- ✅ Automatic deployments on every push
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Better performance
- ✅ No configuration needed for Vite

## Option 5: Deploy to Netlify

Similar to Vercel:

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect your GitHub repository
5. Settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**

## Recommended Workflow

1. **Development:**
   ```bash
   npm run dev
   ```

2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Deploy:**
   - If using Vercel/Netlify: Automatic on push
   - If using GitHub Pages: `npm run deploy`

## Troubleshooting

### GitHub Pages 404 Errors

- Make sure `base` in `vite.config.ts` matches your repository name
- Ensure `homepage` in `package.json` is correct
- Wait a few minutes after deployment

### Build Errors

- Run `npm install` to ensure all dependencies are installed
- Check that TypeScript compiles: `npm run type-check`
- Verify build works locally: `npm run build`

### PDFs Not Loading

- Ensure PDF files are in `public/pdfs/` directory
- Check that PDF paths in `src/data/studies.ts` start with `/pdfs/`
- PDFs must be committed to the repository (not in `.gitignore`)

## Next Steps

- Set up a custom domain (if desired)
- Configure automatic deployments
- Add environment variables (if needed)
- Set up CI/CD for automated testing

