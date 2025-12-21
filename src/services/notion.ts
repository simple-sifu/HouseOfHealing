import type {
  NotionDocument,
  NotionDocumentContent,
  NotionDocumentsResponse,
  NotionDocumentResponse,
} from '@/types/notion';

const API_BASE = import.meta.env.PROD ? '/api' : '/api';

export async function fetchDocuments(language: string = 'en'): Promise<NotionDocument[]> {
  const response = await fetch(`${API_BASE}/notion/documents?language=${language}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch documents');
  }
  
  const data: NotionDocumentsResponse = await response.json();
  return data.documents;
}

export async function fetchDocumentById(id: string): Promise<NotionDocumentContent> {
  const response = await fetch(`${API_BASE}/notion/document?id=${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch document');
  }
  
  const data: NotionDocumentResponse = await response.json();
  return data.document;
}

export async function fetchDocumentBySlug(
  slug: string,
  language: string = 'en'
): Promise<NotionDocumentContent> {
  const response = await fetch(
    `${API_BASE}/notion/document-by-slug?slug=${slug}&language=${language}`
  );
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Document not found');
    }
    throw new Error('Failed to fetch document');
  }
  
  const data: NotionDocumentResponse = await response.json();
  return data.document;
}

