import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleOne = () => {
    setCountOne((prevCountOne) => prevCountOne + 1);
  };

  const handleTwo = () => {
    setCountTwo((prevCountTwo) => prevCountTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    if (i < 200000000) {
      i++;
    }
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <h2>
        {countOne} :-
        <span style={{ marginLeft: "10px" }}>{isEven ? "Even" : "Odd"}</span>
      </h2>

      <button onClick={handleOne}>CounterOne</button>
      <h2>{countTwo}</h2>
      <button onClick={handleTwo}>CounterTwo</button>
    </div>
  );
};

export default UseMemo;
