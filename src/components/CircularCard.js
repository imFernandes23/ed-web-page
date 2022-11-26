import React ,{useState, useRef} from "react";
import './css/CircularCard.css'
import OutSideClick from "../hooks/OutsideClick";


export default function CircularCard(props){
    const [isOpen, setIsOpen] = useState(false)
    const Ref = useRef(null)
    const [opacity, setOpacity] =useState(0)
    const close = () => setIsOpen(false)

    OutSideClick(Ref, isOpen, close)

    return(
        

        <div ref={Ref} className={isOpen ? '.circular-card active' : 'circular-card'}>
            <div className="button">
                <div className="percent" style={{'--MainColor': '#14EDF4', '--Perct':86, '--Opacity': opacity}}>
                <div className="dot"></div>
                    <svg>
                        <circle cx='65' cy='65' r='60'></circle>
                        <circle cx='65' cy='65' r='60'></circle>
                    </svg>
                    
                </div>
            </div>

        </div>
    )
}