import React, { useState, useEffect, useContext } from "react"
import { getAPI, putAPI, deleteAPI } from "../utils/api"
import { API, API_PRODUCT, API_CATEGORY } from "../utils/const"
import ListProduct from "../components/product/ListProduct"
import styled from "styled-components"
import Grid from "@mui/material/Grid"
import { useGlobalContext } from "../context/globalContext"
import CategoryFilter from "../components/catagoryFilter"
import TextField from "@mui/material/TextField"
import CircularProgress from "@mui/material/CircularProgress"
import Pagination from "@mui/material/Pagination"

const ProductScreen = () => {
  const [product, setProduct] = useState([])
  const [categories, setCategories] = useState([])
  const [keyword, setKeyword] = useState("")
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [state] = useGlobalContext()
  const limit = 5

  useEffect(() => {
    fetchCatagoriesAPI()
  }, [])

  useEffect(() => {
    fetchAPI()
  }, [keyword, category, page])

  const fetchAPI = async () => {
    setLoading(true)
    const response = await getAPI(API_PRODUCT, {
      keyword,
      categoryList: category,
      limit,
      page,
    })
    // check dữ dữ liệu trước khi lấy
    if (response) {
      setProduct(response?.data)
      setTotal(response?.totalPage)
      setLoading(false)
    }
  }

  const fetchCatagoriesAPI = async () => {
    const result = await getAPI(API_CATEGORY)
    // check dữ dữ liệu trước khi lấy
    console.log("result", result)
    if (result) {
      setCategories(result)
    }
  }

  const onChangeSelected = async (value) => {
    console.log("category", value)
    setCategory(value)
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

  const handleSearch = (e) => {
    setKeyword(e.target.value)
  }

  const handleChangePage = (event, value) => {
    setPage(value)
  }
  return (
    <Grid>
      <Grid display="flex" justifyContent="center" xs={12}>
        <TextField
          onChange={handleSearch}
          style={{ width: "50%", marginBottom: "20px" }}
          id="outlined-basic"
          label="Outlined"
          placeholder="search products"
        />
      </Grid>
      <Grid display="flex">
        <Grid item xs={2}>
          <CategoryFilter
            onChangeSelected={onChangeSelected}
            categories={categories}
          />
        </Grid>
        <Grid item xs={10}>
          <ListProduct loading={loading} products={product} />
          <Grid style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              onChange={handleChangePage}
              style={{ marginTop: 20 }}
              count={total}
              color="primary"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductScreen
