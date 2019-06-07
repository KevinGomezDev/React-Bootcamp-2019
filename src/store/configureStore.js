import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default () => {
  const middleWares = [thunk]
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(
      applyMiddleware(...middleWares)
    )
  )
  return store
}