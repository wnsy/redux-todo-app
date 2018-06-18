import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'




let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if(!input.value.trim()) {
          return
      }
        dispatch(addTodo(input.value))
        input.value = ''
      }}
      >

      {/* props - prevent parent components to communicate w/ their children.
        To modify a child, re-render it w/ new props. However, sometimes you may
        need to modify a child outside of the typical dataflow */}
      <input ref={node => { input = node }}/>
      <button type="submit">
        Add Todo
      </button>
      </form>
    </div>
  )
}



AddTodo = connect()(AddTodo)

export default AddTodo
