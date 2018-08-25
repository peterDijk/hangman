import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Welcome from './components/Welcome'
import HangmanContainer from './components/HangmanContainer'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import Paper from '@material-ui/core/Paper'

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
          
          <div className="App">
            <Paper className="paper">
              <Route exact path="/" component={Welcome} />
              <Route exact path="/hangman" component={HangmanContainer} />
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
