import React from "react";

const Child = ({generateName }) => {
  return (
    <div>
      <button onClick={generateName}>Generate</button>
    </div>
  );
};

export default Child;