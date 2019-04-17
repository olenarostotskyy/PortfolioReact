import React, { Component } from 'react';
import { ITEMS } from './shared/items';

import Menu from './components/GalleryComponent';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ITEMS
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">In Bloom</NavbarBrand>
          </div>
        </Navbar>
        <Menu items={this.state.items}/>
      </div>
    );
  }
}

export default App;
