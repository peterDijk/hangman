import * as React from 'react'
import * as gameLib from '../lib/game'

export default function Hangman(props) {
  return (
    <div>
      <div className="gameInfo">
        <button onClick={() => props.startNewGameBtn(gameLib.randomWord())}>NEW GAME</button>
        <h2>{props.wrongGuessCountString} wrong guesses</h2>
        {(props.gameFinishedBoolean && props.isWinnerBoolean) && <h2>you have WON!</h2> }
        {(props.gameFinishedBoolean && !props.isWinnerBoolean) && <h2>you have LOST</h2> }
      </div>
      <div>
        <h3>{props.showGuessString}</h3>
      </div>
    </div>
  )
}