import './nav.css'
import React from 'react'
// import { Link } from 'react-router-dom'
import { Link} from 'react-scroll';


function Nav() {
  return (
    <>
      <nav className='nav-bar'>
        <div className='nav-title'>Franz Huerta Inc, LLC</div>
        <ul className='nav'>
        <li>
            <Link className='nav-item' to="landing" smooth={true} duration={500}>
              Landing
            </Link>
          </li>
          <li>            
            <Link className='nav-item' to="about" smooth={true} duration={500}>
              About
            </Link></li>
          <li>
            <Link className='nav-item' to="service" smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li>           
            <Link className='nav-item' to="projects" smooth={true} duration={500}>
              Projects
            </Link></li>
          <li>
            <Link className='nav-item' to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      
    </>
  )
}

export default Nav