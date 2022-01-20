import { actions } from "./action"

export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case actions.ADD_TODO_ITEM:
      return {
        todoList: [...state.todoList, payload.label],
      }
    // case actions.REMOVE_TODO_ITEM: {
    //   const filteredTodoItem = state.todoList.filter(
    //     (todoItem) => todoItem.id !== action.todoItemId
    //   )
    //   return { todoList: filteredTodoItem }
    // }
    // case actions.TOGGLE_COMPLETED: {
    //   const updatedTodoList = state.todoList.map((todoItem) =>
    //     todoItem.id === action.todoItemId
    //       ? { ...todoItem, completed: !todoItem.completed }
    //       : todoItem
    //   )
    //   return { todoList: updatedTodoList }
    // }
    default:
      return state
  }
}
