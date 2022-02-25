import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    /* firebase method for user authenticated session persistence. Open subscription. */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){ //if userAuth exists 
        //if doc is exist, simply get back userRef otherwise create new object and document and then still get back userRef 
        const userRef = await createUserProfileDocument(userAuth);
       //get snapShop object data of the user to store in the state of our application
        userRef.onSnapshot(snapShop =>{
          setCurrentUser({
              id: snapShop.id,
              ...snapShop.data()
            
          },()=>{
            console.log(this.state);
          });
        });
      }
      else{//if userAuth is null(user signs out) set the currentUser to null
        setCurrentUser(userAuth);
      }
    })
  }
/* close the subscription when the component unmounts */
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
  {/*       Switch will only render the first path that fits and stop go through the remain paths.
   Route component will render the component with the path appended after the URL. exact's default is true   */}      
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signIn' 
          render={() => 
          this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage />)
          } 
          />
        </Switch>
  
      </div>
    );
  }
};

const mapStateTopProps = ({user:{currentUser}}) => ({
  currentUser,

});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateTopProps, mapDispatchToProps)(App);
