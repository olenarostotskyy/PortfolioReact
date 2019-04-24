import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './GalleryComponent';
import GalleryDetail from './GalleryDetailComponents';
import { ITEMS } from '../shared/items';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';




class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        items: ITEMS,
        selectedItem: null
    };
  }

  onItemSelect(itemId) {
    this.setState({ selectedItem: itemId});
  }

  render() {
    
        const HomePage = () => {
          return(
              <Home />
          )
        }

    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">In Bloom</NavbarBrand>
          </div>
        </Navbar>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' render={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>
        <div className="bod">
      
        <Menu items={this.state.items} onClick={(itemId) => this.onItemSelect(itemId)} />
        <GalleryDetail item={this.state.items.filter((item) => item.id === this.state.selectedItem)[0]} />
      </div>
      <Footer />
      </div>
      
    );
  }

  
}                                               

export default Main;
