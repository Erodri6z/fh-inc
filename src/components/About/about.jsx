

function About() {
  return (
    <>
    <div className="about container">
      <div className="about">
        <h4>Who We Are</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quidem cumque consequatur consectetur inventore delectus, autem ipsa facilis iste reprehenderit aliquid totam. Cum quas officiis nisi nobis quo nulla ullam.</p>
      </div>
      <span></span>
      <div className="map-div">
        <h4> Where we operate</h4>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d261050.55328159034!2d-90.50881298975315!3d36.06639114573487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1715973822123!5m2!1sen!2sus" 
        width="500px" 
        height="600px" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">  
        </iframe>
      </div>
    </div>
    </>
  )
}

export default About