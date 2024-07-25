import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState();
  const generateName = () => {
    const names = ["Durgesh", "Prathmesh", "Harshal", "Renuka"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setName(randomName);
  };
  return (
    <div>
      <h1>{name}</h1>
      <Child generateName={generateName} />
    </div>
  );
};

export default Parent;
