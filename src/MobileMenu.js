import React from "react";
import twitter from './Images/twitt.png';
import linkedIn from './Images/linked.png';
import gitHub from './Images/git.png';
import qunnderrie from './Images/Me.png'

const MobileMenu = () =>{
    return (
        <div id="mobileMenuContainer" className="mobileMenuContainer container-fluid">
            <div className="profile">
            <img src={qunnderrie} width="150px" height="150px" />
        <div className="profileBackground"></div>
                </div> 

           <ul>
                <li>
                    <a href="#" >Home</a>
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
            <div className="socialMediaContainer">
                <a href="https://twitter.com/QunnderrieDev">
                <img src={twitter} width="35px" height="35px" /></a>
                <a href="https://www.linkedin.com/in/qunnderrie/" >
                <img src={linkedIn} width="35px" height="35px" />
                </a>
                <a href="https://github.com/Qunnderrie1" >
                <img src={gitHub} width="35px" height="35px" />
                </a>

            </div>
        </div>
    )
}


export default MobileMenu;