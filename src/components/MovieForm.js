import React from 'react'

class MovieForm extends React.Component {
    state = {}

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
    }

    render() {
        return <form className='form' onSubmit={this.handleSubmit}>
            <input value={this.state.id} name='id' placeholder='id' onChange={this.handleChange} />
            <input value={this.state.title} name='title' placeholder='name' onChange={this.handleChange} />
            <input value={this.state.year} name='year' placeholder='year' onChange={this.handleChange} />
            <input value={this.state.image} name='image' placeholder='image' onChange={this.handleChange} />
            <input value={this.state.genre} name='genre' placeholder='genre' onChange={this.handleChange} />
            <input value={this.state.overview} name='overview' placeholder='overview' onChange={this.handleChange} />
            <input type='submit' value="Save" />
        </form>
    }

}

export default MovieForm
