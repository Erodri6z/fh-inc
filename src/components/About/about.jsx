import './about.css'

function About() {
  return (
    <>
    <div className='about-comp'>
      <div className="about-container">
        <div className="about">
          <h3 className='about-title'>Who We Are</h3>
          <p>Franz Huerta Inc, LLC is a locally owned and operated business dedicated to providing high-quality construction and roofing services to the Paragould, Arkansas community and surrounding areas. With a commitment to excellence, customer satisfaction, and safety, we specialize in residential and commercial roofing, general construction, remodeling, and repair services.</p>
        </div>
        <span></span>
        <div className="map-div">
          <h3 className='about-title'> Where we operate</h3>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d261050.55328159034!2d-90.50881298975315!3d36.06639114573487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1715973822123!5m2!1sen!2sus" 
          width="400px" 
          height="400px" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">  
          </iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default About