import { motion } from "framer-motion";
import { projects } from "./data/projects";
import { ExternalLink, Github, Check } from "lucide-react";

const Projects = () => {
  const handleLinkClick = (url, type) => {
    if (!url || url === "#") {
      const message = type === 'github' 
        ? 'Enlace al código fuente no disponible aún' 
        : 'Demo no disponible aún';
      alert(message);
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="section-projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Proyectos
      </motion.h2>
      
      <motion.p 
        className="section-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo
      </motion.p>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="project-card"
            whileHover={{ y: -8 }}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={`Imagen del proyecto ${project.title}`}
                className="project-image"
                loading="lazy"
              />
              <div className="project-overlay">
                <div className="project-overlay-content">
                  <button
                    className="overlay-button"
                    onClick={() => handleLinkClick(project.github, 'github')}
                    aria-label={`Ver código fuente de ${project.title}`}
                  >
                    <Github size={20} />
                  </button>
                  <button
                    className="overlay-button"
                    onClick={() => handleLinkClick(project.demo, 'demo')}
                    aria-label={`Ver demo de ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              {project.features && (
                <div className="project-features">
                  <h4>Características principales:</h4>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>
                        <Check size={16} className="feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                <button 
                  className="project-link github"
                  onClick={() => handleLinkClick(project.github, 'github')}
                  type="button"
                >
                  <Github size={16} />
                  <span>Código</span>
                </button>
                <button 
                  className="project-link demo"
                  onClick={() => handleLinkClick(project.demo, 'demo')}
                  type="button"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;