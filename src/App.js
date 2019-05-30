import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import Home from './views/Home'
import MovieForm from './components/MovieForm'

function authUser() {
    return { isAuth: true }
}

function Routes () {
    const userAuth = authUser()
    return <React.Fragment> 
    <Route exact path="/" component={Home} />
    <Route exact path="/add" component={MovieForm} />
    <Route path="/movie/:id/:name" component={MovieForm} />
    <Route component={() => <div>Not Found</div>} />
    </React.Fragment>
}

function App () {
    return <Router>
        <Routes />
    </Router>
}

export default App