import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestMovies } from '../actions/movies'
import Home from '../views/Home'

const mapStateToProps = (state) => ({
    movies: state.movies
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    requestMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)
