import React, { useState } from "react";
import UseEffectOne from "./UseEffectOne";

const UseEffectTwo = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle Button
      </button>
      {display && <UseEffectOne />}
    </div>
  );
};

export default UseEffectTwo;
