import React from 'react';
import { Link } from 'react-router';

function Landing() {
  return (
    <div className="landing-container">
      <header className="hero">
        <h1>Explore the Timeline of Scripture</h1>
        <p className="hero-subtitle">
          Discover the chronological journey of biblical events with Bible Chronology
        </p>
        <Link to="/login" className="cta-button">Get Started</Link>
      </header>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Interactive Timeline</h3>
            <p>
              Navigate through an interactive timeline that maps out major biblical events 
              from Creation to Revelation with precise historical context.
            </p>
          </div>

          <div className="feature-card">
            <h3>Detailed Event Analysis</h3>
            <p>
              Dive deep into individual events with scholarly insights, cross-references, 
              and historical documentation.
            </p>
          </div>

          <div className="feature-card">
            <h3>Searchable Database</h3>
            <p>
              Quickly find specific events, people, or periods using our powerful search 
              functionality and comprehensive database.
            </p>
          </div>

          <div className="feature-card">
            <h3>Visual Chronology</h3>
            <p>
              Experience the Bible through visual aids including maps, charts, and 
              illustrations that bring the timeline to life.
            </p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>Join thousands of learners exploring the chronology of the Bible</p>
        <Link to="/login" className="cta-button secondary">Start Exploring</Link>
      </footer>
    </div>
  );
}

export default Landing;