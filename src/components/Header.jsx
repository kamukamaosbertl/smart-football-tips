import React from "react";
import "../styles/Header.css";
import logoImg from "../assets/logo.jpeg";

export default function Header() {
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
      {/* 1. Animated Image Slideshow */}
      <div className="hero-slideshow">
        <div className="slide slide-1"></div>
        <div className="slide slide-2"></div>
        <div className="slide slide-3"></div>
        <div className="slide slide-4"></div>
        <div className="slide slide-5"></div>
      </div>

      <div className="hero-overlay"></div>

      <nav className="navbar">
        <div className="logo-container">
          <img src={logoImg} alt="SmartTips Logo" className="site-logo" />
          <span className="logo-text">
            Smart<span className="green-text">Tips</span>
          </span>
        </div>
      </nav>

      <div className="hero-content">
        <h1>Smart Football Tips</h1>
        <p>Expert Daily Safe Odds 1.5 & 2.0 Predictions</p>
        
        <div className="hero-actions">
          <a href="#odd15" className="hero-btn primary" onClick={handleScroll}>
            View 1.5 Tips
          </a>
          <a href="#odd2" className="hero-btn secondary" onClick={handleScroll}>
            View 2.0 Tips
          </a>
        </div>
      </div>
    </header>
  );
}