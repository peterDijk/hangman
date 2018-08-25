import * as React from 'react'
import {connect} from 'react-redux'
import {newGame, makeGuess} from '../actions/game'
import {loading} from '../actions/loading'
import * as gameLib from '../lib/game'
import Hangman from './Hangman'
import Guess from './Guess'
import propTypes from 'prop-types'


class HangmanContainer extends React.PureComponent {

  componentDidMount(){
    this.props.loading(true)
    this.props.newGame(gameLib.randomWord())
  }

  componentDidUpdate() {
    this.props.loading(false)
    console.log('game word: ', this.props.game.word)
  }

  render() {
    if (!this.props.game.word) return null
    return (
      <div>
        <Hangman 
          showGuessString={gameLib.showGuess(this.props.game.word, this.props.game.guesses)}
          wrongGuessCountNumber={gameLib.wrongGuessCount(this.props.game.word, this.props.game.guesses)}
          gameFinishedBoolean={gameLib.gameFinished(this.props.game.word, this.props.game.guesses)}
          isWinnerBoolean={gameLib.isWinner(this.props.game.word, this.props.game.guesses)}
          startNewGameBtn={this.props.newGame}
          />
        <Guess clickBtn={this.props.makeGuess} />
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