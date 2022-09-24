import React from 'react'
import logo from './assets/react.svg'

export default function Header(){
    return (
        <nav>
            <img src={logo} className='logo'/>
            <h3 className='react-facts'>ReactFacts</h3>
            <h4 className='nav-item'>React Course-Project1</h4>
        </nav>
    )
}