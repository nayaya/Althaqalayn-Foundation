import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/mdbreact/docs/css/mdb.min.css';
import FooterPage from './components/FooterPage';
import Login from './components/Login';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
