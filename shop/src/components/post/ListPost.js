
import React from 'react';
import Post from './Post'

const ListPost = ({posts}) => {
  return (
    <div>
      {posts&&posts.length&&posts.map((item, index) => {
          return (
            <Post key={index} {...item}/>
          )
        })}
    </div>
  )
}

export default ListPost