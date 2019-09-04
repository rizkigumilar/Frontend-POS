
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './publics/redux/store'
import Route from './route/Route';

// injectTapEventPlugin();
class App extends Component {

  render() {

    return (
      <Provider store={store} >
        <Route />
      </Provider>
    );
  }
}

export default App;