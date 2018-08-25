// import {loading} from './loading'

export const NEW_GAME = 'NEW_GAME'
export function newGame(word) {
  return {
    type: NEW_GAME,
    payload: word
  }
}

export const MAKE_GUESS = 'MAKE_GUESS'
export function makeGuess(letter) {
  return {
    type: MAKE_GUESS,
    payload: letter
  }
}
