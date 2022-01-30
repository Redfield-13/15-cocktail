import React from 'react'
import Logo from './logo.svg'
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'

function navbar() {
    return (
        <header className='navbar'>
            <div className="nav">
                <Link to='/' exact='true'>
                <a href=""><img src={Logo} alt=""/></a>
                </Link>
                
                <Link to='/about' exact='true'> 
                <a href=""><span className='right'>About</span></a>
                </Link>
                <Link to='/' exact='true'>
                    <a href=""><span className='right'>Home</span></a>  
                </Link>
                
                
                   
            </div>
            
        </header>
    )
}

export default navbar
