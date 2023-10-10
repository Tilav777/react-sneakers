import './Advertising.css'

// image
import image from '../../assets/images/image-7.svg'
import image2 from '../../assets/images/image-6.svg'

function Advertising() {
  return (
    <div className='advertising'>
      <div className='advertising-left'>
        <img src={image} alt="advertising icon" />
        <div className='advertising-link'>
          <h2><span>Stan Smith</span>, Forever!</h2>
          <button className='advertising-btn'>Buy</button>
        </div>
      </div>
      <img src={image2} alt="image" className="advertising-right" />
    </div>
  )
}

export default Advertising