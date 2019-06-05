import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import Home from './views/Home'
import MovieForm from './components/MovieForm'
import { AuthProvider } from './enhancers/AuthContext'

function authUser() {
    return { isAuth: true }
}

function Routes () {
    return <React.Fragment> 
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={MovieForm} />
        <Route path="/movie/:id/:name" component={MovieForm} />
    </React.Fragment>
}

function App () {
    return <AuthProvider value={{isAuth: true, name: 'leo'}}>
    <Router>
        <Routes />
    </Router>
    </AuthProvider>
}

export default App