import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import Icon from '../lib/Icon'

 
function Picture(props){
const [single, setSingle] = useState('')
const picid = props.match.params.picid
const [back, setBack] = useState([])
const [add, setAdd] = useState('')


useEffect(()=>{
    axios.get(`/images/${picid}`).then(img =>{
        setSingle(img.data)
        setBack(img.data.albumId)

    })
},[picid,back])

// function check(){
//   if(single.id !== single.picid ){

//   }
// }
    return(
        <div>
            <div id="single">
            <img className="singleimages"key={"img" + single.picid} src={single.url}/>
            <p className="singlename">{single.name}</p>
            </div>
            <Link className="left" to={`/Picture/${single.id-1} `}><Icon  icon="arrow-left"></Icon></Link>
            <Link className="right" to={`/Picture/${single.id+1} `}><Icon icon="arrow-right"></Icon></Link>
            
            <Link style={{ textDecoration: 'none' }} to={`/Images/${back}`} className="back"><Icon icon="backward"></Icon></Link>
            <Link style={{ textDecoration: 'none' }} className="home" to={'/'}><Icon icon="home"></Icon></Link>
        </div>
    )
}

export default Picture