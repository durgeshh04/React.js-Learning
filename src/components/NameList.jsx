import React from "react";
import PersonList from "./PersonList";

const NameList = () => {
  const persons = [
    { id: 1, name: "Durgesh", age: 22, skill: "JavaScript" },
    { id: 2, name: "Harshal", age: 19, skill: "C++" },
    { id: 3, name: "Prathmesh", age: 18, skill: "Python" },
    { id: 4, name: "Sakshi", age: 21, skill: "Java" },
  ];
  return (
    <div>
      {persons.map((person, index) => (
        <PersonList key={index} person={person} /> // is also use if id is given in data key={person.id} otherwise index is used as key anti-pattern.
      ))}
    </div>
  );
};

export default NameList;
