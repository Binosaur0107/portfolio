import React from "react";

export default function Home({ setActiveSection }) {
  return (
    <section className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-block p-2 px-4 rounded-full bg-sky-50 border border-sky-100 text-sky-600 font-medium text-sm animate-fade-in-up">
          Dangal Greeting! My name is
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-4 tracking-tight animate-fade-in-up delay-100">
          Arvy M. Lacampuenga
        </h1>
        <div className="text-2xl md:text-3xl font-semibold mb-8 animate-fade-in-up delay-150">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-700">
            A Dangal Programmer, Creative Designer & Analyst
          </span>
        </div>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          I merge analytical logic with creative artistry to build meaningful digital solutions. As a dedicated analyst and programmer, I craft efficient code, while my design passion ensures every interface is as beautiful as it is functional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <button
            onClick={() => setActiveSection("projects")}
            className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-semibold shadow-lg shadow-sky-200 transition-all transform hover:-translate-y-1"
          >
            View Projects
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className="px-8 py-4 bg-white text-sky-600 border border-sky-200 rounded-full font-semibold hover:bg-sky-50 transition-all transform hover:-translate-y-1"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
