import React from "react";
import '../App.css';
import twitter from '../Images/twitt.png';
import linkedIn from '../Images/linked.png';
import gitHub from '../Images/git.png';
import resumeDownload  from './New_Resume_Qunnderrie.pdf'

const Header = () => {



    return (
        <div id="header" className="headerContainer container">
       
            <div className="headerContent container">
            <h1>I'M A <span>WEB DEVELOPER.</span></h1>
            <p>Web development is my passion. I am so excited to showcase my projects and skills.</p>
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
            <a className="resumeBtn" href={resumeDownload} download={resumeDownload}>Resume CV</a>
        </div>
    </div>
    )
}

export default Header;