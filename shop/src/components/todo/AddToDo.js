import React from "react"
import TodoListContext from "../../context/todoContext"

const AddTodo = () => {
  const [inputValue, setInputValue] = React.useState("")
  const { addTodoItem } = React.useContext(TodoListContext)

  return (
    <>
      <input
        type="text"
        value={inputValue}
        placeholder={"Type and add todo item"}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          addTodoItem(inputValue)
          setInputValue("")
        }}
      >
        Add
      </button>
    </>
  )
}

export default AddTodo
