import React, { useState } from "react";
import useCounter from "./useCounter";

const CustomCounterTwo = () => {
  const [counter, Increament, Decreament, Reset] = useCounter(10, 10);
  return (
    <div>
      <h1>Counter- {counter}</h1>
      <button onClick={Increament}>Increament</button>
      <button onClick={Decreament}>Decreament</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default CustomCounterTwo;
