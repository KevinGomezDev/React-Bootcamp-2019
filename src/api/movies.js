import axios from 'axios'

export const searchMovie = (query) => 
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then((response) => response)

    export const getDetailedMovie(id)