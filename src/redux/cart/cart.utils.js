export const addItemToCart = (cartItems, cartItemToAdd) => {
  //if matches, it will return cartItem to const existingCartItem otherwise it will be undefined
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

  if(existingCartItem){
    //return a new array. Need to return a new state object so that our state can be renderred 
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id ?
      {...cartItem, quantity: cartItem.quantity +1}
      :
      cartItem
      )
  }
  //quntity property gets attached the first time since the above if block wont run when it's a new item.
  return [...cartItems, {...cartItemToAdd, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

  if(existingCartItem.quantity == 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  } 

  return cartItems.map(
    cartItem =>
    cartItem.id == cartItemToRemove.id ?
    {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem

  )
}

