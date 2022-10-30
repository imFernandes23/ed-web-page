import React from "react";

function Projects(props){

    return(
        <div className={props.state > 3 ? 'page' : 'page active'} onClick={() =>  props.click(3)}>
            <div className={props.state === 3 ? 'content active' : 'content'}>

</div>
        </div>
    )
}

export default Projects