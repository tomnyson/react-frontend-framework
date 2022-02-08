import Grid from "@mui/material/Grid"
import Footer from "./Footer"
import Container from "@mui/material/Container"
import { Link } from "react-router-dom"
import styled from "styled-components"
const LayoutDashBoard = ({ children }) => {
  return (
    <Grid container>
      <Container>
        <Grid item xs={24}>
          <h2>admin dashboard</h2>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <SMenu>
              <SMenuItem>
                <Link to="/dashboard/categories">categories</Link>
              </SMenuItem>
              <SMenuItem>
                <Link to="/dashboard/category">users</Link>
              </SMenuItem>
              <SMenuItem>
                <Link to="/dashboard/category">products</Link>
              </SMenuItem>
              <SMenuItem>
                <Link to="/dashboard/category">order</Link>
              </SMenuItem>
            </SMenu>
          </Grid>
          <Grid item xs={22}>
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
`
const SMenuItem = styled.li`
  list-style-type: none;
  font-size: 20px;
  margin: 10px 0;
  a {
    text-decoration: none;
    color: #000;
  }
`
export default LayoutDashBoard
