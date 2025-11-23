const About = () => {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "CSS/Tailwind", level: "Intermediate" },
    { name: "Git/GitHub", level: "Intermediate" },
    { name: "Node.js", level: "Beginner" },
    { name: "UI Design", level: "Intermediate" }
  ];

  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-sky-100 border border-sky-50">
            <h3 className="text-2xl font-semibold text-slate-700 mb-4">Who I Am</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              I am a dedicated student and developer with a keen eye for detail. 
              My journey began with a curiosity about how websites worked, which quickly turned into a passion for coding.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              I specialize in creating clean, user-friendly interfaces that not only look good but perform flawlessly. 
              The "Calming Sky" theme of this portfolio reflects my approach to problem-solving: keeping a clear head 
              and finding elegant solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-sky-100 hover:text-sky-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-sky-100 hover:text-sky-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-700 mb-6 pl-2 border-l-4 border-sky-400">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <Code className="text-sky-500" size={20} />
                    <span className="font-medium text-slate-700">{skill.name}</span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-sky-100 text-sky-600 rounded-full">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};