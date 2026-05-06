import './Navbar.css'
import { Link } from 'react-router-dom'
import Profile from '../../assets/react.svg'
 
function Navbar(){
    return(
         <nav className="navbar">
      <Link to="/" className="nav-title">
        <h1 className="title-res">MedievalDrive</h1>
      </Link>
      <Link to="/profile" className="profile-nav">
      <img src={Profile} alt="profile"/>
      </Link>

        </nav>

    )
}

export default Navbar;