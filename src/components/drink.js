import React from 'react'
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'

function drink(props) {
    const showDetail = ()=>{
        
    }
    return (
        <div className='drink'>
            <img className='drink-img' src={props.img} alt=""/>
            <div className="drink-info">
                <h3 className='name'>{props.name}</h3>
                <h4 className='glass'>{props.glass}</h4>
                <p className="alco">{props.alco}</p>
                <Link state={{id:props.id}} to='detail'><button className='details' onClick={showDetail}>Details</button></Link>
                
            </div>
        </div>
    )
}

export default drink
