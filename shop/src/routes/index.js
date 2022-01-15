import React from 'react';
import Grid from '@mui/material/Grid'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import PostScreen from '../pages/PostScreen'
import PostDetailScreen from '../pages/PostDetailScreen'

const RouterScreen = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Router>
          <Routes>
            <Route path="/posts" element={<PostScreen/>} />
            <Route path="/post/:id" element={<PostDetailScreen/>} />
            <Route path="/post/create" element={ <h1>page create post</h1>} />
            <Route path="/post/update/:id" element={ <h1>page update post</h1>} />
            <Route path="*" element={ <h1>page not found</h1>} />
          </Routes>
        </Router>
      </Grid>
    </Grid>
  )
}

export default RouterScreen