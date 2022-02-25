import React from 'react';
import './custom-button.styles.scss';

/* conditionaly render a className using string interpolation based on a prop(isGoogleSignIn, inverted) */
const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) =>(
  <button 
  className= {`${inverted ? 'inverted' :''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`}{...otherProps}
  >
    {children}
  </button>
)

export default CustomButton;