import { useRef, useEffect } from "react";
import useInput from "./useInput";

const CustomForm = () => {
  const {
    value: firstname,
    bind: bindFirstName,
    reset: resetFirstName,
  } = useInput("");
  const {
    value: lastname,
    bind: bindLastName,
    reset: resetLastName,
  } = useInput("");

  const inputField = useRef(null);
  useEffect(() => {
    inputField.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstname} ${lastname}`);
    resetFirstName();
    resetLastName();
    inputField.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">Firstname:</label>
          <input
            ref={inputField}
            id="firstname"
            {...bindFirstName}
            type="text"
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Lastname:</label>
          <input id="lastname" {...bindLastName} type="text" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomForm;
