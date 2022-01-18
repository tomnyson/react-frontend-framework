export const actions = {
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
  ADD_AUTH: "ADD_AUTH",
}

export const addToDo = (payload) => {
  return { type: actions.ADD_TODO_ITEM, payload }
}
export const initialState = {
  todo: {
    todoList: [],
  },
  auth: {
    isAuth: false,
  },
}

export const init = (initialState) => {
  return { initialState }
}
