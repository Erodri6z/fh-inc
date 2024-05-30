

import './App.css'
import { useEffect } from 'react'
import About from './components/About/about'
import Gallery from './components/Gallery/gallery'
import Landing from './components/Landing/landing'
import Nav from './components/Nav/nav'
import Services from './components/Service/services'
import Contact from './components/Comtact/contact'
import Footer from './components/Footer/footer'
import { Element } from 'react-scroll'



function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          // setTimeout(() => {
            entry.target.classList.add('show')
          // }, 300)
        }else {
          entry.target.classList.remove('show')
        }
      })
    })
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((e) => observer.observe(e))

    return () => {
      hiddenElements.forEach((e) => observer.unobserve(e)) 
    }
  }, [])


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
