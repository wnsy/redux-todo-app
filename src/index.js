import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
// import './index.css'
import App from './components/App'
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp)

// All container components need access to the Redux store so they can subscribe to it
// However, it gets tedious, as you have to wire 'store' even through presentational components
// just because they happen to render a container deep in the component tree
// Recommended option is to use a special React Redux component called <Provider>
// to 'magically' make the store available to all containers components w/o having to
// to explicitly pass a prop through every level of the tree

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// import {
//   addTodo,
//   toggleTodo,
//   setVisibilityFilter,
//   VisibilityFilters
// } from './actions'
//
//
// const store = createStore(todoApp, window.STATE_FROM_SERVER)
//
//
// //log the init state
// console.log(store.getState())
//
// //every time the state changes, log it
// //note the subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() =>
// console.log(store.getState())
// )
//
// //dispatch some actions
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
//
// //stop listening to the updates
// unsubscribe()


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
