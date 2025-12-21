export interface NotionDocument {
  id: string;
  title: string;
  slug: string;
  language: string;
  lastEdited: string;
  url: string;
}

export interface NotionDocumentContent extends NotionDocument {
  content: NotionBlock[];
}

export interface NotionBlock {
  type: string;
  text?: string;
  language?: string;
  raw?: any;
}

export interface NotionDocumentsResponse {
  documents: NotionDocument[];
}

export interface NotionDocumentResponse {
  document: NotionDocumentContent;
}

