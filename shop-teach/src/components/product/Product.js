import React, { useContext } from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import { useGlobalContext } from "../../context/globalContext"
import { addCart } from "../../store/actions"

const Product = ({ image, category, price, title, description, id, createdAt }) => {
  const [state, dispatch] = useGlobalContext()
  return (
    <Box>
      <Box
        component="img"
        sx={{
          width: "100%",
        }}
        alt=""
        src={image}
      />
      <h3>{title}</h3>
      <Box
        component="span"
        sx={{
          color: "gray",
          fontSize: "12px",
          display: "block",
          marginBottom: "10px",
        }}
      >
        category: {category}
      </Box>
      <Box component="span" sx={{ color: "red", fontSize: "18px" }}>
        {price}
      </Box>
      <p>{description && description.substring(0, 100)}...</p>
      <Link to={`/product/${id}`}>View Detail</Link>
      <Button
        sx={{ display: "block", marginTop: "10px", width: "200px" }}
        variant="contained"
        onClick={() => {
          dispatch(
            addCart({
              id,
              title,
              image,
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

export default Product
