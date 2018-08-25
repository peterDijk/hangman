import * as React from 'react'
import {Link} from 'react-router-dom'

export default function Welcome(props) {
  return (
      <div>
        <Link to="/hangman">Start playing!</Link>
      </div>

  )
}