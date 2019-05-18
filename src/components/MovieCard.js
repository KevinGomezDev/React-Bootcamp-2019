import React from 'react';

class MovieCard extends React.Component {
  constructor(props){
    super(props)
    this.state = { checked: false }
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck () {
    this.setState((state, props) => ({
      checked: !state.checked
    }))
  }

  componentDidMount () {
    console.log(this.state)
  }

  componentDidUpdate () {
    console.log(this.state)
  }
  
  render() {
    const { title, year, image, overview } = this.props
    return <div className='movie-container'>   
        <div className='favourite-container'>
            <button onClick={this.handleCheck} className='favourite-button'>
                <span className={`fa fa-star favourite-star ${this.state.checked ? 'checked': ''}`}></span>
            </button>
        </div>
      <h1>{title}</h1>
      <div>{year}</div>
      <div className='overview-container'>
        <img className='overview-img' src={image} alt='Movie' />
        <p>{overview}</p>
      </div>
    </div>
    }
}

export default MovieCard