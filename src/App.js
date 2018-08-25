import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Welcome from './components/Welcome'
import HangmanContainer from './components/HangmanContainer'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import NavBar from './components/NavBar'

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: purple,
  }
})

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <NavBar />
          <div className="App">
            <Route exact path="/" component={Welcome} />
            <Route exact path="/hangman" component={HangmanContainer} />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
