import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) =>(
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
    </div>
  </div>
)
/* the state being passed is the root reducer. with coonect higher order component these mapping property from reducer*/
const mapStateTopProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateTopProps)(Header);