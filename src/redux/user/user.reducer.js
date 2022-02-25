import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
}
//if state is undefined(not set), it will fall back to INITIAL_STATE value 
//reminder: null is actually a value, if state is null, it will still considerred to be actual value and won't pass the initial_state
const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case UserActionTypes.SET_CURRENT_USER:
      return{
        ...state, 
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;