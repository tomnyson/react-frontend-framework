import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"

const Footer = ({ children }) => {
  return (
    <Container>
      <Grid
        style={{ marginTop: "50px", padding: "10px 20px" }}
        display="flex"
        justifyContent="space-between"
      >
        <a>Copyright 1999-2022 by tomnyson</a>
        <a>frontend framework</a>
      </Grid>
    </Container>
  )
}

export default Footer
