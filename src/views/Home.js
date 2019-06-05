import React from 'react';
import moviesData from '../data/movies.json'


import MainLayout from '../layouts/MainLayout'
import MovieCard from '../components/MovieCard'

//import withAuth from '../enhancers/withAuth'
//import AuthProvider from '../enhancers/AuthProvider.js';
import { AuthContext } from '../enhancers/AuthContext'

const WelcomeText = ({ isAuth, name }) =>
  <div style={{ fontSize: '3em', color: 'white'}}>
    {isAuth ? `Bienvenido a casa ${name}` : 'Go away'}
  </div>

class Home extends React.Component {
  state = {
   ...moviesData,
  }

  static contextType = AuthContext

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
        return <MainLayout>
          <WelcomeText isAuth={this.context.isAuth} name={this.context.name} />
          {movies.map((movie) => 
           <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />
          )}
        </MainLayout>
    }
}

export default Home