import React from "react";
import "./Score.css";
import BannerImage from '../images/_final-fantasy-banner.png';

function Score(props) {
    return (

        <div>
            <nav className='nav'>
                <h2>
                <p className='navBar-title'><b>Final Fantasy - Clicky Game</b></p>
                <p className='navBar-score'>Score: {props.score} | Top Score: {props.topScore}</p>
                <p className='navBar-message'>{props.message} </p>
                </h2>
                <br></br>
                <img id="banner" src={BannerImage} alt=""/>
                    <br></br><br></br> <p></p>   
            </nav>
        
        </div>

     
    )
}


export default Score;