import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import MovieCard from '../MovieCard'

configure({ adapter: new Adapter() })

test('Check movie card favourite after click', () => {
  const movieCard = shallow(
    <MovieCard
    id={458156}
    title='Avengers Endgame'
    year='2019'
    image='https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
    genre='action'
    overview='This is a great movie :D!'
    />
  )
//  expect(movieCard.state().checked).toBeFalsy();
  expect(movieCard.find('.favourite-star').hasClass('checked')).toBeFalsy()
  //firing Event
  movieCard.find('button.favourite-button').simulate('click')
  //  expect(movieCard.state().checked).toBeTruthy();
  expect(movieCard.find('.favourite-star').hasClass('checked')).toBeTruthy()
})