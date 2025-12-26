# House of Healing - Bible Studies Website

A modern, responsive website for Bible studies built with Vite, React, and TypeScript. Features a side-by-side layout with navigation on the left and content/PDF viewer on the right.

## Features

- ⚡ **Vite** for fast development and optimized builds
- ⚛️ **React 18** with TypeScript
- 📚 **Structured Content Hierarchy** - Overview, Thematic, Chapter, and Verse studies
- 📄 **PDF Viewer** - Display study guides inline with iframe
- 🧭 **Side-by-Side Layout** - Navigation sidebar with content area
- 🎨 **Modern UI** with responsive design
- 🔍 **Search Functionality** (UI ready for implementation)

## Project Structure

```
├── src/
│   ├── components/        # Reusable components
│   │   ├── Layout.tsx     # Main layout with sidebar
│   │   ├── NavSidebar.tsx # Navigation sidebar
│   │   ├── PDFViewer.tsx  # PDF display component
│   │   └── StudyDocument.tsx # Study page template
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Homepage with hero and recent studies
│   │   ├── StudyPage.tsx # Individual study page
│   │   ├── BookPage.tsx  # Book overview page
│   │   ├── TopicPage.tsx # Topic index page
│   │   ├── StudyTools.tsx # Study tools page
│   │   └── About.tsx     # About page
│   ├── data/             # Sample data
│   │   └── studies.ts    # Study data structure
│   ├── types/            # TypeScript types
│   │   └── study.ts      # Study-related types
│   ├── App.tsx           # Main app component with routing
│   └── main.tsx          # Entry point
├── public/               # Static assets (PDFs go here)
└── package.json
```

## Content Hierarchy

The site is organized around a 4-level structure:

1. **Level 1: Book Overview** - Introduction, timeline, full book study guide
2. **Level 2: Thematic Series** - Collections like "I Am Statements", "The Signs"
3. **Level 3: Chapter/Verse Studies** - Individual chapter and verse deep dives
4. **Level 4: Resource Assets** - Maps, word studies, printables

## Navigation Structure

- **Home** - Hero section, recent studies, search bar
- **Bible Books** - Old/New Testament books (currently: John)
- **Topic Index** - Studies organized by topic (Salvation, Holy Spirit, etc.)
- **Study Tools** - Maps, concordance links, printables
- **About** - Statement of faith, contact, author bio

## Document Page Template

Each study page includes:

- **Header**: Title and Scripture Reference
- **The Text**: Bible passage in a blockquote
- **The Commentary**: Study notes with subheaders
- **Application**: 3-5 reflection/discussion questions
- **Downloads**: Print-friendly PDF download button
- **Navigation**: Previous/Next study links

## PDF Viewing

PDFs are displayed using an iframe. To view a study with PDF:

- Navigate to `/studies/:studyId/pdf` for PDF view
- Or use the regular study page at `/studies/:studyId` for text-only view

Place PDF files in the `public/pdfs/` directory and reference them in the study data.

## Setup

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Adding Content

### Adding Studies

Edit `src/data/studies.ts` to add new studies. Each study should have:

- `id` - Unique identifier
- `title` - Study title
- `scriptureReference` - Bible reference (e.g., "John 1:1-18")
- `book` - Book name
- `type` - 'overview', 'thematic', 'chapter', 'verse', or 'resource'
- `content` - Passage, commentary, and application questions
- `pdfUrl` - Path to PDF file (optional)
- `nextStudyId` / `previousStudyId` - Navigation links

### Adding PDFs

1. Place PDF files in `public/pdfs/`
2. Reference them in study data: `pdfUrl: '/pdfs/your-file.pdf'`

### Adding Books

Add new books to the `books` array in `src/data/studies.ts`.

### Adding Topics

Add new topics to the `topics` array in `src/data/studies.ts`.

## Customization

### Styling

- Main styles: `src/App.css`
- Component styles: Individual `.css` files in component directories
- Layout: `src/components/Layout.css`
- Sidebar: `src/components/NavSidebar.css`

### Colors

The site uses a color scheme based on:
- Primary: `#2c3e50` (dark blue-gray)
- Accent: `#3498db` (blue)
- Background: `#f5f5f5` (light gray)
- Sidebar: `#2c3e50` (dark)

## Development

### Type Checking

```bash
npm run type-check
```

### Project Structure Notes

- Components are in `src/components/`
- Pages are in `src/pages/`
- Data is in `src/data/` (replace with API calls later)
- Types are in `src/types/`

## Future Enhancements

- [ ] Search functionality implementation
- [ ] API integration for dynamic content
- [ ] User accounts and bookmarks
- [ ] Comments/discussion on studies
- [ ] Advanced PDF viewer with annotations
- [ ] Mobile menu toggle for sidebar
- [ ] Print styles for study pages

## License

[Your License Here]

