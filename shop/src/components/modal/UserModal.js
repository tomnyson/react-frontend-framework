import React, { useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import styled from "styled-components"
import Button from "@mui/material/Button"
import { useForm } from "react-hook-form"
import FormHelperText from "@mui/material/FormHelperText"
import { postAPI, putAPI } from "../../utils/api"
import { API_USER } from "../../utils/const"
import { showAlert } from "../../reducer/action"
import { useGlobalContext } from "../../context/globalContext"
const UserModal = ({ user }) => {
  const [role, setRole] = useState(user?.role || "admin")
  const [state, dispatch] = useGlobalContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      role: "user",
      ...user,
    },
  })
  const onSubmit = async (data) => {
    if (user) {
      const response = await putAPI(API_USER + `/${user._id}`, { ...data, role })
      if (response && response.status === 200) {
        dispatch(showAlert({ message: "create user success", type: "success" }))
      } else {
        dispatch(showAlert({ message: response.data.message, type: "error" }))
      }
    } else {
      const response = await postAPI(API_USER, { ...data, role })
      if (response && response.status === 200) {
        dispatch(showAlert({ message: "updated user success", type: "success" }))
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
            label="username"
            name="username"
            placeholder="Username"
            {...register("username", { required: true })}
            error={errors.username}
            helperText={errors.username && "username is required"}
          />
        </Grid>
        <STextInput
          sx={{ padding: "10px" }}
          label="password"
          name="password"
          type="password"
          placeholder="password"
          error={errors.password}
          helperText={errors.password && "password is required"}
          {...register("password", { required: !user ? true : false })}
        />
        <STextInput
          sx={{ padding: "10px" }}
          label="email"
          name="email"
          placeholder="email"
          error={errors.email}
          helperText={errors.email && "email is required"}
          {...register("email", { required: true })}
        />
        <FormControl>
          <SSelect
            style={{ marginTop: "10px", padding: "0px", width: "150px" }}
            onChange={(e) => setRole(e.target.value)}
            value={role}
            // {...register("role")}
          >
            <MenuItem value="admin">admin</MenuItem>
            <MenuItem value="user">user</MenuItem>
          </SSelect>
          {role === "" && (
            <FormHelperText style={{ color: "#d32f2f" }}>Required</FormHelperText>
          )}
        </FormControl>
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
          {user ? "Change" : "Save"}
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
export default UserModal
