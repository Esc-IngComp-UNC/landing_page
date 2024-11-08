import { motion } from 'framer-motion'
import { useState } from 'react';
import { Link } from "react-scroll"
import useIsMobile from "@hooks/useIsMobile";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile();
  return (
    <nav>
      <div className="logo">LOGO</div>

      {isMobile ? (
            <div className="menuHamburguesa">
                <div className="menu-icon"  onClick={()=>setIsOpen(!isOpen)}>
                ☰
                </div>
                <motion.div className="secciones" initial={{opacity:0,width:0,}} animate={(isOpen) ? {display:'flex', height:"200px",width:"100%" ,opacity:1,y:0}:{display:'none',width:0,opacity:0,}} transition={{ease:"easeOut"}}>
                
                <Link to='aboutUs'  onClick={()=>setIsOpen(!isOpen)}>Sobre Nostros</Link >
                <Link to='novedades' onClick={()=>setIsOpen(!isOpen)}>Novedades</Link>
                <Link to='faq'  onClick={()=>setIsOpen(!isOpen)}>Preguntas Frecuentes</Link >
                <Link to='contacto'  onClick={()=>setIsOpen(!isOpen)}>Contactos</Link >
                        </motion.div>
            </div>)  : (<motion.div className="secciones">
        <Link to='aboutUs' smooth={true} className="seccionlink">Sobre Nosotros</Link>
        <Link to='novedades' smooth={true} className="seccionlink">Novedades</Link>
        <Link to='faq' smooth={true} className="seccionlink">Preguntas Frecuentes</Link>
        <Link to='contacto' smooth={true} className="seccionlink">Contactos</Link>
      </motion.div>)}
    </nav>
  )
}

export default NavBar;
