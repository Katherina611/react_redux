import React, { Component } from 'react';
import './App.css';
class ValidationComponent extends Component {
  render(){
    let validationMessage = 'Text long enough';

    if (this.props.inputLength <= 5) {
        validationMessage = 'Text too short';
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
  }
}

class CharComponent extends Component{
  render(){
    const style = {
      display: 'inline-block',
      padding: '16px',
      margin: '16px',
      border: '1px solid black',
      textAlign: 'center'
  };

  return (
      <div style={style} onClick={this.props.clicked}>
          {this.props.character}
      </div>
  );
  }
};

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = ( event ) => {
    this.setState( { userInput: event.target.value } );
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render () {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <ValidationComponent inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}
export default App;
