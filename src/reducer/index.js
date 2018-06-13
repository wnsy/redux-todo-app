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

function todoApp(state = initialState, action) {
  switch (action.type) { //.type = ?
    case SET_VISIBILITY_FILTER:
    return Object.assign({}, state, { // Object.assign() creates a copy because we
      //don't mutate the state. It's part of ES6. MUST supply an empty object as the first param
      //can also enable the object spread operator proposal to write {...state, ...newState} instead
      visibilityFilter: action.filter
    })

    //new `todos` is equal to the old `todos` concatenated
    case ADD_TODO:
    return Object.assign({}, state, {
      todos: [
        ...state.todos,
        {
          text: action.text,
          completed: false //never write directly to state or its fields and instead we return new objects
          //the new `todos` is equal to the old `todos` concatenatedd w/ a single
          //new item at the end. The fresh todo was constructed using the data fr. the action.
        }
      ]
    })

    case TOGGLE_TODO:
    // What does the part after `state` mean below?
    return Object,assign({}, state, {
      todos: state.todos.map()
    })

    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      })


    default:
    return state
  }
}
