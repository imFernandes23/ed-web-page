import React, { useState } from "react";
import Main from "./pages/Main";
import Aboult from "./pages/Aboult";
import Knowledge from "./pages/Knowledge";
import Projects from "./pages/Projects";
import Extra from "./pages/Extra";


function App(props){
    const [controlView, setControlView] = useState(0)
    
    

    return(
        <> 
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