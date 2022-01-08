import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components'
import TextareaAutosize from '@mui/material/TextareaAutosize'
const CreatePost = () => {
  return (
    <SWrapperForm>
      <SH3>create post</SH3>
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <TextField sx={{
          marginBottom: '5px'
        }} label="name" variant="outlined" />
        <TextareaAutosize style={{
          height: 200
        }} label="description" variant="outlined" />
        <TextField sx={{
           marginBottom: '5px'
        }} label="image" variant="outlined" />
        <Button variant="contained">Create</Button>
      </form>
    </SWrapperForm>
  )
}
const SH3 = styled.h3`
  color: red;

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