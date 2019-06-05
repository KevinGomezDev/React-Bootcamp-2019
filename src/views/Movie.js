import React from 'react'

import { getMovie } from '../api/movies'

import MovieCard from '../components/MovieCard'

const massageMovieData = (movie) => ({
    id: movie.id,
    title: movie.title,
    image: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
    overview: movie.overview,
})

export default class Movie extends React.Component {
    state = {
        movie: {},
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            getMovie(this.props.match.params.id)
            .then((movie) => {
                const massagedMovie = massageMovieData(movie)
                this.setState({ movie: massagedMovie })
            })
        }
        
    }

    render() {
        const { movie } = this.state
        return <MovieCard {...movie} />
    }
}