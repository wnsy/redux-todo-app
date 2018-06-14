import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: // Object.assign() creates a copy because we
    //don't mutate the state. It's part of ES6. MUST supply an empty object as the first param
    //can also enable the object spread operator proposal to write {...state, ...newState} instead
      return action.filter
    default:
      return state
  }
}
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
    return [
      ...state,
      {
        text: action.text,
        completed: false
      }
    ]
    case TOGGLE_TODO:
    return state.map((todo, index) => {
      if (index === action.index) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        })
      }
      return todo
    })
    default:
    return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp // <--why default
