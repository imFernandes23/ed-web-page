import React from "react";

function Extra(props){

    return(
        <div className={props.state ? 'page active' : 'page'} onClick={() =>  props.click(4)}>

        </div>
    )
}

export default Extra