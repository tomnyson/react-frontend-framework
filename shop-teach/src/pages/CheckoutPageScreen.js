import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import styled from "styled-components"
import { useGlobalContext } from "../context/globalContext"
import Button from "@mui/material/Button"
import { getTotalCart } from "../utils/funtions"
import { API_ORDER } from "../utils/const"
import { postAPI } from "../utils/api"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
const CheckoutPageScreen = () => {
  const [state] = useGlobalContext()
  const { cart = [] } = state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    /**
     * sent to api order
     */
    const orderData = {
      ...data,
      total: getTotalCart(cart),
      items: cart.map((item) => {
        return {
          product: item.id,
          price: item.price,
          quantity: item.quantity,
        }
      }),
    }
    console.log("data", orderData)
    const response = await postAPI(API_ORDER, orderData)
    if (response && response.status === 200) {
      navigate("/confirm")
    }
    console.log("data", response)
  }
  console.log("errors", errors)
  return (
    <Grid container spacing={4}>
      <Grid item xs={8}>
        <h1>Billing Details</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <STextField
            label="name customer"
            fullWidth
            name="name"
            placeholder="Name"
            {...register("name", { required: true })}
            error={errors.name}
            helperText={errors.name && "email is required"}
          />
          <STextField
            label="email customer"
            fullWidth
            name="name"
            placeholder="Name"
            {...register("email", { required: true })}
            error={errors.email}
            helperText={errors.email && "email is required"}
          />
          <STextField
            label="phone customer"
            fullWidth
            name="name"
            placeholder="Name"
            {...register("phone", { required: true })}
            error={errors.phone}
            helperText={errors.phone && "phone is required"}
          />
          <STextField
            label="shipping address customer"
            fullWidth
            name="name"
            placeholder="Name"
            {...register("shipping_address", { required: true })}
            error={errors.shipping_address}
            helperText={errors.shipping_address && "shipping_address is required"}
          />
          <Button
            type="submit"
            sx={{
              display: "block",
              marginTop: "10px",
              width: "200px",
              marginLeft: "30px",
            }}
            variant="contained"
          >
            Place Order
          </Button>
        </form>
      </Grid>
      <Grid item xs={4}>
        <h1>Your Order</h1>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <p>name</p>
          <p>total</p>
        </div>
        {cart &&
          cart.length > 0 &&
          cart.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  borderTop: "1px solid #000",
                }}
              >
                <p>{item.name}</p>
                <p>{Number(item.price * item.quantity)}</p>
              </div>
            )
          })}
        <p style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "20px" }}>
          Total: <span>{getTotalCart(cart)}</span>
        </p>
      </Grid>
    </Grid>
  )
}

const STextField = styled(TextField)`
  margin-bottom: 10px;
`
export default CheckoutPageScreen
