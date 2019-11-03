import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Icon from '../lib/Icon'


function Images(props){
const[imgs, setImg] = useState([]) 
const [albumName, setAlbumName] = useState('')
const[albs, setAlbs] = useState([])
const id = props.match.params.id

useEffect(()=>{
    axios.get(`/albums/${id}?_embed=images`).then(dat =>{
    setAlbumName(dat.data.name)
    setImg(dat.data.images)
    })   
}, [id])
useEffect(() =>{
    axios.get('http://localhost:3000/albums/').then(resp =>{
        setAlbs(resp.data)
    })
}, [])

    return (
        <div>
            <div className="labels">
            {albs.map(alb =>(
                <Link style={{ textDecoration: 'none' }}  key={"alb" + alb.id} to={"/Images/" + alb.id}>
                <p className="label" >{alb.name}</p>
                </Link>
            ))}
                <Link style={{ textDecoration: 'none' }} className="home" to={'/'}><Icon icon="home"></Icon></Link>
                 </div>
            <h1 class="aname">{albumName}</h1>
            <div className="image">
            {imgs.map( img =>(
                <Link style={{ textDecoration: 'none' }} key={"img" + img.id} to={"/Picture/" + img.id}>
                <p className="imgname">{img.name}</p>
                <img className="images"src={img.url}/>
                </Link>
          
        ))}
         
        </div>
        </div>
    )
   
}

export default Images