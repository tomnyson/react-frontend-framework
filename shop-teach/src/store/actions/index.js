export const ADD_CART = "ADD_CART"
export const REMOVE_CART = "REMOVE_CART"
export const FETCH_CART = "FETCH_CART"

export const addCart = (payload) => {
  console.log("payload", payload)
  return { type: ADD_CART, payload }
}
