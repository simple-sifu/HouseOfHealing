# Quick Start Guide

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## Adding Your First Study

1. **Add a PDF (optional):**
   - Place your PDF file in `public/pdfs/`
   - Example: `public/pdfs/john-chapter-1.pdf`

2. **Edit the study data:**
   - Open `src/data/studies.ts`
   - Add a new study object to the `studies` array:

   ```typescript
   {
     id: 'your-study-id',
     title: 'Your Study Title',
     scriptureReference: 'John 1:1-18',
     book: 'John',
     chapter: 1,
     verses: '1-18',
     type: 'chapter',
     content: {
       passage: 'Your Bible passage text here...',
       commentary: 'Your commentary and study notes here...',
       application: [
         'Question 1?',
         'Question 2?',
         'Question 3?'
       ]
     },
     pdfUrl: '/pdfs/your-pdf-file.pdf', // Optional
     nextStudyId: 'next-study-id', // Optional
     previousStudyId: 'previous-study-id' // Optional
   }
   ```

3. **Save and refresh:**
   - The new study will appear in the navigation and on the home page

## Viewing Studies

- **Text-only view:** `/studies/:studyId`
- **With PDF viewer:** `/studies/:studyId/pdf`

## Project Structure

- `src/data/studies.ts` - All study content (edit this to add studies)
- `public/pdfs/` - Place PDF files here
- `src/components/` - Reusable UI components
- `src/pages/` - Page components

## Next Steps

1. Add your PDF study guides to `public/pdfs/`
2. Update study data in `src/data/studies.ts`
3. Customize colors and styles in the CSS files
4. Add more books and topics as needed

For more details, see the main [README.md](./README.md).

