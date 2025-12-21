// Local development server (optional - Vercel handles this in production)
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve API routes (for local development)
// In production, Vercel handles these as serverless functions
app.get('/api/notion/documents', async (req, res) => {
  try {
    const handler = (await import('./api/notion/documents.js')).default;
    return handler(req, res);
  } catch (error) {
    console.error('Error loading handler:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/notion/document', async (req, res) => {
  try {
    const handler = (await import('./api/notion/document.js')).default;
    return handler(req, res);
  } catch (error) {
    console.error('Error loading handler:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/notion/document-by-slug', async (req, res) => {
  try {
    const handler = (await import('./api/notion/document-by-slug.js')).default;
    return handler(req, res);
  } catch (error) {
    console.error('Error loading handler:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

