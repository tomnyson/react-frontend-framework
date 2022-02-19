import React, { useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Select from "@mui/material/Select"
import styled from "styled-components"
import Button from "@mui/material/Button"
import { useForm } from "react-hook-form"
import FormHelperText from "@mui/material/FormHelperText"
import { postAPI, putAPI } from "../../utils/api"
import { API_CATEGORY } from "../../utils/const"
import { showAlert } from "../../reducer/action"
import { useGlobalContext } from "../../context/globalContext"
import TextareaAutosize from "@mui/material/TextareaAutosize"

const CategoryModal = ({ category }) => {
  const [state, dispatch] = useGlobalContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      ...category,
    },
  })
  const onSubmit = async (data) => {
    if (category) {
      const response = await putAPI(API_CATEGORY + `/${category._id}`, {
        ...data,
      })
      if (response && response.status === 200) {
        dispatch(showAlert({ message: "create category success", type: "success" }))
      } else {
        dispatch(showAlert({ message: response.data.message, type: "error" }))
      }
    } else {
      const response = await postAPI(API_CATEGORY, { ...data })
      if (response && response.status === 200) {
        dispatch(showAlert({ message: "updated category success", type: "success" }))
      } else {
        dispatch(showAlert({ message: response.data.message, type: "error" }))
      }
    }
  }

  return (
    <Grid>
      <Box onSubmit={handleSubmit(onSubmit)} component="form">
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
            sx={{ padding: "10px" }}
            fullWidth={"100%"}
            label="description"
            name="description"
            type="description"
            placeholder="description"
            error={errors.description}
            helperText={errors.description && "description is required"}
            {...register("description")}
          />
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
          {category ? "Change" : "Save"}
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
export default CategoryModal
