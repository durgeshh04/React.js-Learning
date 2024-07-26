// Practice of forwardRef

import React, { useRef } from "react";
import InputRef from "./InputRef";

const ForwardingRefs = () => {
  const inputRef = useRef(null);

  const clickHandler = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <InputRef ref={inputRef} />
      <button style={{ marginTop: "10px" }} onClick={clickHandler}>
        Focus
      </button>
    </div>
  );
};

export default ForwardingRefs;
