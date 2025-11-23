import React from "react";

export default function Navbar({ activeSection, setActiveSection }) {
  return (
    <header className="navbar">
      <nav className="menu">
        <button 
          className={activeSection === "home" ? "active" : ""}
          onClick={() => setActiveSection("home")}
        >
          Home
        </button>
        <button 
          className={activeSection === "about" ? "active" : ""}
          onClick={() => setActiveSection("about")}
        >
          About Me
        </button>
        <button 
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => setActiveSection("skills")}
        >
          Skills
        </button>
        <button 
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => setActiveSection("projects")}
        >
          Projects
        </button>
        <button 
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => setActiveSection("contact")}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
