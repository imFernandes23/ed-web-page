import React, { useState } from "react";
import Main from "./pages/Main";
import Aboult from "./pages/Aboult";
import Knowledge from "./pages/Knowledge";
import Projects from "./pages/Projects";
import Extra from "./pages/Extra";
import * as AiIcons from 'react-icons/ai'

function App(props){
    const [controlView, setControlView] = useState(0)
    
    

    return(
        <> 
            <div className="help">
                <AiIcons.AiOutlineQuestionCircle/>
                <p className="hText"> Clique na cor de cada página para ve-la.</p>

            </div>

            <div className="screen">
            <Main state={controlView} click={setControlView}/>
            <Aboult state={controlView} click={setControlView}/>
            <Knowledge state={controlView} click={setControlView}/>
            <Projects state={controlView} click={setControlView}/>
            <Extra state={controlView} click={setControlView}/>
            </div>
        </>
    )
}

export default App