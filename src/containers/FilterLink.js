import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

/** Tells how to transform the current Redux store state
into the props you want to pass to a presentational component you are wrapping.
For example, VisibleTodoList needs to calculate todos to pass to the VisibleTodoList.
So we define a function that filters the state.todos based on state.visibilityFilter and use it in its
mapStateToProps */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
