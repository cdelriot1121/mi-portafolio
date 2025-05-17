import { motion } from "framer-motion";
import { Code, BookOpen, Star, Coffee } from "lucide-react";

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
              innovadoras y funcionales que combinen un diseño atractivo con código eficiente.
            </p>
            
            <div className="about-cards">
              <div className="about-card">
                <Code className="about-card-icon" />
                <h3>Experiencia</h3>
                <p>Con más de X años desarrollando aplicaciones web completas, me especializo en crear interfaces de usuario intuitivas y sistemas backend robustos.</p>
              </div>
              
              <div className="about-card">
                <BookOpen className="about-card-icon" />
                <h3>Educación</h3>
                <p>Ingeniero en [tu carrera] con especialización en desarrollo de software. Aprendizaje continuo a través de cursos y certificaciones.</p>
              </div>
              
              <div className="about-card">
                <Star className="about-card-icon" />
                <h3>Valores</h3>
                <p>Creo en el desarrollo limpio y mantenible, la comunicación clara y la mejora continua en todo lo que hago.</p>
              </div>
              
              <div className="about-card">
                <Coffee className="about-card-icon" />
                <h3>En mi tiempo libre</h3>
                <p>Disfruto [tus hobbies e intereses], lo que me ayuda a mantener una perspectiva fresca y creativa.</p>
              </div>
            </div>
            
            <div className="about-journey">
              <h3>Mi trayectoria</h3>
              <p>
                Mi camino en el desarrollo comenzó con [cómo empezaste], lo que me llevó a [logro importante]. 
                A lo largo de mi carrera he trabajado en [tipos de proyectos], ayudando a [resultados que has conseguido].
              </p>
              <p>
                Mi enfoque se centra en crear código limpio, mantenible y escalable, priorizando siempre la experiencia del usuario final.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;