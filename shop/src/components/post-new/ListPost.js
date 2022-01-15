
import React from 'react';
import Post from './Post'
import Grid from '@mui/material/Grid'

const ListPost = ({posts, onRemove, onEdit}) => {
  return (
    <Grid container xs={{
      gap: 1
    }}>
      {posts&&posts.length&&posts.map((item, index) => {
          return (
            <Grid item xs={6}>
              <Post  key={index} onEdit={onEdit} {...item}/>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default ListPost