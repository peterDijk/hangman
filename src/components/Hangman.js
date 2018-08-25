import * as React from 'react'
import * as gameLib from '../lib/game'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

export default function Hangman(props) {
  return (
    <div>
      <div className="gameInfo">
        <Button variant="contained" color="primary" onClick={() => props.startNewGameBtn(gameLib.randomWord())}>NEW GAME</Button>
        <h2>{props.wrongGuessCountNumber} wrong guesses</h2>
        {(props.gameFinishedBoolean && props.isWinnerBoolean) && <h2>you have WON!</h2> }
        {(props.gameFinishedBoolean && !props.isWinnerBoolean) && <h2>you have LOST</h2> }
      </div>
      <div>
        <h3>{props.showGuessString}</h3>
      </div>

    </div>
  )
}

Hangman.propTypes = {
  startNewGameBtn: propTypes.func,
  wrongGuessCountNumber: propTypes.number,
  gameFinishedBoolean: propTypes.bool,
  isWinnerBoolean: propTypes.bool,
  showGuessString: propTypes.string
}