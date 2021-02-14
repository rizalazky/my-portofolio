import React, { useState } from 'react'
import './portofolio.css'
import {Link} from 'react-router-dom'
import dataJSON from './../../assets/data/data.json'


function Portofolio() {
    const data = dataJSON.portofolio;

    const [type, setType] = useState('web')
    return (
        <div>
            <ul className='nav-portofolio'>
                <li className='nav-portofolio-item' onClick={() => setType('web')}>Web</li>
                <li className='nav-portofolio-item' onClick={() => setType('mobile')}>Mobile</li>
            </ul>
            <div className='card-portofolio-container'>
                {
                    data[type].map((dt,index)=>{
                        
                        return(
                            <Link to={`detail/${type}/${index}`} key={index} className='card-portofolio'>
                                <img src={`images/portofolio/${dt.image}`}  className='card-portofolio-image' alt={index+1}/>
                                <div className='container'>
                                    <p className='card-portofolio-title'>{dt.title}</p>
                                    {/* <p className='card-portofolio-desc'>{dt.desc}</p>
                                    <a className='card-portofolio-url' href={dt.url}>{dt.url}</a> */}
                                </div>
                                <div className='overlay'>
                                    <p className='overlay-text'>Detail</p>
                                </div>
                            </Link>
                        )
                    })
                }

                {/* <img src={MyDoctor}  height="100" width=' 100' alt="ph"/> */}

            </div>
        </div>
    )
}

export default Portofolio
