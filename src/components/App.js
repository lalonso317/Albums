import React from "react"
import Albums from './Albums'
import Images from './Images'
import Picture from './Picture'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/style.css'

function App(props) {
  return(
    <Router>
      <div>
      <Route exact path ="/" component={Albums} />
      <Route path = "/Images/:id" component={Images} />
      <Route path = "/Picture/:picid" component={Picture}/>
      </div>
    </Router>
  )
}

export default App
