import React from "react";

function Aboult(props){

    return(
        <div className={props.state > 1 ? 'page' : 'page active'} onClick={() =>  props.click(1)}>


        </div>  
    )
}

export default Aboult