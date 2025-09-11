import { Code, Database, Brain, Cpu, Cloud, Globe } from 'lucide-react';

export const mockData = {
  personalInfo: {
    name: "Boniface Muguro",
    title: "Software Engineer & AI Developer",
    email: "mmbonifacekimani@gmail.com",
    phone: "+254719774911",
    linkedin: "https://www.linkedin.com/in/bonifacemuguro-68581b197/",
    github: "https://github.com/Boniface-software-dev/",
    location: "Nairobi County, Kenya",
    summary: "Versatile Software Engineer & AI Developer with experience in machine learning, AI model training, and full-stack software development. Skilled in Python, JavaScript, React, Flask, SQL, Docker, Git, and CI/CD pipelines, with proven success fine-tuning generative AI models and developing production-ready applications."
  },

  skills: [
    {
      category: "Languages & Core",
      icon: <Code size={32} className="skill-icon" />,
      items: ["Python", "JavaScript", "SQL", "HTML5", "CSS3", "TypeScript"]
    },
    {
      category: "Frameworks & Libraries", 
      icon: <Globe size={32} className="skill-icon" />,
      items: ["React.js", "Flask", "Node.js", "FastAPI", "Redux Toolkit", "TailwindCSS"]
    },
    {
      category: "Databases & Tools",
      icon: <Database size={32} className="skill-icon" />,
      items: ["PostgreSQL", "MongoDB", "Git", "GitHub", "Docker", "Postman"]
    },
    {
      category: "AI/ML Expertise",
      icon: <Brain size={32} className="skill-icon" />,
      items: ["Machine Learning", "NLP", "Computer Vision", "Deep Learning", "Generative AI", "Neural Networks"]
    },
    {
      category: "Development Tools",
      icon: <Cpu size={32} className="skill-icon" />,
      items: ["Git", "GitHub", "CI/CD", "IBM Watson Studio", "Postman"]
    },
    {
      category: "Cloud & Deployment",
      icon: <Cloud size={32} className="skill-icon" />,
      items: ["Vercel", "Docker", "Linux", "Remote Collaboration", "Async Tools"]
    }
  ],

  experience: [
    {
      title: "Software Engineer (AI Trainer)",
      company: "Outlier",
      period: "Jul 2023 - Jan 2025",
      location: "Remote, United States",
      achievements: [
        "Trained and fine-tuned AI models for code generation in Python and JavaScript, boosting accuracy and contextual reliability",
        "Enhanced AI reasoning and clarity through technical QA, structured evaluation, and prompt engineering",
        "Improved debugging efficiency by contributing to AI-powered developer tools adopted by global engineering teams",
        "Optimized model pipelines for scalability and user-centric AI outputs"
      ]
    },
    {
      title: "AI Trainer",
      company: "Remotasks",
      period: "Jan 2023 - Jul 2023",
      location: "Remote, United States",
      achievements: [
        "Built supervised learning datasets to strengthen NLP and ML training pipelines",
        "Delivered structured evaluation tasks, improving model accuracy and logical reasoning",
        "Supported model classification improvements through data annotation and quality assurance"
      ]
    },
    {
      title: "AI Training Specialist",
      company: "DataAnnotate",
      period: "Jan 2020 - Dec 2022",
      location: "Remote, London, UK",
      achievements: [
        "Labeled and structured data to support supervised learning for NLP tasks, enhancing model accuracy and performance",
        "Specialized in prompt refinement and logic QA, improving reliability of generative AI outputs",
        "Collaborated with distributed teams to evaluate and improve model performance metrics"
      ]
    },
    {
      title: "Automotive Technician (Internship)",
      company: "Isuzu East Africa Limited",
      period: "Mar 2018 - Sep 2018",
      location: "Nairobi, Kenya",
      achievements: [
        "Diagnosed, repaired, and optimized vehicle systems, improving overall vehicle performance and reliability",
        "Applied practical problem-solving in team-based engineering projects, enhancing project efficiency and collaboration",
        "Acquired valuable experience in technical systems and mechanics, contributing to improved understanding of engineering principles"
      ]
    }
  ],

  projects: [
    {
      title: "TICKSY",
      description: "A modern, mobile-friendly event ticketing platform built to streamline how people discover, attend, and manage events. Frontend built with ReactJS and Redux Toolkit, integrated with Flask/PostgreSQL backend.",
      technologies: ["React.js", "Redux Toolkit", "Flask", "PostgreSQL", "JavaScript", "CSS3"],
      liveUrl: "https://ticksy-frontend.vercel.app/",
      githubUrl: "https://github.com/Boniface-software-dev/ticksy-frontend",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Expense Tracker",
      description: "A simple yet functional Expense Tracker built using React and Vite. Allows users to add expenses, view recorded expenses, see totals, and manage personal budgets in a clean, interactive interface.",
      technologies: ["React", "Vite", "JavaScript", "CSS Modules", "LocalStorage"],
      liveUrl: "https://expense-tracker-sable-seven-33.vercel.app/",
      githubUrl: "https://github.com/Boniface-software-dev/expense-tracker",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Coursify",
      description: "A role-based online course platform frontend, built with React and Tailwind CSS. Allows users to register, log in, view courses, and enables instructors to manage learning content. Connects with Flask backend.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Flask", "Role-based Auth"],
      liveUrl: "https://coursify-frontend-psi.vercel.app/",
      githubUrl: "https://github.com/Boniface-software-dev/coursify-frontend",
      image: "/api/placeholder/400/300"
    }
  ],

  education: [
    {
      degree: "Software Engineering",
      school: "Moringa School",
      period: "Apr 2025 - Jul 2025",
      location: "Nairobi, Kenya",
      description: "Comprehensive software engineering program licensed by Flatiron School, covering modern web development technologies.",
      achievements: [
        "Built 5 production-style applications in team and solo settings",
        "Final capstone deployed using CI/CD pipelines",
        "Covered JavaScript, React, Python/Flask, SQL"
      ]
    },
    {
      degree: "Artificial Intelligence Fundamentals",
      school: "IBM SkillsBuild",
      period: "Aug 2024 - Aug 2025",
      location: "Remote",
      description: "Comprehensive AI training covering modern machine learning and artificial intelligence concepts.",
      achievements: [
        "Covered NLP, Computer Vision, Machine Learning, AI Ethics",
        "Hands-on experience with IBM Watson Studio",
        "Specialized in AI Applications, Neural Networks, and Deep Learning"
      ]
    },
    {
      degree: "Automotive Engineering, Mechanical Engineering",
      school: "Technical University of Mombasa",
      period: "2016 - 2018",
      location: "Mombasa, Kenya",
      description: "Foundation in engineering principles, system design, and technical problem-solving.",
      achievements: [
        "Studied system design, robotics, and technical diagnostics",
        "Built strong foundation in structured problem-solving",
        "Applied engineering principles useful in software development"
      ]
    }
  ],

  certifications: [
    {
      name: "IBM Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Aug 2024 - Aug 2025",
      description: "Comprehensive certification covering AI Applications, AI Capabilities, AI Ethics, Artificial Neural Networks, Chatbots, Computer Vision, Deep Learning, Machine Learning, Natural Language Processing, and Watson Studio."
    },
    {
      name: "Software Engineering Certificate",
      issuer: "Moringa School (Flatiron School Licensed)",
      date: "Apr 2025 - Jul 2025",
      description: "Full-stack web development certification covering JavaScript, React, Python/Flask, SQL, and modern development practices including CI/CD pipelines."
    }
  ]
};