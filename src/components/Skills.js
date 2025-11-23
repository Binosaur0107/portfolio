import React from "react";
import { Code, Zap, Layers, Terminal, Database, GitBranch } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "React", level: "Advanced", icon: <Code size={18} /> },
    { name: "JavaScript (ES6+)", level: "Advanced", icon: <Zap size={18} /> },
    { name: "Tailwind CSS / CSS", level: "Intermediate", icon: <Layers size={18} /> },
    { name: "Node.js", level: "Intermediate", icon: <Terminal size={18} /> },
    { name: "Databases (MySQL / SQLite)", level: "Intermediate", icon: <Database size={18} /> },
    { name: "Version Control (Git)", level: "Intermediate", icon: <GitBranch size={18} /> },
  ];

  const levelToWidth = (level) =>
    level === "Advanced" ? "90%" : level === "Intermediate" ? "65%" : "35%";

  return (
    <section id="skills" className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">Skills & Tools</h2>

        <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
          These are the technologies and tools I use regularly. I focus on building reliable front-end experiences with clean, maintainable code.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-sky-50 text-sky-500">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                  <p className="text-sm text-slate-500">Level: <span className="font-medium text-sky-600">{skill.level}</span></p>
                </div>
              </div>

              <div className="mt-4">
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-sky-400"
                    style={{ width: levelToWidth(skill.level) }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            className="inline-block px-6 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-all"
          >
            See Projects
          </button>
        </div>
      </div>
    </section>
  );
}
