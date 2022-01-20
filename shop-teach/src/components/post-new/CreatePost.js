import React, { useState } from'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components'
import TextareaAutosize from '@mui/material/TextareaAutosize'
const CreatePost = ({item, onSubmit}) => {
  const [post, setPost] = useState(item || {
    name: '',
    description: '',
    picture: ''
  })

  const onChangeText = (event) => {
    console.log('onChangeName', event)
    setPost({...post, [event.target.name]: event.target.value})
  }

 const onClickButton = (event) => {
    onSubmit(post)
  }

  return (
    <SWrapperForm>
      <SH3>create post</SH3>
      <Box component="form" style={{display: 'flex', flexDirection: 'column'}}>
        <SCustomTextInput onChange={onChangeText} sx={{
          marginBottom: '5px'
        }} name="name" label="name" variant="outlined" /> 
        <TextareaAutosize onChange={onChangeText} style={{
          height: 200
        }} label="description" name="description" variant="outlined" placeholder="description" />
        <TextField sx={{
          marginBottom: '5px'
        }} label="image" variant="outlined"
        onChange={onChangeText}
        placeholder="image"
        name="picture"
        />
        <Button onClick={onClickButton} variant="contained">Create</Button>
      </Box>
    </SWrapperForm>
  )
}
const SH3 = styled.h3`
  color: red;
`
const SCustomTextInput = styled(TextField) `
  input {
    color: red;
  }
`
const SWrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  just-align: center;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 30px;

`
export default CreatePost