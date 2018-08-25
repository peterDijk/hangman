import * as React from 'react'
import * as gameLib from '../lib/game'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

function Hangman(props) {
  const { classes } = props
  return (
    <div>
      {/* <div className="gameInfo"> */}
      <Grid container spacing={16} direction="row" justify="center" alignItems="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => props.startNewGameBtn(gameLib.randomWord())}>NEW GAME</Button>
        </Grid>
      </Grid>
      <Grid container spacing={16} direction="row" justify="center" alignItems="center">
        <Grid item>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="headline" component="h2">
                {props.wrongGuessCountNumber}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                wrong guesses
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                you have
              </Typography>
              <Typography variant="headline" component="h2">
                {(props.gameFinishedBoolean && !props.isWinnerBoolean) && 'LOST' }
                {(props.gameFinishedBoolean && props.isWinnerBoolean) && 'WON!' }
                {(!props.gameFinishedBoolean) && '...' }
              </Typography>
            </CardContent>
          </Card>
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

const styles = {
  card: {
    minWidth: 150,
    // padding: 4
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}

export default withStyles(styles)(Hangman)