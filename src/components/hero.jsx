import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import TypeWriter from "./utils/TypeWriter";

const Hero = () => {
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
        
        <p className="hero-tagline">
          Creo <span className="highlight">experiencias digitales</span> con código limpio y diseño centrado en el usuario
        </p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hero-actions"
        >
          <a href="#projects" className="primary-button">
            Ver proyectos
          </a>
          <a href="/cv.pdf" className="secondary-button" download>
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
          <a href="#about" className="highlight-link">
            Ver más <ChevronDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;