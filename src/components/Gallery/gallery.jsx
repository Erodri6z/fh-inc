import './gallery.css'
import img1 from './../../assets/projects/img1.jpg'
import img2 from './../../assets/projects/img2.jpg'
import img3 from './../../assets/projects/img3.jpg'
import img4 from './../../assets/projects/img4.jpg'
import img5 from './../../assets/projects/img5.jpg'
import img6 from './../../assets/projects/img6.jpg'
import img7 from './../../assets/projects/img7.jpg'
import img8 from './../../assets/projects/img8.jpg'
import img9 from './../../assets/projects/img9.jpg'
import img10 from './../../assets/projects/img10.jpg'
import img11 from './../../assets/projects/img11.jpg'
import img12 from './../../assets/projects/img12.jpg'
import img13 from './../../assets/projects/img13.jpg'
import img14 from './../../assets/projects/img14.jpg'
import img15 from './../../assets/projects/img15.jpg'
import img16 from './../../assets/projects/img16.jpg'
import img17 from './../../assets/projects/img17.jpg'
import img18 from './../../assets/projects/img18.jpg'
import img19 from './../../assets/projects/img19.jpg'
import img20 from './../../assets/projects/img20.jpg'
import img21 from './../../assets/projects/img21.jpg'
import img22 from './../../assets/projects/img22.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7,img10, img9, img8, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22]

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