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
    const percent = props.percent
    const wave100 = 'M 0 400 L 0 400 L 0 50 C 50 0 50 100 100 50 C 150 0 150 100 200 50 L 200 400 L 0 400'
    const wave0 = 'M 0 400 L 0 400 L 0 350 C 50 300 50 400 100 350 C 150 300 150 400 200 350 L 200 400 L 0 400 '
    const waveStyle1 = `path('${wave0}')`



    return(
        

        <div ref={Ref} className='circular-card active'>
            <div className={!isOpen ? 'button ' : 'button active'} onClick={() => setIsOpen(!isOpen)} >
                <svg >
                    <circle cx={65} cy={65} r={65}></circle>
                </svg>

                {icon}   

            </div> 

            <div className={ isOpen ? 'full-card active' : 'full-card'} onClick={() => setIsOpen(!isOpen)}>

                <div className="bar-vert-icon"  style={{'--MainColor':color , '--Percent': percent, '--Wave1' : waveStyle1 }}>
                    {icon}

                    <div className="wave1" >
                        {icon}
                    </div>

                </div>
                <div className="card-itens-list">
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