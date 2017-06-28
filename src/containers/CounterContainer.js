import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Counter from '../components/Counter'

// Map Redux state to component props
const mapStateToProps = state => ({
    value: state.counter.count
})

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
    onIncreaseClick: () => increment(dispatch),
    onDecreaseClick: () => decrement(dispatch),
})

// Connected Component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)