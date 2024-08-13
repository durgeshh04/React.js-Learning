import React, { useState, useEffect } from "react";

const CustomeOne = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count {count}
      </button>
    </div>
  );
};

export default CustomeOne;
