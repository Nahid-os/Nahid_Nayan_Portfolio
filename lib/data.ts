export const profile = {
  name: "Md Nahid Husen Nayan",
  shortName: "Nahid Nayan",
  role: "Full-Stack Software Engineer & ML Engineer",
  location: "London, United Kingdom",
  email: "nahidhusen23@gmail.com",
  linkedin: "https://www.linkedin.com/in/nahid-001-nayan",
  summary:
    "First-Class Computer Science graduate and full-stack software engineer with hands-on experience building production-grade web applications and machine-learning systems. Skilled across the full stack and the end-to-end ML lifecycle — from data pipelines and model selection to evaluation and SHAP explainability.",
  summaryFull:
    "First-Class Computer Science graduate and full-stack software engineer with hands-on experience building production-grade web applications and machine-learning systems. Skilled across the full stack (React, Next.js, Node.js, Spring Boot, Python) and the end-to-end ML lifecycle (data pipelines, model selection, evaluation, and SHAP explainability with scikit-learn, XGBoost, and LightGBM). Proven ability to own complex projects and deliver clear, reliable outcomes in cross-functional teams.",
  resumeFile: "/MD_NAHID_HUSEN_NAYAN.pdf",
  taglines: [
    "Full-Stack Software Engineer",
    "Machine Learning Engineer",
    "First-Class CS Graduate",
  ],
};

export type AboutHighlight = {
  tag: string;
  icon: "award" | "work";
  metric?: { prefix: string; to: number; suffix: string };
  title?: string;
  sub: string;
};

export const aboutHighlights: AboutHighlight[] = [
  {
    tag: "Achievement",
    icon: "award",
    metric: { prefix: "", to: 1, suffix: "st" },
    sub: "First-Class Honours",
  },
  {
    tag: "Experience",
    icon: "work",
    title: "ML Research Intern",
    sub: "Dalian University · China",
  },
  {
    tag: "Experience",
    icon: "work",
    title: "Computer Lab Assistant",
    sub: "Univ. of Roehampton · UK",
  },
];

/**
 * Devicon class for a given technology name. Undefined = render a text badge.
 * Devicon CSS is loaded in app/layout.tsx.
 */
export const techIcons: Record<string, string | undefined> = {
  Python: "devicon-python-plain colored",
  Java: "devicon-java-plain colored",
  "JavaScript (ES6+)": "devicon-javascript-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  "C / C++": "devicon-cplusplus-plain colored",
  SQL: undefined,
  HTML5: "devicon-html5-plain colored",
  CSS3: "devicon-css3-plain colored",
  "React.js": "devicon-react-original colored",
  React: "devicon-react-original colored",
  "Next.js": "devicon-nextjs-plain",
  "Vue 3": "devicon-vuejs-plain colored",
  Vite: "devicon-vitejs-plain colored",
  "Tailwind CSS": "devicon-tailwindcss-original colored",
  Bootstrap: "devicon-bootstrap-plain colored",
  "Node.js": "devicon-nodejs-plain colored",
  "Express.js": "devicon-express-original",
  "Spring Boot": "devicon-spring-plain colored",
  "Python Flask": "devicon-flask-original",
  "RESTful APIs": undefined,
  "JWT Auth": undefined,
  "Passport.js": undefined,
  MongoDB: "devicon-mongodb-plain colored",
  MySQL: "devicon-mysql-plain colored",
  Elasticsearch: "devicon-elasticsearch-plain colored",
  "scikit-learn": "devicon-scikitlearn-plain colored",
  XGBoost: undefined,
  LightGBM: undefined,
  SHAP: undefined,
  NumPy: "devicon-numpy-plain colored",
  SciPy: undefined,
  TruncatedSVD: undefined,
  "Collaborative Filtering": undefined,
  Zustand: undefined,
  ECharts: undefined,
  Git: "devicon-git-plain colored",
  GitHub: "devicon-github-original",
  Docker: "devicon-docker-plain colored",
  "Microsoft Azure": "devicon-azure-plain colored",
  Jupyter: "devicon-jupyter-plain colored",
  "VS Code": "devicon-vscode-plain colored",
};

/** Marquee of headline technologies shown in the hero. */
export const featuredTech = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "Spring Boot",
  "Vue 3",
  "MongoDB",
  "Elasticsearch",
  "scikit-learn",
  "Docker",
  "Tailwind CSS",
  "Microsoft Azure",
  "MySQL",
  "NumPy",
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Machine Learning Intern",
    company: "Dalian University",
    location: "Dalian, China",
    period: "Dec 2025 – Jan 2026",
    points: [
      "Took end-to-end ownership of a Python-based ML system for Type 2 diabetes risk prediction — covering problem definition, data pipeline design, feature engineering, model selection, evaluation, and documentation.",
      "Built robust data pipelines with pandas and NumPy to transform raw biomarker datasets into clean, analysis-ready inputs.",
      "Evaluated multiple classification algorithms via cross-validation to select the optimal model on measured evidence, working within a cross-functional international team across the full SDLC.",
    ],
  },
  {
    role: "Computer Lab Assistant",
    company: "University of Roehampton",
    location: "London, UK",
    period: "Oct 2024 – Apr 2025",
    points: [
      "Provided technical support to 100+ students across SQL, Linux, and Microsoft Azure, strengthening communication and structured problem-solving.",
      "Diagnosed and resolved front-end and software-environment issues methodically, maintaining consistency and reliability across lab systems.",
      "Identified recurring issues proactively and improved support documentation, demonstrating attention to detail and follow-through.",
    ],
  },
  {
    role: "Customer Assistant",
    company: "Tesco",
    location: "London, UK",
    period: "May 2022 – Present",
    points: [
      "Deliver reliable customer service in a fast-paced retail environment, demonstrating strong teamwork and time management alongside full-time study.",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  highlights: string[];
  metrics: { value: string; label: string }[];
  visual: "search" | "health";
};

export const projects: Project[] = [
  {
    title: "Book Search & Recommendation Engine",
    subtitle: "Full-stack discovery platform with ML-powered recommendations",
    description:
      "A discovery platform combining lightning-fast full-text search with an offline machine-learning recommendation pipeline and personalised, interaction-driven suggestions.",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Elasticsearch",
      "Python",
      "scikit-learn",
      "Tailwind CSS",
      "Zustand",
    ],
    highlights: [
      "Indexed 240K+ books in Elasticsearch with multi-field boosted queries, ISBN fallback, and typo tolerance for sub-100ms search.",
      "Built an offline ML pipeline over 108M Goodreads interactions: SciPy sparse matrix → TruncatedSVD (k=50) → L2-normalised cosine similarity, writing top-20 similar books to MongoDB.",
      "Implemented JWT + Passport.js auth with wishlists, libraries, and custom shelves; interactions feed a reciprocal-rank aggregation engine for real-time personalised recommendations.",
    ],
    metrics: [
      { value: "240K+", label: "Books indexed" },
      { value: "<100ms", label: "Search latency" },
      { value: "108M", label: "Interactions" },
    ],
    visual: "search",
  },
  {
    title: "Diabetes Disease Prediction System",
    subtitle: "Healthcare platform with dual-ML risk prediction & SHAP explainability",
    description:
      "A clinical-grade healthcare platform that predicts Type 2 diabetes risk using two gradient-boosting models, with transparent SHAP explanations and multi-role dashboards.",
    stack: [
      "Vue 3",
      "Vite",
      "Spring Boot",
      "Java",
      "Python Flask",
      "XGBoost",
      "LightGBM",
      "SHAP",
      "MySQL",
      "MongoDB",
      "ECharts",
    ],
    highlights: [
      "Trained LightGBM and XGBoost models on lipid biomarkers (HDL, LDL, triglycerides) and used SHAP TreeExplainer to surface the top-10 contributing features per prediction for clinical transparency.",
      "Built a microservice architecture (Vue 3 + Spring Boot with an independent Python Flask ML service) with ECharts dashboards.",
      "Implemented JWT multi-role RBAC across patient, doctor, and admin portals.",
    ],
    metrics: [
      { value: "2", label: "ML models" },
      { value: "Top-10", label: "SHAP features" },
      { value: "3", label: "Role portals" },
    ],
    visual: "health",
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "Java", "JavaScript (ES6+)", "TypeScript", "C / C++", "SQL", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Vue 3", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot", "Python Flask", "RESTful APIs", "JWT Auth", "Passport.js"],
  },
  {
    label: "Databases & Search",
    skills: ["MongoDB", "MySQL", "SQL", "Elasticsearch"],
  },
  {
    label: "ML / AI",
    skills: ["scikit-learn", "XGBoost", "LightGBM", "SHAP", "NumPy", "SciPy", "TruncatedSVD", "Collaborative Filtering"],
  },
  {
    label: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Microsoft Azure", "Jupyter", "VS Code"],
  },
];

export const education = {
  degree: "BSc (Hons) Computer Science — First-Class Honours (1st)",
  school: "University of Roehampton, London, UK",
  period: "Sep 2022 – Jul 2025",
  coursework: [
    "Algorithms & Data Structures",
    "Software Engineering",
    "Operating Systems",
    "Databases",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Machine Learning",
    "AI",
  ],
};
