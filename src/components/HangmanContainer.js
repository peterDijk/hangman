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
  }

  newGuess = (letter) => {
    this.props.makeGuess(letter)
  }

  render() {
    if (!this.props.game.word) return null
    return (
      <div>
        <Hangman showGuessString={gameLib.showGuess(this.props.game.word, this.props.game.guesses)} />
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