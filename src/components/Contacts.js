import React, { useState } from "react";
import { Mail, Github } from "lucide-react";
import { Send } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-sky-100 to-white flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-sky-500 p-10 text-white md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-sky-100 mb-8">
                Have a project in mind or just want to say hi? I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-sky-200" />
                  <span>arvymagimot07@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-sky-200" />
                  <span>@github-username</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-400 rounded-full opacity-50"></div>
            <div className="absolute top-10 -left-10 w-20 h-20 bg-sky-400 rounded-full opacity-50"></div>
          </div>

          <div className="p-10 md:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending" || formStatus === "sent"}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  formStatus === "sent"
                    ? "bg-green-500 text-white"
                    : "bg-slate-800 text-white hover:bg-slate-900 shadow-lg hover:shadow-xl"
                }`}
              >
                {formStatus === "sending" ? (
                  "Sending..."
                ) : formStatus === "sent" ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
