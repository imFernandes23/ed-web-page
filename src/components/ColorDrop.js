import React, {useState} from "react";
import './css/ColorDrop.css'

function ColorDrop(props){
    const [color, setColor] = useState(false)

return(
    <div className={ color ? 'color-drop active' : 'color-drop' }    
        onClick={() => setColor(!color)}
        style={{'--MainColor':props.color , '--PosiX':props.posiX, '--PosiX2': props.posiX2 }}>


        <div className="card-colored">
                <h2 className="card-title-colored">{props.cardTitle}</h2>
                
                <span className="icon-card">{props.icon}</span>


                {props.cardText}
            </div>
    </div>
)

}

export default ColorDrop