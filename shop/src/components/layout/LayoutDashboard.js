import { useEffect } from "react"
import Grid from "@mui/material/Grid"
import Footer from "./Footer"
import Container from "@mui/material/Container"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import Alert from "@mui/material/Alert"
import Stack from "@mui/material/Stack"
import { useGlobalContext } from "../../context/globalContext"
import { clearAlert } from "../../reducer/action"
import LogoutIcon from "@mui/icons-material/Logout"
import IconButton from "@mui/material/IconButton"
import { useNavigate } from "react-router-dom"

const LayoutDashBoard = ({ children }) => {
  const location = useLocation()
  const [state, dispatch] = useGlobalContext()
  const { message, type } = state.alert
  const navigate = useNavigate()
  const menus = [
    {
      name: "categories",
      path: "/admin/categories",
    },
    {
      name: "users",
      path: "/admin/users",
    },
    {
      name: "products",
      path: "/admin/products",
    },
  ]

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(clearAlert({ message: "", type: "" }))
      }, 2000)
    }
  }, [message])

  const onLogout = () => {
    /**
     * clear localstorage
     * redirect to login pages
     */
    localStorage.removeItem("TOKEN")
    localStorage.removeItem("User")
    alert("logout success")
    navigate("/login")
  }
  return (
    <Grid container>
      <Container>
        <Grid
          width="100%"
          display="flex"
          justifyContent="space-between"
          item
          xs={12}
        >
          <h3>admin dashboard</h3>
          <IconButton onClick={onLogout} aria-label="delete">
            <LogoutIcon /> logout
          </IconButton>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SMenu>
              {menus &&
                menus.map((menu) => {
                  return (
                    <SMenuItem
                      active={location.pathname === menu.path}
                      ClassName={
                        location.pathname === menu.path ? "selected" : "unselected"
                      }
                      to={menu.path}
                    >
                      {menu.name}
                    </SMenuItem>
                  )
                })}
            </SMenu>
          </Grid>
          <Grid item xs={10}>
            {message && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity={type}>{message}</Alert>
              </Stack>
            )}
            {children}
          </Grid>
        </Grid>
      </Container>
      <Grid xs={12} item>
        <Footer />
      </Grid>
    </Grid>
  )
}

const SMenu = styled.ul`
  background: #eee;
  height: 500px;
  padding: 10px 20px;
`
const SMenuItem = styled(Link)`
  margin: 10px 0;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  color: ${(p) => (p.active ? "#f8ab16" : "#000")};
`
export default LayoutDashBoard
