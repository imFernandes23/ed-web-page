import React from "react";
import CircularCard from "../components/CircularCard";
import './css/Knowledge.css'

function Knowledge(props) {

    return(
        <div className={props.state > 2 ? 'knowledge page' : 'knowledge page active'} onClick={() =>  props.click(2)}>
            <div className={props.state === 2 ? 'content active' : 'content'}>

                <CircularCard Xposi={0} Yposi={0}/>
                <CircularCard Xposi={1} Yposi={1}/>
                <CircularCard Xposi={0} Yposi={2}/>
                <CircularCard Xposi={1} Yposi={0}/>
                <CircularCard Xposi={0} Yposi={1}/>
                <CircularCard Xposi={1} Yposi={2}/>

            </div>
        </div>
    )
}

 export default Knowledge