import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-item">
        <h3>TaskFlow - Task Management App</h3>
        <p>
          A responsive React app for managing tasks with create/edit/delete
          functionality, filters, and React Router.
        </p>
        <a
          href="https://github.com/pugarioo/TaskFlow"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View on GitHub
        </a>
      </div>

      <div className="project-item">
        <h3>Book Management - E-Library System</h3>
        <p>
          University library web app with book search, borrow/return features,
          admin management, built with PHP and MySQL backend.
        </p>
        <a
          href="https://github.com/pugarioo/book-management"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}
