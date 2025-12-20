import React, { useState } from "react";
import "../styles/OddsSection.css";

export default function OddsSection({ id, title, tips }) {
  // State to control the visibility of the optional history drawer
  const [showHistory, setShowHistory] = useState(false);

  // Filter tips into two groups based on the 'status' column from your sheet
  const activeTips = tips ? tips.filter(t => t.status === "pending") : [];
  const historyTips = tips ? tips.filter(t => t.status === "won" || t.status === "lost") : [];

  // --- WIN RATE CALCULATION ---
  const totalCompleted = historyTips.length;
  const totalWins = historyTips.filter(t => t.status === "won").length;
  // Calculate percentage (e.g., 85%) - only if there are finished games
  const winRate = totalCompleted > 0 ? Math.round((totalWins / totalCompleted) * 100) : 0;

  return (
    <section id={id} className="odds-section" aria-labelledby={`${id}-title`}>
      <div className="section-header">
        <div className="title-group">
          <h2 id={`${id}-title`}>{title}</h2>
          {/* Automatically shows your win accuracy */}
          {totalCompleted > 0 && (
            <span className="win-rate-badge">{winRate}% Success Rate</span>
          )}
        </div>
        <span className="badge">{activeTips.length} Tips Active</span>
      </div>

      {/* TODAY'S TIPS: Always visible if they are 'pending' */}
      <div className="odds-grid">
        {activeTips.length > 0 ? (
          activeTips.map((tip, index) => (
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

      {/* OPTIONAL HISTORY: Only shows if historyTips exist */}
      {historyTips.length > 0 && (
        <div className="history-container">
          <button 
            className="history-toggle-btn" 
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? "Hide Recent Results ↑" : "View Recent Results ↓"}
          </button>

          {showHistory && (
            <div className="history-drawer">
              <h4 className="history-header">Past Performances ({totalCompleted} Games)</h4>
              <div className="history-list">
                {historyTips.map((tip, index) => (
                  <div key={index} className={`history-item ${tip.status}`}>
                    <div className="history-info">
                      <span className="history-icon">
                        {tip.status === "won" ? "✅" : "❌"}
                      </span>
                      <span className="history-match">{tip.match}</span>
                    </div>
                    <div className="history-data">
                      <span className="history-pred">{tip.prediction}</span>
                      <span className="history-score">Score: {tip.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}