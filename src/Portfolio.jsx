import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Timeline from "./components/timeline";
import Skills from "./components/skills";
import CloudSkills from "./components/cloud";  // Importamos el nuevo componente
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <CloudSkills />  {/* Añadimos la nueva sección */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
