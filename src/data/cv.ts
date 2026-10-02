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
            "Optimized backend database operations by refactoring join-heavy queries and eliminating n+1 bottlenecks, achieving up to 95% performance improvements and reducing dashboard and report load times on datasets exceeding 300,000 rows.",
            "Designed an asynchronous Excel export pipeline using Laravel queues and a compiled Go export worker, preventing request failures and reducing generation time for exports containing up to 8 million cells from over two minutes to under 10 seconds.",
            "Maintained ownership of full-stack SaaS features across accounting and inventory management domains using Laravel and Angular, adapting the system to support diverse and evolving business processes of 8+ enterprise clients.",
            "Serve as lead developer for one enterprise client, delivering feature requests, coordinating deployments and uptime, and reviewing pull requests.",
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
      title: "News Aggregator",
      dates: "Ongoing",
      highlights: [
        "Developing a self-hosted news aggregation pipeline in Go, using goroutines and gofeed to concurrently ingest and parse multi-format syndication feeds (RSS 2.0, Atom 1.0) into an embedded SQLite database.",
        "Integrated a Python NLP scoring pipeline leveraging WordNet semantic distance, filtering out duplicate or low-relevance content and ranking candidate stories to produce a daily digest of top 5–10 articles.",
      ],
    },
    {
      title: "Local AI Assistant",
      dates: "Ongoing",
      highlights: [
        "Tuned inference to run a 3B model within an 8 GB RAM budget on bare-metal Linux (constraint-aware design).",
        "Persistent per-channel conversation memory + a SQLite fact-store (key-based retrieval) for cross-session recall; tool-calling middleware with sandboxed filesystem/shell access written in Go.",
      ],
    },
  ],
  contributions: [
    {
      title: "SALN Tracker - BetterGov PH",
      role: "React/TypeScript Contributor",
      dates: "Ongoing",
      highlights: [
        "Added a resources page to BetterGov PH’s SALN Tracker - React codebase, integrating structured JSON metadata, sortable resource cards, navigation updates, and static preview assets within the existing design system.",
        "Delivered the feature through a reviewed and merged open-source pull request spanning 28 files.",
      ],
    },
    {
      title: "Hibi - note-taking application",
      role: "Electron/TypeScript Contributor",
      dates: "Ongoing",
      highlights: [
        "Contributed the Windows git credential manager support to the built-in Git add-on, platform-specific credential-helper configuration and docs, delivered through upstream review.",
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
