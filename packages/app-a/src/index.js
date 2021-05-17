import React from "react";


import { publish} from '../../../Eventbus'



export default function App() {



    const handleButton = () => {
        publish("click-a")
    }


    return (
        <div style={{padding: 20, backgroundColor: 'ORANGE'}}>
            <h1>APP-A</h1>
            <button onClick={handleButton} id="button-a">Toggle</button>
        </div>
    );
}
