import React, { useState, useEffect } from "react"
import { getAPI, putAPI, deleteAPI } from "../utils/api"
import { API, API_PRODUCT } from "../utils/const"
import styled from "styled-components"
import Grid from "@mui/material/Grid"
import { useParams } from "react-router-dom"
import Button from "@mui/material/Button"

const ProductDetailScreen = () => {
  const [product, setProduct] = useState([])
  // const { value, setValue } = useContext(ThemeContext)
  const { id } = useParams()
  useEffect(() => {
    fetchAPI()
  }, [])

  const fetchAPI = async () => {
    const result = await getAPI(API_PRODUCT + `/${id}`)
    // check dữ dữ liệu trước khi lấy
    if (result) {
      setProduct(result)
    }
  }
  if (product) {
    return (
      <Grid container>
        <Grid item xs={4}>
          image
        </Grid>
        <Grid item xs={8}>
          <h1>{product.name}</h1>
          <p>category: {product.category}</p>
          <p>{product.price}</p>
          <Button
            sx={{ display: "block", marginTop: "10px", width: "200px" }}
            variant="contained"
          >
            Buy
          </Button>
        </Grid>
        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
        </Grid>
      </Grid>
    )
  }
}

export default ProductDetailScreen
