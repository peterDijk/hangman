import * as React from 'react'
import {Link} from 'react-router-dom'

export default function Welcome(props) {
  return (
      <div>
        <h1>Welcome to HANGMAN ! </h1>
        <Link to="/hangman">Start playing!</Link>
      </div>

  )
}