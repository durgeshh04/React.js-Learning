// More practice on setState
// import React, { useState } from "react";

// function SetState() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     if (count == 10) {
//       setCount(0);
//     } else {
//       setCount((count) => count + 1, console.log(count + 1));
//     }
//   };

//   return (
//     <div>
//       <h1>Count = {count}</h1>
//       <button onClick={handleClick}>count</button>
//     </div>
//   );
// }
// export default SetState

// ------------------------------------------------------------------------

// Event Binding it occurs only in class component because of this keyword

import React, { Component } from 'react'

export class SetState extends Component {

  constructor(){
    super()
    this.state = {
      message : "Hi, Durgesh"
    }
  }
  // handleClick(){
  //   this.setState  ({
  //     message : "I'm Robot, How can I help you?"
  //   })
  // }

  handleClick = () => {
    this.setState  ({
      message : "I'm Robot, How can I help you?"
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.handleClick.bind(this)}>Generate</button> */}
        <button onClick={this.handleClick}>Generate</button>
      </div>
    )
  }
}




export default SetState;
