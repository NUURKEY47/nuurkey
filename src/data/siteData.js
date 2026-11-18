// Complete Personal Data for nuurkey.dev

export const SITE_DATA = {
  profile: {
    handle: "~/noor",
    greetingPrefix: "hi! ",
    greetingHighlight: "i’m noor",
    subtitle: "backend, DevOps, and trader",
    copyright: "© 2026 Noor Mohamed Abdikadir",
    email: "nuurkeymohamed47@gmail.com",
    rentoraUrl: "https://rentora.cc",
  },

  socials: {
    github: "https://github.com/NUURKEY47",
    linkedin: "https://www.linkedin.com/in/masternuurkey47/",
    twitter: "https://x.com/yek_ruun",
  },

  about: {
    fullName: "Noor Mohamed Abdikadir",
    roleLine1: "Nairobi, Kenya • Full-Stack Software Engineer (Backend & DevOps Focused)",
    roleLine2Prefix: "Founder & Lead Engineer at ",
    roleLine2LinkText: "Rentora (rentora.cc)",
    roleLine2LinkUrl: "https://rentora.cc",
    introLine: "hi! i’m noor, a backend-focused software engineer, DevOps builder, and trader. i...",
    education: [
      {
        degree: "Bachelor of Science in Information Technology — Mount Kenya University",
        subtext: "(GRADUATED AUG 2024)",
      },
    ],
    experience: [
      {
        role: "Founder & Lead Backend Engineer — Rentora (rentora.cc)",
        period: "JAN 2024 – PRESENT",
        points: [
          "Architected a multi-role property management backend using Express and PostgreSQL (Prisma), supporting Admin, Landlord, and Tenant workflows with RBAC.",
          "Containerized the frontend, API, and PostgreSQL database with Docker and deployed on a Linux VPS with Caddy HTTPS and Cloudflare.",
        ],
      },
    ],
    interests: [
      "FinTech & financial technology architectures",
      "Cloud infrastructure, Docker containers, Caddy & Linux VPS administration",
      "Quantitative forex trade analytics (ForexFlow Analytics)",
      "Open source & scalable backend software engineering",
    ],
    languages: {
      main: ["English", "Somali", "Swahili"],
      note: "and fluent in JavaScript (Node.js), TypeScript, and SQL!",
    },
  },

  workBanner: {
    prefix: "Accepting remote roles & work offers via my ",
    linkText: "work email!",
    subtext:
      "I do backend architecture, DevOps/CI-CD pipelines, full-stack web apps, and quantitative trading systems. :)",
  },

  workSkills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5 / CSS3"],
    backendAndDb: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "Prisma ORM",
      "MongoDB",
      "Redis",
      "JWT Auth & RBAC",
      "Zod Validation",
    ],
    devopsAndTools: [
      "Docker",
      "Docker Compose",
      "GitHub Actions CI/CD",
      "AWS (EC2 / S3)",
      "Linux / VPS",
      "Caddy (HTTPS)",
      "Cloudflare",
      "Git & GitHub",
      "Postman",
    ],
    frontend: ["React.js", "Tailwind CSS", "Vite", "Responsive UI"],
  },

  workProjects: [
    {
      title: "Rentora — Full-Stack Real Estate & Financial Management Platform",
      period: "Jan 2024 – Present",
      liveUrl: "https://rentora.cc",
      repoUrl: "https://github.com/NUURKEY47",
      stack: ["Node.js", "Express", "PostgreSQL", "Prisma", "Docker", "React", "Caddy", "Cloudflare"],
      bullets: [
        "Architected a multi-role property management backend using Express and PostgreSQL, supporting Admin, Landlord, and Tenant workflows with role-based access control (RBAC).",
        "Built secure REST APIs with JWT authentication, Zod validation, centralized error handling, automated monthly Cron invoicing, and M-Pesa Daraja C2B reconciliation.",
        "Containerized the frontend, API, and PostgreSQL database with Docker and deployed on a Linux VPS using Caddy for automatic HTTPS and Cloudflare for edge security.",
      ],
    },
    {
      title: "ForexFlow Analytics — Trade Journal & Quantitative Analytics Platform",
      period: "In Development",
      liveUrl: "#forex",
      repoUrl: "https://github.com/NUURKEY47",
      stack: ["TypeScript", "Node.js", "PostgreSQL", "React", "Tailwind CSS"],
      bullets: [
        "Building a quantitative trade-journaling application focused on session performance analysis and mistake-driven backtesting.",
        "Developing automated analytics for Profit Factor, Win Rate, and Risk-to-Reward (R-Multiple) metrics from structured trade data.",
        "Using strict TypeScript interfaces to enforce consistent data structures across backend and frontend layers.",
      ],
    },
  ],

  linksGrid: [
    { id: "github", label: "github", url: "https://github.com/NUURKEY47" },
    { id: "linkedin", label: "linkedin", url: "https://www.linkedin.com/in/masternuurkey47/" },
    { id: "twitter", label: "x / twitter", url: "https://x.com/yek_ruun" },
    { id: "rentora", label: "rentora.cc", url: "https://rentora.cc" },
    { id: "email", label: "email", url: "mailto:nuurkeymohamed47@gmail.com" },
  ],

  faqs: [
    {
      q: "are you available for remote backend or DevOps roles?",
      a: "Yes! I am actively open to remote Backend Engineer, Full-Stack (Backend-Focused), and DevOps / CI-CD roles and contracts worldwide. Reach out via email at nuurkeymohamed47@gmail.com.",
    },
    {
      q: "what tech stack and tools do you use?",
      a: "My primary stack is Node.js, Express.js, TypeScript, PostgreSQL, Prisma ORM, MongoDB, Redis, Docker, Docker Compose, GitHub Actions CI/CD, Linux VPS (Caddy + Cloudflare), and React + Tailwind CSS.",
    },
    {
      q: "how do you deploy and manage production applications?",
      a: "I containerize applications using Docker & Docker Compose, automate testing and builds via GitHub Actions CI/CD pipelines, and deploy to Linux VPS / AWS EC2 instances behind Caddy (for automatic HTTPS) and Cloudflare.",
    },
    {
      q: "how can property owners onboard onto Rentora (rentora.cc)?",
      a: "Visit rentora.cc or send an email to nuurkeymohamed47@gmail.com for a guided demo and full setup of your commercial plaza or residential building.",
    },
    {
      q: "what is ForexFlow Analytics?",
      a: "ForexFlow Analytics is my quantitative trade-journaling and mistake-isolation platform built with TypeScript to track Profit Factor, Win Rate, and session R-Multiples.",
    },
  ],

  contact: {
    heading: "yayy mail!",
    description:
      "the easiest way to contact me is through email! whether it’s for a remote Backend/DevOps engineering role, a project collaboration, or a Rentora demo, please direct questions to my email instead 👍",
    emailLabel: "email me at: ",
    subButtonNote: "or press the button below to open your mail app.",
    buttonText: "send me an email!",
  },
};
