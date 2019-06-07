import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchMovies, removeMovie } from '../actions/movies'
import { requestUsers } from '../actions/users'

import Home from '../views/Home'

const mapStateToProps = ({ movies, users }) => ({
  movies,
  users,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestUsers,
  fetchMovies,
  removeMovie,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
