import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movies'
import { requestUsers } from '../actions/users'
import Home from '../views/Home'

const mapStateToProps = ({ movies, users }) => ({
   movies,
   users,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    requestUsers,
    fetchMovies,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
