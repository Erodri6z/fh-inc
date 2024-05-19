function Services () {

  const services = [{
    service: 'Roofing',
    image: '',
    description: ""
  },{
    service: 'Sidings',
    image: '',
    description: ""
  },{
    service: 'Inspections',
    image: '',
    description: ""
  },{
    service: 'And More',
    image: '',
    description: ""
  }]

  return (
    <>
    <div className="services">
      <>
      {services.map(s => 
      <div>
        <div>
          <h4>{s.service}</h4>
        </div>
      </div>
      )}
      </>
    </div>
    </>
  )
}