import React, { useContext } from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import { useGlobalContext } from "../../context/globalContext"
import { addCart } from "../../store/actions"
import styled from "@emotion/styled"

const Product = ({ name, description, price, images, _id }) => {
  const [state, dispatch] = useGlobalContext()
  return (
    <Box>
      <Box
        component="img"
        sx={{
          width: "100%",
        }}
        alt=""
        src={images.length > 0 ? images[0] : "https://via.placeholder.com/300"}
      />
      <SLink to={`/product/${_id}`}>{name}</SLink>
      <Box
        component="span"
        sx={{
          color: "gray",
          fontSize: "12px",
          display: "block",
          marginBottom: "10px",
        }}
      >
        {/* category: {category} */}
      </Box>
      <Box component="span" sx={{ color: "red", fontSize: "18px" }}>
        {price}
      </Box>
      <div
        dangerouslySetInnerHTML={{
          __html: description && description.substring(0, 100),
        }}
      ></div>
      <Button
        sx={{ display: "block", marginTop: "10px", width: "200px" }}
        variant="contained"
        onClick={() => {
          dispatch(
            addCart({
              id: _id,
              name,
              description,
              price,
              quantity: 1,
            })
          )
        }}
      >
        Buy
      </Button>
    </Box>
  )
}

const SLink = styled(Link)`
  &:hover {
    color: #1976d2;
  }
  font-size: 20px;
  color: #000;
  text-decoration: none;
`
export default Product
