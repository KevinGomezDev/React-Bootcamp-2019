import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Home from './views/Home'
import Movie from './views/Movie'
import MovieForm from './components/MovieForm'

function Routes () {
    return <React.Fragment> 
    <Route exact path="/" component={Home} />
    <Route exact path="/add" component={MovieForm} />
    <Route exact path="/movie/:id" component={Movie} />
    </React.Fragment>
}

function App () {
    return <Router>
        <Routes />
    </Router>
}

export default App