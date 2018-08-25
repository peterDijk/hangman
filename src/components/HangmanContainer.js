import * as React from 'react'
import {connect} from 'react-redux'
import {newGame, makeGuess} from '../actions/game'
import * as gameLib from '../lib/game'
import Hangman from './Hangman'
import Guess from './Guess'


class HangmanContainer extends React.PureComponent {

  componentDidMount(){
    // console.log(gameLib.randomWord())
    this.props.newGame(gameLib.randomWord())
    // console.log(game.showGuess(this.props.game.word, this.props.game.guesses))
    console.log(this.props)
  }

  componentDidUpdate() {
    console.log('game word: ', this.props.game.word)
    console.log('showGuess: ', gameLib.showGuess(this.props.game.word, this.props.game.guesses))
    console.log('wrongGuessCount: ', gameLib.wrongGuessCount(this.props.game.word, this.props.game.guesses))
    if (gameLib.gameFinished(this.props.game.word, this.props.game.guesses)) {
      console.log('game finished')
      console.log(gameLib.isWinner(this.props.game.word, this.props.game.guesses))
    } 
  }

  newGuess = (letter) => {
    this.props.makeGuess(letter)
  }

  startNewGame = () => {
    console.log('new game')
    this.props.newGame(gameLib.randomWord())
  }

  render() {
    if (!this.props.game.word) return null
    return (
      <div>
        <Hangman 
          showGuessString={gameLib.showGuess(this.props.game.word, this.props.game.guesses)}
          wrongGuessCountString={gameLib.wrongGuessCount(this.props.game.word, this.props.game.guesses)}
          gameFinishedBoolean={gameLib.gameFinished(this.props.game.word, this.props.game.guesses)}
          isWinnerBoolean={gameLib.isWinner(this.props.game.word, this.props.game.guesses)}
          startNewGameBtn={this.startNewGame}
          />
        <Guess clickBtn={this.newGuess} />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

export default connect(mapStateToProps, {newGame, makeGuess})(HangmanContainer)