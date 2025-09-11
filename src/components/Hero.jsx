import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Hero(){
  const [info, setInfo] = useState(null);
  const API = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

  useEffect(() => {
    axios.get(`${API}/api/portfolio/info`)
      .then(res => setInfo(res.data))
      .catch(err => {
        console.error("Hero load failed", err);
      });
  }, []);

  return (
    <section className="hero-bg py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <p className="text-indigo-600 font-medium">Hello, I'm</p>
          <h1 className="text-6xl font-extrabold text-[var(--brand-blue)] leading-tight my-3">
            {info?.name || "Boniface Muguro"}
          </h1>
          <h2 className="text-3xl font-semibold text-[var(--accent-green)] mb-6">
            {info?.title || "Software Engineer & AI Developer"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            {info?.summary ||
              "Versatile Software Engineer & AI Developer with experience in machine learning, AI model training, and full-stack development. Skilled in Python, JavaScript, React, Flask, SQL, Docker, Git, and CI/CD pipelines."}
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-[var(--brand-blue)] text-white rounded-lg shadow">
              Get In Touch
            </a>
            <a href="/cv.pdf" className="inline-flex items-center px-6 py-3 border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] rounded-lg">
              Download CV
            </a>
          </div>
        </div>

        {/* Right card */}
        <div className="md:col-span-5">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex justify-center">
              <div className="w-28 h-28 rounded-full bg-purple-600 flex items-center justify-center text-white text-3xl">
                {/* icon */}
                &lt;&gt;
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 text-center">
              <div>
                <div className="text-2xl font-bold">6 months</div>
                <div className="text-sm text-gray-500">Software Engineering</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-gray-500">AI Training</div>
              </div>
              <div>
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-gray-500">Technologies</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
