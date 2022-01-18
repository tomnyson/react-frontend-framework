import React from "react"
import { actions } from "../reducer/action"
import TodoListContext from "./todoContext"
import { reducer } from "../reducer"
import { initialState } from "../reducer/action"

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const value = {
    todoList: state.todoList,
    addTodoItem: (todoItemLabel) => {
      dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel })
    },
    removeTodoItem: (todoItemId) => {
      dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId })
    },
    markAsCompleted: (todoItemId) => {
      dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId })
    },
  }

  return (
    <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>
  )
}
export default Provider
