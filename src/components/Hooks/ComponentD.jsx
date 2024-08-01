import React, { useContext } from "react";
import {countContext} from "./UseReducerHook"
const ComponentD = () => {
  const CountContext = useContext(countContext);
  return (
    <div>
      Component D
      <div>
        <h1>Count: {CountContext.countValue}</h1>
        <button onClick={() => CountContext.dispatchValue("increament")}>Increament</button>
        <button onClick={() => CountContext.dispatchValue("decreament")}>Decreament</button>
        <button onClick={() => CountContext.dispatchValue("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default ComponentD;
