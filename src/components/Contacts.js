import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields");
      return;
    }

    setStatus("Sending...");

    // Simulate sending message (no backend)
    setTimeout(() => {
      setStatus("Message sent! Thank you.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Email
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Message
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </section>
  );
}
