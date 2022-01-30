import React from 'react'
import Navbar from './navbar'
import Cocktails from './cocktails'
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'

function Landing() {
    return (
       
            <div className="App">
      <Navbar></Navbar>
      <Cocktails></Cocktails>
    </div>
       
    )
}

export default Landing
