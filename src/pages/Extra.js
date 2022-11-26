import React from "react";

function Extra(props){

    return(
        <div className={props.state ? 'extra page active' : 'extra page'} onClick={() =>  props.click(4)}>
            <div className={props.state === 4 ? 'content active' : 'content'}>

</div>
        </div>
    )
}

export default Extra