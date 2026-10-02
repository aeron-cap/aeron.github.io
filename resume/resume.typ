// Self-contained: uses Typst's bundled font, with no package downloads.
#set document(title: "Aeron Caponpon — Résumé", author: "Aeron Caponpon")
#set page(paper: "a4", margin: (x: 17mm, y: 15mm))
#set text(font: "Libertinus Serif", size: 10pt, fill: rgb("#171b22"), lang: "en")
#set par(leading: 0.55em)
#set list(indent: 10pt, body-indent: 4pt, spacing: 3pt)
#set heading(numbering: none)
#show heading.where(level: 1): set text(size: 10pt, weight: "bold", fill: rgb("#1d4ed8"))
#show link: set text(fill: rgb("#1d4ed8"))

#let section(title) = {
  v(7pt)
  heading(level: 1, title)
  line(length: 100%, stroke: 0.5pt + rgb("#d9dde4"))
  v(3pt)
}

#let entry(title, dates, subtitle, body) = block(breakable: false, above: 5pt, below: 6pt)[
  #grid(columns: (1fr, auto), column-gutter: 12pt,
    text(weight: "bold", title),
    text(size: 9pt, fill: rgb("#5d6572"), dates),
  )
  #if subtitle != none { text(size: 9pt, fill: rgb("#5d6572"), subtitle) }
  #v(3pt)
  #body
]

#let email = "aeroncaponpon.01@gmail.com"
#let website = "https://aeron.is-a.dev"
#let github = "https://github.com/aeron-cap"
#let linkedin = "https://linkedin.com/in/aeron-caponpon"
#let location = "Batangas, PH"

#let work-experience = (
  (
    company: "Accur8 Enterprise Solutions Inc.",
    title: "Junior Fullstack Developer",
    location: "Manila, PH",
    start: "September 2024",
    end: "Present",
    description: (
      "Improved the company's SaaS product and delivered customer-requested features using Laravel and Angular.",
      "Improved the performance of heavy report queries used by accountants by 95% using Laravel and SQL.",
      "Assigned as lead developer for an Android project to be offered as an additional SaaS product.",
    ),
  ),
  (
    company: "Accur8 Enterprise Solutions Inc",
    title: "Web Developer Intern",
    location: "Manila, PH",
    start: "February 2024",
    end: "May 2024",
    description: (
      "Initialized an internal billing application using React, MongoDB and Docker.",
      "Created documentation and ERD for the project.",
    ),
  ),
)

#let education = (
  (
    school: "Batangas State University - Alangilan",
    degree: "Bachelor of Science in Computer Engineering",
    start: "2020",
    end: "2024",
  ),
)

#let skills = (
  "Typescript", "Go", "Python", "Javascript", "PHP", "HTML", "CSS", "SQL", "Yaml", "Bash",
  "Vercel", "Netlify", "Laravel", "Node.js", "React", "Angular", "TailwindCSS", "Docker", "PostgreSQL", "MySQL", "DBeaver", "Linux",
)

#let projects = (
  (
    title: "Boidfetch",
    description: "System information visual like fastfetch but with boids simulation",
    technologies: ("Go",),
    link: "https://github.com/aeron-cap/boidfetch",
  ),
  (
    title: "Load Tester",
    description: "A simple loadtester written in Python to test API endpoints under heavy load.",
    technologies: ("Python",),
    link: "https://github.com/aeron-cap/load-tester",
  ),
  (
    title: "SALN Tracker",
    description: "Contributed to the Saln Tracker - Bettergov in creating the resources page and updating the SALN records of the officials.",
    technologies: ("React", "Typescript", "Firestore"),
    link: "https://saln.bettergov.ph/resources",
  ),
)

#text(size: 24pt, weight: "bold")[Aeron Caponpon]
#v(3pt)
#text(size: 11pt, fill: rgb("#5d6572"))[Fullstack Developer · Backend & DevOps]
#v(6pt)
#text(size: 9pt)[
  #location · #link("mailto:" + email, email) · #link(website, "aeron.is-a.dev") \
  #link(github, "github.com/aeron-cap") · #link(linkedin, "linkedin.com/in/aeron-caponpon")
]

#section("EXPERIENCE")
#for work in work-experience {
  entry(work.title, work.start + " — " + work.end,
    work.company + " · " + work.location,
    list(..work.description),
  )
}

#section("PROJECTS")
#for project in projects {
  entry(project.title, project.technologies.join(" / "), none)[
    #project.description \
    #text(size: 9pt)[#link(project.link)]
  ]
}

#section("EDUCATION")
#for edu in education {
  entry(edu.school, edu.start + " — " + edu.end, none)[#edu.degree]
}

#section("SKILLS & TOOLS")
#skills.join(" · ")
