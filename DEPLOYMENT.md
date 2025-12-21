# Deployment Guide

## Deploying to Vercel

### Prerequisites

1. A GitHub, GitLab, or Bitbucket account
2. Your code pushed to a repository
3. Notion API credentials ready

### Steps

1. **Push your code to a Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect the framework (Vite)

3. **Configure Environment Variables**
   In the Vercel project settings, add these environment variables:
   - `NOTION_API_KEY` - Your Notion integration token
   - `NOTION_DATABASE_ID` - Your Notion database ID

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application
   - Your site will be live at `https://your-project.vercel.app`

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Local Development

### Running the Frontend

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Running the Backend (Optional)

For local development, you can run a local server:

```bash
npm run dev:server
```

This will start the Express server on `http://localhost:3001`

**Note:** In production, Vercel automatically handles the API routes as serverless functions. The local server is only for development purposes.

## Environment Variables

Create a `.env` file in the root directory:

```env
NOTION_API_KEY=your_notion_api_key_here
NOTION_DATABASE_ID=your_notion_database_id_here
PORT=3001
```

**Important:** Never commit your `.env` file to Git. It's already in `.gitignore`.

## Troubleshooting

### API Routes Not Working

- Ensure environment variables are set in Vercel
- Check that your Notion database is shared with the integration
- Verify the database ID is correct

### Documents Not Showing

- Check that documents have the correct `Language` property value
- Ensure the `Slug` property is filled in
- Verify the database properties match the expected format

### Build Errors

- Run `npm install` to ensure all dependencies are installed
- Check that TypeScript compiles: `npm run type-check`
- Review Vercel build logs for specific errors

