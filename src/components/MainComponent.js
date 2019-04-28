import React, { Component } from 'react';
import GalleryDetail from './GalleryDetailComponents';
import Menu from './GalleryComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';//imported Header and Footer into MainComponent.
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
//cut out ITEMS import because our main component will not get state from redux store. Moved to reducer.js.

const mapStateToProps = state => {//obtains the state as a parameter. Maps the Redux Store's state into props that will become available to my component.
    return {
      items: state.items//now available as props to MainComponent.
    }
}

class Main extends Component {

  constructor(props) {
    super(props);
    //removed selectedItem.
  }//removed state items: ITEMS, from main component, and into redux reducer.js.
//removed this.state = { because it's in redux reducer.js now.

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
            <Route exact path="/gallery" render={() => <Menu item={this.props.items} />} />
            <Route exact path='/contactus' component={Contact} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>//removed GalleryDetail, and Menu component. Replaced with Switch to enclose routes into MainComponent. Route to the two views, Home and Menu.
    );//in Route exact path, "render" should be used instead of "component" because when using an inline function for inline rendering
  }
}

export default (connect(mapStateToProps)(Main));//connecting the props in MainComponent. Wrapped around (Main), connect takes mapStateToProps as one of the parameters here.