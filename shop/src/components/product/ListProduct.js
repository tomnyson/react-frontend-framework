import React from "react"
import Product from "./Product"
import styled from "styled-components"
const SWrapper = styled.div`
  display: flex;
  just-align: center;
  margin: 0 auto;
  flex-wrap: wrap;
`
const ListProduct = ({ posts, onRemove, onEdit }) => {
  return (
    <SWrapper>
      {posts &&
        posts.length &&
        posts.map((item, index) => {
          return (
            <Product onRemove={onRemove} onEdit={onEdit} key={index} {...item} />
          )
        })}
    </SWrapper>
  )
}

export default ListProduct
