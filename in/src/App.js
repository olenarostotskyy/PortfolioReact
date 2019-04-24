import React, { Component } from 'react';
import { ITEMS } from './shared/items';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';



import Menu from './components/GalleryComponent';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
