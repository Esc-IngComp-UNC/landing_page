import { motion } from 'framer-motion'
import { useState } from 'react';
function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = window.innerWidth < 800;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="logo">LOGO</div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰ 
      </div>
      <motion.div className="secciones" initial={isMobile ? {height:0}: {}} >
        <div className="seccionlink">Novedades</div>
        <div className="seccionlink">Preguntas Frecuentes</div>
        <div className="seccionlink">Sobre Nosotros</div>
        <div className="seccionlink">Contactos</div>
      </motion.div>
    </nav>
  )
}

export default NavBar;
