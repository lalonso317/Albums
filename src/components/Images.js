import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'


function Images(props){
const[imgs, setImg] = useState([]) 
const [albumName, setAlbumName] = useState('')


useEffect( function images(){
    const id = props.match.params.id
    axios.get(`http://localhost:3000/albums/${id}?_embed=images`).then(dat =>{
        setAlbumName(dat.data.name)
        setImg(dat.data.images)
    })    
}, []) 

// const [labelName, setlabelName]
// useEffect( function labels() {
//     axios.get('http://localhost:3000/albums/').then(bruh =>{
//         setlabelName(bruh.data)
//     })
// },[])

    return(
        <div>
            {/* {labelName.map(lab =>(
                <div className="block">
                <p className="albname"key={"lab" + lab.id} >{labelName}</p>
                </div>
               
                ))} */}
             
            <h1 class="aname">{albumName}</h1>
            <div className="image">
        {imgs.map( img =>(
            <img className="images"key={"img" + img.id} src={img.url}/>
            
        ))}
        </div>
        </div>
    )
   
}

export default Images