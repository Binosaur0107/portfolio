import React from "react";
import { Cloud, Sun, User, Briefcase, Mail, Code, Menu, X } from "lucide-react";

export default function Navbar({
  activeSection,
  setActiveSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const navItems = [
    { name: "Home", id: "home", icon: <Sun size={16} /> },
    { name: "About", id: "about", icon: <User size={16} /> },
    { name: "Skills", id: "skills", icon: <Code size={16} /> },
    { name: "Projects", id: "projects", icon: <Briefcase size={16} /> },
    { name: "Contact", id: "contact", icon: <Mail size={16} /> },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-sky-100 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => handleNavClick("home")}
            role="button"
            tabIndex={0}
          >
            <Cloud className="h-8 w-8 text-sky-500 mr-2" />
            <span className="font-bold text-xl text-slate-700 tracking-tight">
              SkyPort
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeSection === item.id
                      ? "bg-sky-100 text-sky-700 shadow-inner"
                      : "text-slate-500 hover:text-sky-600 hover:bg-sky-50"
                  }`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-sky-500 hover:text-white hover:bg-sky-400 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-sky-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                  activeSection === item.id
                    ? "bg-sky-100 text-sky-700"
                    : "text-slate-600 hover:text-sky-600 hover:bg-sky-50"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
