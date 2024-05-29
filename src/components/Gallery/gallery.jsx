import './gallery.css'
import img1 from './../../assets/projects/img1.jpg'
import img2 from './../../assets/projects/img2.jpg'
import img3 from './../../assets/projects/img3.jpg'
import img4 from './../../assets/projects/img4.jpg'
import img5 from './../../assets/projects/img5.jpg'
import img6 from './../../assets/projects/img6.jpg'
import img7 from './../../assets/projects/img7.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7]

function Gallery ()  {
  return (
    <>
    <div className="gallery-div">
      <h3 className='projects'>Our Projects</h3>
      <div className='gallery-container hidden'>
        <>
        <div className='gallery'>
          {images.map((i, index) => (
          <img key={index} src={i} alt={`img-${index}`}  className='images'/>
          ))}
        </div>
        </>
      </div>
    </div>
    </>
  )
}

export default Gallery