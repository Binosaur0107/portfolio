import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Sujeet Kumar</div>

      <nav className="menu">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
