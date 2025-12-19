import React from "react";
import "../styles/Header.css";

export default function Header() {
  // Smooth scroll helper for a better user experience
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hero" role="banner">
      <nav className="navbar">
        <div className="logo">SmartTips</div>
        {/* Optional: Add a small nav menu here later */}
      </nav>

      <div className="hero-content">
        <h1>Smart Football Tips</h1>
        <p>Expert Daily Safe Odds 1.5 & 2.0 Predictions</p>
        
        <div className="hero-actions">
          <a 
            href="#odd15" 
            className="hero-btn primary" 
            onClick={handleScroll}
          >
            View 1.5 Tips
          </a>
          <a 
            href="#odd2" 
            className="hero-btn secondary" 
            onClick={handleScroll}
          >
            View 2.0 Tips
          </a>
        </div>
      </div>
    </header>
  );
}