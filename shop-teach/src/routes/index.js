import React, { useState } from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PostScreen from "../pages/PostScreen"
import ProductScreen from "../pages/ProductScreen"
import PostDetailScreen from "../pages/PostDetailScreen"
import { ThemeContext } from "../context/themeContext"
import GlobalProvider from "../context/globalProvider"
import PublicRouter from "./public.route"
import { green, purple, white } from "@mui/material/colors"
import PublicLayout from "../components/layout/LayoutPublic"
import { initialState } from "../store/initialState"
import { cartReducer } from "../store/reducers"
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

const RouterScreen = () => {
  const [value, setValue] = useState(initTheme)

  return (
    <Grid container>
      <Grid item xs={12}>
        <ThemeContext.Provider value={{ value, setValue }}>
          <GlobalProvider reducer={cartReducer} initialState={initialState} c>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <PublicLayout>
                      <ProductScreen />
                    </PublicLayout>
                  }
                />
                <Route path="/products" element={<ProductScreen />} />
                <Route path="/posts" element={<PostScreen />} />
                <Route path="*" element={<h1>page not found</h1>} />
              </Routes>
            </Router>
          </GlobalProvider>
        </ThemeContext.Provider>
      </Grid>
    </Grid>
  )
}

export default RouterScreen
