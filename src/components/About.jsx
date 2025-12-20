import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <span className="subtitle">Why Choose Us</span>
          <h2>Expert Analysis, Daily Results</h2>
          <p>
            Smart Football Tips provides high-probability predictions based on 
            statistical analysis and team form. Our mission is to help you make 
            informed decisions with safe daily odds.
          </p>
          
          <div className="features">
            <div className="feature-item">
              <span className="feature-icon">📈</span>
              <div>
                <h4>Data Driven</h4>
                <p>We analyze head-to-head records and recent performance.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛡️</span>
              <div>
                <h4>Safe Strategy</h4>
                <p>Focusing on low-risk 1.5 and 2.0 odds for consistency.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <div className="image-placeholder">
            {/* High-quality dark stadium image for a premium sportsbook feel */}
            <img 
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80" 
              alt="Football Stadium Analysis" 
              className="about-img"
            />
            <div className="stats-overlay">
              <span>85% Win Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}