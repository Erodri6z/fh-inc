import roofing from '../../assets/icons/roofings.webp'
import siding from '../../assets/icons/sidings.webp'
import inspection from '../../assets/icons/inspections.webp'
import more from '../../assets/icons/others.webp'
import './services.css'

function Services () {
  

  const services = [{
    service: 'Roofing',
    image: roofing,
    description: "Installations and Replacements"
  },{
    service: 'Sidings',
    image: siding,
    description: "Planning and Labor"
  },{
    service: 'Inspections',
    image: inspection,
    description: "Assess and Evaluate"
  },{
    service: 'And More',
    image: more,
    description: "So much more, Free Estimates."
  }]

  return (
    <>
    <div className="services">
      <h2>What We Can Do For You</h2>
      <div className='services-container'>
      <>
      {services.map(s => 
      <div className='card' key={s.service}>
        <img src={s.image} alt="image"  className='icons'/>
        <div>
          <h4>{s.service}</h4>
          <p>{s.description}</p>
        </div>
      </div>
      )}
      </>
      </div>
    </div>
    </>
  )
}

export default Services