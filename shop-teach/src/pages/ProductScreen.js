import React, { useState, useEffect, useContext } from "react"
import { getAPI, putAPI, deleteAPI } from "../utils/api"
import { API, API_PRODUCT } from "../utils/const"
import ListProduct from "../components/product/ListProduct"
import styled from "styled-components"
import Grid from "@mui/material/Grid"

const ProductScreen = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetchAPI()
  }, [])

  const fetchAPI = async () => {
    const result = await getAPI(API_PRODUCT)
    // check dữ dữ liệu trước khi lấy
    console.log("result", result)
    if (result) {
      setProduct(result)
    }
  }
  return <Grid>{<ListProduct products={product} />}</Grid>
}

export default ProductScreen
