import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { fetchDocuments } from '@/services/notion';
import type { NotionDocument } from '@/types/notion';
import { LanguageSelector } from './LanguageSelector';

export function DocumentList() {
  const { t, i18n } = useTranslation();
  const [documents, setDocuments] = useState<NotionDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        setLoading(true);
        setError(null);
        const currentLanguage = i18n.language?.split('-')[0] || 'en';
        const docs = await fetchDocuments(currentLanguage);
        setDocuments(docs);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load documents');
      } finally {
        setLoading(false);
      }
    };

    loadDocuments();
  }, [i18n.language]);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">{t('common.loading')}</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">{t('common.error')}: {error}</div>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="header">
        <h1>{t('documents.title')}</h1>
        <LanguageSelector />
      </header>

      {documents.length === 0 ? (
        <div className="no-documents">{t('documents.noDocuments')}</div>
      ) : (
        <div className="document-grid">
          {documents.map((doc) => (
            <Link
              key={doc.id}
              to={`/document/${doc.slug}`}
              className="document-card"
            >
              <h2>{doc.title}</h2>
              <p className="document-meta">
                {t('documents.lastUpdated')}:{' '}
                {new Date(doc.lastEdited).toLocaleDateString()}
              </p>
              <span className="read-more">{t('documents.readMore')} →</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

