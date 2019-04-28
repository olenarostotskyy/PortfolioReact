import React, { Component } from 'react';
import { ITEMS } from './shared/items';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';//allows to configure react app so that redux store becomes available to all components in our application.
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
//<BrowserRouter> configured application to make use with React Router.
//Surround React Application with <Provider> to supply store to application.
export default App;
