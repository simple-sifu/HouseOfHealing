import './StudyTools.css';

export function StudyTools() {
  return (
    <div className="study-tools">
      <header className="tools-header">
        <h1 className="tools-title">Study Tools</h1>
        <p className="tools-subtitle">Supplementary resources for deeper Bible study</p>
      </header>

      <section className="tools-section">
        <h2 className="section-title">Maps</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>Jerusalem During Jesus' Time</h3>
            <p>Historical map of Jerusalem showing key locations from the Gospels</p>
            <a href="#" className="tool-link">View Map →</a>
          </div>
          <div className="tool-card">
            <h3>Galilee Region</h3>
            <p>Map of the Galilee region showing Jesus' ministry locations</p>
            <a href="#" className="tool-link">View Map →</a>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <h2 className="section-title">Resources</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>Concordance</h3>
            <p>Search for words and phrases across the Bible</p>
            <a href="#" className="tool-link">Open Concordance →</a>
          </div>
          <div className="tool-card">
            <h3>Greek Word Studies</h3>
            <p>Deep dives into key Greek words and their meanings</p>
            <a href="#" className="tool-link">Browse Studies →</a>
          </div>
          <div className="tool-card">
            <h3>Printables</h3>
            <p>Downloadable study guides and worksheets</p>
            <a href="#" className="tool-link">View Printables →</a>
          </div>
        </div>
      </section>
    </div>
  );
}

