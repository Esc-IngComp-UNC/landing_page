import './App.css'
import AboutUs from '@components/AboutUs'
import CarouselImages from '@components/CarouselImages'
import Faq from '@components/Faq'
import FormLab from '@components/FormLab'
import NavBar from '@components/NavBar'
import News from '@components/News'
import MapGoogle from '@components/MapGoogle'
import Contact from '@components/Contact'
import { Element } from 'react-scroll'

function App() {

  return (
      <div className="container">
        <NavBar></NavBar>
        <CarouselImages></CarouselImages>
        <Element name="aboutUs">
        <AboutUs></AboutUs>
        </Element>
        <Element name="novedades">
        <News></News>
        </Element>
        <Element name="faq">
        <Faq></Faq>
        </Element>
        <MapGoogle></MapGoogle>
        <FormLab></FormLab>
        <Element name='contacto'>
        <Contact></Contact>
        </Element>
      </div>
    
  )
}

export default App
