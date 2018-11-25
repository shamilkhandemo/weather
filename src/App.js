import React, { Component } from 'react';

import { HashRouter, Route, Switch} from 'react-router-dom';

import Login from './components/Login';
import Wrapper from './components/Wrapper';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route  exact path = '/' component = { Login } />
          <Route  path = '/weather' component = {Wrapper} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
