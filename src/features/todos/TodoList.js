// redux toolkit way...
// ref.: https://redux.js.org/tutorials/fundamentals/part-8-modern-redux
// https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-9-createSlice/?from-embed=&file=/src/features/todos/TodoListItem.js:0-1802

import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

import { selectFilteredTodoIds } from './todosSlice'

const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds)
  const loadingStatus = useSelector((state) => state.todos.status)

  if (loadingStatus === 'loading') {
    return (
      <div className="todo-list">
        <div className="loader" />
      </div>
    )
  }

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
