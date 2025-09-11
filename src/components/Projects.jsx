import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Projects(){
  const [projects, setProjects] = useState([]);
  const API = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

  useEffect(() => {
    axios.get(`${API}/api/portfolio/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.error("Projects load failed", err));
  }, []);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
      <h3 className="text-sm text-indigo-600 font-medium">My Work</h3>
      <h2 className="text-3xl font-extrabold text-[var(--brand-blue)] mt-2">Projects</h2>
      <p className="text-gray-600 max-w-2xl mt-3">
        Projects built with React, Flask, and PostgreSQL — live links and source code included.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No projects available</div>
        )}
        {projects.map((p, i) => (
          <article key={i} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold text-[var(--brand-blue)]">{p.title}</h4>
              <span className="text-sm text-gray-500">{p.technologies?.slice(0,2).join(", ")}</span>
            </div>
            <p className="text-gray-600 mt-3">{p.description}</p>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-500">{p.live_url ? "Live" : ""}</div>
              <div className="flex gap-3">
                {p.github_url && (
                  <a href={p.github_url} className="text-indigo-600 text-sm" target="_blank" rel="noreferrer">Code</a>
                )}
                {p.live_url && (
                  <a href={p.live_url} className="text-green-600 text-sm" target="_blank" rel="noreferrer">Visit</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
