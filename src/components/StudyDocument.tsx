import { Link } from 'react-router-dom';
import { PDFViewer } from './PDFViewer';
import { getStudyById } from '@/data/studies';
import './StudyDocument.css';

interface StudyDocumentProps {
  studyId: string;
  showPDF?: boolean;
}

export function StudyDocument({ studyId, showPDF = false }: StudyDocumentProps) {
  const study = getStudyById(studyId);

  if (!study) {
    return (
      <div className="study-document">
        <div className="error-message">Study not found</div>
      </div>
    );
  }

  const nextStudy = study.nextStudyId ? getStudyById(study.nextStudyId) : null;
  const previousStudy = study.previousStudyId ? getStudyById(study.previousStudyId) : null;

  return (
    <div className="study-document">
      {/* Header */}
      <header className="study-header">
        <h1 className="study-title">{study.title}</h1>
        <p className="study-reference">{study.scriptureReference}</p>
      </header>

      {/* The Text - Bible Passage */}
      {study.content?.passage && (
        <section className="study-section">
          <h2 className="section-title">The Text</h2>
          <blockquote className="bible-passage">
            {study.content.passage}
          </blockquote>
        </section>
      )}

      {/* PDF Viewer (if enabled) */}
      {showPDF && study.pdfUrl && (
        <section className="study-section">
          <PDFViewer pdfUrl={study.pdfUrl} title="Study Guide PDF" />
        </section>
      )}

      {/* The Commentary */}
      {study.content?.commentary && (
        <section className="study-section">
          <h2 className="section-title">The Commentary</h2>
          <div className="commentary-content">
            {study.content.commentary.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      {/* Application - Reflection Questions */}
      {study.content?.application && study.content.application.length > 0 && (
        <section className="study-section">
          <h2 className="section-title">Application</h2>
          <ol className="application-questions">
            {study.content.application.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ol>
        </section>
      )}

      {/* Downloads */}
      {study.pdfUrl && (
        <section className="study-section">
          <h2 className="section-title">Downloads</h2>
          <div className="downloads">
            <a
              href={study.pdfUrl}
              download
              className="download-button"
            >
              📄 Download Print-Friendly PDF
            </a>
          </div>
        </section>
      )}

      {/* Navigation */}
      <nav className="study-navigation">
        {previousStudy && (
          <Link to={`/studies/${previousStudy.id}`} className="nav-link nav-link-previous">
            ← Previous: {previousStudy.title}
          </Link>
        )}
        {nextStudy && (
          <Link to={`/studies/${nextStudy.id}`} className="nav-link nav-link-next">
            Next: {nextStudy.title} →
          </Link>
        )}
      </nav>
    </div>
  );
}

