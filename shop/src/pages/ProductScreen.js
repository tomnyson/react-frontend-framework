import React, { useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
import { getAPI, deleteAPI } from "../utils/api"
import { API_PRODUCT, API_STATIC } from "../utils/const"
import styled from "styled-components"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import ModalScreen from "../components/modal"
import ProductModal from "../components/modal/ProductModal"
import { useGlobalContext } from "../context/globalContext"
import { showAlert } from "../reducer/action"
import { formatCurrency, removeTags, debounce } from "../utils/functions"
import TextField from "@mui/material/TextField"
import Pagination from "@mui/material/Pagination"
import InputAdornment from "@mui/material/InputAdornment"

const ProductScreen = () => {
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false)
  const [state, dispatch] = useGlobalContext()
  const [selected, setSelected] = useState(null)
  const [keyword, setKeyword] = useState("")
  const [totalPage, setTotalPage] = useState(1)
  const limit = 5
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchProducts()
    console.log("keyword", keyword)
    // sẽ gọi hàm này nếu các tham số bên dưới thay đổi
  }, [open, keyword, page])

  const fetchProducts = async () => {
    const response = await getAPI(API_PRODUCT, { keyword, page, limit })
    if (response) {
      setTotalPage(response.totalPage)
      setProducts(response.data)
    }
  }
  const handleRemoveUser = async (id) => {
    const response = await deleteAPI(API_PRODUCT + `/${id}`)
    if (response && response.status === 200) {
      dispatch(showAlert({ message: "remove success", type: "success" }))
      fetchProducts()
    }
  }
  const handleChangePage = (event, value) => {
    setPage(value)
  }
  const saveKeyword = (value) => {
    setKeyword(value)
  }
  const processChange = debounce((e) => {
    saveKeyword(e.target.value)
  })

  return (
    <Grid>
      <Box
        components="div"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>List Products</h3>
        <STextField
          onChange={processChange}
          name="keyword"
          placeholder="search keyword"
          endAdornment={<InputAdornment position="end">search</InputAdornment>}
        />
        <Button
          onClick={() => {
            setSelected(null)
            setOpen(true)
          }}
        >
          Create
        </Button>
      </Box>
      <Grid>
        <TTable>
          <thead>
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>category</th>
            <th>image</th>
            <th>action</th>
          </thead>
          <tbody>
            {products &&
              products.length > 0 &&
              products.map((product) => {
                return (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td style={{ textAlign: "center" }}>
                      {removeTags(
                        product?.description?.length <= 200
                          ? product?.description
                          : product?.description?.substring(0, 200) + "..."
                      )}
                    </td>
                    <td>{formatCurrency(product.price)}</td>
                    <td>{product?.category?.name}</td>
                    <th>
                      {product.images && product.images.length > 0 && (
                        <img
                          src={
                            product.images[0].includes("http")
                              ? product.images[0]
                              : API_STATIC + "/" + product.images[0] ||
                                "https://picsum.photos/200/300"
                          }
                          height="100px"
                          width="100px"
                        />
                      )}
                    </th>
                    <td style={{ textAlign: "center" }}>
                      <IconButton
                        onClick={() => handleRemoveUser(product._id)}
                        aria-label="delete"
                        size="small"
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setSelected(product)
                          setOpen(true)
                        }}
                        aria-label="delete"
                        size="small"
                      >
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </TTable>
        <Grid style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            onChange={handleChangePage}
            style={{ marginTop: 20 }}
            count={totalPage}
            color="primary"
          />
        </Grid>
      </Grid>
      <ModalScreen
        closeModal={() => setOpen(false)}
        isOpen={open}
        title="create products"
      >
        <ProductModal product={selected} />
      </ModalScreen>
    </Grid>
  )
}

const TTable = styled.table`
  width: 100%;
  border: 1px solid #ccc;
  border-spacing: 0;
  overflow: scroll;
  thead {
    border: 1px solid #ccc;
    background: #f8ab16;
    th {
      padding: 5px 0px;
      text-transform: capitalize;
    }
  }
  tr {
    border-bottom: 1px solid #f8ab16;

    &:nth-child(odd) {
      background: #ccc;
    }
    td {
      min-width: 200px;
      padding: 5px 0px;
      text-align: center;
    }
  }
`
const STextField = styled(TextField)`
  width: 300px;
  input {
    padding: 10px;
  }
`
export default ProductScreen
