import {NEW_GAME, MAKE_GUESS} from '../actions/game.js'

export default (state = {}, action = {}) => {
  switch(action.type) {
    case NEW_GAME:
      return {
        word: action.payload,
        guesses: []
      }
    case MAKE_GUESS:
      const newState = {...state}
      newState.guesses = [...newState.guesses, action.payload]
      return newState
    default:
      return state
  }
}