import { motion } from "framer-motion";
import { technologies } from "./data/skills";

const Skills = () => {
  return (
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
  );
};

export default Skills;