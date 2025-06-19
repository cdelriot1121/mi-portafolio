import { motion } from "framer-motion";
import { Cloud, Server, Lock, BarChart } from "lucide-react";

const CloudSkills = () => {
  const cloudServices = [
    {
      title: "Arquitectura en la Nube",
      icon: <Cloud size={24} />,
      description: "Diseño de sistemas escalables y rentables utilizando servicios cloud para maximizar rendimiento y minimizar costos.",
      skills: ["AWS", "Azure", "Google Cloud Platform", "Microservicios"]
    },
    {
      title: "DevOps & CI/CD",
      icon: <Server size={24} />,
      description: "Implementación de pipelines de integración y despliegue continuo para automatizar pruebas y despliegues.",
      skills: ["Docker", "Kubernetes", "GitHub Actions"]
    }
  ];

  return (
    <section id="cloud" className="section-cloud">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="cloud-content"
      >
        <h2 className="section-title">Arquitectura Cloud & DevOps</h2>
        <p className="section-description">
          Experiencia en diseño e implementación de soluciones en la nube con enfoque en escalabilidad y seguridad
        </p>
        
        <div className="cloud-skills-grid">
          {cloudServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cloud-skill-card"
            >
              <div className="cloud-skill-icon">{service.icon}</div>
              <h3 className="cloud-skill-title">{service.title}</h3>
              <p className="cloud-skill-description">{service.description}</p>
              <div className="cloud-skill-tags">
                {service.skills.map((skill, i) => (
                  <span key={i} className="cloud-skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CloudSkills;