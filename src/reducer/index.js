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
    case SET_VISIBILITY_FILTER:
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
      {text: action.text,
        completed: false
      }
    ]

    case TOGGLE_TODO:
    return state.map((todo, index) => {
      if (index == action.index) {
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
    return [
      ...state,
      {
        text: action.text,
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
    })

    default:
    return state
  }
}
