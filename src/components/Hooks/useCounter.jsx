import React, { useState } from "react";

const useCounter = (intialCounter = 0, value) => {
  const [counter, setCounter] = useState(intialCounter, value);
  const Increament = () => {
    setCounter((prevCounter) => prevCounter + value);
  };
  const Decreament = () => {
    setCounter((prevCounter) => prevCounter - value);
  };
  const Reset = () => {
    setCounter(intialCounter);
  };

  return [counter, Increament, Decreament, Reset];
};

export default useCounter;
