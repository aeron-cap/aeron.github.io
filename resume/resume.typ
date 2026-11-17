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
    text(size: 11pt, weight: "bold", fill: rgb("#000000"), it.body),
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
  #text(size: 20pt, weight: "bold", fill: rgb("#000000"))[AERON CAPONPON]
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
- Lead developer for one of 8+ enterprise clients on an accounting and inventory SaaS (Laravel, Angular): own feature delivery, deployments, uptime and pull request reviews, adapting the system to each client's business processes.
- Designed an asynchronous Excel export pipeline using Laravel queues and a compiled Go export worker, cutting generation time for exports of up to 8 million cells from over two minutes to under 10 seconds and eliminating request timeouts.
- Optimized join-heavy queries and eliminated N+1 bottlenecks, improving performance by up to 95% and cutting dashboard and report load times on datasets of 300,000+ rows.
- Building a Playwright e2e suite for the web app; writes unit tests for backend changes.
- Built Python scripts and internal tools to streamline data processing workflows and automate local database backups.

#v(8pt)
#row("Web Development Intern", "Feb 2024 – May 2024")
- Designed initial backend architecture and relational database design for an internal billing web application; developed a high-fidelity mockup and functional prototype using React, which spearheaded the MVP to development.

#section("PROJECTS")
#row([POCKET NEWS | #link("https://pocketnews.space", "pocketnews.space")], "Ongoing", bold: true)
- Building a tech-news aggregator with a Go REST API and React/TypeScript front end; goroutines and gofeed concurrently fetch RSS/Atom feeds into PostgreSQL, shipped via GitHub Actions CI/CD to AWS.
- Integrated a Python WordNet (Resnik) scoring pipeline that ranks a daily top 5–10 articles; hardened fetching against SSRF (validated URLs, redirects, and DNS answers; 8 s timeouts; 5 MiB cap).

#section("OPEN SOURCE CONTRIBUTIONS")
#block(sticky: true, below: 4pt)[
  *SALN Tracker - BetterGov PH* | React/TypeScript | Contributor
]
- Added a resources page to BetterGov PH’s SALN Tracker - React codebase, integrating structured JSON metadata, sortable resource cards, navigation updates, and static preview assets within the existing design system.
- Delivered the feature through a reviewed and merged open-source pull request spanning 28 files.

#v(8pt)
#block(sticky: true, below: 4pt)[
  *Hibi - note-taking application* | Electron/TypeScript | Windows Maintainer 
]
- Windows maintainer for Hibi, a cross-platform note taking application built with Electron. Authored a number of merged PRs and currently maintaining through fixes and features.


#section("EDUCATION")
#row("BATANGAS STATE UNIVERSITY - ALANGILAN", "Batangas City", bold: true)
#row("BS Computer Engineering - General Weighted Average (GWA): 1.4", "2024")
#text(size: 10pt)[*Relevant Coursework:* Data Structures & Algorithms, Software Engineering, Operating Systems, Machine Learning]
