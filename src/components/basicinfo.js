import React, { Component } from 'react'

export default class BasicInfo extends Component {
    constructor(props){
        super()
        this.state = {
            person: {
                name: props.name,
                number: props.number,
                dob: props.dob
            }
        }
    }
  render() {
    return (
      <div>
        <p>Name: {this.state.person.name}</p>
        <p>Number: {this.state.person.number}</p>
        <p>Date of birth: {this.state.person.dob}</p>
      </div>
    )
  }
}
