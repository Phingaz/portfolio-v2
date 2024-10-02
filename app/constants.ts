import { TJob, TProject } from "./types";

export const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact Me", href: "#contact" },
];

export const scrollItems = [
  { title: "Html", logo: "html" },
  { title: "Css", logo: "css" },
  { title: "Tailwind", logo: "tw" },
  { title: "Sass", logo: "sass" },
  { title: "Javascript", logo: "js" },
  { title: "TypeScript", logo: "ts" },
  { title: "Python", logo: "python" },
  { title: "React", logo: "react" },
  { title: "Expo", logo: "expo" },
  { title: "Next", logo: "nextjs" },
  { title: "NodeJs", logo: "nodejs" },
  { title: "Express", logo: "express" },
  { title: "Database", logo: "db" },
  { title: "Git", logo: "git" },
  { title: "Sys Admin", logo: "system" },
  { title: "Docker", logo: "docker" },
  { title: "AWS", logo: "aws" },
  { title: "GCP", logo: "gcp" },
  { title: "Azure", logo: "docker" },
  { title: "Nginx", logo: "nginx" },
];

export const jobs: TJob[] = [
  {
    title: "Software Developer at Noble",
    time: "August 2022 - Present",
    text: "As a software enginner at Noble, I worked with cross-functional teams to develop a fintech dashboard, optimized API requests to boost user engagement, and built tools to enhance team efficiency. I contributed to product releases, code reviews, and maintained reusable code in an agile environment.",
  },
  {
    title: "Frontend Developer Intern at Zuri",
    time: "June 2021 - June 2022",
    text: "I was a finalist in the 3-month Hng internship, selected from 22,000+ candidates. I developed responsive web interfaces, implemented React and Next.js, and collaborated on interactive web applications. I also conducted testing, debugging, and participated in code reviews to ensure clean, efficient code.",
  },
  {
    title: "Data Analyst – Operations at 99",
    time: "June 2021 - June 2022",
    text: "I managed daily operations, balanced marketplace initiatives in 15+ cities, and analyzed KPIs for stakeholders. I designed strategies based on peak hour behavior, monitored initiative success, and conducted financial planning. Additionally, I handled business budgeting, demand forecasting, product launches, and OKRs.",
  },
  {
    title: "Bilingual Telemarketer at MBG Financial",
    time: "February 2019 - May 2021",
    text: "I monitored accounts for outstanding debts, resolved customer questions and discrepancies, and negotiated payment plans. I adhered to customer policies, met collection targets, and maintained accurate records of debt status.",
  },
];

export const projects: TProject[] = [
  {
    title: "Branded Africa",
    description:
      "Branded Africa is a versatile e-commerce platform connecting businesses and consumers across Africa. It supports B2B, B2C, C2B, and C2C transactions, allowing users to easily list products and manage orders. The platform streamlines online buying and selling for both individuals and companies.",
    image: "/projects/branded.png",
    link: "https://ba.pnoya.com",
  },
  {
    title: "Alex Barbs",
    description:
      "Alex Barbs is a user-friendly online booking platform designed specifically for barber services. This convenient tool allows customers to easily schedule their haircuts and grooming appointments with their favorite barber. The app saves time for both clients and barbers, reducing phone calls and eliminating scheduling conflicts.",
    image: "/projects/alex.png",
    link: "https://alexbarbs.pnoya.com",
  },
  {
    title: "Movie Box",
    description:
      "This innovative app harnesses the power of the TMDB (The Movie Database) API to bring film enthusiasts a wealth of movie information at their fingertips. Users can explore a vast catalog of films, accessing details like cast, crew, ratings, and synopses. With its sleek interface and comprehensive movie data, this app is a must-have for anyone looking to enhance their cinematic experience.",
    image: "/projects/movie.png",
    link: "https://piimovie.pnoya.com",
  },
  {
    title: "My Porfolio V1",
    description:
      "My Portfolio V1 is the initial version of a personal portfolio showcasing my skills, projects, and achievements. It provides an overview of my work, including web development projects, and serves as a hub for connecting with potential clients or collaborators. The design is clean and user-friendly, allowing visitors to easily navigate through various sections like About Me, Projects, and Contact.",
    image: "/projects/portfolio.png",
    link: "https://pii.netlify.app",
  },
];
