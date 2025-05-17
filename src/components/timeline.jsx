import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Timeline = () => {
  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "Nombre de la Empresa",
      period: "2021 - Presente",
      description: "Desarrollo de aplicaciones web utilizando React, Node.js, y MongoDB. Implementación de nuevas características y mejora de la experiencia de usuario.",
      type: "work"
    },
    {
      title: "Desarrollador Frontend",
      company: "Empresa Anterior",
      period: "2019 - 2021",
      description: "Diseño e implementación de interfaces de usuario responsivas. Trabajo con React, CSS y herramientas de diseño.",
      type: "work"
    },
    {
      title: "Ingeniero en [Tu carrera]",
      company: "Universidad XYZ",
      period: "2015 - 2019",
      description: "Título universitario en ingeniería con especialización en desarrollo de software.",
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