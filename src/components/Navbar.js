
import { Link } from 'react-router-dom'
import Logo from '../assets/hamburgerlogo.png'


function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftNavbar'>
                <img src={Logo} alt=''/>
            </div>
            <div className="rightNavbar">
                <Link to="/restaurant">Home</Link>
                <Link to="/restaurant/menu">Menu</Link>
                <Link to="/restaurant/about">About</Link>
                <Link to="/restaurant/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar