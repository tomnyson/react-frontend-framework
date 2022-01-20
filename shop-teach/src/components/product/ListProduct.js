import React from "react"
import Product from "./Product"
import Grid from "@mui/material/Grid"

const ProductList = ({ products }) => {
  return (
    <Grid
      container
      xs={{
        gap: 1,
      }}
      spacing={2}
    >
      {products &&
        products.length > 0 &&
        products.map((item, index) => {
          return (
            <Grid key={index} item xs={3}>
              <Product {...item} />
            </Grid>
          )
        })}
    </Grid>
  )
}

export default ProductList
