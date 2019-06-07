import React from 'react'
import MainLayout from '../layouts/MainLayout'

const ContentForm = ({
  id,
  title,
  image,
  genre,
  overview,
  year,
  yearRef,
  handleChange,
  handleSubmit
}) => {
  return <form className='form' onSubmit={handleSubmit}>
    <input value={id} name='id' placeholder='id' onChange={handleChange} />
    <input value={title} name='title' placeholder='name' onChange={handleChange} />
    <input ref={yearRef} value={year} name='year' placeholder='year' onChange={handleChange} />
    <input value={image} name='image' placeholder='image' onChange={handleChange} />
    <input value={genre} name='genre' placeholder='genre' onChange={handleChange} />
    <input value={overview} name='overview' placeholder='overview' onChange={handleChange} />
    <input type='submit' value="Save" />
  </form>
}

class MovieForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      year: '',
      image: '',
      genre: '',
      overview: '',
    }
    this.yearRef = React.createRef()
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert(this.state)
    this.props.onAddMovie(this.state)
  }

  componentDidMount() {
    /*
      DONT DO THIS ¬¬
      document.getElementById('movieID').value = '1045' 
      ----------------------------------------------------
      Use Ref instead to point to DOM elements :)
      console.log(this.yearRef.current.focus())
    */
  }

  render() {
    const { id, title, image, genre, overview, year } = this.state
    const { yearRef } = this
    return <MainLayout
      content={React.createElement(ContentForm, { id, title, image, genre, overview, year, yearRef })}
      title='Movie Form'
    />
  }
}

export default MovieForm
