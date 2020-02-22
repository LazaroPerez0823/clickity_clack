import React from "react";
import "./Score.css";


function Score(props) {
    return (

        <div>
            <nav className='nav'>
                <h2>
                <span className='navBar-title'>Clicky Game</span>
                <span className='navBar-begin'> {props.message}</span>
                <span className='navBar-score'>Score: {props.score} | Top Score: {props.topScore}</span>
                </h2>
            </nav>

        </div>

     
    )
}


export default Score;