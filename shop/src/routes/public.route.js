import React from 'react';
import {BrowserRouter as Router,  Routes,  Route} from 'react-router-dom'
import DemoMeterial from '../pages/DemoMeterial'
import PostScreen from '../pages/PostScreen'
import PostDetailScreen from '../pages/PostDetailScreen'
import Grid from '@mui/material/Grid'

const RouterScreen = () => {
    return (
      <Router>
      <Grid container spacing={2} sx={{margin: '0 auto'}}>
      <Grid item md={12}>
          <Routes>
            <Route path="/post" element={<PostScreen/>}/>
            <Route path="/post/:id" element={<PostDetailScreen/>}/>
            <Route path="/" element={<DemoMeterial/>}/>
          </Routes>
      </Grid>
        
      </Grid>
      </Router>
    )
}

export default RouterScreen