import React, { useEffect, useState, useRef } from "react";

const UseEffectTimer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  //   On Mounting the component: Automatically starts

  //   useEffect(() => {
  //     timerRef.current = setInterval(() => {
  //       setCount(Math.floor(Math.random() * 100));
  //     }, 1000);

  //     // Cleanup Code
  //     return () => clearInterval(timerRef.current);
  //   }, []);

  //   On button Start: When button active

  //   const handleStart = () => {
  //     timerRef.current = setInterval(() => {
  //       setCount(Math.floor(Math.random() * 100));
  //     }, 1000);

  //     // Cleanup Code
  //     return () => clearInterval(timerRef.current);
  //   };

  //   Orignal code starts here for Dependency list

  const tick = () => {
    setCount((prevcount) => prevcount + 1);
    // setCount(count + 1);
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(tick, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Cleanup Code
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning((previsRunning) => !previsRunning);
  };

  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={handleStart}>Start</button> */}
      <button onClick={handleToggle}>{!isRunning ? "Start" : "Stop"}</button>
    </div>
  );
};

export default UseEffectTimer;
