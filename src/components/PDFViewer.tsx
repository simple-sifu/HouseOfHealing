import './PDFViewer.css';

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

export function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  return (
    <div className="pdf-container">
      {title && <h3 className="pdf-title">{title}</h3>}
      <div className="pdf-wrapper">
        <iframe
          src={pdfUrl}
          width="100%"
          height="800px"
          className="pdf-iframe"
          title={title || 'PDF Document'}
        >
          <p>
            This browser does not support inline PDFs.{' '}
            <a href={pdfUrl} download>
              Click here to download the study guide.
            </a>
          </p>
        </iframe>
      </div>
    </div>
  );
}

