import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user});
      console.log(user)
    })
  }

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
