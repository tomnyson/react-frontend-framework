import { actions } from "./action"

export const productReducer = (state, action) => {
  console.log("state", state)
  switch (action.type) {
    case actions.PRODUCT_LIST_FETCHING:
      return {
        ...state,
        fetchingProductList: true,
      }
    default:
      return state
  }
}
