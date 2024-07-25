// Basic understanding of React Components - Functional Component and Class Component

import React from "react";

// Props is an object which is passed to the component as an argument and it contains all the properties passed to the component.
// const Greet = ({ names }) => {
//   return (
//     <div>
//       {Object.values(names).map((person, index) => (
//         <h1 key={index}>Hello {person.name} a.k.a {person.heroname}</h1>
//       ))}
//     </div>
//   )
// }

// Functional Component
// const Greet = (props) => {
//   return (
//     <div>
//       <h1>{props.name} a.k.a {props.heroname}</h1>
//     </div>
//   )
// }

// Class Component
class Greet extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.name} a.k.a {this.props.heroname}
        </h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Greet;
