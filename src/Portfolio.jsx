"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"

const sections = ["Home", "About", "Skills", "Projects", "Contact"]

const projects = [
  { title: "Proyecto 1", description: "Descripción del proyecto 1." },
  { title: "Proyecto 2", description: "Descripción del proyecto 2." },
  // Añade más proyectos aquí
]

const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML"]

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [text, setText] = useState("")
  const fullText = "Carlos Andres"
  const [index, setIndex] = useState(0)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [index])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase())
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section.toLowerCase())
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (section) => {
    setMenuOpen(false)
    setActiveSection(section.toLowerCase())
  }

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Portfolio</h1>
        <nav className="nav">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className={`nav-link ${activeSection === section.toLowerCase() ? 'active' : ''}`}
              onClick={() => handleNavClick(section)}
            >
              {section}
            </a>
          ))}
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="motion-nav"
        >
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className={`motion-nav-link ${activeSection === section.toLowerCase() ? 'active' : ''}`}
              onClick={() => handleNavClick(section)}
            >
              {section}
            </a>
          ))}
        </motion.nav>
      )}

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h2 className="hero-title">
            Hola, soy <span className="highlight">{text}</span>
            <span className="pulse-bar"></span>
          </h2>
          <p className="hero-description">Desarrollador Web | Desarrollador Backend</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="cta"
          >
            <a
              href="#about"
              className="cta-link"
            >
              Ver más <ChevronDown size={16} className="animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-about">
        <div className="section-content">
          <h2 className="section-title">About</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
            dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-skills">
        <div className="section-content">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-card"
              >
                <h3 className="skill-title">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-projects">
        <div className="section-content">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card"
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <a href="#" className="project-link">Ver detalles →</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-contact">
        <div className="section-content">
          <h2 className="section-title">Contact</h2>
          <form className="contact-form">
            <div className="form-field">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Carlos Andres. All rights reserved.</p>
      </footer>
    </div>
  )
}
