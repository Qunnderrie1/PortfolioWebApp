import React from "react";
import portfolio from '../Images/Portfolio.PNG'
import '../App.css';
import fallingBall from '../Images/fallingball.jpg'
import tictactoe from '../Images/tictactoe.PNG'

const Projects = () => {
    return(
        <div id="projects" className="projectsContainer container">
            <div className="divider"></div>
            <h2>MyProjects</h2>
            <div className="projects ">

                <div className="row">
                    <div className="col">
                        <div className="card shadow-lg">
                        <img src={portfolio}  />
                            <div className="card-body">
                                <h3>Portfolio</h3>
                                <p>This is my portfolio website. I design and developed this website
                                    using React, Javascript, HTML, & CSS.
                                </p>
                                <a href="https://qunnderrie1.github.io/PortfolioWebApp/" >
                                <button className="btn btn-primary">View</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                        <img src={fallingBall}  />
                            <div className="card-body">
                                <h3>Falling Ball</h3>
                                <p>This mobile game is avaliable in the google play store. 
                                </p>
                                <a href="https://play.google.com/store/apps/details?id=com.SuperHLStudios.FallingBallMobile" >
                                <button className="btn btn-primary">View</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                        <img src={tictactoe}  />
                            <div className="card-body">
                                <h3>Tic Tac Toe</h3>
                                <p>This is a web game app. I used HTML, CSS, and Javascript.
                                </p>
                                <a href="https://qunnderrie1.github.io/TicTacToe/" >
                                <button className="btn btn-primary">View</button>
                                </a>


                            </div>
                        </div>
                    </div>
                
                </div>
              
            </div>
        </div>
    )
}


export default Projects;