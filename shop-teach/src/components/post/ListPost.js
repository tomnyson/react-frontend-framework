
import React from 'react';
import Post from './Post'
import styled from 'styled-components'
const SWrapper = styled.div`
  display: flex;
  just-align: center;
  margin: 0 auto;
  flex-wrap: wrap
`
const ListPost = ({posts, onRemove, onEdit}) => {
  return (
    <SWrapper>
      {posts&&posts.length&&posts.map((item, index) => {
          return (
            <Post onRemove={onRemove} onEdit={onEdit} key={index} {...item}/>
          )
        })}
    </SWrapper>
  )
}

export default ListPost