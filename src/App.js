import React, { Component } from 'react';
import HomePage from './components/HomePage';
import Login from './components/Login';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Route path="./components/HomePage" exact component={HomePage}/>
        <Route path="./components/login" component={Login}/>
      </div>
  );
  }
}

export default App;

