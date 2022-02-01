import React from 'react'
import Navber from './navbar'

function About() {
    return (
        <div>
            <Navber></Navber>
            <div className="loader">
                    <div className="circle one"></div>
                    <div className="circle two"></div>
                    <div className="circle three"></div>
            </div>
        </div>
    )
}

export default About