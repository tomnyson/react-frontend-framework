import React, { useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
import { getAPI, deleteAPI } from "../utils/api"
import { API_CATEGORY } from "../utils/const"
import styled from "styled-components"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import ModalScreen from "../components/modal"
import CategoryModal from "../components/modal/CategoryModal"
import { useGlobalContext } from "../context/globalContext"
import { showAlert } from "../reducer/action"

const CategoryScreen = () => {
  const [categories, setCategories] = useState([])
  const [open, setOpen] = useState(false)
  const [state, dispatch] = useGlobalContext()
  const [selected, setSelected] = useState(null)
  useEffect(() => {
    fetchCategories()
  }, [open])

  const fetchCategories = async () => {
    const response = await getAPI(API_CATEGORY)
    if (response) {
      setCategories(response)
    }
  }
  const handleRemoveUser = async (id) => {
    const response = await deleteAPI(API_CATEGORY + `/${id}`)
    if (response && response.status === 200) {
      dispatch(showAlert({ message: "remove success", type: "success" }))
      fetchCategories()
    }
  }
  return (
    <Grid>
      <Box
        components="div"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>List categories</h3>
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
            <th>action</th>
          </thead>
          <tbody>
            {categories &&
              categories.length > 0 &&
              categories.map((category) => {
                return (
                  <tr key={category._id}>
                    <td>{category.name}</td>
                    <td style={{ textAlign: "center" }}>{category.description}</td>
                    <td style={{ textAlign: "center" }}>
                      <IconButton
                        onClick={() => handleRemoveUser(category._id)}
                        aria-label="delete"
                        size="small"
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setSelected(category)
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
      </Grid>
      <ModalScreen
        closeModal={() => setOpen(false)}
        isOpen={open}
        title="create category"
      >
        <CategoryModal category={selected} />
      </ModalScreen>
    </Grid>
  )
}

const TTable = styled.table`
  width: 100%;
  border: 1px solid #ccc;
  border-spacing: 0;
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
      padding: 5px 0px;
      text-align: center;
    }
  }
`
export default CategoryScreen
