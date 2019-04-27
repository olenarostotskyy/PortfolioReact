import React, { Component } from 'react';
import { ITEMS } from './shared/items';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <Main />
      </div>
      </BrowserRouter>//configured application to make use with React Router.
    );
  }
}

export default App;
