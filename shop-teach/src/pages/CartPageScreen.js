import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import { useGlobalContext } from "../context/globalContext"
const CartPageScreen = () => {
  const [state, dispatch] = useGlobalContext()
  console.log("state", state)
  return (
    <Grid>
      <h2>cart list</h2>
      <table>
        <thead>
          <th>name</th>
          <th>image</th>
          <th>quantity</th>
          <th>price</th>
          <th>total</th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src="https://via.placeholder.com/100" />
            </td>
            <td>1</td>
            <td>2000</td>
            <td>2000</td>
          </tr>
        </tbody>
      </table>
      <Button variant="contained">check out</Button>
    </Grid>
  )
}

export default CartPageScreen
