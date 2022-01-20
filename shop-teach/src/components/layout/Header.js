import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"

const Header = ({ children }) => {
  return (
    <Grid container>
      <Container>
        <Grid display="flex" justify="spacing-between" container>
          <Grid xs={8}>Logo</Grid>
          <Grid xs={4}>Cart</Grid>
        </Grid>
      </Container>
    </Grid>
  )
}

export default Header
