import { actions } from "./action"

export const alertReducer = (state, action) => {
  switch (action.type) {
    case actions.SHOW_ALERT: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case actions.CLEAR_ALERT: {
      return {
        ...state,
        message: "",
        type: "",
      }
    }
    default:
      return state
  }
}
