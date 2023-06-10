
import React from "react";
import './App.css';


const Hamburger = ({userClick}) => {


    return(


        <div className="hamburger container ">
        <div onClick={userClick} id='hamburger' className="hamburger">
          <div id="line1" className="line1"></div>
          <div id="line2" className="line2"></div>
          <div id="line3" className="line3"></div>
        </div>
        </div>
    )
}

export default Hamburger;