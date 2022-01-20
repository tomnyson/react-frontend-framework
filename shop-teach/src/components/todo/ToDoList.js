import React from "react"
import { useGlobalContext } from "../../context/globalContext"
const TodoList = () => {
  const [state] = useGlobalContext()
  console.log("state", state)
  return (
    <ul>
      {state &&
        state.todo.todoList.map((todoItem) => (
          <li
            className={`todoItem ${todoItem.completed ? "completed" : ""}`}
            key={todoItem.id}
            // onClick={() => markAsCompleted(todoItem.id)}
          >
            {todoItem}
            {/* <button className="delete" onClick={() => removeTodoItem(todoItem.id)}>
            X
          </button> */}
          </li>
        ))}
    </ul>
  )
}

export default TodoList
