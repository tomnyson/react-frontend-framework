
import React from 'react';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {Link} from 'react-router-dom'
const Post = ({picture, name,description, id, createdAt, onRemove, onEdit}) => {
  const onHandleEdit = (item) => {
    onEdit(item)
  }
  return (
    <Grid style={{display: 'flex'}}>
      <Grid item xs={6}>
      <Box component="img" sx={{
        width: '100%',
      }} alt="" src={picture}/>
      </Grid>
      <Grid sx={{
        paddingLeft: '10px'
      }} item xs={6}>
        <h3>{name}</h3>
        <span style={{fontSize: '10px', color: 'gray'}}>{createdAt}</span>
        <p>{description}</p>
        <IconButton onClick={() => onHandleEdit({
          picture, name,description, id
        })}><EditOutlinedIcon/></IconButton>
        <IconButton onClick={() => onHandleEdit({
          picture, name,description, id
        })}><DeleteOutlineOutlinedIcon/></IconButton>
        <Link to={`/post/${id}`}>View Detail</Link>
      </Grid>
    </Grid>
  )
}

export default Post