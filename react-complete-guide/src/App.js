import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: '30'},
      {name: 'Kasia', age: '24'},
      {name: 'Tom', age: '26'},
    ],
    otherState: "some other value"
  }
  switchNameHandler = (newName) =>{
    //console.log("was clicked");
    //DON'T DO THIS: this.state.persons[0].name = "Katherina"
    this.setState({
      persons: [
        {name: newName, age: '30'},
        {name: 'Kasia', age: '24'},
        {name: 'Tom', age: '28'},
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working</p>
        <button onClick={()=>this.switchNameHandler("Maximilian")}>Switch name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Katherina')}>My hobbies: Racing</Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, I am a React App'))
  }
}

export default App;
