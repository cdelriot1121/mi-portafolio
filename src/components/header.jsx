import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = ["Home", "About", "Experience", "Skills", "Cloud", "Projects", "Contact"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 120 &&
            scrollPosition < offsetTop + offsetHeight - 120
          ) {
            setActiveSection(section.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section, e) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveSection(section.toLowerCase());
    
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <motion.h1 
          className="header-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h1>
        
        <nav className="nav">
          {sections.map((section, index) => (
            <motion.a
              key={section}
              href={`#${section.toLowerCase()}`}
              className={`nav-link ${
                activeSection === section.toLowerCase() ? "active" : ""
              }`}
              onClick={(e) => handleNavClick(section, e)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {section}
            </motion.a>
          ))}
        </nav>
        
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="motion-nav"
          >
            {sections.map((section, index) => (
              <motion.a
                key={section}
                href={`#${section.toLowerCase()}`}
                className={`menu-item ${
                  activeSection === section.toLowerCase() ? "active" : ""
                }`}
                onClick={(e) => handleNavClick(section, e)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {section}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;