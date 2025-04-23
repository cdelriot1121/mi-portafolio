import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Sobre mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="section-description">
              Soy un desarrollador Full Stack apasionado por crear soluciones web
              innovadoras y funcionales. Me especializo en tecnologías como React,
              Node.js y bases de datos tanto SQL como NoSQL.
            </p>
            <p className="about-paragraph">
              Con experiencia en el desarrollo de aplicaciones web completas,
              disfruto enfrentando desafíos técnicos y aprendiendo continuamente
              nuevas tecnologías para mejorar mis habilidades.
            </p>
            <p className="about-paragraph">
              Mi enfoque se centra en crear código limpio, mantenible y
              soluciones escalables que proporcionen experiencias de usuario
              excepcionales.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;