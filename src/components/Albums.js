import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Albums(props){
const[albs, setAlbs] = useState([])

useEffect(() =>{
    axios.get('http://localhost:3000/albums/').then(resp =>{
        setAlbs(resp.data)
    })
}, [])

    return(
        <div className = "main">
            <h1 className="h1">Albums</h1>
            <div className="block">
            {albs.map(alb =>(
                <Link style={{ textDecoration: 'none' }} key={"alb" + alb.id} to={"/Images/" + alb.id}>
                <p className="albname" >{alb.name}</p>
                <img className="thumb" src={alb.thumbnail}/>
                </Link>
            ))}
        </div>
        </div>
    )
}

export default Albums