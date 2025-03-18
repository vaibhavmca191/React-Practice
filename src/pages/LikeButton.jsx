import { useState } from "react";

export default function LikeButton(){

    let [isLiked, setIsLiked] = useState(false);
    let [clicks,setClicks] =useState(0);
    let [count, setCount] = useState(0);
    let toggleLike = () => {
      setIsLiked(!isLiked);  
      setClicks(clicks+1);      
    };

    let incCount = () =>{
      setCount((currCount) =>{
        return currCount + 1;
      });
      setCount((currCount) =>{
        return currCount + 1;
      });
      setCount((currCount) =>{
        return currCount + 1;
      });

    }

    let likeStyle =  {color : "red"}
    
    return(
        <div>
          <p>click:- {clicks}</p>
        
            <p onClick={toggleLike}> 
               {
                 isLiked ?  (<i className="fa fa-heart" aria-hidden="true" style={likeStyle}></i>
                 ) : ( 
                    <i class="fa fa-motorcycle" aria-hidden="true"></i>
                 )
               }
           </p>
           <h3>Count = {count}</h3>

           <button onClick={incCount}>Increase Count</button>
        </div>
    );

}