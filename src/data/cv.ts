// Text overview for /cv, matching resume/resume.typ.
export const CV = {
  skills: [
    {
      category: "Languages & Frameworks",
      items: "Go, TypeScript, JavaScript, Python, PHP, SQL | NestJS (Node.js), React, Laravel, Angular",
    },
    {
      category: "Infrastructure & Tools",
      items: "GitHub Actions, AWS (EC2, IAM/OIDC, SSM), Nginx, systemd, Linux, Docker, Prometheus, Grafana",
    },
    {
      category: "Databases & Practices",
      items: "PostgreSQL, MySQL, SQLite, query optimization, automated testing in CI",
    },
  ],
  work: [
    {
      company: "Accur8 Enterprise Solutions Inc.",
      location: "Manila (Remote)",
      roles: [
        {
          title: "Junior Full Stack Developer",
          dates: "Sept 2024 – Present",
          highlights: [
            "Lead developer for one of 8+ enterprise clients on an accounting and inventory SaaS (Laravel, Angular): own feature delivery, deployments, uptime and pull request reviews, adapting the system to each client's business processes.",
            "Designed an asynchronous Excel export pipeline using Laravel queues and a compiled Go export worker, cutting generation time for exports of up to 8 million cells from over two minutes to under 10 seconds and eliminating request timeouts.",
            "Optimized join-heavy queries and eliminated N+1 bottlenecks, improving performance by up to 95% and cutting dashboard and report load times on datasets of 300,000+ rows.",
            "Built Python scripts and internal tools to streamline data processing workflows.",
          ],
        },
        {
          title: "Web Development Intern",
          dates: "Feb 2024 – May 2024",
          highlights: [
            "Designed the backend architecture and relational database for an internal billing web application, and built a high-fidelity mockup and React prototype that became the starting point for the MVP.",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      title: "Pocket News",
      dates: "Ongoing",
      highlights: [
        "Building a tech-news aggregator with a Go REST API and React/TypeScript front end; goroutines and gofeed concurrently fetch RSS/Atom feeds into PostgreSQL.",
        "Integrated a Python WordNet (Resnik) scoring pipeline that ranks a daily top 5–10 articles; hardened fetching against SSRF (validated URLs, redirects, and DNS answers; 8 s timeouts; 5 MiB cap).",
        "Automated deploys with GitHub Actions to AWS EC2: OIDC-assumed IAM role (no long-lived keys), SSH over SSM Session Manager, versioned releases with health checks and automatic rollback, served by Nginx with TLS and per-IP rate limiting under systemd.",
      ],
    },
  ],
  contributions: [
    {
      title: "SALN Tracker - BetterGov PH",
      role: "React/TypeScript",
      dates: "Ongoing | Contributor",
      highlights: [
        "Built the public resources page (saln.bettergov.ph/resources) for BetterGov PH's civic-tech tracker of officials' asset declarations: sortable resource cards driven by structured JSON metadata, within the existing design system (2 merged PRs).",
      ],
    },
    {
      title: "Hibi - note-taking application",
      role: "Electron/TypeScript",
      dates: "Ongoing | Windows Maintainer",
      highlights: [
        "Windows maintainer for Hibi, a cross-platform Electron note-taking app: 5 merged PRs adding Windows Git Credential Manager support, a git stage-all button, an image viewer and a freeze-preview-pane option, and fixing the preview closing when a file is opened from the explorer.",
      ],
    },
  ],
  education: {
    school: "Batangas State University - Alangilan",
    location: "Batangas City",
    degree: "BS Computer Engineering, Cum Laude",
    gwa: "1.4 (1.0 highest)",
    year: "2024",
    coursework: "Data Structures & Algorithms, Software Engineering, Operating Systems, Machine Learning",
  },
} as const;
