import React from "react";
import "./Wrapper.css";

function Wrapper(props) {
    return (
        <div className="card">
            <div className="img-container" onClick={() => props.FFCharactersClicked(props.id)}>
                <img className = "heroImg" alt={props.id} src={props.image} />
               


            </div> 



        </div>
    )
};
export default Wrapper;