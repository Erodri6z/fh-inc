

// import './App.css'
import About from './components/About/about'
import Gallery from './components/Gallery/gallery'
import Landing from './components/Landing/landing'
import Nav from './components/Nav/nav'
import Services from './components/Service/services'
import Contact from './components/Comtact/contact'
import Footer from './components/Footer/footer'
import { Element } from 'react-scroll'



function App() {



  return (
    <>
    <div className='mainDiv'>
      <Nav />
      <Element name="landing">
        <Landing />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="service">
        <Services />
      </Element>
      <Element name="projects ">
        <Gallery />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer /> 
    </div>
    </>
  )
}

export default App
