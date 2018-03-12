import React, { Component } from 'react';
import Navigation from './components/Navigation';
import CarouselComponent from './components/CarouselComponent';
import FooterPage from './components/FooterPage';
import {Link} from 'react-router-dom';
import Login from './components/Login';
import { Route } from 'react-router-dom';


class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navigation />
        <hr/>   
        <div className="container">
        <CarouselComponent />
        </div>
        <FooterPage />
        <Link to="/Login"> Login </Link>
      </div>
  );
  }
}

export default HomePage;