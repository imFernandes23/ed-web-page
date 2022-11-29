import React ,{useState, useRef} from "react";
import './css/CircularCard.css'
import OutSideClick from "../hooks/OutsideClick";
import * as DiIcons from 'react-icons/di'


export default function CircularCard(props){
    const [isOpen, setIsOpen] = useState(false)
    const Ref = useRef(null)
    const close = () => setIsOpen(false)

    OutSideClick(Ref, isOpen, close)

    //Elements props
    const icon = props.icon
    const color = props.color


    return(
        

        <div ref={Ref} className='circular-card active'>
            <div className={!isOpen ? 'button ' : 'button active'} onClick={() => setIsOpen(!isOpen)} style={{'--MainColor':color}}>
                <svg >
                    <circle cx={65} cy={65} r={65}></circle>
                </svg>

                {props.icon}   

            </div> 

            <div className={ isOpen ? 'full-card active' : 'full-card'} onClick={() => setIsOpen(!isOpen)}>

            </div>


        </div>
    )
}