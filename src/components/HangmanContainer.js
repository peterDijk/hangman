import * as React from 'react'
import {connect} from 'react-redux'
import {newGame} from '../actions/game'
import * as gameLib from '../lib/game'


class HangmanContainer extends React.PureComponent {

  componentDidMount(){
    console.log(gameLib.randomWord())
    this.props.newGame(gameLib.randomWord())
    // console.log(game.showGuess(this.props.game.word, this.props.game.guesses))
    console.log(this.props)
  }

  render() {
    return null
  }

}

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

export default connect(mapStateToProps, {newGame})(HangmanContainer)