import React from 'react';
import Header from './Header';
import './App.css';
import './firebase/config'
import './pages/Signup'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Signup from './pages/Signup';
import {userProvider} from './firebase/userProvider'
import Profile from './pages/Profile'
function App() {
  return (
    <userProvider>
    <Router>
    <div>
      <Header></Header>
      <div className="app">
        <div className="ui grid container"></div>
        <Switch>
          <Route exact path='/signup' component = {Signup}/>
          <Route exact path='/profile' component = {Profile}/>
        </Switch>

      </div>
    </div>
    </Router>
    </userProvider>
  );
}

export default App;
