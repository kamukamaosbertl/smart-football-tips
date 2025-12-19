import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Have questions about our VIP tips or partnerships? Reach out directly.</p>
      </div>

      <div className="contact-grid">
        {/* Email Card */}
        <a href="mailto:support@yourtips.com" className="contact-card">
          <div className="contact-icon email-icon">✉️</div>
          <h3>Email Us</h3>
          <p>support@yourtips.com</p>
          <span className="contact-action">Send Message →</span>
        </a>

        {/* WhatsApp Card */}
        <a 
          href="https://wa.me/256700000000" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-card"
        >
          <div className="contact-icon whatsapp-icon">💬</div>
          <h3>WhatsApp</h3>
          <p>+256 761-515-752</p>
          <span className="contact-action">Chat Now →</span>
        </a>
      </div>
    </section>
  );
}