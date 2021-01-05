import React from 'react'
import './profile.css'
function Profile() {
    return (
        <div className='profile'>
            <div className='flex-center flex-column'>
                <h2>About</h2>
                <div className='profile-content'>
                        <div>
                            <span className='profile-label'>Name</span>
                            <span >Mohammad Rizal Azky</span>
                        </div>
                        <div>
                            <span className='profile-label'>Date of birth</span>
                            <span style={{textAlign:"left"}}>26 Oct 1997</span>
                        </div>
                        <div>
                            <span className='profile-label'>Phone</span>
                            <span >087888187620</span>
                        </div>
                        <div>
                            <span className='profile-label'>Email</span>
                            <span style={{textAlign:"left"}}><a href='mailTo:rizalazky26@gmail.com'>rizalazky26@gmail.com</a></span>
                        </div>
                        <div>
                            <span className='profile-label'>Github</span>
                            <span><a href='https://github.com/rizalazky/'>https://github.com/rizalazky/</a></span>
                        </div>
                        <div>
                            <span className='profile-label'>Address</span>
                            <span>Tegal,Indonesia</span>
                        </div>
                </div>
            </div>
            <div className='flex-center flex-column'>
                <h2>Education</h2>
                <div className='profile-content'>
                <h4>College</h4>
                <p>Politeknik Harapan Bersama Tegal 2016-2019</p>
                <h4>Senior High School</h4>
                <p>MAN BABAKAN LEBAKSIU TEGAL/MAN 01 TEGAL 2012-2015</p>
                <h4>Junior High School</h4>
                <p>MTs Asy-Syafi'iyah 02 Desa Karangdawa 2009-2012</p>
                <h4>Elementary School</h4>
                <p>MI Asy-Syafi'iyah 02 Desa Karangdawa 2003-2007</p>
                </div>
            </div>
            <div className='flex-center flex-column'>
                <h2>Hoby</h2>
                <div className='profile-content'>
                <ul>
                    <li className='navbar-list'>Football</li>
                    <li className='navbar-list'>Badminton</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile
