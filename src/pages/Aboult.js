import React from "react";
import './Aboult.css'

function Aboult(props){

    return(
        <div className={props.state > 1 ? 'page' : 'page active'} onClick={() =>  props.click(1)}>
            <div className={props.state === 1 ? 'content active' : 'content'}>

            <h1 className="aboult-title">Um pouco sobre mim</h1>
        </div>
        </div>  
    )
}

export default Aboult