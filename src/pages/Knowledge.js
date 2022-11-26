import React from "react";
import CircularCard from "../components/CircularCard";
import './css/Knowledge.css'

function Knowledge(props) {

    return(
        <div className={props.state > 2 ? 'knowledge page' : 'knowledge page active'} onClick={() =>  props.click(2)}>
            <div className={props.state === 2 ? 'content active' : 'content'}>

                <CircularCard/>
                <CircularCard/>
                <CircularCard/>
                <CircularCard/>
                <CircularCard/>
                <CircularCard/>


            </div>
        </div>
    )
}

 export default Knowledge