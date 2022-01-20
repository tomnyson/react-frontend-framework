import React, { useState, useEffect, useContext } from "react"
import { getAPI, putAPI, deleteAPI } from "../utils/api"
import { API, API_PRODUCT } from "../utils/const"
import ListProduct from "../components/product/ListProduct"
import styled from "styled-components"
import Grid from "@mui/material/Grid"
import { useGlobalContext } from "../context/globalContext"
const ProductScreen = () => {
  const [product, setProduct] = useState([])
  const [state] = useGlobalContext()
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

  const Cart = () => {
    const { cart } = state
    return (
      <table>
        <th>id</th>
        <th>name</th>
        <th>image</th>
        <th>quantity</th>
        {cart &&
          cart.length > 0 &&
          cart.map((item) => {
            return (
              <tr index={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <img width="100px" src={item.image} />
                </td>
                <td>{item.quantity}</td>
                <td>
                  <button>remove</button>
                </td>
              </tr>
            )
          })}
      </table>
    )
  }
  return (
    <Grid>
      <Cart />
      <ListProduct products={product} />
    </Grid>
  )
}

export default ProductScreen
