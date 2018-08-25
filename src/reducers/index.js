import { combineReducers } from 'redux'
import game from './game'
import loading from './loading'

export default combineReducers({
  game,
  loading
})