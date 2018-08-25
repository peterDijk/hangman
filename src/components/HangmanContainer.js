import * as React from 'react'
import {connect} from 'react-redux'
import {newGame, makeGuess} from '../actions/game'
import {loading} from '../actions/loading'
import * as gameLib from '../lib/game'
import Hangman from './Hangman'
import Guess from './Guess'
import propTypes from 'prop-types'

import Paper from '@material-ui/core/Paper';


class HangmanContainer extends React.PureComponent {

  componentDidMount(){
    this.props.loading(true)
    this.props.newGame(gameLib.randomWord())
  }

  componentDidUpdate() {
    this.props.loading(false)
  }

  render() {
    if (!this.props.game.word) return null
    return (
      <div>
        <Paper className="paper">
          <Hangman 
            showGuessString={gameLib.showGuess(this.props.game.word, this.props.game.guesses)}
            wrongGuessCountNumber={gameLib.wrongGuessCount(this.props.game.word, this.props.game.guesses)}
            gameFinishedBoolean={gameLib.gameFinished(this.props.game.word, this.props.game.guesses)}
            isWinnerBoolean={gameLib.isWinner(this.props.game.word, this.props.game.guesses)}
            startNewGameBtn={this.props.newGame}
            />
          <Guess clickBtn={this.props.makeGuess} />
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

HangmanContainer.propTypes = {
  game: propTypes.object,
  newGame: propTypes.func,
  makeGuess: propTypes.func
}

export default connect(mapStateToProps, {newGame, makeGuess, loading})(HangmanContainer)