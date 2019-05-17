import React from 'react';

import moviesData from './data/movies.json'
import './App.css';

import MovieCard from './components/MovieCard'

function App() {
  const { movies } = moviesData
  return <React.Fragment>
    <h1 className='main-title'>Movie App</h1>
    <div className='content'>
      {movies.map((movie) => <MovieCard {...movie} />)}
    </div>
  </React.Fragment>
}

export default App