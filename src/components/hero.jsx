import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin } from "lucide-react";
import TypeWriter from "./utils/TypeWriter";

const Hero = () => {
  // Variable para controlar si el CV está disponible
  const hasCVFile = false; // Cambia a true cuando tengas el archivo

  // Función para manejar el scroll suave - Asegúrate que es simple y no falla
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Solución más robusta para el scroll
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

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
        <p className="hero-description">Backend Developer & Cloud Enthusiast</p>
        
        <motion.p 
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Creo <span className="highlight">arquitecturas robustas</span> con código limpio y soluciones escalables en la nube
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hero-social"
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
            onClick={(e) => handleScroll(e, 'projects')}
          >
            Ver proyectos
          </a>
          <a 
            href={hasCVFile ? "/mi-portafolio/cv.pdf" : "#"}
            className="secondary-button" 
            download={hasCVFile}
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
            onClick={(e) => handleScroll(e, 'about')}
          >
            Ver más <ChevronDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;