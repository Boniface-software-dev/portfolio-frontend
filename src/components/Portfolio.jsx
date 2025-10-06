import React, { useState, useEffect } from 'react';
import { fetchPortfolioData } from '../services/portfolioApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorBoundary from './ErrorBoundary';
import { 
  Mail, Phone, Linkedin, Github, ExternalLink, 
  Code, Database, Brain, Cpu, Award, Calendar,
  MapPin, ChevronRight, Download, Menu, X, Cloud, Globe
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

  // Technology icons mapping
  const getTechIcon = (tech) => {
    const icons = {
      'Python': '🐍',
      'JavaScript': '🟨',
      'React.js': '⚛️',
      'Flask': '🌶️',
      'PostgreSQL': '🐘',
      'MongoDB': '🍃',
      'Git': '📂',
      'GitHub': '🐱',
      'Docker': '🐳',
      'Node.js': '🟩',
      'FastAPI': '⚡',
      'Redux Toolkit': '📦',
      'TailwindCSS': '🎨',
      'Postman': '📮',
      'Machine Learning': '🤖',
      'NLP': '💬',
      'Computer Vision': '👁️',
      'Deep Learning': '🧠',
      'Generative AI': '✨',
      'Neural Networks': '🔗',
      'CI/CD': '🔄',
      'IBM Watson Studio': '🔬',
      'Vercel': '▲',
      'Linux': '🐧',
      'SQL': '🗄️',
      'HTML5': '🌐',
      'CSS3': '🎨',
      'TypeScript': '🔷'
    };
    
    return icons[tech] || '⚡';
  };

  // Icon mapping for skill categories
  const getSkillIcon = (iconName) => {
    const iconComponents = {
      'Code': <Code size={32} className="skill-icon" />,
      'Globe': <Globe size={32} className="skill-icon" />,
      'Database': <Database size={32} className="skill-icon" />,
      'Brain': <Brain size={32} className="skill-icon" />,
      'Cpu': <Cpu size={32} className="skill-icon" />,
      'Cloud': <Cloud size={32} className="skill-icon" />
    };
    
    return iconComponents[iconName] || <Code size={32} className="skill-icon" />;
  };

  // Load portfolio data
  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPortfolioData();
        setPortfolioData(data);
      } catch (err) {
        console.error('Failed to load portfolio data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  // Retry function
  const handleRetry = () => {
    setError(null);
    setPortfolioData(null);
    // Trigger useEffect by changing a dependency
    window.location.reload();
  };

  // Show loading spinner
  if (loading) {
    return (
      <div className="portfolio-loading">
        <LoadingSpinner size="xl" message="Loading portfolio..." />
      </div>
    );
  }

  // Show error boundary
  if (error) {
    return <ErrorBoundary error={error} onRetry={handleRetry} />;
  }

  // Show message if no data
  if (!portfolioData) {
    return (
      <div className="portfolio-loading">
        <p>No portfolio data available</p>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-content">
          <h2 className="nav-logo">{portfolioData.info?.name || 'Portfolio'}</h2>
          <div className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
            <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'nav-active' : ''}>About</button>
            <button onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'nav-active' : ''}>Skills</button>
            <button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'nav-active' : ''}>Experience</button>
            <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'nav-active' : ''}>Projects</button>
            <button onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'nav-active' : ''}>Education</button>
            <button onClick={() => scrollToSection('certifications')} className={activeSection === 'certifications' ? 'nav-active' : ''}>Certifications</button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'nav-active' : ''}>Contact</button>
          </div>
          <button className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">{portfolioData.info?.name}</h1>
            <h2 className="hero-title">{portfolioData.info?.title}</h2>
            <p className="hero-description">{portfolioData.info?.summary}</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
              <button className="btn-secondary">
                <Download size={18} />
                Download CV
              </button>
            </div>
            <div className="hero-contact">
              <a href={`mailto:${portfolioData.info?.email}`} className="contact-link">
                <Mail size={20} />
                {portfolioData.info?.email}
              </a>
              <a href={`tel:${portfolioData.info?.phone}`} className="contact-link">
                <Phone size={20} />
                {portfolioData.info?.phone}
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <Code size={80} className="avatar-icon" />
              </div>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">6 months</span>
                  <span className="stat-label">Software Engineering</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">AI Training</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {portfolioData.skills?.map((category, index) => (
              <div key={index} className="skill-category">
                <div className="skill-header">
                  {getSkillIcon(category.icon_name)}
                  <h3>{category.category}</h3>
                </div>
                <div className="skill-items">
                  {category.items?.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      <span className="tech-emoji">{getTechIcon(skill)}</span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            {portfolioData.experience?.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.title}</h3>
                    <span className="timeline-date">{exp.period}</span>
                  </div>
                  <h4 className="company">{exp.company}</h4>
                  <p className="location">
                    <MapPin size={16} />
                    {exp.location}
                  </p>
                  <ul className="achievements">
                    {exp.achievements?.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {portfolioData.projects?.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">
                    <Cpu size={60} />
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies?.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.live_url} className="project-link" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    {project.github_url && (
                      <a href={project.github_url} className="project-link" target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {portfolioData.education?.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-icon">
                  <Award size={40} />
                </div>
                <div className="education-content">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                  <div className="education-details">
                    <span className="education-period">
                      <Calendar size={16} />
                      {edu.period}
                    </span>
                    <span className="education-location">
                      <MapPin size={16} />
                      {edu.location}
                    </span>
                  </div>
                  <p>{edu.description}</p>
                  {edu.achievements && (
                    <ul className="education-achievements">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {portfolioData.certifications?.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">
                  <Brain size={32} />
                </div>
                <div className="cert-content">
                  <h3>{cert.name}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <p className="cert-description">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>I'm always interested in new opportunities and exciting projects. Let's connect!</p>
              <div className="contact-links">
                <a href={`mailto:${portfolioData.info?.email}`} className="contact-item">
                  <Mail size={24} />
                  <div>
                    <span>Email</span>
                    <p>{portfolioData.info?.email}</p>
                  </div>
                </a>
                <a href={`tel:${portfolioData.info?.phone}`} className="contact-item">
                  <Phone size={24} />
                  <div>
                    <span>Phone</span>
                    <p>{portfolioData.info?.phone}</p>
                  </div>
                </a>
                <a href={portfolioData.info?.linkedin} className="contact-item" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                  <div>
                    <span>LinkedIn</span>
                    <p>Connect with me</p>
                  </div>
                </a>
                <a href={portfolioData.info?.github} className="contact-item" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                  <div>
                    <span>GitHub</span>
                    <p>View my code</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 {portfolioData.info?.name}. All rights reserved.</p>
          <div className="footer-social">
            <a href={portfolioData.info?.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href={portfolioData.info?.github} target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;