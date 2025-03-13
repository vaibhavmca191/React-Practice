import React, { memo } from "react";

function ChildA({Learning,count}){ 
    console.log("Child Component");

    return(
        <>
        <h1>Hiiiiiii....</h1>
        
        </>
    )

}
export default  memo(ChildA);