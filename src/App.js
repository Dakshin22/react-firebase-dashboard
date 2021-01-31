import React from 'react';
import Header from './Header';
import './App.css';
import './firebase/config'
import './pages/Signup'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Signup from './pages/Signup';
function App() {
  return (
    <Router>
    <div>
      <Header></Header>
      <div className="app">
        <div className="ui grid container"></div>
        <Switch>
          <Route exact path='/signup' component = {Signup}/>
        </Switch>

      </div>
    </div>
    </Router>
  );
}

export default App;
