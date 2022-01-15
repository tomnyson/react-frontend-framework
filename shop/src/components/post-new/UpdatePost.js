import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import TextareaAutosize from '@mui/material/TextareaAutosize';
const UpdatePost = ({ item, onSubmit }) => {
  const [post, setPost] = useState({
    name: item.name || '',
    description: item.description || '',
    picture: item.picture || ''
  });
  useEffect(() => {
    console.log('will render');
    setPost(item);
  }, [item]);

  const onChangeText = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const onClickButton = (event) => {
    onSubmit({ ...item, ...post, id: item.id });
  };

  const { name, description, picture, id } = post;
  console.log('post', post);
  return (
    <SWrapperForm>
      <SH3>update post</SH3>
      <Box component="form" style={{ display: 'flex', flexDirection: 'column' }}>
        <SCustomTextInput
          value={name}
          onChange={onChangeText}
          sx={{
            marginBottom: '5px'
          }}
          name="name"
          label="name"
          variant="outlined"
        />
        <TextareaAutosize
          value={description}
          onChange={onChangeText}
          style={{
            height: 200
          }}
          label="description"
          name="description"
          variant="outlined"
          placeholder="description"
        />
        <TextField
          sx={{
            marginBottom: '5px'
          }}
          label="image"
          variant="outlined"
          onChange={onChangeText}
          value={picture}
          placeholder="image"
          name="picture"
        />
        {picture && <img src={picture} alt="" width="300px" />}
        <Button onClick={onClickButton} variant="contained">
          Change
        </Button>
      </Box>
    </SWrapperForm>
  );
};
const SH3 = styled.h3`
  color: red;
`;
const SCustomTextInput = styled(TextField)`
  input {
    color: red;
  }
`;
const SWrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  just-align: center;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 30px;
`;
export default UpdatePost;
