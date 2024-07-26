// Practice of useRef Hook

import React, { useRef, useEffect } from "react";

const RefsReact = () => {
  const inputRef = useRef(null);

  // Use useEffect to focus the input field when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const clickHandler = () => {
    alert(inputRef.current.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="focus me"
        ref={inputRef}
        style={{ padding: "8px" }}
      />
      <button onClick={clickHandler} style={{ marginLeft: "15px" }}>
        useRef
      </button>
    </div>
  );
};

export default RefsReact;
