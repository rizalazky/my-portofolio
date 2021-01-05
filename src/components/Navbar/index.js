import React from 'react'
import {
    Link
} from "react-router-dom";
import './index.css'

function Navbar({onClick}) {
    return (
        <div>
          <ul className='navbar'>
            <li className='navbar-list' onClick={()=>{onClick(true)}}><Link to='/'>HOME</Link></li>
            <li className='navbar-list' onClick={()=>{onClick(false)}}><Link to='/profile'>PROFILE</Link></li>
            <li className='navbar-list' onClick={()=>{onClick(false)}}><Link to='/resume'>RESUME</Link></li>
            <li className='navbar-list' onClick={()=>{onClick(false)}}><Link to='/portofolio'>PORTOFOLIO</Link></li>
          </ul>
        </div>
    )
}

export default Navbar
