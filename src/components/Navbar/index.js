import React from 'react'
import {
    Link
} from "react-router-dom";
import './index.css'

function Navbar() {
    return (
        <div>
          <ul className='navbar'>
            <li className='navbar-list'><Link to='/'>HOME</Link></li>
            <li className='navbar-list'><Link to='/profile'>PROFILE</Link></li>
            <li className='navbar-list'><Link to='/resume'>RESUME</Link></li>
            <li className='navbar-list'><Link to='/portofolio'>PORTOFOLIO</Link></li>
            
          </ul>
        </div>
    )
}

export default Navbar
