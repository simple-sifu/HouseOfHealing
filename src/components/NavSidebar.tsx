import { Link, useLocation } from 'react-router-dom';
import { books, topics } from '@/data/studies';
import './NavSidebar.css';

export function NavSidebar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <aside className="nav-sidebar">
      <div className="sidebar-header">
        <Link to="/" className="logo">
          <h1>House of Healing</h1>
        </Link>
      </div>

      <nav className="sidebar-nav">
        <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          Home
        </Link>

        <div className="nav-section">
          <h3 className="nav-section-title">Bible Books</h3>
          <div className="nav-subsection">
            <h4 className="nav-subsection-title">New Testament</h4>
            {books
              .filter(book => book.testament === 'new')
              .map(book => (
                <Link
                  key={book.id}
                  to={`/books/${book.id}`}
                  className={`nav-item nav-subitem ${isActive(`/books/${book.id}`) ? 'active' : ''}`}
                >
                  {book.name}
                </Link>
              ))}
          </div>
          <div className="nav-subsection">
            <h4 className="nav-subsection-title">Old Testament</h4>
            <span className="nav-item nav-subitem coming-soon">Coming Soon</span>
          </div>
        </div>

        <div className="nav-section">
          <h3 className="nav-section-title">Topic Index</h3>
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

