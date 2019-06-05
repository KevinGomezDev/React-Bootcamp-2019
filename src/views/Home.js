import React from 'react';
import moviesData from '../data/movies.json'


import MainLayout from '../layouts/MainLayout'
import MovieCard from '../components/MovieCard'

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
        return<MainLayout>
          {movies.map((movie) => 
           <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />
          )}
          </MainLayout>
    }
}

export default Home