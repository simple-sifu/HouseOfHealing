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

3. Create a `.env` file (you can copy from `.env.example`):
```bash
cp .env.example .env
# Or create manually: touch .env
```

4. Add your Notion API credentials to `.env`:
   ```env
   NOTION_API_KEY=your_notion_api_key_here
   NOTION_DATABASE_ID=your_notion_database_id_here
   PORT=3001
   ```
   
   **To get these values:**
   - **NOTION_API_KEY**: Follow [Step 1 in Notion Setup](#step-1-create-a-notion-integration) below
   - **NOTION_DATABASE_ID**: Follow [Steps 2-4 in Notion Setup](#step-2-create-a-notion-database) below
   
   > 💡 **Tip**: See the detailed [Notion Setup](#notion-setup) section below for step-by-step instructions with screenshots guidance.

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

#### Creating the Database

1. **Open Notion** and navigate to the page where you want to create the database
2. **Type `/`** to open the command menu, or click the `+` button
3. **Type "Table"** or "Database" and select **"Table - Inline"** or **"Table - Full page"**
   - "Table - Inline" embeds the database in your current page
   - "Table - Full page" creates a new page with the database
4. **Click on the database** to start editing it

#### Setting Up Database Properties

Once your database is created, you need to add the required properties:

1. **Title Property** (usually already exists):
   - The default "Name" column is your Title property
   - If it's not there, click the `+` at the top of a column
   - Select "Title" type
   - Name it "Title"

2. **Add Slug Property**:
   - Click the `+` button at the top right of the table (next to the last column)
   - Select property type: **"Text"**
   - Name it: **"Slug"**
   - This will store URL-friendly identifiers like "getting-started", "about-us"

3. **Add Language Property**:
   - Click the `+` button again
   - Select property type: **"Select"**
   - Name it: **"Language"**
   - Click on the property header to edit it
   - Click "Add options" and add:
     - `en` (for English)
     - `es` (for Spanish)
     - `fr` (for French)
     - Add any other language codes you need
   - You can add more languages later

4. **Content**:
   - The actual document content goes in the page body (not as a property)
   - When you open a database row/page, you can write content directly in it

#### Database Structure Summary

Your database should have these columns:
- **Title** (Title type) - Document title
- **Slug** (Text type) - URL-friendly identifier
- **Language** (Select type) - Language code (en, es, fr, etc.)
- **Page content** - Written in the page body when you open each row

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

