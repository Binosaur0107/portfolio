import React from "react";
import { Code, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Weather Dashboard",
      description: "A real-time weather tracking application using OpenWeather API. Features dynamic backgrounds based on weather conditions.",
      tags: ["React", "API", "CSS"],
      color: "bg-blue-50",
      demo: "#",
      repo: "#"
    },
    {
      title: "Task Master",
      description: "A productivity todo-list app with drag-and-drop functionality and local storage persistence.",
      tags: ["React", "LocalStorage", "DnD"],
      color: "bg-indigo-50",
      demo: "#",
      repo: "#"
    },
    {
      title: "E-Commerce Start",
      description: "A mock e-commerce landing page featuring product grids, cart state management, and responsive layout.",
      tags: ["React", "Tailwind", "Redux"],
      color: "bg-sky-50",
      demo: "#",
      repo: "#"
    }
  ];

  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-sky-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center">My Projects</h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one was an opportunity to learn something new.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-sky-200 transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className={`h-40 ${project.color} flex items-center justify-center`}>
                <Code className="text-sky-300 h-16 w-16 opacity-50 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold bg-sky-100 text-sky-600 rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-sky-500 hover:text-sky-700 flex items-center gap-1 text-sm font-semibold">
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="text-sky-500 hover:text-sky-700 flex items-center gap-1 text-sm font-semibold">
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
