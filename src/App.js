import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    /* firebase method for user authenticated session persistence. Open subscription. */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){ //if userAuth exists 
        //if doc is exist, simply get back userRef otherwise create new object and document and then still get back userRef 
        const userRef = await createUserProfileDocument(userAuth);
       //get snapShop object data of the user to store in the state of our application
        userRef.onSnapshot(snapShop =>{
          this.setState({
            currentUser: {
              id: snapShop.id,
              ...snapShop.data()
            }
          },()=>{
            console.log(this.state);
          });
        });
      }
      else{//if userAuth is null(user signs out) set the currentUser to null
        this.setState({currentUser: userAuth});
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
        <Header currentUser={this.state.currentUser}/>
        <Switch>
  {/*       Switch will only render the first path that fits and stop go through the remain paths.
   Route component will render the component with the path appended after the URL. exact's default is true   */}      
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
  
      </div>
    );
  }
};

export default App;
