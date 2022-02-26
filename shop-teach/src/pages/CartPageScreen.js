import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import { useGlobalContext } from "../context/globalContext"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { getTotalCart } from "../utils/funtions"

const CartPageScreen = () => {
  const [state, dispatch] = useGlobalContext()
  const { cart = [] } = state
  console.log("state", state.cart)

  return (
    <Grid>
      <h2>cart list</h2>
      {cart && cart.length > 0 && (
        <div>
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
              {cart &&
                cart.length > 0 &&
                cart.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>
                        <img
                          src={item.image}
                          style={{ width: "100px", height: "100px" }}
                        />
                      </td>
                      <td>{item.quantity}</td>
                      <td>
                        <span style={{ fontWeight: "bold", color: "red" }}>
                          {item.price}
                        </span>
                      </td>
                      <td>{item.quantity * item.price}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
          <p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "20px" }}>
            Total: {getTotalCart(cart)}
          </p>
          <SLink to="/checkout" variant="contained">
            check out
          </SLink>
        </div>
      )}
      {cart && cart.length === 0 && <p>No cart</p>}
    </Grid>
  )
}

const SLink = styled(Link)`
  text-decoration: none;
  height: 50px;
  width: 200px;
  color: #fff;
  padding: 15px;
  background: #1976d2;
`
export default CartPageScreen
