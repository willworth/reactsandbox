import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Guild from './Guild';
import Demo from './Demo';
import Button from './Button';


class SillyFirst extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Chai />
        <Guild />
        <Demo />
        <Button />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


class Chai extends Component {
  render(){
    return(
      <h2 className= "Chai">This is the text from Chai Component.</h2>
    )
  }
}



// copied from original

  {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}







export default SillyFirst;
