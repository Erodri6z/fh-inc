

// import './App.css'
import About from './components/About/about'
import Gallery from './components/Gallery/gallery'
import Landing from './components/Landing/landing'
import Nav from './components/Nav/nav'
import Services from './components/Service/services'
import Contact from './components/Comtact/contact'
import Footer from './components/Footer/footer'
import { Element } from 'react-scroll'
// import { Route, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { getMessage } from './services/email.js'

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const data = await getMessage();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    fetchMessage();
  }, []);
  console.log(message)

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
