// Practicing memo in react.js

import React, { useState, useEffect } from "react";
import Memo from "./Memo";

const MemoParent = () => {
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      {console.log("Parent component")}
      <button onClick={handleChange}>Increment</button>
      <p>Count: {count}</p>
      <Memo name="Durgesh" />
    </div>
  );
};

export default MemoParent;
