import React, { Component } from 'react';
import Menu from './GalleryComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import GalleryDetail from './GalleryDetailComponents';
import Footer from './FooterComponent';//imported Header and Footer into MainComponent.
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import { addComment, fetchItems } from '../redux/ActionCreators';
//cut out ITEMS import because our main component will not get state from redux store. Moved to reducer.js.

const mapStateToProps = state => {//obtains the state as a parameter. Maps the Redux Store's state into props that will become available to my component.
    return {
      items: state.items,//now available as props to MainComponent.
      comments: state.comments,
      owner: state.owner
    }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (itemId, rating, author, comment) => dispatch(addComment(itemId, rating, author, comment)),
  fetchItems: () => { dispatch(fetchItems())}
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
    //removed selectedItem.
    //removed state items: ITEMS, from main component, and into redux reducer.js.
//removed this.state = { because it's in redux reducer.js now.

  onItemSelect(itemId) {
    this.setState({ selectedItem: itemId});
  }
//Introduced <Header /> into our Main application.
  render() {

    const HomePage = () => {
      return(
          <Home 
              item={this.props.items.items.filter((item) => item.featured)[0]}
              itemsLoading={this.props.items.isLoading}
              itemsErrMess={this.props.items.errMess}
              owner={this.props.owner.filter((owner) => owner.featured)[0]}
          />
      );
    }
    const ItemWithId = ({match}) => {
      return(
        <GalleryDetail item={this.props.items.items.filter((item) => item.id === parseInt(match.params.itemId,10))[0]}
          isLoading={this.props.items.isLoading}
          errMess={this.props.items.errMess}
          comments={this.props.comments.filter((comment) => comment.itemId === parseInt(match.params.itemId,10))}
          addComment={this.props.addComment}
        />
    );
  }

    return (
      <div>
          <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/gallery" render={() => <Menu items={this.props.items} />} />
            <Route path="/gallery/:itemId" component={ItemWithId} />
            <Route exact path='/contactus' component={Contact} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>//removed GalleryDetail, and Menu component. Replaced with Switch to enclose routes into MainComponent. Route to the two views, Home and Menu.
    );//in Route exact path, "render" should be used instead of "component" because when using an inline function for inline rendering
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));//connecting the props in MainComponent. Wrapped around (Main), connect takes mapStateToProps as one of the parameters here.