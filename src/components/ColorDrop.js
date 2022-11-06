import React, {useState} from "react";
import './css/ColorDrop.css'

function ColorDrop(props){
    const [color, setColor] = useState(false)

return(
    <div className={ color ? 'color-drop active' : 'color-drop' }    
        onClick={() => setColor(!color)}
        style={{'--MainColor':props.color , '--PosiX':props.posiX, '--PosiX2': props.posiX2 }}>


        <div className="card-colored">
                <h2 className="card-title-colored">Um pouco sobre mim</h2>
                
                <span className="icon-card">{props.icon}</span>

                <p className="card-text-colored">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt magni tempora! Perspiciatis doloremque, natus harum molestiae officia corrupti obcaecati, repellat pariatur consectetur dolor voluptatum, at repudiandae eveniet! Ducimus, amet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt magni tempora! Perspiciatis doloremque, natus harum molestiae officia corrupti obcaecati, repellat pariatur consectetur dolor voluptatum, at repudiandae eveniet! Ducimus, amet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt magni tempora! Perspiciatis doloremque, natus harum molestiae officia corrupti obcaecati, repellat pariatur consectetur dolor voluptatum, at repudiandae eveniet! Ducimus, amet.
                </p>
            </div>
    </div>
)

}

export default ColorDrop