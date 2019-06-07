import { combineReducers } from 'redux'
import movies from './movies'
import users from './users'

export default combineReducers({ 
    movies,
    users,
});