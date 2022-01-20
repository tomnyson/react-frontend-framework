import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Header from "./Header"
const LayoutPublic = ({ children }) => {
  return (
    <Grid container>
      <Header />
      <Container>{children}</Container>
    </Grid>
  )
}

export default LayoutPublic
