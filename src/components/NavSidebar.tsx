import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { books, topics } from '@/data/studies';
import './NavSidebar.css';

export function NavSidebar() {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'bible-books': true,
    'topics': false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const newTestamentBooks = books.filter(book => book.testament === 'new');
  const oldTestamentBooks = books.filter(book => book.testament === 'old');

  return (
    <aside className="nav-sidebar">
      <div className="sidebar-header">
        <Link to="/" className="logo">
          <h1>House of Healing</h1>
        </Link>
      </div>

      <nav className="sidebar-nav">
        <Link to="/" className={`nav-item ${isActive('/') && !location.pathname.startsWith('/search') ? 'active' : ''}`}>
          Home
        </Link>

        {/* Bible Books - Collapsible */}
        <div className="nav-section">
          <button
            className="nav-section-header"
            onClick={() => toggleSection('bible-books')}
            aria-expanded={expandedSections['bible-books']}
          >
            <span>Bible Books</span>
            <span className="expand-icon">{expandedSections['bible-books'] ? '−' : '+'}</span>
          </button>
          
          {expandedSections['bible-books'] && (
            <div className="nav-section-content">
              {newTestamentBooks.length > 0 && (
                <div className="nav-subsection">
                  <h4 className="nav-subsection-title">New Testament</h4>
                  {newTestamentBooks.map(book => (
                    <Link
                      key={book.id}
                      to={`/books/${book.id}`}
                      className={`nav-item nav-subitem ${isActive(`/books/${book.id}`) ? 'active' : ''}`}
                    >
                      {book.name}
                    </Link>
                  ))}
                </div>
              )}
              
              {oldTestamentBooks.length > 0 && (
                <div className="nav-subsection">
                  <h4 className="nav-subsection-title">Old Testament</h4>
                  {oldTestamentBooks.map(book => (
                    <Link
                      key={book.id}
                      to={`/books/${book.id}`}
                      className={`nav-item nav-subitem ${isActive(`/books/${book.id}`) ? 'active' : ''}`}
                    >
                      {book.name}
                    </Link>
                  ))}
                </div>
              )}
              
              {oldTestamentBooks.length === 0 && (
                <div className="nav-subsection">
                  <h4 className="nav-subsection-title">Old Testament</h4>
                  <span className="nav-item nav-subitem coming-soon">Coming Soon</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Topics - Collapsible */}
        {topics.length > 0 && (
          <div className="nav-section">
            <button
              className="nav-section-header"
              onClick={() => toggleSection('topics')}
              aria-expanded={expandedSections['topics']}
            >
              <span>Topic Index</span>
              <span className="expand-icon">{expandedSections['topics'] ? '−' : '+'}</span>
            </button>
            
            {expandedSections['topics'] && (
              <div className="nav-section-content">
                {topics.map(topic => (
                  <Link
                    key={topic.id}
                    to={`/topics/${topic.id}`}
                    className={`nav-item ${isActive(`/topics/${topic.id}`) ? 'active' : ''}`}
                  >
                    {topic.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Other Links */}
        <div className="nav-section">
          <Link
            to="/study-tools"
            className={`nav-item ${isActive('/study-tools') ? 'active' : ''}`}
          >
            Study Tools
          </Link>
          <Link
            to="/about"
            className={`nav-item ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
        </div>
      </nav>
    </aside>
  );
}
