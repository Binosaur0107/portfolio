import React, { useState } from "react";
import { AtSign, PhoneCall, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    // Simulate async sending
    setTimeout(() => {
      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10 text-center">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-sky-50 p-8 rounded-2xl shadow-md border border-sky-100"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="block text-slate-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Write your message here"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              Send <Send size={18} />
            </button>

            {formStatus && (
              <p
                className={`mt-3 text-center ${
                  formStatus.includes("success") ? "text-green-600" : "text-sky-600"
                }`}
                role="alert"
              >
                {formStatus}
              </p>
            )}
          </form>

          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sky-600">
              <MapPin size={24} />
              <div>
                <h4 className="font-semibold text-lg text-slate-800">Location</h4>
                <p className="text-slate-600">Cabuyao, Laguna, Philippines</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sky-600">
              <PhoneCall size={24} />
              <div>
                <h4 className="font-semibold text-lg text-slate-800">Phone</h4>
                <p className="text-slate-600">+63 912 345 6789</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sky-600">
              <AtSign size={24} />
              <div>
                <h4 className="font-semibold text-lg text-slate-800">Email</h4>
                <p className="text-slate-600">arvy.lacampuenga@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
