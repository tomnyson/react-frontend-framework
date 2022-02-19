import Grid from "@mui/material/Grid"
import Header from "./Header"
import Footer from "./Footer"
import SliderHome from "../slider/SliderHome"
import Container from "@mui/material/Container"

const LayoutPublic = ({ children }) => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <Header />
      </Grid>
      <Container>{children}</Container>
      <Grid xs={12} item>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default LayoutPublic
