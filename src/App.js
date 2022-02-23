import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


function App() {
  return (
    <div >
      <Header />
      <Switch>
{/*       Switch will only render the first path that fits and stop go through the remain paths.
 Route component will render the component with the path appended after the URL. exact's default is true   */}      
        <Route exact path='/' component={HomePage} /> 
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInAndSignUpPage} />
      </Switch>

    </div>
  );
};

export default App;
