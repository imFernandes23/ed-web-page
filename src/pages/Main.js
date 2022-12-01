import React from "react";
import './css/Main.css'
import * as AiIcons from 'react-icons/ai'

function Main(props) {

    return(
        <div className={props.state === 0 ? 'main page active' : 'main page'} onClick={() =>  props.click(0)}  >
            <div className={props.state === 0 ? 'content active' : 'content'}>

                <img src={require('../assets/avatar.png')} className='avatar'/>
                <h1>Eduardo Fernandes</h1>
                <h2>Desenvolvedor Front-end e python.</h2>
                <span className="style-element"></span>
                
                <ul className="main-list">
                    <li>
                        <a href="https://github.com/imFernandes23" target="_blank" className="link-button"><AiIcons.AiFillGithub className="icon-inf"/> <p className="text-info">Visitar repositório.</p></a>
                    </li>
                    <li>
                       <a href="http://www.linkedin.com/in/eduardo-fernandes-26779b216" target="_blank" className="link-button"><AiIcons.AiFillLinkedin className="icon-inf"/> <p className="text-info">Visitar Linkedin.</p></a> 
                    </li>
                    <li>
                        <a href="mailto: eduardosage2302@gmail.com" target="_blank" className="link-button"><AiIcons.AiFillMail className="icon-inf"/>
                        <p className="text-info">Enviar e-mail.</p></a>
                    </li>
                </ul>

                


            </div>
        </div>
    )
}

export default Main