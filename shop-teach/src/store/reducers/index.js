import { ADD_CART, REMOVE_CART } from "../actions"

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART: {
      // them moi
      const { id } = action.payload
      const index = state.cart.findIndex((product) => product.id === id)
      if (index !== -1) {
        //update
      }
      // theme
      // update
      const cloneCartNew = state.cart.slice()
      cloneCartNew.push(action.payload)
      return {
        ...state,
        cart: cloneCartNew,
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
