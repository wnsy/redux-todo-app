import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import todoApp from './reducers';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'


const store = createStore(todoApp, window.STATE_FROM_SERVER)


//log the init state
console.log(store.getState())

//every time the state changes, log it
//note the subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
console.log(store.getState())
)

//dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

//stop listening to the updates
unsubscribe()


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
