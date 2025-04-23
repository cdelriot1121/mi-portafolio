import { Send } from "lucide-react";
import { socialLinks } from "./data/social.jsx";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="section-contact">
      <h2 className="section-title">Contacto</h2>
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>¡Conectemos!</h3>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
        
        <motion.form 
          className="contact-form"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <input type="text" id="name" placeholder="Nombre" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea id="message" placeholder="Mensaje" required rows="5"></textarea>
          </div>
          <button type="submit" className="submit-button">
            <Send size={16} />
            <span>Enviar mensaje</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;