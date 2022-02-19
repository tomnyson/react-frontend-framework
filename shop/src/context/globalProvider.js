import React, { useReducer } from "react"
import { GlobalContext } from "./globalContext"
import logger from "use-reducer-logger"
const GlobalProvider = ({ initialState = {}, reducer, children }) => {
  const value = useReducer(logger(reducer), initialState)
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
export default GlobalProvider
