import React from 'react';

const Skills = ({ isVisible }) => {
  const skills = [
    { name: 'AutoCAD', level: 95 },
    { name: 'SketchUp', level: 90 },
    { name: 'Revit', level: 85 },
    { name: 'Lumion', level: 88 },
    { name: '3ds Max', level: 82 }
  ];

  return (
    <section id="skills" className={`skills-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Professional software expertise</p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
