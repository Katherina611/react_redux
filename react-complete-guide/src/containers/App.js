import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import UserOutput from '../components/User/UserOutput';
import UserInput from '../components/User/UserInput';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constuctor', props);
    this.state = {
      persons: [
        {id:'4cawf', name: 'Max', age: 30},
        {id:'3sasc', name: 'Kasia', age: 24},
        {id:'5cvdgc', name: 'Tom', age: 26},
      ],
      
      user: "Kasia",
      /*
      users:[
        {name: "Kasia", animal:"cat"},
        {name: "Magda", animal:'dog'},
        {name: 'Tom', animal:'fish'},
      ],*/
      otherState: "some other value",
      showPersons: false,
      toggleClicked:0,
      authenticated: false
    }
  }
  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()')
  }
  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()')
  }
  //shouldComponentUpdate(nextProps, nextState){
   //console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState);
    //return nextState.persons !== this.state.persons ||
           //nextState.showPersons !== this.state.showPersons;
  //}
  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(){
    console.log('[UPDATE App.js] inside componentDidUpdate');

  }
  /*state = {
    persons: [
      {id:'4cawf', name: 'Max', age: '30'},
      {id:'3sasc', name: 'Kasia', age: '24'},
      {id:'5cvdgc', name: 'Tom', age: '26'},
    ],
    
    user: "Kasia",
    
    users:[
      {name: "Kasia", animal:"cat"},
      {name: "Magda", animal:'dog'},
      {name: 'Tom', animal:'fish'},
    ],
    otherState: "some other value",
    showPersons: false;
}*/
  /*
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
  }*/
  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState(
      {persons: persons})
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
      this.setState( (prevState, props) =>{
        return{
          showPersons: !doesShow, 
          toggleClicked: prevState.toggleClicked +1 
        }
      });
  }
  loginHandler = () =>{
    this.setState({authenticated: true});
  }
  render() {
    console.log('[app.js] Inside render()')
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

    let persons = null;
    
    if ( this.state.showPersons ) {
      persons = (
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}/> 
      );
    }
  

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons:true})}}>Show Persons</button>
        <Cockpit
          appTitle = {this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login = {this.loginHandler}/>
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
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
      </Aux>
    );
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, I am a React App'))
  }
}

export default withClass(App, classes.App);
