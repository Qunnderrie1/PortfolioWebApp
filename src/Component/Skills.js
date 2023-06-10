import React from "react";
import '../App.css'
import jsImage from '../Images/javaimage.png'
import node from '../Images/icons8-nodejs-128.png';
import react from '../Images/react-icon.png';
import mysql from '../Images/icons8-mysql-128.png';
import html from '../Images/html5.png';
import css from '../Images/css3.png';



const Skills = () => {
    return (
        
        <div className="skillsSection container-fluid">

     
        <div className="skillsContainer container">

            <h2>Skills.</h2>
            <div className="tableSkillsContainer container-fluid">

                <div className="rowContainer container ">

                    <div className="row ">
                        <div className="col">
                            <img  src={html} />
                            <p>HTML</p>
                        </div>
                        <div className="col">
                            <img src={css} />
                            <p>CSS</p>
                        </div>
                        <div className="col">
                            <img src={jsImage} />
                            <p>JavaScript + ES6</p>
                        </div>

                    </div>

                        <div className="row">
                            

                        <div className="col">
                            <img src={react} />
                            <p>React</p>
                        </div>
                        <div className="col">
                            <img src={mysql} />
                            <p>MySQL</p>
                        </div>
                        <div className="col">
                            <img src={node} />
                            <p>Node.js</p>
                        </div>
                    

                        </div>

                        
                    </div>
                
             

            </div>

        </div>
        </div>
    )
}

export default Skills;