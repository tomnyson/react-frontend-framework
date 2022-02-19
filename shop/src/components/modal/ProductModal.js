import React, { useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Select from "@mui/material/Select"
import styled from "styled-components"
import Button from "@mui/material/Button"
import { useForm } from "react-hook-form"
import FormHelperText from "@mui/material/FormHelperText"
import { postAPI, putAPI, getAPI } from "../../utils/api"
import { API_CATEGORY, API_PRODUCT, API_MEDIA, API_STATIC } from "../../utils/const"
import { showAlert } from "../../reducer/action"
import { useGlobalContext } from "../../context/globalContext"
import Editor from "../editor"
import MenuItem from "@mui/material/MenuItem"

const ProductModal = ({ product }) => {
  const [state, dispatch] = useGlobalContext()
  const [categories, setCategories] = useState([])
  const [description, setDescription] = useState(product.description || "")
  const [categorySelected, setCategorySelected] = useState(
    product?.category?._id || ""
  )
  const [images, setImages] = useState(product.image || [])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      ...product,
    },
  })

  const onSubmit = async (data) => {
    if (product) {
      const response = await putAPI(API_PRODUCT + `/${product._id}`, {
        ...data,
        description,
        images,
        category: categorySelected,
      })
      if (response && response.status === 200) {
        dispatch(showAlert({ message: "create product success", type: "success" }))
      } else {
        dispatch(showAlert({ message: response.data.message, type: "error" }))
      }
    } else {
      const response = await postAPI(API_PRODUCT, {
        ...data,
        description,
        images,
        category: categorySelected,
      })
      if (response && response.status === 200) {
        dispatch(showAlert({ message: "updated product success", type: "success" }))
      } else {
        dispatch(showAlert({ message: response.data.message, type: "error" }))
      }
    }
  }
  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    const response = await getAPI(API_CATEGORY)
    if (response) {
      setCategories(response)
    }
  }

  const handleUpload = async (e) => {
    const formData = new FormData()
    for (const file of e.target.files) {
      formData.append("files", file)
    }
    const response = await postAPI(API_MEDIA, formData)
    if (response && response.status === 200) {
      setImages(...images, response.data)
    }
  }
  return (
    <Grid className="modal_product">
      <Box onSubmit={handleSubmit(onSubmit)} component="form">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <STextInput
              fullWidth={"100%"}
              sx={{ padding: "10px" }}
              label="name"
              name="name"
              placeholder="name"
              {...register("name", { required: true })}
              error={errors.name}
              helperText={errors.name && "name is required"}
            />
          </Grid>
          <Grid item xs={6}>
            <STextInput
              fullWidth={"100%"}
              sx={{ padding: "10px" }}
              label="price"
              name="price"
              placeholder="price"
              type="number"
              {...register("price", { required: true })}
              error={errors.name}
              helperText={errors.name && "price is required"}
            />
          </Grid>
          <Grid item xs={6}>
            <SSelect
              value={categorySelected || ""}
              style={{ marginTop: "10px", padding: "0px", width: "150px" }}
              onChange={(e) => {
                setCategorySelected(e.target.value || "")
              }}
            >
              {categories &&
                categories.map((category) => {
                  return <MenuItem value={category._id}>{category.name}</MenuItem>
                })}
            </SSelect>
            {categorySelected === "" && (
              <FormHelperText style={{ color: "#d32f2f" }}>
                Required category
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="contained-button-file">
              <input
                style={{ display: "none" }}
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleUpload}
              />
              <Button variant="contained" component="span">
                Upload images
              </Button>
            </label>
          </Grid>
          <SImagePreview>
            {images &&
              images.length > 0 &&
              images.map((image) => {
                return <img src={API_STATIC + `/${image}`} />
              })}
          </SImagePreview>
          <Grid item xs={12}>
            <Editor value={description} handleChangeData={setDescription} />
            {description === "" && (
              <FormHelperText style={{ color: "#d32f2f" }}>
                Required description
              </FormHelperText>
            )}
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          style={{
            display: "block",
            width: "150px",
            marginTop: "20px",
            marginLeft: "5px",
          }}
        >
          {product ? "Change" : "Save"}
        </Button>
      </Box>
    </Grid>
  )
}
const STextInput = styled(TextField)`
  input {
    padding: 10px;
  }
`
const SSelect = styled(Select)`
  input {
    padding: 0;
  }
  .MuiSelect-select {
    padding: 10px;
  }
`
const SImagePreview = styled.div`
  display: flex;
  overflow: scroll;
  overflow-y: hidden;
  margin-top: 30px;
  padding-left: 10px;
  img {
    width: 100px;
    border: 1px solid #ccc;
    padding: 5px;
    margin-left: 5px;
  }
`
export default ProductModal
