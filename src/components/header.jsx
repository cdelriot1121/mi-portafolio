import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// Añadimos Cloud a las secciones
const sections = ["Home", "About", "Experience", "Skills", "Cloud", "Projects", "Contact"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setMenuOpen(false);
    setActiveSection(section.toLowerCase());
  };

  return (
    <>
      <header className="header">
        <h1 className="header-title">Portfolio</h1>
        <nav className="nav">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className={`nav-link ${
                activeSection === section.toLowerCase() ? "active" : ""
              }`}
              onClick={() => handleNavClick(section)}
            >
              {section}
            </a>
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

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="motion-nav"
        >
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className={`menu-item ${
                activeSection === section.toLowerCase() ? "active" : ""
              }`}
              onClick={() => handleNavClick(section)}
            >
              {section}
            </a>
          ))}
        </motion.nav>
      )}
    </>
  );
};

export default Header;