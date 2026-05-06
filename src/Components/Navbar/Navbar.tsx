import './Navbar.css'
import { Link } from 'react-router-dom'
import Profile from '../../assets/profil.png'
 
function Navbar(){
    return(
         <nav className="navbar">
      <Link to="/" className="nav-title">
        <h1 className="title-res">MedievalDrive</h1>
      </Link>
      <Link to="/profil" className="profile-nav">
      <img src={Profile} alt="profile" className='img-nav'/>
      </Link>

        </nav>

    )
}

export default Navbar;