import React from "react";
import portfolio from '../Images/Portfolio.PNG'
import '../App.css';
import fallingBall from '../Images/fallingball.jpg'
import tictactoe from '../Images/tictactoe.PNG'
import todoApp from '../Images/todoApp.jpg'

const Projects = () => {
    return(
        <div id="projects" className="projectsContainer container">
            <h2>Projects.</h2>
            <div className="projects ">

                <div className="row">
                    <div className="col">
                        <div className="card shadow-lg">
                        <a href="https://qunnderrie1.github.io/PortfolioWebApp/" >
                        <img src={portfolio}  />
                        </a>
                        </div>
                        <div className="card-body">
                                <h3>Portfolio</h3>
                            </div>
                    </div>


                    <div className="col">
                        <div className="card shadow-lg">
                        <a href="https://play.google.com/store/apps/details?id=com.SuperHLStudios.FallingBallMobile" >
                        <img src={fallingBall}  />
                        </a>
                        </div>
                        <div className="card-body">
                                <h3>Falling Ball</h3>
                            </div>
                    </div>


                    <div className="col">
                        <div className="card shadow-lg">
                        <a href="https://qunnderrie1.github.io/TicTacToe/" >
                        <img src={tictactoe}  />
                        </a>
                        </div>
                        <div className="card-body">
                                <h3>Tic Tac Toe</h3>
                            </div>
                    </div>


                    <div className="col">
                        <div className="card shadow-lg">
                        <a href="https://qunnderrie1.github.io/ToDoWebApp/" >
                        <img src={todoApp}  />
                        </a>
                        </div>
                        <div className="card-body">
                                <h3>ToDo List</h3>
                            </div>
                    </div>

                
                </div>
              
            </div>
        </div>
    )
}


export default Projects;