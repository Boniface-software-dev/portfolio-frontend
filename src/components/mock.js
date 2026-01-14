export const mockData = {
  personal_info: {
    name: "Boniface Muguro",
    title: "Software Engineer & AI Developer",
    email: "mmbonifacekimani@gmail.com",
    phone: "+254719774911",
    linkedin: "https://www.linkedin.com/in/bonifacemuguro-68581b197/",
    github: "https://github.com/Boniface-software-dev/",
    location: "Nairobi County, Kenya",
    summary:
      "Versatile Software Engineer & AI Developer with experience in machine learning, AI model training, and full-stack development. Skilled in Python, JavaScript, React, Flask, SQL, and CI/CD pipelines. Proven success fine-tuning generative AI models and building production-ready applications."
  },

  skills: [
    {
      category: "Languages & Tools",
      items: "Python, JavaScript, SQL, HTML5, CSS3",
      order: 1
    },
    {
      category: "Frameworks & Libraries",
      items: "React.js, Flask, Node.js, FastAPI, REST APIs",
      order: 2
    },
    {
      category: "Dev Tools",
      items: "Git, GitHub, CI/CD, IBM Watson Studio, Postman, Docker",
      order: 3
    },
    {
      category: "Databases",
      items: "PostgreSQL, SQL",
      order: 4
    },
    {
      category: "AI/ML Expertise",
      items:
        "Machine Learning, NLP, Computer Vision, Deep Learning, Generative AI, Neural Networks, Prompt Engineering, Model QA, Model Evaluation",
      order: 5
    },
    {
      category: "Core Areas",
      items:
        "Software Engineering, AI Development, Backend Development, Frontend Development, AI Training",
      order: 6
    }
  ],

  experience: [
    {
      title: "Software Engineer (AI Trainer)",
      company: "Outlier",
      period: "Jul 2023 - Jan 2025",
      location: "Remote, United States",
      achievements:
        "- Trained and fine-tuned AI models for code generation in Python and JavaScript.\n" +
        "- Enhanced AI reasoning and clarity through technical QA and prompt engineering.\n" +
        "- Improved debugging efficiency by contributing to AI-powered developer tools.\n" +
        "- Optimized model pipelines for scalability and user-centric outputs.",
      order: 1
    },
    {
      title: "AI Trainer",
      company: "Remotasks",
      period: "Jan 2020 - Dec 2022",
      location: "Remote, London, UK",
      achievements:
        "- Built supervised learning datasets to strengthen NLP and ML pipelines.\n" +
        "- Delivered structured evaluation tasks improving accuracy and reasoning.\n" +
        "- Supported classification improvements through data annotation & QA.",
      order: 2
    },
    {
      title: "AI Training Specialist",
      company: "DataAnnotate",
      period: "Jan 2023 - Jul 2023",
      location: "Remote, United States",
      achievements:
        "- Labeled and structured data to support NLP supervised learning.\n" +
        "- Specialized in prompt refinement and logic QA for generative AI.\n" +
        "- Collaborated with distributed teams to improve model metrics.",
      order: 3
    },
    {
      title: "Software Engineer (Internship)",
      company: "Isuzu East Africa Limited",
      period: "Mar 2018 - Sep 2018",
      location: "Nairobi, Kenya",
      achievements:
        "- Diagnosed, repaired, and optimized vehicle systems.\n" +
        "- Applied problem-solving in team-based engineering projects.\n" +
        "- Built strong foundation in technical systems and mechanics.",
      order: 4
    }
  ],

  projects: [
    {
      title: "TICKSY",
      description:
        "- A modern, mobile-friendly event ticketing platform built to streamline how people discover, attend, and manage events.\n" +
        "- Frontend built with ReactJS and Redux Toolkit, integrated with Flask/PostgreSQL backend.",
      technologies: "React.js, Redux Toolkit, Flask, PostgreSQL, JavaScript, CSS3",
      live_url: "https://ticksy-frontend.vercel.app/",
      github_url: "https://github.com/Boniface-software-dev/ticksy-frontend",
      order: 1,
      is_featured: true
    },
    {
      title: "Expense Tracker",
      description:
        "A simple yet functional Expense Tracker built using React and Vite. Allows users to add expenses, view recorded expenses, see totals, and manage personal budgets in a clean, interactive interface.",
      technologies: "React, Vite, JavaScript, CSS Modules, LocalStorage",
      live_url: "https://expense-tracker-sable-seven-33.vercel.app/",
      github_url: "https://github.com/Boniface-software-dev/expense-tracker",
      order: 2,
      is_featured: true
    },
    {
      title: "Coursify",
      description:
        "A role-based online course platform frontend, built with React and Tailwind CSS. Allows users to register, log in, view courses, and enables instructors to manage learning content. Connects with Flask backend.",
      technologies: "React, Tailwind CSS, JavaScript, Flask, Role-based Auth",
      live_url: "https://coursify-frontend-psi.vercel.app/",
      github_url: "https://github.com/Boniface-software-dev/coursify-frontend",
      order: 3,
      is_featured: true
    },
    {
      title: "Weather App",
      description:
        "A responsive weather forecasting app fetching real-time data from OpenWeather API. Users can search cities, view temperature, humidity, and forecasts with a clean UI.",
      technologies: "JavaScript, React, CSS3, OpenWeather API",
      live_url: "https://weather-app-demo.vercel.app/",
      github_url: "https://github.com/Boniface-software-dev/weather-app",
      order: 4,
      is_featured: false
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and experience. Built with React and deployed on Vercel, connected to Flask backend for dynamic data.",
      technologies: "React, Flask, Tailwind CSS, Vercel",
      live_url: "https://portfolio-demo.vercel.app/",
      github_url: "https://github.com/Boniface-software-dev/portfolio-frontend",
      order: 5,
      is_featured: true
    }
  ],

  education: [
    {
      degree: "Software Engineering",
      school: "Moringa School",
      period: "Apr 2025 - Jul 2025",
      location: "Nairobi, Kenya",
      description:
        "Curriculum licensed by Flatiron School; covered JavaScript, React, Python/Flask, SQL. Built 5 production-style applications, deployed via CI/CD pipelines.",
      order: 1
    },
    {
      degree: "Artificial Intelligence Fundamentals",
      school: "IBM SkillsBuild",
      period: "Aug 2024 - Aug 2025",
      location: "Remote",
      description:
        "Covered NLP, Computer Vision, ML, AI Ethics, and Watson Studio. Learned AI applications, neural networks, chatbots, and deep learning.",
      order: 2
    },
    {
      degree: "Computer Science",
      school: "Technical University of Mombasa",
      period: "2016 - 2018",
      location: "Mombasa, Kenya",
      description:
        "Coursework in algorithms, data structures, system design, robotics, and software engineering fundamentals. • Graduated with strong academic performance (GPA: 4.0).",
      order: 3
    }
  ],

  certifications: [
    {
      name: "IBM Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Aug 2024 - Aug 2025",
      description:
        "Covered NLP, Computer Vision, Machine Learning, AI Ethics, and Watson Studio.",
      order: 1
    }
  ]
};
