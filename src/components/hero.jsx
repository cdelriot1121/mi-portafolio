import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import TypeWriter from "./utils/TypeWriter";
import './Hero.css';

const Hero = () => {
  // Variable para controlar si el CV está disponible
  const hasCVFile = false; // Cambia a true cuando tengas el archivo

  // Función para manejar el scroll suave - Más robusta y consistente
  const handleScroll = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Función para manejar la descarga del CV
  const handleCVDownload = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!hasCVFile) {
      alert('CV en proceso de actualización. ¡Estará disponible pronto!');
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <motion.h2 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          Hola, soy{" "}
          <span className="highlight">
            <TypeWriter 
              text="Carlos Andres" 
              speed={100}
              loop={false}
              delay={3000}
            />
          </span>
        </motion.h2>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut"
          }}
        >
          Backend Developer & Cloud Enthusiast
        </motion.p>
        
        <motion.p 
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut"
          }}
        >
          Creo <span className="highlight">arquitecturas robustas</span> con código limpio y soluciones escalables en la nube
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut"
          }}
          className="hero-social"
        >
          <motion.a 
            href="https://github.com/cdelriot1121" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/carlos-andres-drt/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 1,
            ease: "easeOut"
          }}
          className="hero-actions"
        >
          <motion.button 
            className="primary-button"
            onClick={(e) => handleScroll(e, 'projects')}
            type="button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Ver proyectos
          </motion.button>
          <motion.button 
            className="secondary-button" 
            onClick={handleCVDownload}
            type="button"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(59, 130, 246, 0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Download size={16} />
            Descargar CV
          </motion.button>
        </motion.div>
        

      </motion.div>
    </section>
  );
};

export default Hero;