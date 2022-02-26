import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) =>(
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/shop'>CONTACT</Link>
      {/* conditionaly render sign in or sign out based on if the currentUser is null(false) or exist(true)  */}
        {/* on click calls anonymous function that calls auth.signOut() from firebase auth library*/}
      {
        currentUser ?

        <div className='option' onClick={() => auth.signOut() }>SIGN OUT</div>
        :
        <Link className='option' to='/signIn'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropDown />
    }
  </div>
)
/* the state being passed is the root reducer. with conect higher order component mapping property from reducer*/
/* createStructuredSelector pass the top level state get from mapStateToProps into each subsequent selector*/
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);