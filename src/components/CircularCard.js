import React ,{useState, useRef} from "react";
import './css/CircularCard.css'
import OutSideClick from "../hooks/OutsideClick";


export default function CircularCard(props){
    const [isOpen, setIsOpen] = useState(false)
    const Ref = useRef(null)
    const [opacity, setOpacity] =useState(0)
    const close = () => setIsOpen(false)

    // OutSideClick(Ref, isOpen, close)

    return(
        

        <div ref={Ref} className={isOpen ? 'circular-card active' : 'circular-card'} style={{'--Xposi': props.Xposi , '--Yposi': props.Yposi}}>
            <div className="content-card" onClick={() => setIsOpen(!isOpen)}>

            </div>

        </div>
    )
}