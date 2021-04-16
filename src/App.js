import React from 'react';
import { Switch,Route } from 'react-router-dom';

import './App.css';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Auth from './pages/auth/auth.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  /* setup auth open subscription to know if a user 
  is signed in at any given time. always remember to close subscriptions on unmount*/

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
