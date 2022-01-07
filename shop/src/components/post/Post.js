
import React from 'react';

const Post = ({picture, name,description, id}) => {
  return (
    <div>
      <img alt="" src={picture} width="300px"/>
      <h2>id: {id}:{name}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Post