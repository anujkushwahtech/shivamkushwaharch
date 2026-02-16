import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Shivam Kushwah</h1>
        <p className="hero-subtitle">Architect | Interior Designer</p>
        <button onClick={scrollToProjects} className="hero-button">
          View Projects
        </button>
      </div>
      <button onClick={scrollToProjects} className="hero-scroll-indicator">
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
