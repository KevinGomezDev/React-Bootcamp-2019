import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
  state = {
    checked: false,
  }

  handleCheck = () => {
    this.setState((state, props) => ({
      checked: !state.checked
    }))
  }

  static getDerivedStateFromProps(props, state) {
    if (props.genre === "horror") {
      return {
        checked: true,
      }
    }
    return null
  }

  shouldComponentUpdate() {
    //Remember to return true or false
    return true
  }


  componentDidMount() {
    //console.log(this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(this.state)
  }

  componentWillUnmount() {
    //console.log('I will unmount')
  }

  render() {
    const { id, title, year, image, overview, deleteMovie } = this.props
    return <div className='movie-container'>
      <div className='favourite-container'>
        <button onClick={this.handleCheck} className='favourite-button'>
          <span className={`fa fa-star favourite-star ${this.state.checked ? 'checked' : ''}`}></span>
        </button>
        <button onClick={() => deleteMovie(id)} className='close-button'>
          <i className="fa fa-close"></i>
        </button>
      </div>
      <h1>{title}</h1>
      <div>{year}</div>
      <div className='overview-container'>
        <img className='overview-img' src={image} alt='Movie' />
        <p>{overview}</p>
      </div>
      <Link to={`/movie/${id}`}>Get Detail</Link>
    </div>
  }
}

MovieCard.defaultProps = {
  genre: 'comedia',
}

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.string,
  image: PropTypes.string,
  overview: PropTypes.string,
  deleteMovie: PropTypes.func,
}

export default MovieCard