import React from "react"
import Post from "./Post"
import Grid from "@mui/material/Grid"

const ListPost = ({ posts, onRemove, onEdit }) => {
  return (
    <Grid
      container
      xs={{
        gap: 1,
      }}
    >
      {posts &&
        posts.length > 0 &&
        posts.map((item, index) => {
          return (
            <Grid key={index} item xs={6}>
              <Post onRemove={onRemove} onEdit={onEdit} {...item} />
            </Grid>
          )
        })}
    </Grid>
  )
}

export default ListPost
