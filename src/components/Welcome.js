import * as React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

export default function Welcome(props) {
  return (
      <div>
        <h1>Welcome to HANGMAN ! </h1>
        <Button variant="contained" color="primary">
          <Link to="/hangman">Start playing!</Link>
        </Button>
      </div>

  )
}