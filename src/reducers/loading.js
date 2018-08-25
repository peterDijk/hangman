import {LOADING, DONE} from '../actions/loading'


export default (state = [], action = {}) => {
  switch(action.type) {
    case LOADING:
      return true
    case DONE:
      return false
    default:
      return state
  }
}