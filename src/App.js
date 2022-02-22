import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = ({props}) =>(

  <div>

    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
{/*       Switch will only render the first path that fits and stop go through the remain paths.
 Route component will render the component with the path appended after the URL. exact's default is true   */}      
        <Route exact path='/' component={HomePage} /> 
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>

    </div>
  );
}

export default App;
