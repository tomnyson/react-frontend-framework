import React, { useReducer } from "react"
import { GlobalContext } from "./globalContext"
const GlobalProvider = ({ initialState = {}, reducer, children }) => {
  const value = useReducer(reducer, initialState)
  console.log("value", value)
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
export default GlobalProvider
