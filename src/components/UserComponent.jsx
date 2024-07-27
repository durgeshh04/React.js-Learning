import React from "react";

const UserComponent = ({ data }) => {
  return (
    <div>
      <h2>User Data</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default UserComponent;
