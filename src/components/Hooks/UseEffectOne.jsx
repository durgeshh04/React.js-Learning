// Conditionally run useEffect hook

import React, { useState, useEffect } from "react";

const UseEffectOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Updating component...")
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input type="text" id="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count}
      </button>
      <h1>Clicked {count} times</h1>
    </div>
  );
};

export default UseEffectOne;
