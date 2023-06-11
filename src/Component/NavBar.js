import React from "react";
import '../App.css'
const NavBar = () => {
    return(
        <nav className="navContainer container">
               
            <p>{`QUNNDERRIE`}</p>
            <ul>
                <li>
                    <a href="/" >Home</a>
                </li>
                <li>
                    <a href="#projects" >Portfolio</a>
                </li>
                <li>
                    <a href="#contact" >Contact</a>
                </li>
                <li>
                    <a href="#about" >About</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;