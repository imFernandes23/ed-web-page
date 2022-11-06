import React from "react";
import './css/Aboult.css'
import Card from "../components/Card";
import ColorDrop from "../components/ColorDrop";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as DiIcons from 'react-icons/di'





function Aboult(props){
    

    return(
        <div className={props.state > 1 ? 'page' : 'page active'} onClick={() =>  props.click(1)}>
            <div className={props.state === 1 ? 'content active' : 'content'}>
            <Card/>
            <ColorDrop color={'#7127F2'} icon={<FaIcons.FaPython/>} posiX={'20%'} posiX2={'42.5%'}/>
            <ColorDrop color={'#DE6B57'} icon={<AiIcons.AiFillHtml5/>} posiX={'40%'} posiX2={'47.5%'}/>
            <ColorDrop color={'#3D92CB'} icon={<FaIcons.FaCss3Alt/>} posiX={'60%'} posiX2={'52.5%'}/>
            <ColorDrop color={'#EEC855'} icon={<DiIcons.DiJavascript/>} posiX={'80%'} posiX2={'57.5%'}/>
        </div>
        </div>  
    )
}

export default Aboult