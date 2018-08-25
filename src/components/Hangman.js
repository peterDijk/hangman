import * as React from 'react'
import * as gameLib from '../lib/game'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

export default function Hangman(props) {
  return (
    <div>
      {/* <div className="gameInfo"> */}
      <Grid container spacing={40} direction="row" justify="center" alignItems="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => props.startNewGameBtn(gameLib.randomWord())}>NEW GAME</Button>
        </Grid>
        <Grid item>
          <h2>{props.wrongGuessCountNumber} wrong guesses</h2>
        </Grid>
        <Grid item>
          {(props.gameFinishedBoolean && props.isWinnerBoolean) && <h2>you have WON!</h2> }
          {(props.gameFinishedBoolean && !props.isWinnerBoolean) && <h2>you have LOST</h2> }
        </Grid>
      {/* </div> */}
      </Grid>
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