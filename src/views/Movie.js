import React from 'react'

import MovieCard from '../components/MovieCard'

export default class Movie extends React.Component {
    state = {
        movie: {},
    }

    componentDidMount() {
        const { match, movies } = this.props
        if(match.params.id) {
           const movie =  movies.data.filter((movie) => {
               return Number(movie.id) === Number(match.params.id)
           })
           this.setState({ movie: movie[0] })
        }
        
    }

    render() {
        const { movie } = this.state
        return <MovieCard {...movie} />
    }
}