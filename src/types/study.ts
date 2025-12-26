export interface Study {
  id: string;
  title: string;
  scriptureReference: string;
  book: string;
  chapter?: number;
  verses?: string;
  type: 'overview' | 'thematic' | 'chapter' | 'verse' | 'resource';
  series?: string;
  content?: {
    passage?: string;
    commentary?: string;
    application?: string[];
  };
  pdfUrl?: string;
  nextStudyId?: string;
  previousStudyId?: string;
}

export interface Book {
  id: string;
  name: string;
  testament: 'old' | 'new';
  studies: Study[];
}

export interface Topic {
  id: string;
  name: string;
  studies: Study[];
}

