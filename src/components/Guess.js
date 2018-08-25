import * as React from 'react'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {letterIsGuessed} from '../lib/game'

const button = {
  margin: 3
}

function Guess(props) {
  return (
    <div className="keyboard">
      <div>
        <Button disabled={disableGuessed(props.game.guesses, 'q')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('q')}>Q</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'w')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('w')}>W</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'e')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('e')}>E</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'r')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('r')}>R</Button>
        <Button disabled={disableGuessed(props.game.guesses, 't')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('t')}>T</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'y')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('y')}>Y</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'u')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('u')}>U</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'i')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('i')}>I</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'o')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('o')}>O</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'p')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('p')}>P</Button>
      </div>
      <div>
        <Button disabled={disableGuessed(props.game.guesses, 'a')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('a')}>A</Button>
        <Button disabled={disableGuessed(props.game.guesses, 's')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('s')}>S</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'd')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('d')}>D</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'f')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('f')}>F</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'g')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('g')}>G</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'h')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('h')}>H</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'j')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('j')}>J</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'k')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('k')}>K</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'l')} variant="contained" color="primary"  style={button} onClick={() => props.clickBtn('l')}>L</Button>
      </div>
      <div>
        <Button disabled={disableGuessed(props.game.guesses, 'z')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('z')}>Z</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'x')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('x')}>X</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'c')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('c')}>C</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'v')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('v')}>V</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'b')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('b')}>B</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'n')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('n')}>N</Button>
        <Button disabled={disableGuessed(props.game.guesses, 'm')} variant="contained" color="primary" style={button} onClick={() => props.clickBtn('m')}>M</Button>
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