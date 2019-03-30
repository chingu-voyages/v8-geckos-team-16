// FIXME: use require syntax
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import './App.css';

import store from './store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1> It works! </h1> 
      </Provider>
    );
  }
}

export default App;
