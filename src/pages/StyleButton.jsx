import { useState } from "react";
import "../components/styles.css";
 

export default function Button() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div>
     
      <Counter isFancy={isFancy} />

      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => setIsFancy(e.target.checked)}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }
  if (isFancy) {
    className += " fancy";
    
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
  
      
    </div>
  );
}
