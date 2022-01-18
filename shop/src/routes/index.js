import React, { useState } from "react"
import Grid from "@mui/material/Grid"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PostScreen from "../pages/PostScreen"
import PostDetailScreen from "../pages/PostDetailScreen"
import { ThemeContext } from "../context/themeContext"
import GlobalProvider from "../context/globalProvider"
import AddTodo from "../components/todo/AddToDo"
import ToDoList from "../components/todo/ToDoList"
import { authReducer, todoReducer } from "../reducer"
import { combineReducers } from "../utils/funtions"
import { initialState } from "../reducer/action"

const initTheme = {
  background: "#fff",
  color: "#fff",
  darkMode: false,
  lightModeStyle: {
    background: "#000",
    color: "#fff",
  },
  darkModeStyle: {
    background: "#fff",
    color: "#000",
  },
}
const rootReducer = combineReducers({
  ath: authReducer,
  todo: todoReducer,
})
const RouterScreen = () => {
  const [value] = useState(initTheme)
  return (
    <Grid
      container
      style={
        value.darkMode
          ? { ...value.darkModeStyle }
          : {
              ...value.lightModeStyle,
            }
      }
    >
      <Grid item xs={12}>
        <GlobalProvider reducer={rootReducer} initialState={initialState}>
          <AddTodo />
          <ToDoList />
          {/* <ThemeContext.Provider value={{ value, setValue }}> */}
          {/* <Router>
            <Routes>
              <Route path="/" element={<PostScreen />} />
              <Route path="/posts" element={<PostScreen />} />
              <Route path="/post/:id" element={<PostDetailScreen />} />
              <Route path="/post/create" element={<h1>page create post</h1>} />
              <Route path="/post/update/:id" element={<h1>page update post</h1>} />
              <Route path="*" element={<h1>page not found</h1>} />
            </Routes>
          </Router> */}
          {/* </ThemeContext.Provider> */}
        </GlobalProvider>
      </Grid>
    </Grid>
  )
}

export default RouterScreen
