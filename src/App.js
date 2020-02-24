import React, { Component } from 'react';
import Button1 from '././components/UI/Button1';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './Router';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';

import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Button1 />
          <Routes />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
