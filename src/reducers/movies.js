import { REQUEST_MOVIES, RECEIVE_MOVIES, ERROR_MOVIES, REMOVE_MOVIE } from '../actions/actionTypes'
import initialState from './initialState'

export default (state = initialState.movies, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return { ...state, isFetching: true }
    case RECEIVE_MOVIES:
      return { ...state, isFetching: false, data: action.payload }
    case ERROR_MOVIES:
      return { ...state, isFetching: false, error: action.payload }
    case REMOVE_MOVIE:
      return {
        ...state,
        data: state.data.filter((movie) => movie.id !== action.payload.id)
      }
    default:
      return state
  }
}