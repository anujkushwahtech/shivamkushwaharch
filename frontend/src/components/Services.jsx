import React from 'react';
import { Building2, Paintbrush, Box, MapPin, Wrench } from 'lucide-react';

const Services = ({ isVisible }) => {
  const services = [
    {
      icon: Building2,
      title: 'Architectural Design',
      description: 'Comprehensive architectural planning and design solutions for residential and commercial spaces.'
    },
    {
      icon: Paintbrush,
      title: 'Interior Design',
      description: 'Creative interior design concepts that blend aesthetics with functionality.'
    },
    {
      icon: Box,
      title: '3D Visualization',
      description: 'Photorealistic 3D renderings and walkthroughs to bring your vision to life.'
    },
    {
      icon: MapPin,
      title: 'Site Planning',
      description: 'Strategic site analysis and master planning for optimal space utilization.'
    },
    {
      icon: Wrench,
      title: 'Renovation Consulting',
      description: 'Expert guidance for renovation projects, preserving character while modernizing spaces.'
    }
  ];

  return (
    <section id="services" className={`services-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">Comprehensive architectural solutions</p>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <Icon size={32} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
