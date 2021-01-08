import React, { useState } from 'react'
import './portofolio.css'
import dataJSON from './../../assets/data/data.json'
import MyDoctor from "../../assets/image/portofolio/MyDoctor.png"


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
                            <div key={index} className='card-portofolio'>
                                <img src={require(`./../../assets/image/portofolio/${dt.image}`)} width='100' height='100' alt={index+1}/>
                                <p className='card-portofolio-title'>{dt.title}</p>
                                <p className='card-portofolio-desc'>{dt.desc}</p>
                                <p className='card-portofolio-url'>{dt.url}</p>
                            </div>
                        )
                    })
                }

                {/* <img src={MyDoctor}  height="100" width=' 100' alt="ph"/> */}

            </div>
        </div>
    )
}

export default Portofolio
