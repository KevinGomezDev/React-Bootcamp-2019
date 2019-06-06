import { REQUEST_MOVIES } from '../actions/actionTypes'
import movies from '../data/movies'

export default (state, action) => {
    switch(action.type) {
        case REQUEST_MOVIES:
            return {...state, movies: movies.movies }
        default:
            return state
    }
}