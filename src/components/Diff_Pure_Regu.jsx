//Practice of Pure Component and Regular Component

import React, { Component } from "react";
import Pure_Component from "./Pure_Component";
import RegComp from "./RegComp";

export class Diff_Pure_Regu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Durgesh",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Durgesh",
      });
    }, 2000);
  }

  render() {
    console.log("----------Parent Component--------------")
    return (
      <div>
        Parent Component
        <Pure_Component name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    );
  }
}

export default Diff_Pure_Regu;
