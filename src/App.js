import logo from './logo.svg';
import './App.css';
import BasicInfo from './components/basicinfo';

import React, { Component } from 'react'
import { useState } from 'react';

export default class App extends Component {
  constructor(props){
    super()
    this.state = {
      person: {
        name: props.name,
        number: props.number,
        dob: props.dob
      }}
  }
  render() {
    return (
      <BasicInfo name={this.state.person.name} number={this.state.person.number} dob={this.state.person.dob}/>    )
  }
}

