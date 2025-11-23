import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");




  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection === "home" && <Home setActiveSection={setActiveSection} />}
      {activeSection === "about" && <About />}
      {activeSection === "skills" && <Skills />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "contact" && <Contact />}
    </>
  );
}
