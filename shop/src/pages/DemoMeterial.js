
import Grid from '@mui/material/Grid';

const DemoMeterial = () => {
  return (
  <Grid container spacing={2}>
    <Grid style={{
      background: 'red'
    }} item xs={6} md={8}>
      <Grid>xs=6</Grid>
    </Grid>
    <Grid style={{
      background: 'green'
    }}  item xs={6} md={4}>
      <Grid>xs=6</Grid>
    </Grid>
</Grid>
  )
}
export default DemoMeterial