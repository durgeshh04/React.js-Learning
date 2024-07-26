// Practice of Pure Component and Regular Component


import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    console.log("Regular Component")
    return (
      <div>
        <h2>Regular Component {this.props.name}</h2>
      </div>
    )
  }
}

export default RegComp
