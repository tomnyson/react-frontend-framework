import React from "react"
import Product from "./Product"
import Grid from "@mui/material/Grid"
import CircularProgress from "@mui/material/CircularProgress"
import styled from "styled-components"

const ProductList = ({ products, loading }) => {
  return (
    <Grid
      container
      xs={{
        gap: 1,
      }}
      spacing={2}
    >
      {loading && (
        <SLoading>
          <CircularProgress />
        </SLoading>
      )}
      {products && products.length > 0 ? (
        products.map((item, index) => {
          return (
            <Grid key={index} item xs={3}>
              <Product {...item} />
            </Grid>
          )
        })
      ) : (
        <p style={{ textAlign: "center", color: "#ccc", width: "100%" }}>
          data not found
        </p>
      )}
    </Grid>
  )
}

const SLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
`
export default ProductList
