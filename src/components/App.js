import React from "react"
import Albums from './Albums'
import Images from './Images'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/style.css'

function App(props) {
  return(
    <Router>
      <div>
      <Route exact path ="/" component={Albums} />
      <Route path = "/Images/:id" component={Images} />
      </div>
    </Router>
  )
}

export default App
