import React, { useContext, createContext } from "react"
export const GlobalContext = createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
