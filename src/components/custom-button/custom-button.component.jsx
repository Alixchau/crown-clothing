import React from 'react';
import './custom-button.styles.scss';

/* conditionaly render a className using string interpolation based on a prop(isGoogleSignIn) */
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) =>(
  <button 
  className= {`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`}{...otherProps}
  >
    {children}
  </button>
)

export default CustomButton;