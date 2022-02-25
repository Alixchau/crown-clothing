import { UserActionTypes } from "./user.types"

/* user action: a function gets the user and return an action object*/
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})