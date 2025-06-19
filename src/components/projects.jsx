import { motion } from "framer-motion";
import { projects } from "./data/projects";
import { ExternalLink, Github, Check } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="section-projects">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card"
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
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
                <a 
                  href={project.github || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github"
                  onClick={(e) => {
                    if (!project.github) {
                      e.preventDefault();
                      alert('Enlace al código fuente no disponible aún');
                    }
                  }}
                >
                  <Github size={16} />
                  <span>Código</span>
                </a>
                <a 
                  href={project.demo || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link demo"
                  onClick={(e) => {
                    if (!project.demo) {
                      e.preventDefault();
                      alert('Demo no disponible aún');
                    }
                  }}
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;