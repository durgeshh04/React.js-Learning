import { useState } from "react";

const useInput = (initialValue = '') => { // Provide a default initial value
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value: value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return { value, bind, reset }; // Return as an object to allow destructuring
};

export default useInput;
