import React, { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const Increament = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const Decreament = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  const Reset = () => {
    setCounter(0);
  };

  return [counter, Increament, Decreament, Reset];
};

export default useCounter;
