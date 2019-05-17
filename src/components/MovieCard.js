import React from 'react';

function MovieCard (props) {
    const { title, year, image, overview } = props
    return <div className='movie-container'>
      <h1>{title}</h1>
      <div>{year}</div>
      <div className='overview-container'>
        <img className='overview-img' src={image} alt='Movie' />
        <p>{overview}</p>
      </div>
    </div>
}

export default MovieCard