import React from "react";
import "../styles/OddsSection.css";

export default function OddsSection({ id, title, tips }) {
  const hasTips = tips && tips.length > 0;

  return (
    <section id={id} className="odds-section" aria-labelledby={`${id}-title`}>
      <div className="section-header">
        <h2 id={`${id}-title`}>{title}</h2>
        <span className="badge">Daily Update</span>
      </div>

      <div className="odds-grid">
        {hasTips ? (
          tips.map((tip, index) => (
            <div key={`${tip.match}-${index}`} className="odds-card">
              <div className="card-header">
                <span className="sport-icon">⚽</span>
                <span className="status-live">Verified</span>
              </div>
              <h3 className="match-name">{tip.match || "TBA"}</h3>
              <div className="prediction-box">
                <span className="label">Prediction:</span>
                <p className="prediction-value">{tip.prediction || "TBA"}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-tips">
            <p>Gathering the best tips for today... check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}