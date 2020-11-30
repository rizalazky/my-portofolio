import React from 'react'
import {
    Link
} from "react-router-dom";

function Navbar() {
    return (
        <div>
          <ul className='navbar'>
            <li className='navbar-list'><Link to='/'>PROFILE</Link></li>
            <li className='navbar-list'><Link to='/resume'>RESUME</Link></li>
            <li className='navbar-list'><Link to='/portofolio'>PORTOFOLIO</Link></li>
            <li className='navbar-list'><Link to='/contact'>CONTACT</Link></li>
          </ul>
        </div>
    )
}

export default Navbar
