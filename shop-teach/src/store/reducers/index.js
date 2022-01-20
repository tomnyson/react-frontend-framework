import { ADD_CART, REMOVE_CART } from "../actions"

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART: {
      const { id } = action.payload
      const isFind = state.cart.cartList.findIndex((product) => product.id === id)
      if (isFind !== -1) {
        state.cart.cartList[isFind].quantity =
          state.cart.cartList[isFind].quantity + 1
        return {
          ...state,
        }
      }
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
