import { createSelector } from "reselect";
/* selectors make sure the output value won't be re-renderred when the state changes are unrelated */
/* input selector: takes the whole reducer state and return a slice of it, one layer deep usually*/
const selectCart = state => state.cart;
/* output selector: use input selector and createSelector to build themselves and become a memerized selector*/
export const selectCartItems = createSelector(
  [selectCart], //first arg is selector array
  (cart) => cart.cartItems // a function gets the return of first arg's input selector(cart: cartReducer), and return value we want out of this selector
);
/* get the total quantity of cartItems */
export const selectCartItemsCount = createSelector(
  [selectCartItems], 
  cartItems => 
  cartItems.reduce((accumalatedQuantity, cartItem) =>accumalatedQuantity + cartItem.quantity,0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
  cartItems.reduce((accumalatedQuantity, cartItem) =>accumalatedQuantity + cartItem.quantity * cartItem.price ,0)
)