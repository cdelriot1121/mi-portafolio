import { motion } from "framer-motion";
import { projects } from "./data/projects";
import { ExternalLink, Github } from "lucide-react";

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
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github"
                >
                  <Github size={16} />
                  <span>Código</span>
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link demo"
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