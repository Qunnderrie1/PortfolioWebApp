import React from "react";
import '../App.css'
import jsImage from '../Images/javascriptImages/icons8-javascript-144.png'
import node from '../Images/node-js.png';
import react from '../Images/react.png';
import mysql from '../Images/mysql-logo.png';
import html from '../Images/html.jpg';
import css from '../Images/css.png';


const Skills = () => {
    return (
        <div className="skillsContainer container">
                 <div className="divider"></div>
            <h2>MySkills</h2>
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
                            <p>JavaScript</p>
                        </div>
                        
                    </div>
                    <div className="row ">
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
    )
}

export default Skills;