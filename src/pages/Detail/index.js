import { useParams } from "react-router-dom"
import Data from '../../assets/data/data.json'
import './detail.css'

function Detail(){

    const {id,type}=useParams()
    const data=type==='web'?Data.portofolio.web[id]:Data.portofolio.mobile[id]

    console.log(data)
    return(
        <div className='detail'>
            <div className='container-img'>
                <img src={`images/portofolio/${data.image}`} className='img' alt={id}/>
            </div>
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
            <a href={data.url}>{data.url}</a>
            <h2>Technologi</h2>
            <ul>
                {
                    data.tech.map((te,index)=>{
                        return(
                            <li key={index}>{te}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Detail