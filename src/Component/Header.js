import React from "react";
import '../App.css';
import twitter from '../Images/twitter.png';
import linkedIn from '../Images/linkedin.png';
import gitHub from '../Images/github.png';
import resumeDownload  from './QunnderrieSnelling-Resume.pdf'

const Header = () => {



    return (
        <div id="header" className="headerContainer container">
       
            <div className="headerContent container">
            <h1>I'M A <span>WEB DEVELOPER.</span></h1>
            <p>Web development is my passion. I am so excited to showcase my projects and skills.</p>
            <div className="socialMediaContainer">
                <a href="https://twitter.com/QunnderrieDev">
                <img src={twitter} width="25px" height="25px" /></a>
                <a href="https://www.linkedin.com/in/qunnderrie/" >
                <img src={linkedIn} width="25px" height="25px" />
                </a>
                <a href="https://github.com/Qunnderrie1" >
                <img src={gitHub} width="25px" height="25px" />
                </a>
            </div>
            <a className="resumeBtn" href={resumeDownload} download={resumeDownload}>Resume CV</a>
        </div>
    </div>
    )
}

export default Header;