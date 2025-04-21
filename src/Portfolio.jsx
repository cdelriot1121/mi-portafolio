import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  Globe,
  Code2,
  Database,
  Server,
  Monitor,
  Send
} from "lucide-react"
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiVisualstudiocode,
  SiDocker,
  SiSpringboot,
  SiDjango
} from "react-icons/si"

// Definimos las tecnologías con sus iconos
const technologies = [
  {
    name: "Frontend",
    icon: <Monitor size={24} />,
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> }
    ]
  },
  {
    name: "Backend",
    icon: <Server size={24} />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Spring", icon: <SiSpringboot /> },
      { name: "Django", icon: <SiDjango /> }
    ]
  },
  {
    name: "Database",
    icon: <Database size={24} />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> }
    ]
  },
  {
    name: "Tools",
    icon: <Code2 size={24} />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "VS Code", icon: <SiVisualstudiocode /> },
      { name: "Docker", icon: <SiDocker /> }
    ]
  }
]

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
    <div className="font-sans bg-gray-950 text-gray-200 min-h-screen">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Portfolio</h1>
        <nav className="nav">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className={`nav-link ${activeSection === section.toLowerCase() ? "active" : ""}`}
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
              className={`menu-item ${activeSection === section.toLowerCase() ? "active" : ""}`}
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
        >
          <h2 className="hero-title">
            Hola, soy <span className="highlight">{text}</span>
            <span className="pulse-bar">&nbsp;</span>
          </h2>
          <p className="hero-description">Desarrollador Full Stack</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hero-action"
          >
            <a
              href="#about"
              className="highlight-link"
            >
              Ver más <ChevronDown size={16} className="animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-about">
        <div>
          <h2 className="section-title">Sobre mí</h2>
          <p className="section-description">
            Desarrollador apasionado por crear soluciones web innovadoras
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-skills">
        <h2 className="section-title">Tecnologías</h2>
        <div className="skills-grid">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-card"
            >
              <div className="skill-icon">{tech.icon}</div>
              <h3 className="skill-title">{tech.name}</h3>
              <div className="skill-list">
                {tech.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill.icon}
                    <span className="skill-name">{skill.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-projects">
        <div>
          <h2 className="section-title">Proyectos</h2>
          <div className="project-grid">
            {[
              {title: "Proyecto 1", description: "Descripción del proyecto 1"},
              {title: "Proyecto 2", description: "Descripción del proyecto 2"},
            ].map((project, index) => (
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

      {/* Contact Section Mejorado */}
      <section id="contact" className="section-contact">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>¡Conectemos!</h3>
            <div className="social-links">
              <a href="https://github.com/cdelriot1121" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:miemail@">
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" id="name" placeholder="Nombre" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea id="message" placeholder="Mensaje" required rows="5"></textarea>
            </div>
            <button type="submit" className="submit-button">
              <Send size={16} />
              <span>Enviar mensaje</span>
            </button>
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
