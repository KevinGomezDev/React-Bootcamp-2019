import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

export const searchMovie = (query) => 
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then((response) => response)

export const getMovie = (id) =>
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then((response) => response.data)