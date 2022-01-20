import React from "react"
import styled from "styled-components"

const SPost = styled.div`
  display: flex;
  width: 49%;
  margin-bottom: 5px;
  margin-left: 5px;
  img {
    width: 300px;
    object-fit: contain;
  }
`
const SWrapperContent = styled.div`
  text-align: left;
  padding-left: 20px;
  h3 {
    margin: 0;
  }
`
const SReadMore = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: red;
  }
`
const SButtonIcon = styled.button`
  background: transparent;
  outline: none;
  border: none;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  :first-child {
    color: red;
  }
  :last-child {
    color: blue;
  }
`
const Product = ({
  picture,
  name,
  description,
  id,
  createdAt,
  onRemove,
  onEdit,
}) => {
  return (
    <SPost>
      <img alt="" src={picture} />
      <SWrapperContent>
        <h3>{name}</h3>
        <span style={{ fontSize: "10px", color: "gray" }}>{createdAt}</span>
        <p>{description}</p>
        <SReadMore href="#">read more</SReadMore>
      </SWrapperContent>
      <div>
        <SButtonIcon onClick={() => onRemove(id)}>remove</SButtonIcon>
        <SButtonIcon
          onClick={() => onEdit({ picture, name, description, id, createdAt })}
        >
          edit
        </SButtonIcon>
      </div>
    </SPost>
  )
}

export default Product
