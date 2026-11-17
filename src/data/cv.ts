// Text overview for /cv, matching resume/resume.typ.
export const CV = {
  skills: [
    {
      category: "Languages & Frameworks",
      items: "Go, TypeScript, JavaScript, Python, PHP, SQL | NestJS (Node.js), React, Laravel, Angular",
    },
    {
      category: "Infrastructure & Tools",
      items: "Docker, Linux, Git, CI/CD, Nginx, Prometheus, Grafana",
    },
    {
      category: "Databases & Practices",
      items: "PostgreSQL, MySQL, SQLite, query optimization, unit and e2e testing with Playwright",
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
            "Building a Playwright e2e suite for the web app; writes unit tests for backend changes.",
            "Built Python scripts and internal tools to streamline data processing workflows and automate local database backups.",
          ],
        },
        {
          title: "Web Development Intern",
          dates: "Feb 2024 – May 2024",
          highlights: [
            "Designed initial backend architecture and relational database design for an internal billing web application; developed a high-fidelity mockup and functional prototype using React, which spearheaded the MVP to development.",
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
        "Building a tech-news aggregator with a Go REST API and React/TypeScript front end; goroutines and gofeed concurrently fetch RSS/Atom feeds into PostgreSQL, shipped via GitHub Actions CI/CD to AWS.",
        "Integrated a Python WordNet (Resnik) scoring pipeline that ranks a daily top 5–10 articles; hardened fetching against SSRF (validated URLs, redirects, and DNS answers; 8 s timeouts; 5 MiB cap).",
      ],
    },
  ],
  contributions: [
    {
      title: "SALN Tracker - BetterGov PH",
      role: "React/TypeScript",
      dates: "Ongoing | Contributor",
      highlights: [
        "Added a resources page to BetterGov PH’s SALN Tracker - React codebase, integrating structured JSON metadata, sortable resource cards, navigation updates, and static preview assets within the existing design system.",
        "Delivered the feature through a reviewed and merged open-source pull request spanning 28 files.",
      ],
    },
    {
      title: "Hibi - note-taking application",
      role: "Electron/TypeScript",
      dates: "Ongoing | Windows Maintainer",
      highlights: [
        "Windows maintainer for Hibi, a cross-platform note taking application built with Electron. Authored a number of merged PRs and currently maintaining through fixes and features.",
      ],
    },
  ],
  education: {
    school: "Batangas State University - Alangilan",
    location: "Batangas City",
    degree: "BS Computer Engineering",
    gwa: "1.4",
    year: "2024",
    coursework: "Data Structures & Algorithms, Software Engineering, Operating Systems, Machine Learning",
  },
} as const;
