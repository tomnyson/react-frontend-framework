import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Header from "./Header"
import Footer from "./Footer"
const LayoutPublic = ({ children }) => {
  return (
    <Grid container>
      <Header />
      <Container style={{ marginTop: 50 }}>{children}</Container>
      <Footer />
    </Grid>
  )
}

export default LayoutPublic
