import React from "react";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="left">
        <h1>Hello, Welcome to my Portfolio!</h1>
        <h3>I am Arvy M. Lacampuenga</h3>
        <p className="tagline">Computer Science Student</p>

        <a href="#projects" className="btn">
          My Projects
        </a>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </div>

      <div className="right">
        <img
          src="/images/profile.jpg"
          alt="Arvy M. Lacampuenga"
          className="profile-pic"
        />
      </div>
    </section>
  );
}
