import * as React from 'react'
import * as gameLib from '../lib/game'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button'

export default function Hangman(props) {
  return (
    <div>
      <div className="gameInfo">
        <div className="left">
          <Button variant="contained" color="primary" onClick={() => props.startNewGameBtn(gameLib.randomWord())}>NEW GAME</Button>
        </div>
        <div className="middle">
          <h2>{props.wrongGuessCountNumber} wrong guesses</h2>
        </div>
        <div className="right">
          {(props.gameFinishedBoolean && props.isWinnerBoolean) && <h2>you have WON!</h2> }
          {(props.gameFinishedBoolean && !props.isWinnerBoolean) && <h2>you have LOST</h2> }
        </div>
      </div>
      <div>
        <h1>{props.showGuessString}</h1>
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