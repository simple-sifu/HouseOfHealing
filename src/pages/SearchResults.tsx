import { useSearchParams, Link } from 'react-router-dom';
import { studies } from '@/data/studies';
import './SearchResults.css';

export function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  if (!query.trim()) {
    return (
      <div className="search-results">
        <div className="no-query">
          <h2>Search Studies</h2>
          <p>Enter a search term to find Bible studies, topics, or verses.</p>
        </div>
      </div>
    );
  }

  // Search through studies
  const searchTerm = query.toLowerCase();
  const matchingStudies = studies.filter(study => {
    const titleMatch = study.title.toLowerCase().includes(searchTerm);
    const referenceMatch = study.scriptureReference.toLowerCase().includes(searchTerm);
    const commentaryMatch = study.content?.commentary?.toLowerCase().includes(searchTerm);
    const passageMatch = study.content?.passage?.toLowerCase().includes(searchTerm);
    const seriesMatch = study.series?.toLowerCase().includes(searchTerm);
    
    return titleMatch || referenceMatch || commentaryMatch || passageMatch || seriesMatch;
  });

  return (
    <div className="search-results">
      <header className="search-header">
        <h1>Search Results</h1>
        <p className="search-query">Results for: "{query}"</p>
        <p className="result-count">
          {matchingStudies.length} {matchingStudies.length === 1 ? 'study' : 'studies'} found
        </p>
      </header>

      {matchingStudies.length === 0 ? (
        <div className="no-results">
          <p>No studies found matching "{query}"</p>
          <p className="suggestions">
            Try searching for:
            <ul>
              <li>Book names (e.g., "John", "Romans")</li>
              <li>Topics (e.g., "I Am", "salvation")</li>
              <li>Scripture references (e.g., "1:1", "chapter 2")</li>
              <li>Keywords from study titles or content</li>
            </ul>
          </p>
        </div>
      ) : (
        <section className="results-list">
          {matchingStudies.map(study => (
            <Link
              key={study.id}
              to={`/studies/${study.id}`}
              className="result-card"
            >
              <h3 className="result-title">{study.title}</h3>
              <p className="result-reference">{study.scriptureReference}</p>
              {study.series && (
                <span className="result-series">{study.series}</span>
              )}
              {study.content?.commentary && (
                <p className="result-excerpt">
                  {study.content.commentary.substring(0, 150)}...
                </p>
              )}
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}

