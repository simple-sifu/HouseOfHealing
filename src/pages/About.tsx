import './About.css';

export function About() {
  return (
    <div className="about">
      <header className="about-header">
        <div className="about-logo">
          <img 
            src="/assets/HouseOfHealing.png" 
            alt="House of Healing" 
            className="about-logo-image"
          />
        </div>
        <h1 className="about-title">About</h1>
      </header>

      <section className="about-section">
        <h2 className="section-title">Statement of Faith</h2>
        <div className="content">
          <p>
            House of Healing is committed to providing faithful, biblically-sound Bible studies
            that help believers grow in their understanding of Scripture and their relationship
            with God.
          </p>
          <p>
            We believe in the authority and inspiration of the Bible, the Trinity, the deity of
            Christ, salvation by grace through faith, and the work of the Holy Spirit in the
            life of the believer.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">Contact</h2>
        <div className="content">
          <p>
            Have questions or feedback? We'd love to hear from you!
          </p>
          <p>
            <strong>Email:</strong> contact@houseofhealing.org
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">Author Bio</h2>
        <div className="content">
          <p>
            [Your bio and background in Bible study and teaching]
          </p>
        </div>
      </section>
    </div>
  );
}

