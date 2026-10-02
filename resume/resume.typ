#set document(title: "Aeron_Caponpon-Resume", author: "Aeron Caponpon")
#set page(paper: "a4", margin: 14mm, numbering: none)
#set text(font: "Libertinus Serif", size: 11.25pt, fill: black, lang: "en")
#set par(leading: 0.65em, spacing: 5pt, justify: false)
#set list(marker: [•], indent: 3pt, body-indent: 7pt, spacing: 5pt, tight: false)
#set heading(numbering: none)
#show link: set text(fill: black)
#show heading.where(level: 1): it => block(
  above: 14pt,
  below: 6pt,
  sticky: true,
)[
  #stack(
    dir: ttb,
    spacing: 4pt,
    text(size: 11pt, weight: "bold", fill: rgb("#1D4ED8"), it.body),
    line(length: 100%, stroke: 0.5pt + black),
  )
]

#let section(title) = heading(level: 1, title)
#let row(left-content, right-content, bold: false) = block(above: 0pt, below: 4pt, sticky: true)[
  #grid(
    columns: (1fr, auto),
    column-gutter: 12pt,
    text(weight: if bold { "bold" } else { "regular" }, left-content),
    align(right + top, right-content),
  )
]

#let email = "aeroncaponpon.01@gmail.com"
#let website = "https://aeron.is-a.dev"
#let github = "https://github.com/aeron-cap"
#let linkedin = "https://linkedin.com/in/aeron-caponpon"

#align(center)[
  #text(size: 20pt, weight: "bold", fill: rgb("#1D4ED8"))[AERON CAPONPON]
  #v(4pt)
  #text(size: 10pt)[
    PH - GMT+8 | #link("mailto:" + email, email) | #link(linkedin, "linkedin.com/in/aeron-caponpon") | #link(github, "github.com/aeron-cap") | #link(website, "aeron.is-a.dev")
  ]
]

#v(6pt)
#section("SKILLS")
#text(size: 10pt)[
  *Languages & Frameworks:* Go, TypeScript, JavaScript, Python, PHP, SQL | NestJS (Node.js), React, Laravel, Angular \
  *Infrastructure & Tools:* Docker, Linux, Git, CI/CD, Nginx, Prometheus, Grafana \
  *Databases & Practices:* PostgreSQL, MySQL, SQLite, query optimization, unit and e2e testing with Playwright
]

#section("WORK EXPERIENCE")
#row("ACCUR8 ENTERPRISE SOLUTIONS INC.", "Manila (Remote)", bold: true)
#row("Junior Full Stack Developer", "Sept 2024 – Present")
- Optimized backend database operations by refactoring join-heavy queries and eliminating n+1 bottlenecks, achieving up to 95% performance improvements and reducing dashboard and report load times on datasets exceeding 300,000 rows.
- Designed an asynchronous Excel export pipeline using Laravel queues and a compiled Go export worker, preventing request failures and reducing generation time for exports containing up to 8 million cells from over two minutes to under 10 seconds.
- Maintained ownership of full-stack SaaS features across accounting and inventory management domains using Laravel and Angular, adapting the system to support diverse and evolving business processes of 8+ enterprise clients.
- Serve as lead developer for one enterprise client, delivering feature requests, coordinating deployments and uptime, and reviewing pull requests.
- Building a Playwright e2e suite for the web app; writes unit tests for backend changes.
- Built Python scripts and internal tools to streamline data processing workflows and automate local database backups.

#v(8pt)
#row("Web Development Intern", "Feb 2024 – May 2024")
- Designed initial backend architecture and relational database design for an internal billing web application; developed a high-fidelity mockup and functional prototype using React, which spearheaded the MVP to development.

#section("PROJECTS")
#row("NEWS AGGREGATOR", "Ongoing", bold: true)
- Developing a self-hosted news aggregation pipeline in Go, using goroutines and gofeed to concurrently ingest and parse multi-format syndication feeds (RSS 2.0, Atom 1.0) into an embedded SQLite database.
- Integrated a Python NLP scoring pipeline leveraging WordNet semantic distance, filtering out duplicate or low-relevance content and ranking candidate stories to produce a daily digest of top 5–10 articles.

#v(8pt)
#row("LOCAL AI ASSISTANT", "Ongoing", bold: true)
- Tuned inference to run a 3B model within an 8 GB RAM budget on bare-metal Linux (constraint-aware design).
- Persistent per-channel conversation memory + a SQLite fact-store (key-based retrieval) for cross-session recall; tool-calling middleware with sandboxed filesystem/shell access written in Go.

#section("OPEN SOURCE CONTRIBUTIONS")
#block(sticky: true, below: 4pt)[
  *SALN Tracker - BetterGov PH* | React/TypeScript Contributor | Ongoing
]
- Added a resources page to BetterGov PH’s SALN Tracker - React codebase, integrating structured JSON metadata, sortable resource cards, navigation updates, and static preview assets within the existing design system.
- Delivered the feature through a reviewed and merged open-source pull request spanning 28 files.

#v(8pt)
#block(sticky: true, below: 4pt)[
  *Hibi - note-taking application* | Electron/TypeScript Contributor | Ongoing
]
- Contributed the Windows git credential manager support to the built-in Git add-on, platform-specific credential-helper configuration and docs, delivered through upstream review.

#section("EDUCATION")
#row("BATANGAS STATE UNIVERSITY - ALANGILAN", "Batangas City", bold: true)
#row("BS Computer Engineering - General Weighted Average (GWA): 1.4", "2024")
#text(size: 10pt)[*Relevant Coursework:* Data Structures & Algorithms, Software Engineering, Operating Systems, Machine Learning]
