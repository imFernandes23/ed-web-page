import React,{useState} from "react";
import CircularCard from "../components/CircularCard";
import './css/Knowledge.css'
import * as DiIcons from 'react-icons/di'
import * as TbIcons from 'react-icons/tb'
import * as RiIcons from 'react-icons/ri'

function Knowledge(props) {
    const [itsVisible, setItsVisible] = useState(true)

    return(
        <div className={props.state > 2 ? 'knowledge page' : 'knowledge page active'} onClick={() =>  props.click(2)}>
            <div className={props.state === 2 ? 'content active' : 'content'}>

                <CircularCard 
                    icon={<DiIcons.DiReact/> } 
                    color={'#61dafb'} 
                    percent={70} 
                    title={'React.js'}
                    itens={['- Hooks', '- Functional Components','- Lifecycle', '- State', '- Geocoding', '- JSX']}
                    itsVisible={itsVisible}
                    setItsVisible={setItsVisible}
                    />
                <CircularCard 
                    icon={<TbIcons.TbBrandHtml5/>} 
                    color={'#F08E17'} 
                    percent={80} 
                    title={'HTML 5'}
                    itens={['- HTML Semântico', '- Fomulários','- Componentes dinâmicos', '- Listas', '- Login', '- Landpage']}
                    itsVisible={itsVisible}
                    setItsVisible={setItsVisible}
                    />
                <CircularCard 
                    icon={<TbIcons.TbBrandCss3/> } 
                    color={'#00EEF2'} 
                    percent={85} 
                    title={'CSS 3'}
                    itens={['- Keyframes', '- Resposive Layouts','- Media Queries', '- Transitions']}
                    itsVisible={itsVisible}
                    setItsVisible={setItsVisible}
                    />
                <CircularCard 
                    icon={<TbIcons.TbBrandJavascript/> } 
                    color={'#E8EF22'} 
                    percent={65} 
                    title={'JavaScript'}
                    itens={['- Requests', '- JSON','- DOM', '- APIs']}
                    itsVisible={itsVisible}
                    setItsVisible={setItsVisible}
                    />
                <CircularCard 
                    icon={<TbIcons.TbBrandPython/> } 
                    color={'#9722EF'} 
                    percent={85} 
                    title={'Python'}
                    itens={['- Numpy', '- Matplotlib','- Pandas', '- Scikit-Learn', '- Keras', '- OpenCV']}
                    itsVisible={itsVisible}
                    setItsVisible={setItsVisible}
                    />
                <CircularCard 
                    icon={<RiIcons.RiEnglishInput/> } 
                    color={'#EF4A22'} 
                    percent={55} 
                    title={'Inglês'}
                    itens={['- Leitura', '- Interpretação']}
                    itsVisible={itsVisible}
                    setItsVisible={setItsVisible}
                    />

            </div>
        </div>
    )
}

 export default Knowledge