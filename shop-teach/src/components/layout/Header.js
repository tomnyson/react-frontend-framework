import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"

const Header = ({ children }) => {
  return (
    <Container>
      <Grid display="flex" justify="spacing-between" container>
        <Grid xs={8}>
          <h1>SHOPPING SELL</h1>
        </Grid>
        <Grid xs={4}>Cart</Grid>
      </Grid>
    </Container>
  )
}

export default Header
