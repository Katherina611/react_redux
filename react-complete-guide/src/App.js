import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';



class App extends Component {
  state = {
    
    persons: [
      {name: 'Max', age: '30'},
      {name: 'Kasia', age: '24'},
      {name: 'Tom', age: '26'},
    ],
    
    user: "Kasia",
    /*
    users:[
      {name: "Kasia", animal:"cat"},
      {name: "Magda", animal:'dog'},
      {name: 'Tom', animal:'fish'},
    ],*/
    otherState: "some other value",
    showPersons: false
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
  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        {name: "Max", age: '30'},
        {name: event.target.value, age: '24'},
        {name: 'Tom', age: '26'},
      ]
    })
  }
  userHandler = (event) =>{
    this.setState({
      /*users: [
        {name: "Kasia", animal:"cat"},
        {name: event.target.value, animal:'dog'},
        {name: "Tom", animal:'fish'},
      ]*/
      user:event.target.value
    })
  }

  togglePersonsHandler = () =>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }
  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:"8px",
      cursor:'pointer'
    }
    const inputStyle = {
      color:'blue',
      fontSize:'20px',
      width:'30%',
      height:'30px',
      textAlign:'center',
      padding:'14px'
    }
    const userStyle = {
      border:'1px solid grey',
      padding: '10px',
      boxShadow: '0 2px 2px #ccc',
      margin: '50px auto',
      width:'50%'
      
    }
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons === true ? 
        <div>
          <Person 
            name = {this.state.persons[0].name} 
            age = {this.state.persons[0].age}/>
          <Person 
            name = {this.state.persons[1].name} 
            age = {this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Katherina')}
            changed={this.nameChangedHandler}>My hobbies: Racing</Person>
          <Person 
            name = {this.state.persons[2].name} 
            age = {this.state.persons[2].age}/>
        </div> : null
        }
        <div style={{display:'none'}}>
          <UserInput 
            name={this.state.user} 
            change={this.userHandler}
            style={inputStyle}/>
          <UserOutput 
            name={this.state.user} 
            style={userStyle}/>
          <UserOutput 
            name={this.state.user} 
            style={userStyle}/>
          <UserOutput 
            name="Tom" 
            style={userStyle}/>
        </div>
      </div>
    );
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, I am a React App'))
  }
}

export default App;
