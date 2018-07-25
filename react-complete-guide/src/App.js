import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working</p>
        <Person name = "Kasia" age = '23'/>
        <Person name = "Max" age = '34'>My hobbies: Racing</Person>
        <Person name = 'Thomas' age = '28'/>
      </div>
    );
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, I am a React App'))
  }
}

export default App;
