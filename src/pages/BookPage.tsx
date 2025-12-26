import { useParams, Link } from 'react-router-dom';
import { books, getStudiesByBook } from '@/data/studies';
import './BookPage.css';

export function BookPage() {
  const { bookId } = useParams<{ bookId: string }>();
  const book = books.find(b => b.id === bookId);
  const studies = bookId ? getStudiesByBook(bookId) : [];

  if (!book) {
    return (
      <div className="book-page">
        <div className="error-message">Book not found</div>
      </div>
    );
  }

  const overview = studies.find(s => s.type === 'overview');
  const thematic = studies.filter(s => s.type === 'thematic');
  const chapters = studies.filter(s => s.type === 'chapter' || s.type === 'verse');

  return (
    <div className="book-page">
      <header className="book-header">
        <h1 className="book-title">{book.name}</h1>
        <p className="book-testament">{book.testament === 'new' ? 'New Testament' : 'Old Testament'}</p>
      </header>

      {overview && (
        <section className="book-section">
          <h2 className="section-title">Overview</h2>
          <Link to={`/studies/${overview.id}`} className="study-link">
            <h3>{overview.title}</h3>
            <p>{overview.content?.commentary}</p>
          </Link>
        </section>
      )}

      {thematic.length > 0 && (
        <section className="book-section">
          <h2 className="section-title">Thematic Series</h2>
          <div className="studies-list">
            {thematic.map(study => (
              <Link
                key={study.id}
                to={`/studies/${study.id}`}
                className="study-link"
              >
                <h3>{study.title}</h3>
                <p>{study.scriptureReference}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {chapters.length > 0 && (
        <section className="book-section">
          <h2 className="section-title">Chapter Studies</h2>
          <div className="studies-list">
            {chapters.map(study => (
              <Link
                key={study.id}
                to={`/studies/${study.id}`}
                className="study-link"
              >
                <h3>{study.title}</h3>
                <p>{study.scriptureReference}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

