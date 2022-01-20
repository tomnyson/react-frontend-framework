
import React, {useState} from 'react';
import styled from 'styled-components'


const SWrapper = styled.form`
width: 500px;
margin: 0 auto;
background: gray;
flex-direction: column;
just-content: flex-start;
padding: 20px 50px;
margin-top: 50px;
margin-bottom: 50px;
  lable {
    display: block;
    text-align: left;
    text-transform: uppercase;
    color: blue;
  }
  input, textarea {
    width: 100%;
    padding: 5px;
    outline: 0;
    margin: 10px 0;
  }
  h4 {
    color: blue;
    text-transform: uppercase;
    border-bottom: 2px solid #fff;
  }
`

const STextArea =  styled.textarea`
  height: 100px;
`
const SButton = styled.button`
  background: green;
  color: #ffff;
  padding: 10px;
  width: 150px;
`
const CreatePost = ({post: postEdit, onSubmit}) => {
  const [post, setPost] = useState({
    name: postEdit?.name || '',
    description: postEdit?.description || '',
    picture: postEdit?.picture || ''
  })

  const conChangeValue = (event) => {
      setPost({
        ...post,
        [event.target.name]: event.target.value
      })
  }
  if(postEdit) {
    console.log('post', post)
    return (
      <SWrapper>
        <h4>edit post</h4>
          <lable>Name</lable>
          <input onChange={conChangeValue} defaultValue={post.name}  value={post.name} type="text" name="name"/>
          <lable>description</lable>
          <STextArea onChange={conChangeValue} defaultValue={post.description} value={post.description}  name="description"/>
          <lable>image</lable>
          <input onChange={conChangeValue} defaultValue={post.picture}  value={post.picture}  name="picture"  type="text"/>
          <SButton onClick={()=>onSubmit({...post, id: postEdit.id})} type="button">Save Change</SButton>
       </SWrapper>
    )
  }
  return (
    <SWrapper>
        <h4>create post</h4>
          <lable>Name</lable>
          <input onChange={conChangeValue} type="text" name="name"/>
          <lable>description</lable>
          <STextArea onChange={conChangeValue}  name="description" type="text"/>
          <lable>image</lable>
          <input onChange={conChangeValue}  type="text"  name="picture"/>
          <SButton onClick={()=>onSubmit(post)} type="button">Create</SButton>
    </SWrapper>
  )
}

export default CreatePost