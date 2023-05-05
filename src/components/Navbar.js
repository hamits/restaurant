
import { Link } from 'react-router-dom'
import Logo from '../assets/hamburgerlogo.png'


function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftNavbar'>
                <img src={Logo} alt=''/>
            </div>
            <div className="rightNavbar">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar