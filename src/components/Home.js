import React from "react";

export default function Home({ setActiveSection }) {
  return (
    <section id="home" className="home-section">
      <div className="left">
        <h1>Hello Welcome to my Portfolio!</h1>
        <h3>I am Arvy M. Lacampuenga</h3>
        <p className="tagline">"Computer Science Student"</p>

        <button className="btn" onClick={() => setActiveSection("projects")}>
          My Projects
        </button>
        <button className="btn" onClick={() => setActiveSection("contact")}>
          Contact me
        </button>
      </div>

      <div className="right">
        <img 
          src="/images/myphoto.jpg" 
          alt="profile" 
          className="profile-pic" 
        />
      </div>
    </section>
  );
}
