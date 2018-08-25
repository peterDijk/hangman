import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Welcome from './components/Welcome'
import HangmanContainer from './components/HangmanContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/hangman" component={HangmanContainer} />
      </div>
    );
  }
}

export default App;
