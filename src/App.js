import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import './App.css';
import Home from './containers/Home'
import Movie from './views/Movie'
import MovieForm from './components/MovieForm'
import { AuthProvider } from './enhancers/AuthContext'

function Routes () {
    return <React.Fragment> 
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={MovieForm} />
        <Route exact path="/movie/:id" component={Movie} />
    </React.Fragment>
}

const store = configureStore()

function App () {
    return  <Provider store={store}>
        <AuthProvider value={{isAuth: true, name: 'leo'}}>
        <Router>
            <Routes />
        </Router>
        </AuthProvider>
    </Provider>
}

export default App