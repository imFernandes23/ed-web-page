import React,{useState} from "react";
import CircularCard from "../components/CircularCard";
import './css/Knowledge.css'
import * as DiIcons from 'react-icons/di'

function Knowledge(props) {
    const [itsVisible, setItsVisible] = useState(true)

    return(
        <div className={props.state > 2 ? 'knowledge page' : 'knowledge page active'} onClick={() =>  props.click(2)}>
            <div className={props.state === 2 ? 'content active' : 'content'}>

                <CircularCard 
                    icon={<DiIcons.DiReact/> } 
                    color={'#00EEF2'} 
                    percent={85} 
                    title={'React.js'}
                    itens={['item1', 'item2','item3', 'item4', 'item5', 'item6', 'item7']}
                    itsVisible={itsVisible}
                    setItsVisible={setItsVisible}
                    />
                <CircularCard 
                    icon={<DiIcons.DiReact/> } 
                    color={'#00EEF2'} 
                    percent={85} 
                    title={'React.js'}
                    itens={['item1', 'item2','item3', 'item4', 'item5', 'item6', 'item7']}
                    itsVisible={itsVisible}
                    setItsVisible={setItsVisible}
                    />
                <CircularCard 
                    icon={<DiIcons.DiReact/> } 
                    color={'#00EEF2'} 
                    percent={85} 
                    title={'React.js'}
                    itens={['item1', 'item2','item3', 'item4', 'item5', 'item6', 'item7']}
                    itsVisible={itsVisible}
                    setItsVisible={setItsVisible}
                    />
                <CircularCard 
                    icon={<DiIcons.DiReact/> } 
                    color={'#00EEF2'} 
                    percent={85} 
                    title={'React.js'}
                    itens={['item1', 'item2','item3', 'item4', 'item5', 'item6', 'item7']}
                    itsVisible={itsVisible}
                    setItsVisible={setItsVisible}
                    />
                <CircularCard 
                    icon={<DiIcons.DiReact/> } 
                    color={'#00EEF2'} 
                    percent={85} 
                    title={'React.js'}
                    itens={['item1', 'item2','item3', 'item4', 'item5', 'item6', 'item7']}
                    itsVisible={itsVisible}
                    setItsVisible={setItsVisible}
                    />
                <CircularCard 
                    icon={<DiIcons.DiReact/> } 
                    color={'#00EEF2'} 
                    percent={85} 
                    title={'React.js'}
                    itens={['item1', 'item2','item3', 'item4', 'item5', 'item6', 'item7']}
                    itsVisible={itsVisible}
                    setItsVisible={setItsVisible}
                    />

            </div>
        </div>
    )
}

 export default Knowledge