import React from 'react';

function Projects() {
  const projects = [
    { name: 'Project 1', description: 'Description', link: '#' },
    { name: 'Project 2', description: 'Description', link: '#' },
    { name: 'Project 3', description: 'Description', link: '#' },
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            {project.name} - {project.description} <a href={project.link} target="_blank" rel="noopener noreferrer">View</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
