import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

const { SHOW_ALL } = VisibilityFilters

function VisibilityFilters(state = SHOW_ALL, action) {
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
    //new `todos` is equal to the old `todos` concatenated
    case ADD_TODO:
    return [
      ...state,
      {text: action.text,
        completed: false //never write directly to state or its fields and instead we return new objects
        //the new `todos` is equal to the old `todos` concatenatedd w/ a single
        //new item at the end. The fresh todo was constructed using the data fr. the action.
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
    }
    default:
    return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp // <--why default


// // Note: each of these reducers is managing its own part of the global state.
// // The `state` param is different for every reducer, and corresponds to the
// // part of the state it manages
// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: VisibilityFilters(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
}
