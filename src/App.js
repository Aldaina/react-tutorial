import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayComponent from './DisplayComponent';
import ButtonComponent from './ButtonComponent';
import TextComponent from './TextComponent';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      number: 0,
      text: "daina"
    }    
    this.incrementNumber = this.incrementNumber.bind(this);
    this.divideNumber = this.divideNumber.bind(this);
    this.defaultButton = this.defaultButton.bind(this);
    this.displayText = this.displayText.bind(this);
  }
  componentWillMount(){
    this.setState({number: 1});
  }
  incrementNumber(){
    this.setState({number: this.state.number + 1})
  }
  divideNumber(){
    this.setState({number: this.state.number / 2 })
  }
  defaultButton(){
    this.setState({number: this.state.number=1})
  }
  displayText(a){
    this.setState({text: a})
  }
  render() {
    return (
      <div>
        <DisplayComponent 
          number = {this.state.number}
          text = {this.state.text}
        />
        <ButtonComponent
          incrementNumber={this.incrementNumber}
          divideNumber={this.divideNumber}
          defaultButton={this.defaultButton}
        />
        <TextComponent
          displayText={this.displayText}
        />
      </div>
    );
  }
}

export default App;
