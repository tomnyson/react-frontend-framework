import { ADD_CART, REMOVE_CART } from "../actions"

export const cartReducer = (state, action) => {
  console.log("state", state)
  switch (action.type) {
    case ADD_CART: {
      console.log("action", action)
      return {
        ...state,
        cart: {
          cartList: [...state.cart.cartList, action.payload],
        },
        // cartList: state.cartList.push(action.payload),
      }
    }

    case REMOVE_CART:
      return {
        ...state,
      }
    default:
      return state
  }
}
