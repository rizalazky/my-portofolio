import React from 'react'
import './index.css'
import dataJSON from './../../assets/data/data.json'
function Resume() {

	const data=dataJSON
    return (
        <div>
        	<div>
            <h2>Work Experience</h2>
            <div>
            	<ul className='list-experience'>
					{
						data.workExperience.map((dt,index)=>{
							return(
								<li className='list-experience-item' key={index}>
									<h3>{dt.namaInstansi}</h3>
									<p>{dt.tahun}</p>
									<p>{dt.deskripsiPekerjaan}</p>
								</li>
							)
						})
					}
            		
            	</ul>
            </div>
            </div>
            <div className='list-skill-container'>
            	<h2>Skill</h2>
				{
					data.skill.map((dt,index)=>{
						return(
							<div className='list-skill-item' key={index}>
								<h3>{dt.desc}</h3>
								<input type="range" defaultValue={dt.value} min="1" max="100"/>
							</div>
						)
					})
				}
            </div>
        </div>
    )
}

export default Resume
