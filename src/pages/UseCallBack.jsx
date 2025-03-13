import React, { useState, useCallback } from "react";
import ChildA from "./ChildA";


function UseCallBack() {
    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);
    const Learning = useCallback( ()=> {

    },[count])

    return (
        <div className="App">
        <h1>Learning usecallback</h1>
        <ChildA Learning={Learning}/>
        <h1>{add}</h1>
        <button onClick={ () => setAdd(add + 1)}>Addition</button>
        <button onClick={()=> setCount(count + 2)}>Count</button>
        <h1>{count}</h1>

        </div>
    );
}
export default UseCallBack