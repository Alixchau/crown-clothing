import { act } from 'react-dom/test-utils';
import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true, //hide our cart-drop-down when initial comes to our website
  cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state, 
        hidden: !state.hidden
      };
      case CartActionTypes.ADD_ITEM:
        return{
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        };
      case CartActionTypes.CLEAR_ITEM_FROM_CART:
        return{
          ...state,
          cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)//filter returns anything yeilds true inside of the function. Here we keep every cart item does not equal to the payload
        }
        case CartActionTypes.REMOVE_ITEM:
          return{
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload)
          }
    default:
      return state;
  }
}
export default cartReducer;