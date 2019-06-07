import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const massage = (movie) => ({
    id: movie.id,
    title: movie.title,
    year: movie.release_date,
    image: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
    overview: movie.overview,
})

export const searchMovie = (query) => 
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then((response) => response)

export const getMovie = (id) =>
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then((response) => response.data)

export const getMovies = () => 
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
    .then((response) => {
        const movies = response.data.results.map((movie) => massage(movie))
        return movies
    })