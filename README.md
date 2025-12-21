# House of Healing

A modern web application built with Vite, React, TypeScript, and Node.js, integrated with Notion API for content management and multi-language support.

## Features

- ⚡ Vite for fast development and optimized builds
- ⚛️ React 18 with TypeScript
- 🌍 Multi-language localization (i18n)
- 📝 Notion API integration for content management
- 🚀 Deployed on Vercel with serverless functions
- 🎨 Modern UI with responsive design

## Setup

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Notion API key and database ID

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Add your Notion API credentials to `.env`:
   - Get your Notion API key from https://www.notion.so/my-integrations
   - Create a Notion database and get its ID
   - Add both to your `.env` file

### Development

Run the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000` and the API at `http://localhost:3001`.

### Building

Build for production:
```bash
npm run build
```

### Deployment to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `NOTION_API_KEY`
   - `NOTION_DATABASE_ID`
4. Deploy!

## Notion Setup

### Step 1: Create a Notion Integration

1. Go to https://www.notion.so/my-integrations
2. Click "New integration"
3. Give it a name (e.g., "House of Healing")
4. Select your workspace
5. Copy the "Internal Integration Token" - this is your `NOTION_API_KEY`

### Step 2: Create a Notion Database

1. Create a new database in Notion (Table view)
2. Add the following properties:
   - **Title** (Type: Title) - The document title
   - **Slug** (Type: Text) - Unique identifier (e.g., "getting-started", "about-us")
   - **Language** (Type: Select) - Language code options:
     - Add options: `en`, `es`, `fr` (or any other language codes you want)
   - **Content** - This will be the page content (you'll write content directly in the page)

### Step 3: Share Database with Integration

1. Open your database
2. Click the "..." menu in the top right
3. Select "Add connections"
4. Find and select your integration
5. Click "Confirm"

### Step 4: Get Database ID

1. Open your database in Notion
2. Look at the URL - it will look like:
   ```
   https://www.notion.so/workspace/DATABASE_ID?v=...
   ```
3. Copy the `DATABASE_ID` (the long string of characters)
4. This is your `NOTION_DATABASE_ID`

### Step 5: Create Documents

1. Create new pages in your database
2. Fill in the properties:
   - **Title**: The document title
   - **Slug**: A URL-friendly identifier (e.g., "welcome", "getting-started")
   - **Language**: Select the language (e.g., "en")
3. Write your content directly in the page body
4. Create the same document in different languages with the same slug but different language property

## Project Structure

```
├── api/                 # Vercel serverless functions
│   └── notion/         # Notion API endpoints
├── src/
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   ├── i18n/           # Localization configuration
│   ├── services/       # API services
│   ├── types/          # TypeScript types
│   └── App.tsx         # Main app component
├── public/             # Static assets
└── vercel.json         # Vercel configuration
```

## Localization

The app supports multiple languages. Add new languages by:
1. Creating translation files in `src/i18n/locales/`
2. Adding the language to the language selector
3. Ensuring Notion documents have the corresponding language tag

