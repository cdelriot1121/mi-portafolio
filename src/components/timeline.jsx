import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Timeline = () => {
  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "Freelancer",
      period: "2022 - Presente",
      description: "Desarrollo de aplicaciones web utilizando React, Node.js, y MongoDB. Implementación de nuevas características y mejora de la experiencia de usuario.",
      type: "work"
    },
    {
      title: "Ingeniero en Sistemas",
      company: "Fundacion Universitaria...",
      period: "2023 - Presente",
      description: "Título universitario en ingeniería con especialización en desarrollo de software.",
      type: "education"
    },
    {
      title: "Desarrollador Backend",
      company: "Freelancer y Aprendiz Autodidacta",
      period: "2023 - Presente",
      description: "Siempre estoy aprendiendo nuevos paquetes para mis Tecnologias en Backend, ya que me gusta esta área de trabajo ",
      type: "education"
    }
  ];
  
  return (
    <section id="experience" className="section-experience">
      <h2 className="section-title">Experiencia y Formación</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${experience.type}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon">
              {experience.type === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}
            </div>
            <div className="timeline-content">
              <h3>{experience.title}</h3>
              <h4>{experience.company}</h4>
              <span className="timeline-period">{experience.period}</span>
              <p>{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;