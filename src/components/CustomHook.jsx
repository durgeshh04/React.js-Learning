// Custom  Hook in react.js : which uses component as argument and return new component


import React from "react";
import UserComponent from "./UserComponent";
import Loading from "./Loading";

const fetchUserData = async () => {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve({ name: "John Doe", email: "john.doe@example.com" });
    }, 2000);
  });
};

const CustomHook = () => {
  // A Pattern where a function takes a component as an argument and returns a new component
  const { isLoading, data } = Loading(fetchUserData);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Custom Hook Example</h1>
      {data && <UserComponent data={data} />}
    </div>
  );
};

export default CustomHook;
