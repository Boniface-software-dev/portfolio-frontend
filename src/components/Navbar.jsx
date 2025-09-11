import React from "react";

export default function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-[var(--brand-blue)]">Boniface Muguro</div>
        <nav className="space-x-6 text-sm text-gray-700 hidden md:inline-flex">
          <a href="#about" className="hover:text-[var(--brand-blue)]">About</a>
          <a href="#skills" className="hover:text-[var(--brand-blue)]">Skills</a>
          <a href="#experience" className="hover:text-[var(--brand-blue)]">Experience</a>
          <a href="#projects" className="hover:text-[var(--brand-blue)]">Projects</a>
          <a href="#education" className="hover:text-[var(--brand-blue)]">Education</a>
          <a href="#certifications" className="hover:text-[var(--brand-blue)]">Certifications</a>
          <a href="#contact" className="hover:text-[var(--brand-blue)]">Contact</a>
        </nav>
      </div>
    </header>
  );
}
