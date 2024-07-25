import React from "react";

const PersonList = ({ person}) => {
  return (
    <div>
      <h2>  
        {person.id}. My name is {person.name} and I'm {person.age}. Skills I have in
        Computer: {person.skill}
      </h2>
    </div>
  );
};

export default PersonList;
