import React, { useState, useEffect } from 'react';
import { fetchPortfolioData } from '../services/portfolioApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorBoundary from './ErrorBoundary';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Code,
  Database,
  Brain,
  Cpu,
  Award,
  Calendar,
  MapPin,
  Download,
  Menu,
  X,
  Cloud
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const getSkillIcon = (category) => {
    const map = {
      'Languages': <Code size={32} />,
      'Frameworks & Libraries': <Cpu size={32} />,
      'Backend & APIs': <Database size={32} />,
      'Databases': <Database size={32} />,
      'AI & ML': <Brain size={32} />,
      'Developer Tools': <Cloud size={32} />,
      'Core CS': <Code size={32} />
    };
    return map[category] || <Code size={32} />;
  };

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        setLoading(true);
        const data = await fetchPortfolioData();
        setPortfolioData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadPortfolioData();
  }, []);

  if (loading) {
    return (
      <div className="portfolio-loading">
        <LoadingSpinner size="xl" message="Loading portfolio..." />
      </div>
    );
  }

  if (error) {
    return <ErrorBoundary error={error} onRetry={() => window.location.reload()} />;
  }

  if (!portfolioData) {
    return <p>No portfolio data available</p>;
  }

  return (
    <div className="portfolio-container">

      {/* NAVIGATION */}
      <nav className="nav-bar">
        <div className="nav-content">
          <h2 className="nav-logo">{portfolioData.info.name}</h2>
          <div className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
            {['about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={activeSection === section ? 'nav-active' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          <button className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">{portfolioData.info.name}</h1>
            <h2 className="hero-title">{portfolioData.info.title}</h2>
            <p className="hero-description">{portfolioData.info.summary}</p>

            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
              <button
                className="btn-secondary"
                onClick={() => window.open('/Boniface_Kimani_Muguro_Software_Engineer_CV.pdf', '_blank')}
              >
                <Download size={18} />
                Download CV
              </button>
            </div>

            <div className="hero-contact">
              <a href={`mailto:${portfolioData.info.email}`}>
                <Mail size={18} /> {portfolioData.info.email}
              </a>
              <a href={`tel:${portfolioData.info.phone}`}>
                <Phone size={18} /> {portfolioData.info.phone}
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <Code size={72} />
              </div>
              <div className="profile-stats">
                <div>
                  <strong>5+</strong>
                  <span>Years Professional Experience</span>
                </div>
                <div>
                  <strong>Full-Stack</strong>
                  <span>Backend & APIs</span>
                </div>
                <div>
                  <strong>AI</strong>
                  <span>Model Training & Evaluation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {portfolioData.skills.map((skill, idx) => (
            <div key={idx} className="skill-category">
              <div className="skill-header">
                {getSkillIcon(skill.category)}
                <h3>{skill.category}</h3>
              </div>
              <div className="skill-items">
                {skill.items.map((item, i) => (
                  <span key={i} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience-section">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <span>{exp.period}</span>
                <h4>{exp.company}</h4>
                <p><MapPin size={14} /> {exp.location}</p>
                <ul>
                  {exp.achievements
                    .split('\n')
                    .map((a, i) => (
                      <li key={i}>{a.replace('- ', '')}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">Selected Engineering Projects</h2>
        <div className="projects-grid">
          {portfolioData.projects
            .sort((a, b) => b.is_featured - a.is_featured)
            .map((project, idx) => (
              <div key={idx} className={`project-card ${project.is_featured ? 'featured' : ''}`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> Live
                  </a>
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="education-section">
        <h2 className="section-title">Education</h2>
        {portfolioData.education.map((edu, idx) => (
          <div key={idx} className="education-card">
            <Award />
            <h3>{edu.degree}</h3>
            <h4>{edu.school}</h4>
            <p><Calendar size={14} /> {edu.period}</p>
            <p><MapPin size={14} /> {edu.location}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="certifications-section">
        <h2 className="section-title">Certifications</h2>
        {portfolioData.certifications.map((cert, idx) => (
          <div key={idx} className="certification-card">
            <Brain />
            <h3>{cert.name}</h3>
            <p>{cert.issuer} — {cert.date}</p>
            <p>{cert.description}</p>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact</h2>
        <a href={`mailto:${portfolioData.info.email}`}><Mail /> {portfolioData.info.email}</a>
        <a href={`tel:${portfolioData.info.phone}`}><Phone /> {portfolioData.info.phone}</a>
        <a href={portfolioData.info.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
        <a href={portfolioData.info.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 {portfolioData.info.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
