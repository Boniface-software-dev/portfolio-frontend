import React, { useEffect, useState } from "react";
import { Mail, Phone, Linkedin, Github, ExternalLink, Code, Database, Brain, Cpu, Cloud, MapPin, Calendar, Award } from "lucide-react";
// Ensure App.css is imported in your main.jsx or App.jsx, or import it here:
import '../App.css'; 

export default function Portfolio() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_BACKEND_URL; 

  useEffect(() => {
    fetch(`${API_URL}/api/portfolio/complete`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load portfolio data");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [API_URL]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-xl">Loading portfolio...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  if (!data) return null;

  const { info, skills, experience, projects, education, certifications } = data;

  return (
    <div className="portfolio-container">
      
      {/* ================= HERO / INTRO ================= */}
      {/* Keeping this simple Tailwind for now, or you can style it in App.css */}
      <header className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-800">{info.name}</h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-6">{info.title}</p>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">{info.summary}</p>
      </header>

      {/* ================= SKILLS ================= */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills?.map((skill, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-3 text-indigo-600">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">Experience</h2>
          <div className="space-y-8">
            {experience?.map((exp, i) => (
              <div key={i} className="border-l-4 border-indigo-500 pl-6 py-2 relative">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-indigo-500"></div>
                <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                <h4 className="text-lg text-indigo-600 font-semibold mb-1">{exp.company}</h4>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14}/> {exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={14}/> {exp.location}</span>
                </div>
                <ul className="list-disc ml-4 space-y-1 text-slate-600">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects?.map((project, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="p-6 flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                        {project.is_featured && <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-bold">Featured</span>}
                    </div>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span key={idx} className="text-xs font-semibold text-indigo-500 bg-indigo-50 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex gap-4">
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noopener" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600">
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.live_url && (
                    <a href={project.live_url} target="_blank" rel="noopener" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION & CERTIFICATIONS ================= */}
      <section className="py-16 max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Award className="text-indigo-500"/> Education</h2>
            <div className="space-y-6">
                {education?.map((edu, i) => (
                    <div key={i}>
                        <h3 className="font-bold text-slate-800">{edu.degree}</h3>
                        <p className="text-indigo-600">{edu.school}</p>
                        <p className="text-sm text-slate-500">{edu.period}</p>
                    </div>
                ))}
            </div>
        </div>
        <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Brain className="text-indigo-500"/> Certifications</h2>
            <div className="space-y-6">
                {certifications?.map((cert, i) => (
                    <div key={i}>
                        <h3 className="font-bold text-slate-800">{cert.name}</h3>
                        <p className="text-slate-600">{cert.issuer}</p>
                        <p className="text-sm text-slate-500">{cert.date}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ================= CONTACT (CONNECTED TO APP.CSS) ================= */}
      {/* This uses the class names 'contact-section', 'contact-grid', etc. 
          so it will pick up the Glassmorphism styles from your App.css */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Currently open for full-stack opportunities.<br />
            Feel free to reach out for collaborations or just a friendly hello.
          </p>

          <div className="contact-grid">
            
            <a href={`mailto:${info.email}`} className="contact-card">
              <div className="icon-box"><Mail size={24} /></div>
              <div className="card-info">
                <span className="label">Email</span>
                <span className="value">{info.email}</span>
              </div>
            </a>

            <a href={`tel:${info.phone}`} className="contact-card">
              <div className="icon-box"><Phone size={24} /></div>
              <div className="card-info">
                <span className="label">Phone</span>
                <span className="value">{info.phone}</span>
              </div>
            </a>

            <a href={info.linkedin} target="_blank" rel="noreferrer" className="contact-card">
              <div className="icon-box"><Linkedin size={24} /></div>
              <div className="card-info">
                <span className="label">LinkedIn</span>
                <span className="value">Connect with me</span>
              </div>
            </a>

            <a href={info.github} target="_blank" rel="noreferrer" className="contact-card">
              <div className="icon-box"><Github size={24} /></div>
              <div className="card-info">
                <span className="label">GitHub</span>
                <span className="value">View my code</span>
              </div>
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}