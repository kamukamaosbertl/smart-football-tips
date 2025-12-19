import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>SmartTips</h3>
          <p>Precision in every prediction.</p>
        </div>

        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Smart Football Tips. All rights reserved.</p>
          <p className="disclaimer">
            <strong>Disclaimer:</strong> Betting involves significant financial risk. Our predictions are for informational purposes only. No profit is guaranteed. Please gamble responsibly (18+).
          </p>
        </div>
      </div>
    </footer>
  );
}