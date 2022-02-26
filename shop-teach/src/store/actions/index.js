/**=============== action type ================*/
export const ADD_CART = "ADD_CART"
export const REMOVE_CART = "REMOVE_CART"
export const FETCH_CART = "FETCH_CART"

/**=============== action event ================*/
export const addCart = (payload) => {
  return { type: ADD_CART, payload }
}
