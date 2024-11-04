import { motion } from 'framer-motion'
import { useState } from 'react';
import { Link } from "react-scroll"
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
      {isMobile ? (<motion.div className="secciones" animate={(isOpen && isMobile) ? {height:"13rem",width:'100vw',opacity:1} : {opacity:0,height:"0rem",width:"0rem"}} transition={{duration:.4}}>
        <Link to='novedades' smooth={true} className="seccionlink">Novedades</Link>
        <Link to='faq' smooth={true} className="seccionlink">Preguntas Frecuentes</Link>
        <Link to='aboutUs' smooth={true} className="seccionlink">Sobre Nosotros</Link>
        <Link to='contacto' smooth={true} className="seccionlink">Contactos</Link>
      </motion.div> ) : (<motion.div className="secciones">
        <Link to='novedades' smooth={true} className="seccionlink">Novedades</Link>
        <Link to='faq' smooth={true} className="seccionlink">Preguntas Frecuentes</Link>
        <Link to='aboutUs' smooth={true} className="seccionlink">Sobre Nosotros</Link>
        <Link to='contacto' smooth={true} className="seccionlink">Contactos</Link>
      </motion.div>)}
    </nav>
  )
}

export default NavBar;
