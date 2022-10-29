import React from "react";

function Main(props) {

    return(
        <div className={props.state === 0 ? 'page active' : 'page'} onClick={() =>  props.click(0)}  >

        
        </div>
    )
}

export default Main