import React ,{useState, useRef} from "react";
import './css/CircularCardPort.css'
import './css/CircularCardLand.css'
import OutSideClick from "../hooks/OutsideClick";
import * as DiIcons from 'react-icons/di'


export default function CircularCard(props){
    const [isOpen, setIsOpen] = useState(false)
    const Ref = useRef(null)

    

    //Elements props
    const icon = props.icon
    const color = props.color
    const percent = props.percent
    const title = props.title
    const itens = props.itens
    const itsVisible = props.itsVisible

    const screenFocus = () => {
        setIsOpen(true)
        props.setItsVisible(0)
    }

    const close = () => {
        setIsOpen(false)
        props.setItsVisible(1)
    }


    OutSideClick(Ref, isOpen, close)

    return(
        

        <div ref={Ref} className='circular-card active'>
            <div className={itsVisible ? 'button ' : 'button active'} onClick={() => {screenFocus()}} >
                <svg >
                    <circle cx={65} cy={65} r={65}></circle>
                </svg>

                {icon} 

            </div> 

            <div className={ isOpen ? 'full-card active' : 'full-card'} onClick={() => {close()}}>

                <div className="bar-vert-icon"  style={{'--MainColor':color , '--Percent': percent}}>
                    {icon}

                    <div className="wave1" >
                        {icon}
                    </div>

                </div>
                <div className="card-itens-list">
                    <h1>{title}</h1>
                    <ul className="item-list">
                        {itens.map((item) => <li>{item}</li>)}
                    </ul>
                </div>


                <div className="percent" style={{'--MainColor':color , '--Percent': percent}}>
                <div className="dot"></div>
                <svg>
                    <circle cx={50} cy={50} r={50}  ></circle>
                    <circle cx={50} cy={50} r={50}  ></circle>
                </svg>
                <p>{percent}%</p>

                
                </div>

            </div>


        </div>
    )
}