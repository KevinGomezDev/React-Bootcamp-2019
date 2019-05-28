import React from 'react';
import moviesData from '../data/movies.json'

import MovieCard from '../components/MovieCard'
import MovieForm from '../components/MovieForm'

class Home extends React.Component {
  state = {
   ...moviesData,
  }

  addMovie = (movie) => {
    this.setState({ movies: [ ...this.state.movies, movie ] })
  }

  deleteMovie = (movieId) => {
    this.setState((state, props) => {
      const movies = state.movies.filter((movie) => movie.id !== movieId)
      return  {
        movies
      }
    })
  }


    render() {
        const { movies } = this.state
        return <div>
        <h1 className='main-title'>Movie App</h1>
        <MovieForm onAddMovie={this.addMovie} />
        <div className='content'>
          {movies.map((movie) => <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />)}
        </div>
      </div>
    }
}

export default Home