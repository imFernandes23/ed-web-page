import React from "react";
import CircularCard from "../components/CircularCard";
import './css/Knowledge.css'
import * as DiIcons from 'react-icons/di'

function Knowledge(props) {

    return(
        <div className={props.state > 2 ? 'knowledge page' : 'knowledge page active'} onClick={() =>  props.click(2)}>
            <div className={props.state === 2 ? 'content active' : 'content'}>

                <CircularCard icon={<DiIcons.DiReact/> } color={'#00EEF2'}/>
                <CircularCard icon={<DiIcons.DiReact/> } color={'#00EEF2'}/>
                <CircularCard icon={<DiIcons.DiReact/> } color={'#00EEF2'}/>
                <CircularCard icon={<DiIcons.DiReact/> } color={'#00EEF2'}/>
                <CircularCard icon={<DiIcons.DiReact/> } color={'#00EEF2'}/>
                <CircularCard icon={<DiIcons.DiReact/> } color={'#00EEF2'}/>

            </div>
        </div>
    )
}

 export default Knowledge