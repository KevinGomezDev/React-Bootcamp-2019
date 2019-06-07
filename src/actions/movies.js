import { 
    REQUEST_MOVIES, 
    RECEIVE_MOVIES,
    ERROR_MOVIES 
} from './actionTypes'
import { getMovies } from '../api/movies'

export const requestMovies = () => ({
    type: REQUEST_MOVIES
})

export const receiveMovies = (movies) => ({
    type: RECEIVE_MOVIES,
    payload: movies,
})

export const catchMovies = (error) => ({
    type: ERROR_MOVIES,
    payload: error,
})

export const fetchMovies = () => (dispatch) => {
    dispatch(requestMovies())
    getMovies()
        .then((movies) => {
            dispatch(receiveMovies(movies))
        })
        .catch((err) => dispatch(catchMovies(err)));
}
