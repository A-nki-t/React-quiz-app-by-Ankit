import React from 'react'
import logo from '../images/qm.png'
export default function Navbar() {

    return (
        <nav>
            <img src={logo} alt='logo'/>
            <h1>QUIZ APP</h1>
            <p>Test your knowledge</p>
        </nav>
    )
}

