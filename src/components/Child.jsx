// Receiving method as prop from Parent.jsx component

import React from "react";

const Child = ({generateName }) => {
  return (
    <div>
      <button onClick={generateName}>Generate</button>
    </div>
  );
};

export default Child;