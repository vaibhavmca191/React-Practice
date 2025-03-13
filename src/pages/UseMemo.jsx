import { useMemo, useState } from "react";

function Memo(){
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);

    function expensiveTask(num) {
        console.log("Inside Expensive Task");
        for(let i=0; i<=100000000; i++) {}
        return num*2;
        
    }

   let doubleValue =  useMemo( () => expensiveTask(input), [input]);


  return(
        <div>
            <button onClick={() => setCount(count+1)}>
                Increament
            </button>

            <div>
                Count : {count}
            </div>
            <input
              type="number"
              placeholder="Enter number"
              value={input}
              onChange={(e) => setInput(e.target.value)}  
            />
            <div>
                Double: {doubleValue}
            </div>

        </div>
    )
}
export default Memo