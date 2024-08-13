import React, { useState, useEffect, useRef } from "react";

const UseRef2 = () => {
  const [count, setCount] = useState(0);
  const intervalClear = useRef();
  useEffect(() => {
    intervalClear.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalClear.current);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => clearInterval(intervalClear.current)}>
        ClearInterval
      </button>
    </div>
  );
};

export default UseRef2;
