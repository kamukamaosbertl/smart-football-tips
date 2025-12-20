import React from "react";
import "../styles/About.css";

// We receive liveWinRate as a prop from App.jsx
export default function About({ liveWinRate }) {
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
            {/* Professional action shot of a footballer on a dark background */}
            <img 
                  src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop" 
                  alt="Professional football player in action" 
                  className="about-img"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop" }}
                />
            <div className="stats-overlay">
              {/* This span now pulls live data from your spreadsheet calculation */}
              <span>{liveWinRate}% Win Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}