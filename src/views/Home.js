import React from 'react';
import moviesData from '../data/movies.json'
import MovieCard from '../components/MovieCard'

class Home extends React.Component {
    render() {
        const { movies } = moviesData
        return <div>
        <h1 className='main-title'>Movie App</h1>
        <div className='content'>
          {movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
        </div>
      </div>
    }
}

export default Home