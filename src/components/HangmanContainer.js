import * as React from 'react'
import {connect} from 'react-redux'
import {newGame} from '../actions/game'


class HangmanContainer extends React.PureComponent {

  componentDidMount(){
    console.log(this.props)
    this.props.newGame()
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