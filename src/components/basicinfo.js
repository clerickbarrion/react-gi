// BasicInfo(state){
//     return (
//       <div>
//         <p>{state.name}</p>
//         <p>{state.number}</p>
//         <p>{state.dob}</p>
//       </div>
//     )
//   }
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
        <p>{this.state.person.name}</p>
        <p>{this.state.person.number}</p>
        <p>{this.state.person.dob}</p>
      </div>
    )
  }
}
