import React from 'react';

const About = ({ isVisible }) => {
  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">About Me</h2>
            <div className="about-text">
              <p>
                With a passion for creating spaces that inspire and function seamlessly, 
                I bring architectural visions to life through innovative design and meticulous attention to detail. 
                My approach combines timeless aesthetics with modern functionality, ensuring every project 
                reflects the unique needs and aspirations of my clients.
              </p>
              <p>
                Specializing in residential, commercial, and institutional architecture, 
                I believe in sustainable design principles and the power of architecture to transform communities.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-item">
                <h3 className="highlight-number">50+</h3>
                <p className="highlight-label">Projects Completed</p>
              </div>
              <div className="highlight-item">
                <h3 className="highlight-number">5+</h3>
                <p className="highlight-label">Years Experience</p>
              </div>
              <div className="highlight-item">
                <h3 className="highlight-number">100%</h3>
                <p className="highlight-label">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-wrapper">
              <img 
                src="https://customer-assets.emergentagent.com/job_shivam-architecture/artifacts/hxdns877_WhatsApp%20Image%202026-02-19%20at%201.54.42%20PM.jpeg" 
                alt="Shivam Kushwah - Architect" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
