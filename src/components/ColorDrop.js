import React, {useState, useRef} from "react";
import './css/ColorDrop.css'
import OutSideClick from "../hooks/OutsideClick";

function ColorDrop(props){
    const [color, setColor] = useState(false)
    const Ref = useRef(null)
    const close = () => setColor(false)

    OutSideClick(Ref, color, close)

return(
    <div ref={Ref} className={ color ? 'color-drop active' : 'color-drop' }    
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