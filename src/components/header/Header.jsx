import './Header.css'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

// icon
import icon from '../../assets/icon/icon.svg'

function Header() {
  return (
    <header className='header'>
      <Link to='/'  className='icon-box'>
        <img src={icon} alt="icon" />
        <h3>REACT SNEAKERS</h3>
      </Link>
      <div className='header__profile'>
        <Link to='/basket'><i className="bi bi-cart"></i><span> $0 amount</span></Link>
        <button><i class="bi bi-heart"></i><span> Likes</span></button>
        <button><i class="bi bi-person-circle"></i><span> Profile</span></button>
      </div>
    </header>
  )
}

export default Header