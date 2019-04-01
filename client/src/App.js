// FIXME: use require syntax
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import './App.css';
import Home from './components/home';
import Group from './components/group';
import Discover from './components/discover';

import store from './store.js';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/:groupName?" component={Group} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
