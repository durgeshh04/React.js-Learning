import React, { useContext } from "react";
import {countContext} from "./UseReducerHook"
const ComponentB = () => {
  const CountContext = useContext(countContext);
  return (
    <div>
      Component B
      <div>
        <h1>Count: {CountContext.countValue}</h1>
        <button onClick={() => CountContext.dispatchValue("increament")}>Increament</button>
        <button onClick={() => CountContext.dispatchValue("decreament")}>Decreament</button>
        <button onClick={() => CountContext.dispatchValue("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default ComponentB;
