import { useState } from "react";
import "./App.css";

const projects = [

{
  number: "01",
  title: "Travel Hub",
  type: "FULL STACK TRAVEL BOOKING PLATFORM",
  description:
    "Built and deployed a full-stack travel booking platform using React and Django REST Framework. Developed responsive interfaces for destinations, hotel and flight discovery, details, booking, authentication, dashboard, and trip management. Implemented REST APIs, JWT-based authentication, Django ORM, and database-driven workflows. Used SQLite during development and migrated to PostgreSQL with Supabase for production. Integrated Razorpay for secure payment processing and verification, and deployed the React frontend on Vercel and Django backend on Render with GitHub-based continuous deployment.",
  technologies: ["React", "Django", "Django REST Framework", "JWT", "PostgreSQL", "Supabase", "Razorpay", "Vercel", "Render"],
  liveUrl: "https://travel-hub-gules-nu.vercel.app",
  githubUrl: "https://github.com/Abdulazim-deshmukh/Travel-Hub",
  featured: true,
},

{
  number: "02",
  title: "Foodie",
  type: "FULL STACK FOOD ORDERING APPLICATION",
  description:
    "Built a full-stack food ordering application using Django and Bootstrap, with a database-driven backend and responsive frontend. Implemented user authentication, menu browsing, food search, cart management, checkout, order history, Razorpay payment integration, and email order confirmation. Used SQLite during development and migrated the production database to PostgreSQL with Supabase. Integrated Supabase Storage for food images and deployed the application on Render.",
  technologies: ["Django", "Bootstrap", "JavaScript", "PostgreSQL", "Supabase", "Razorpay", "Render"],
  liveUrl: "https://foodie-django-app-1.onrender.com",
  githubUrl: "https://github.com/Abdulazim-deshmukh/Foodie-Django-app",
  featured: true,
},
{
  number: "03",
  title: "Clothify",
  type: "FULL STACK E-COMMERCE APPLICATION",
  description:
    "A full-stack e-commerce application built using Python, Django, HTML, CSS and JavaScript, featuring product browsing, authentication, cart management, checkout, order placement and an admin dashboard. I developed and tested the application locally with SQLite, then configured PostgreSQL with Neon for production. I implemented Django models, views, URL routing, authentication and CRUD operations, integrated Cloudinary for product image storage, and deployed the application on Render. This project gave me practical experience in backend development, database integration, cloud media storage, production configuration and full-stack deployment.",
  technologies: ["Python", "Django", "HTML5", "CSS3", "JavaScript", "PostgreSQL", "Neon", "Cloudinary"],
  liveUrl: "https://clothify-36bc.onrender.com",
  githubUrl: "https://github.com/AbdulAzim-deshmukh/Clothify",
  featured: true,
},
  {
    number: "04",
    title: "Nexora",
    type: "PERSONAL FINANCE DASHBOARD",
    description:
      "A responsive personal finance dashboard built with HTML, CSS and JavaScript. It brings budgets, transactions, income and expenses into one interface while using DOM manipulation, event handling and localStorage for an interactive experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "localStorage"],
    liveUrl: "https://abdulazim-deshmukh.github.io/nexora-finance-dashboard/",
    githubUrl: "https://github.com/Abdulazim-deshmukh/nexora-finance-dashboard",
    featured: false,
  },
];

const skills = [
  {
    number: "01",
    title: "Frontend",
    description: "HTML5 · CSS3 · JavaScript · React · Vite",
  },
  {
    number: "02",
    title: "Backend",
    description: "Python · Django · Django REST Framework · REST APIs",
  },
  {
    number: "03",
    title: "Database",
    description: "MySQL · PostgreSQL · SQLite · Supabase",
  },
  {
    number: "04",
    title: "Tools",
    description: "Git · GitHub · Postman · Razorpay · Vercel · Render",
  },
];

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Responsive, accessible interfaces built with React, JavaScript, HTML and CSS.",
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Django applications, REST APIs, authentication and database-driven features.",
  },
  {
    number: "03",
    title: "Full Stack Applications",
    description: "End-to-end applications connecting polished interfaces with reliable backend systems.",
  },
];

const certifications = [
  {
    number: "01",
    title: "Full Stack in Python Development",
    issuer: "IT Vedant",
    description: "Professional training focused on full-stack development with Python and modern web technologies.",
  },
  {
    number: "02",
    title: "Django for Beginners",
    issuer: "Udemy",
    description: "Coursework focused on building web applications and backend functionality with Django.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="container navbar-content">
          <a href="#home" className="logo" onClick={closeMenu}>
            Abdul<span>.</span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#certifications" onClick={closeMenu}>Certifications</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <a href="#contact" className="nav-button">Let's Talk</a>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid-lines" aria-hidden="true"></div>
          <div className="container hero-content">
            <div className="hero-text">
              <div className="availability">
                <span className="availability-dot"></span>
                Open to opportunities
              </div>

              <p className="eyebrow">FULL STACK DEVELOPER</p>

              <h1>
                Building digital
                <span> experiences</span>
                <br />
                that solve real problems.
              </h1>

              <p className="hero-description">
                I'm Abdul Azim Deshmukh, an entry-level Full Stack Developer focused on
                building responsive, database-driven web applications with React,
                Python, Django and modern web technologies.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="primary-button">View My Work <span>↗</span></a>
                <a href="#contact" className="secondary-button">Get In Touch</a>
              </div>

              <div className="social-links">
                <a href="https://github.com/Abdulazim-deshmukh" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/abdulazim1234/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="mailto:abdulazimdeshmukh@gmail.com">Email ↗</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-glow"></div>
              <div className="profile-card">
                <div className="profile-topline">
                  <span>01 / PROFILE</span>
                  <span>2026</span>
                </div>
                <div className="profile-image-wrapper">
                  <img src="/profile.jpeg" alt="Abdul Azim Deshmukh" className="profile-image" />
                </div>
                <div className="profile-info">
                  <div>
                    <span>BASED IN</span>
                    <strong>Navi Mumbai, India</strong>
                  </div>
                  <div className="profile-mark">AZ</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="container stats-grid">
            <div><strong>04</strong><span>Featured Projects</span></div>
            <div><strong>React</strong><span>Frontend Development</span></div>
            <div><strong>Django</strong><span>Backend Development</span></div>
            <div><strong>Full Stack</strong><span>Application Focus</span></div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <p className="section-label">01 — ABOUT</p>
            <div className="section-heading split-heading">
              <h2>Turning ideas into useful digital products.</h2>
              <div>
                <p>
                  Entry-level Full Stack Developer with hands-on experience building and
                  deploying responsive, database-driven web applications. I enjoy turning
                  requirements into practical products with clean interfaces, reliable
                  backend systems and well-structured databases.
                </p>
                <p>
                  My current focus is React on the frontend and Python/Django on the backend,
                  with experience working across REST APIs, authentication, SQL databases,
                  payments and production deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section">
          <div className="container">
            <p className="section-label">02 — WHAT I DO</p>
            <div className="section-heading">
              <h2>From interface to backend.</h2>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span>{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="service-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <p className="section-label">03 — SKILLS</p>
            <div className="section-heading">
              <h2>Technologies I work with.</h2>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.number}>
                  <span>{skill.number}</span>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <p className="section-label">04 — PROJECTS</p>
            <div className="section-heading project-heading">
              <h2>Selected work.</h2>
              <p>
                A selection of applications demonstrating frontend development, full-stack
                architecture, APIs, databases, authentication and real-world workflows.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((project) => (
                <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-info">
                    <div className="project-meta-row">
                      <p className="project-type">{project.type}</p>
                      {project.featured && <span className="featured-label">FEATURED</span>}
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                    <div className="project-links">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Website <span>↗</span></a>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub Repository <span>↗</span></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section certifications-section">
          <div className="container">
            <p className="section-label">05 — CERTIFICATIONS</p>
            <div className="section-heading split-heading">
              <h2>Continuous learning.</h2>
              <p>
                Certifications that support my practical experience and ongoing development
                across Python, Django and full-stack web development.
              </p>
            </div>
            <div className="certifications-grid">
              {certifications.map((cert) => (
                <article className="certification-card" key={cert.number}>
                  <div className="certificate-visual">
                    <span>{cert.number}</span>
                    <div className="certificate-seal">✓</div>
                    <small>CERTIFIED</small>
                  </div>
                  <div className="certification-content">
                    <p>{cert.issuer}</p>
                    <h3>{cert.title}</h3>
                    <span>{cert.description}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <p className="section-label">06 — EDUCATION</p>
            <div className="section-heading">
              <h2>Education & academic background.</h2>
            </div>
            <div className="education-grid">
              <div className="education-card">
                <span>2021 — 2024</span>
                <h3>Bachelor of Engineering</h3>
                <p>Electronics & Telecommunication</p>
                <small>M.G.M. College of Engineering</small>
              </div>
              <div className="education-card">
                <span>2018 — 2021</span>
                <h3>Diploma in Computer Engineering</h3>
                <p>Computer Engineering</p>
                <small>Anjuman-I-Islam Kalsekar Polytechnic</small>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-content">
            <p className="section-label">07 — CONTACT</p>
            <h2>Let's build something meaningful.</h2>
            <p>
              I'm currently open to opportunities where I can contribute, learn and grow as
              a developer. If you're looking for someone who enjoys building complete web
              applications, I'd love to connect.
            </p>
            <div className="contact-actions">
              <a href="mailto:abdulazimdeshmukh@gmail.com" className="primary-button">Say Hello <span>→</span></a>
              <a href="https://github.com/Abdulazim-deshmukh" target="_blank" rel="noreferrer" className="secondary-button">View GitHub</a>
            </div>
            <p className="contact-email">abdulazimdeshmukh@gmail.com</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <div>
            <a href="#home" className="footer-logo">Abdul<span>.</span></a>
            <p>Full Stack Developer · React & Django</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/Abdulazim-deshmukh" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/abdulazim1234/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:abdulazimdeshmukh@gmail.com">Email</a>
          </div>
          <p className="copyright">© 2026 Abdul Azim Deshmukh</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
