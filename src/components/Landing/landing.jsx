import './landing.css'
import title from "./../../assets/icons/fhlogo.png"
import { Link } from 'react-scroll'

function Landing() {


  return (
    <>
    <div className="landing" >
      <img className="franz" src={title} alt="Franz Huerta Inc, llc" />
      <Link to="contact" smooth={true} duration={500}> 
      <button className='landing-btn'>Get a Quote Now!</button>
      </Link>
    </div>
    </>
  )
}

export default Landing