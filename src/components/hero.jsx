import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin } from "lucide-react";
import TypeWriter from "./utils/TypeWriter";

const Hero = () => {
  // Variable para controlar si el CV está disponible
  const hasCVFile = false; // Cambia a true cuando tengas el archivo

  return (
    <section id="home" className="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="hero-title">
          Hola, soy{" "}
          <span className="highlight">
            <TypeWriter text="Carlos Andres" />
          </span>
        </h2>
        <p className="hero-description">Desarrollador Full Stack</p>
        
        {/* Añadimos una animación de fade-in para esta línea */}
        <motion.p 
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Creo <span className="highlight">experiencias digitales</span> con código limpio y diseño centrado en el usuario
        </motion.p>
        
        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hero-social"
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem',
            margin: '1rem 0' 
          }}
        >
          <a href="https://github.com/cdelriot1121" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/carlos-andres-drt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hero-actions"
        >
          <a 
            href="#projects" 
            className="primary-button"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver proyectos
          </a>
          <a 
            href="/mi-portafolio/cv.pdf" 
            className="secondary-button" 
            download
            onClick={(e) => {
              if (!hasCVFile) {
                e.preventDefault();
                alert('CV en proceso de actualización. ¡Estará disponible pronto!');
              }
            }}
          >
            <Download size={16} />
            Descargar CV
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="hero-scroll"
        >
          <a 
            href="#about" 
            className="highlight-link"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver más <ChevronDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;