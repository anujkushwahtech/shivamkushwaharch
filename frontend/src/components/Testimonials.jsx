import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = ({ isVisible }) => {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'Property Developer',
      text: 'Working with Shivam was an absolute pleasure. His attention to detail and innovative approach transformed our commercial project into a landmark building. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1649433658557-54cf58577c68?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NzE1MDMwMDV8MA&ixlib=rb-4.1.0&q=85&w=150&h=150&fit=crop'
    },
    {
      name: 'Priya Mehta',
      role: 'Homeowner',
      text: 'Shivam designed our dream home with such precision and creativity. He listened to our needs and delivered beyond our expectations. The space is both beautiful and functional.',
      image: 'https://images.pexels.com/photos/30004323/pexels-photo-30004323.jpeg?w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Amit Patel',
      role: 'Institution Director',
      text: 'The academic building Shivam designed for our institution perfectly balances heritage aesthetics with modern functionality. His professionalism and expertise are unmatched.',
      image: 'https://images.pexels.com/photos/30004315/pexels-photo-30004315.jpeg?w=150&h=150&fit=crop'
    }
  ];

  return (
    <section id="testimonials" className={`testimonials-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">What clients say about my work</p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="testimonial-quote" size={32} />
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
