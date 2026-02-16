import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Shivam Kushwah</h3>
            <p className="footer-tagline">Architect | Interior Designer</p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-nav">
              <a href="#hero" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#contact" className="footer-link">Contact</a>
            </nav>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              <a 
                href="https://www.linkedin.com/in/shivam-kushwah-1083a33b1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:shivamkushwahtx@gmail.com" 
                className="social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+917725870348" 
                className="social-link"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Shivam Kushwah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
