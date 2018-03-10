import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-xs-8">
              <Navigation />  
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-3">
              <h2>I am the first column in the grid</h2>
            </div>
         
            <div className="col-6">
              <Carousel /> 
            </div>

            <div className="col-3">
            <h2>I am the last column in the grid</h2> 
            </div>
        </div>  
      </div>
  );
  }
}

export default App;

