import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { Link } from "react-router-dom"
const Header = ({ children }) => {
  return (
    <Container>
      <Grid display="flex" justify="spacing-between" container>
        <Grid xs={8}>
          <Link to="/">SHOPPING SELL/</Link>
        </Grid>
        <Grid xs={4}>
          <Link to="/carts">cart</Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header
