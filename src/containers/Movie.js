import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movies'
import Movie from '../views/Movie'

const mapStateToProps = ({ movies }) => ({
   movies,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
