export default function Contact() {
  return (
    <section id="contact" className="section-box">
      <h2>Contact</h2>

      <form 
        className="contact-form"
        action="mailto:arvymagimot07@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />

        <textarea name="message" placeholder="Your Message" required></textarea>

        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
}
