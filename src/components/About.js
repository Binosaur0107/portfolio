import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-sky-100 border border-sky-50">
            <h3 className="text-2xl font-semibold text-slate-700 mb-4">Who I Am</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Hey! I’m Arvy Lacampuenga, 20 years old (born Feb 26, 2005), and I’m currently a 3rd-year Computer Science student at Pamantasan ng Cabuyao.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              I’m really into UI/UX design — I love crafting simple, clean, and easy-to-use interfaces that people actually enjoy using.
            </p>

            <div className="flex gap-4">
              <a href="#" aria-label="GitHub" className="p-2 bg-slate-100 rounded-full hover:bg-sky-100 hover:text-sky-600 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 bg-slate-100 rounded-full hover:bg-sky-100 hover:text-sky-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-700 mb-6 pl-2 border-l-4 border-sky-400">Quick Bio & Skills</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-700 font-medium">I specialize in creating clean, user-friendly interfaces that not only look good but perform flawlessly.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-700">This portfolio uses a calming sky theme and focuses on accessibility, responsiveness, and modern UX patterns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
