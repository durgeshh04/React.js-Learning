// Practice of Pure Component and Regular Component


import React, { PureComponent } from "react";

class Pure_Component extends PureComponent {
  render() {
    console.log("Pure Component")
    return (
      <div>
        <h2>Pure Component {this.props.name}</h2>
      </div>
    );
  }
}

export default Pure_Component;
