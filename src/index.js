import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const people = [
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {people.map(person=>{
      return <App name={person.name} number={person.number} dob={person.dob}/>
    })}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
