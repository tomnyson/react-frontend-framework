import React, { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { postAPI } from "../utils/api"
import { API_LOGIN } from "../utils/const"
import { useGlobalContext } from "../context/globalContext"
import { userLoginComplete } from "../reducer/action"
import { useNavigate } from "react-router-dom"
const LoginScreen = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [state, dispatch] = useGlobalContext()
  const { token } = state.auth

  const navigate = useNavigate()

  useEffect(() => {
    if (token || localStorage.getItem("TOKEN")) {
      navigate("/admin")
    }
  }, [])

  const handleLogin = async () => {
    if (username !== "" && password !== "") {
      const response = await postAPI(API_LOGIN, { username, password })
      if (response && response.status === 200) {
        dispatch(userLoginComplete(response.data))
        navigate("/admin")
      }
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Box component="form">
        <div>
          <TextField
            name="username"
            label="username"
            placeholder="Enter your name"
            style={{ marginBottom: "10px", width: "400px" }}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            name="password"
            type="password"
            label="password"
            placeholder="Enter your password"
            style={{ marginBottom: "10px", width: "400px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          onClick={handleLogin}
          style={{ marginBottom: "10px", width: "400px" }}
          variant="contained"
        >
          Login
        </Button>
      </Box>
    </Box>
  )
}

export default LoginScreen
