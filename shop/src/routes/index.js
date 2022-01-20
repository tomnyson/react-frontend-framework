import React, { useState } from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PostScreen from "../pages/PostScreen"
import PostDetailScreen from "../pages/PostDetailScreen"
import { ThemeContext } from "../context/themeContext"
import GlobalProvider from "../context/globalProvider"
import AddTodo from "../components/todo/AddToDo"
import ToDoList from "../components/todo/ToDoList"
import { authReducer, todoReducer, productReducer } from "../reducer"
import { combineReducers } from "../utils/funtions"
import { initialState } from "../reducer/action"
import PublicRouter from "./public.route"
import { ThemeProvider } from "@mui/system"
import { createTheme } from "@mui/material/styles"
import { green, purple, white } from "@mui/material/colors"
import ProductScreen from "../pages/ProductScreen"

const theme = createTheme({
  palette: {
    primary: {
      main: "#f8ab16",
      color: "#000",
      white: "#fff",
    },
    secondary: {
      main: green[500],
    },
  },
})

const initTheme = {
  background: "#fff",
  color: "#fff",
  darkMode: true,
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
  product: productReducer,
})
const RouterScreen = () => {
  const [value, setValue] = useState(initTheme)

  const publicPath = [
    {
      path: "/",
      page: <ProductScreen />,
    },
    {
      path: "/posts",
      page: <PostScreen />,
    },
    {
      path: "/post:id",
      page: <PostDetailScreen />,
    },
    {
      path: "/products",
      page: <ProductScreen />,
    },
  ]

  const privatePath = [
    {
      path: "/",
      page: <PostScreen />,
    },
    {
      path: "/posts",
      page: <PostScreen />,
    },
    {
      path: "/post:id",
      page: <PostDetailScreen />,
    },
  ]

  return (
    <ThemeProvider theme={theme}>
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
            <ThemeContext.Provider value={{ value, setValue }}>
              <Router>
                <Routes>
                  {publicPath.map((route) => (
                    <Route
                      path={route.path}
                      element={<PublicRouter>{route.page}</PublicRouter>}
                    />
                  ))}
                  {privatePath.map((route) => (
                    <Route
                      path={route.path}
                      element={<PublicRouter>{route.page}</PublicRouter>}
                    />
                  ))}
                  <Route path="*" element={<h1>page not found</h1>} />
                </Routes>
              </Router>
            </ThemeContext.Provider>
          </GlobalProvider>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default RouterScreen
