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
                <p>Con más de 2 años desarrollando aplicaciones web completas, me especializo en crear sistemas backend robustos.</p>
              </div>
              
              <div className="about-card">
                <BookOpen className="about-card-icon" />
                <h3>Educación</h3>
                <p>Ingeniero con especialización en desarrollo de software. Aprendizaje continuo a través de cursos certificaciones, y claro proyectos</p>
              </div>
              
              <div className="about-card">
                <Star className="about-card-icon" />
                <h3>Valores</h3>
                <p>Creo en el desarrollo limpio y mantenible, la comunicación clara y la mejora continua en todo lo que hago.</p>
              </div>
              
              <div className="about-card">
                <Coffee className="about-card-icon" />
                <h3>En mi tiempo libre</h3>
                <p>Disfruto Aprender por medio de articulos y videos informativos, lo que me ayuda a mantener mi sistema actualizado y en constante aprendizaje</p>
              </div>
            </div>
            
            <div className="about-journey">
              <h3>Mi trayectoria</h3>
              <p>
                Mi camino en el desarrollo comenzó con mis carrera en Tecnologia en Desarrollo de software, lo que me llevó a querer especializarme en el aspecto logico de los sistemas. 
                A lo largo de mi carrera he trabajado en diferentes proyectos tanto en lo academico como personales, ayudando a crear software con ideas innovadoras y que cumplan con la solucion de un problema.
              </p>
              <p>
                Mi enfoque se centra en crear código limpio, mantenible y escalable, priorizando siempre la experiencia del usuario final y como damos a resolver el problema principalmente planteado.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;