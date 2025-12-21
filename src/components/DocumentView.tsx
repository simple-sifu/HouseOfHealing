import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchDocumentBySlug } from '@/services/notion';
import type { NotionDocumentContent } from '@/types/notion';
import { LanguageSelector } from './LanguageSelector';

export function DocumentView() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [document, setDocument] = useState<NotionDocumentContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDocument = async () => {
      if (!slug) {
        setError('Document slug is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const currentLanguage = i18n.language?.split('-')[0] || 'en';
        const doc = await fetchDocumentBySlug(slug, currentLanguage);
        setDocument(doc);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load document');
      } finally {
        setLoading(false);
      }
    };

    loadDocument();
  }, [slug, i18n.language]);

  const renderBlock = (block: any, index: number) => {
    switch (block.type) {
      case 'heading_1':
        return <h1 key={index}>{block.text}</h1>;
      case 'heading_2':
        return <h2 key={index}>{block.text}</h2>;
      case 'heading_3':
        return <h3 key={index}>{block.text}</h3>;
      case 'paragraph':
        return <p key={index}>{block.text}</p>;
      case 'bulleted_list_item':
        return <li key={index}>{block.text}</li>;
      case 'numbered_list_item':
        return <li key={index}>{block.text}</li>;
      case 'code':
        return (
          <pre key={index}>
            <code className={`language-${block.language}`}>{block.text}</code>
          </pre>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">{t('common.loading')}</div>
      </div>
    );
  }

  if (error || !document) {
    return (
      <div className="container">
        <div className="error">
          {error || t('common.notFound')}
        </div>
        <Link to="/" className="back-link">
          {t('common.back')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="header">
        <Link to="/" className="back-link">← {t('common.back')}</Link>
        <LanguageSelector />
      </header>

      <article className="document">
        <h1>{document.title}</h1>
        <div className="document-meta">
          {t('documents.lastUpdated')}:{' '}
          {new Date(document.lastEdited).toLocaleDateString()}
        </div>
        <div className="document-content">
          {document.content.map((block, index) => renderBlock(block, index))}
        </div>
      </article>
    </div>
  );
}

