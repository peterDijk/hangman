import * as React from 'react'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {letterIsGuessed} from '../lib/game'
import Typography from '@material-ui/core/Typography'

const button = {
  margin: 3
}

function Guess(props) {
  return (
    <div className="keyboard">
      <div>
        <Button disabled={disableGuessed(props.game.guesses, 'q')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('q')}><Typography variant="headline" component="h2">Q</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'w')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('w')}><Typography variant="headline" component="h2">W</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'e')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('e')}><Typography variant="headline" component="h2">E</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'r')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('r')}><Typography variant="headline" component="h2">R</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 't')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('t')}><Typography variant="headline" component="h2">T</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'y')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('y')}><Typography variant="headline" component="h2">Y</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'u')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('u')}><Typography variant="headline" component="h2">U</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'i')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('i')}><Typography variant="headline" component="h2">I</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'o')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('o')}><Typography variant="headline" component="h2">O</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'p')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('p')}><Typography variant="headline" component="h2">P</Typography></Button>
      </div>
      <div>
        <Button disabled={disableGuessed(props.game.guesses, 'a')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('a')}><Typography variant="headline" component="h2">A</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 's')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('s')}><Typography variant="headline" component="h2">S</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'd')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('d')}><Typography variant="headline" component="h2">D</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'f')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('f')}><Typography variant="headline" component="h2">F</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'g')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('g')}><Typography variant="headline" component="h2">G</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'h')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('h')}><Typography variant="headline" component="h2">H</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'j')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('j')}><Typography variant="headline" component="h2">J</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'k')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('k')}><Typography variant="headline" component="h2">K</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'l')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('l')}><Typography variant="headline" component="h2">L</Typography></Button>
      </div>
      <div>
        <Button disabled={disableGuessed(props.game.guesses, 'z')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('z')}><Typography variant="headline" component="h2">Z</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'x')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('x')}><Typography variant="headline" component="h2">X</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'c')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('c')}><Typography variant="headline" component="h2">C</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'v')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('v')}><Typography variant="headline" component="h2">V</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'b')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('b')}><Typography variant="headline" component="h2">B</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'n')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('n')}><Typography variant="headline" component="h2">N</Typography></Button>
        <Button disabled={disableGuessed(props.game.guesses, 'm')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('m')}><Typography variant="headline" component="h2">M</Typography></Button>
      </div>
    </div>
  )
}

Guess.propTypes = {
  clickBtn: propTypes.func
}

function disableGuessed(guesses, letter) {
  if (letterIsGuessed(guesses, letter)) {
    return true
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

export default connect(mapStateToProps)(Guess)