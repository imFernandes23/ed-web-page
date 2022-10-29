import React from "react";

function Knowledge(props) {

    return(
        <div className={props.state > 2 ? 'page' : 'page active'} onClick={() =>  props.click(2)}>

        </div>
    )
}

 export default Knowledge