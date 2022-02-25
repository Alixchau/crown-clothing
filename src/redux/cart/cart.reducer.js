import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
  hidden: true //hide our cart-drop-down when initial comes to our website
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state, 
        hidden: !state.hidden
      }
    default:
      return state;
  }
}
export default cartReducer;