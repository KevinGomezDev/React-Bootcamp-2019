import React from "react";
import moviesData from "../data/movies.json";

import MovieCard from "../components/MovieCard";
// import MovieForm from "../components/MovieForm";
import { API_KEY } from "./../constants/movies";
import MainLayout from "../layouts/MainLayout.js";

class Home extends React.Component {
  state = {
    ...moviesData
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: data.results.slice(0, 10) });
      });
  }

  addMovie = movie => {
    this.setState({ movies: [...this.state.movies, movie] });
  };

  deleteMovie = movieId => {
    this.setState((state, props) => {
      const movies = state.movies.filter(movie => movie.id !== movieId);
      return {
        movies
      };
    });
  };

  render() {
    //     const { movies } = this.state
    //     return <div>
    //     <h1 className='main-title'>Movie App</h1>
    //     <MovieForm onAddMovie={this.addMovie} />
    //     <div className='content'>
    //       {movies.map((movie) => <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />)}
    //     </div>
    //   </div>
    // }
    const { movies } = this.state;
    return (
      <MainLayout>
        <a href="/add">movie</a>
        {movies.map(movie => (
          <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />
        ))}
      </MainLayout>
    );
  }
}

export default Home;
