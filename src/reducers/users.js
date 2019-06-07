import { REQUEST_USERS } from '../actions/actionTypes'

import users from '../data/users'
import initialState from './initialState'

export default (state = initialState.users, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        data: users.users,
      }
    default:
      return state
  }
}