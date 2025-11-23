export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="left">
        <h1>Hello Welcome to my Portfolio!</h1>
        <h3>I am Arvy M. Lacampuenga</h3>
        <p className="tagline">"Computer Science Student"</p>

        <button className="btn">My Projects</button>
        <button className="btn">Contact me</button>
      </div>

      <div className="right">
        <img 
          src="/images/profile.jpg"  // <-- relative to public folder
          alt="profile" 
          className="profile-pic" 
        />
      </div>
    </section>
  );
}
