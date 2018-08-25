import * as React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default function Welcome(props) {
  return (
      <div>
        <Typography variant="headline" component="h1">
          Welcome to HANGMAN !
        </Typography>
        <Button variant="contained" color="primary">
          <Link to="/hangman">Start playing!</Link>
        </Button>
      </div>

  )
}