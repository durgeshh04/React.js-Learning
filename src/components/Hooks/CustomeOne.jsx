import React, {useState} from "react";
import DocumentTitle from "./DocumentTitle";

const CustomeOne = () => {
  const [count, setCount] = useState(0);
  DocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count- {count}
      </button>
    </div>
  );
};

export default CustomeOne;
