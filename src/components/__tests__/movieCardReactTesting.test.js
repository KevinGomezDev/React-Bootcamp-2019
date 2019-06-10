import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import MovieCard from '../MovieCard'
import { BrowserRouter as Router } from 'react-router-dom'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('CheckboxWithLabel in React testing library changes the text after click', () => {
  const { container } = render(<Router>
    <MovieCard
    id={458156}
    title='Avengers Endgame'
    year='2019'
    image='https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
    genre='action'
    overview='This is a great movie :D!'
    />
  </Router>);
  const favouriteButton = container.querySelector('.favourite-button')
  const favouriteStar = container.querySelector('.favourite-star')

  expect(favouriteStar.classList.contains('checked')).toBeFalsy()
  fireEvent.click(favouriteButton)
  expect(favouriteStar.classList.contains('checked')).toBeTruthy()
});