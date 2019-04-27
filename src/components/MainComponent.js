import React, { Component } from 'react';
import GalleryDetail from './GalleryDetailComponents';
import Menu from './GalleryComponent';
import Home from './HomeComponent';
import { ITEMS } from '../shared/items';
import Header from './HeaderComponent';
import Footer from './FooterComponent';//imported Header and Footer into MainComponent.
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        items: ITEMS,
    };//removed selectedItem
  }

  onItemSelect(itemId) {
    this.setState({ selectedItem: itemId});
  }
//Introduced <Header /> into our Main application.
  render() {

    const HomePage = () => {
        return(
            <Home />
        );
    }
    return (
      <div>
          <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/gallery" render={() => <Menu item={this.state.items} />} />
            <Route exact path='/contactus' component={Contact} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>//removed GalleryDetail, and Menu component. Replaced with Switch to enclose routes into MainComponent. Route to the two views, Home and Menu.
    );//in Route exact path, "render" should be used instead of "component" because when using an inline function for inline rendering
  }
}

export default Main;