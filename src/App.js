import logo from './logo.svg';
import './App.css';
import BasicInfo from './components/basicinfo';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super()
    this.state = {
      people: 
      [
        {
          name: "Clerick",
          number: "1",
          dob: "08/06/2004"
        },
        {
          name: "John",
          number: "2",
          dob: "11/16/2000"
        },
        {
          name: "Alex",
          number: "3",
          dob: "03/1/2001"
        },
        {
          name: "James",
          number: "4",
          dob: "06/25/2007"
        },
        {
          name: "Ray",
          number: "5",
          dob: "12/12/2002"
        },
      ]
    }
  }
  render() {
    return (
      this.state.people.map(person=>
       <BasicInfo
        name={person.name} 
        number={person.number} 
        dob={person.dob}
       />
      )
    )
  }
}

