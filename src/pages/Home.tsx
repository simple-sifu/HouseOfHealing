import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { studies } from '@/data/studies';
import './Home.css';

export function Home() {
  const recentStudies = studies.slice(0, 6);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Welcome to House of Healing</h1>
        <p className="hero-subtitle">
          Deep, thoughtful Bible studies to help you grow in faith and understanding
        </p>
        <form className="hero-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search studies, topics, or verses..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </section>

      {/* Recent Studies */}
      <section className="recent-studies">
        <h2 className="section-heading">Recent Studies</h2>
        <div className="studies-grid">
          {recentStudies.map(study => (
            <Link
              key={study.id}
              to={`/studies/${study.id}`}
              className="study-card"
            >
              <h3 className="study-card-title">{study.title}</h3>
              <p className="study-card-reference">{study.scriptureReference}</p>
              {study.type === 'thematic' && study.series && (
                <span className="study-card-series">{study.series}</span>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <h2 className="section-heading">Explore</h2>
        <div className="links-grid">
          <Link to="/books/john" className="quick-link-card">
            <h3>Gospel of John</h3>
            <p>Complete study series</p>
          </Link>
          <Link to="/topics/i-am-statements" className="quick-link-card">
            <h3>I Am Statements</h3>
            <p>Thematic study collection</p>
          </Link>
          <Link to="/study-tools" className="quick-link-card">
            <h3>Study Tools</h3>
            <p>Maps, resources & more</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

