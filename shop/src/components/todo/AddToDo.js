import React, { useState } from "react"
import { useGlobalContext } from "../../context/globalContext"
import { actions, addToDo } from "../../reducer/action"
const AddTodo = () => {
  const [inputValue, setInputValue] = useState("")
  const [state, dispatch] = useGlobalContext()
  console.log("state", state)
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
          dispatch(addToDo({ label: inputValue }))
          setInputValue("")
        }}
      >
        Add
      </button>
    </>
  )
}

export default AddTodo
