import React, { useState } from 'react';
import { X } from 'lucide-react';
import { projectsData } from '../data/mockData';

const Projects = ({ isVisible }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Residential', 'Commercial', 'Institutional'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.type === selectedFilter);

  return (
    <section id="projects" className={`projects-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A collection of architectural excellence</p>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`filter-button ${selectedFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-location">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>
            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.name} />
            </div>
            <div className="modal-details">
              <h2 className="modal-title">{selectedProject.name}</h2>
              <div className="modal-meta">
                <span className="meta-item">Type: {selectedProject.type}</span>
                <span className="meta-item">Location: {selectedProject.location}</span>
                <span className="meta-item">Year: {selectedProject.year}</span>
              </div>
              <p className="modal-description">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
