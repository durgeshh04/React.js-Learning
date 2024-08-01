import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const UseCallback = () => {
  const [age, setAge] = useState(22);
  const [salary, setSalary] = useState(5000);

  const increamentAge = useCallback(() => {
    console.log("Age is rendering...")
    setAge((prevAge) => prevAge + 1);
  }, []);

  const increamentSalary = useCallback(() => {
    console.log("Salary is rendering...")
    setSalary((prevSalary) => prevSalary + 1000);
  }, []);

  return (
    <div>
      <Title text={"This is the example of useCallback hook"} />
      <Count text={"Age"} count={age} />
      <Button handleClick={increamentAge}>Increament Age </Button>
      <Count text={"Salary"} count={salary} />
      <Button handleClick={increamentSalary}>Increament Salary </Button>
    </div>
  );
};

export default React.memo(UseCallback);
