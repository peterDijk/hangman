import * as React from 'react'
import {connect} from 'react-redux'

class HangmanContainer extends React.PureComponent {

  componentDidMount(){
    console.log(this.props.game)
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

export default connect(mapStateToProps)(HangmanContainer)